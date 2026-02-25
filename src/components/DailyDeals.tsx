import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Flame, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

interface Deal {
  id: string;
  network: string;
  plan_name: string;
  data_amount: string;
  price: string;
  validity: string;
  buy_link: string;
  is_featured: boolean;
  updated_at: string;
}

const networkColors: Record<string, string> = {
  MTN: "42 90% 55%",
  Airtel: "0 75% 50%",
  Glo: "145 63% 42%",
  "9mobile": "200 60% 40%",
};

const networkEmoji: Record<string, string> = {
  MTN: "💛",
  Airtel: "❤️",
  Glo: "💚",
  "9mobile": "💙",
};

const DailyDeals = () => {
  const [deals, setDeals] = useState<Deal[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState("");

  const fetchDeals = async () => {
    const { data, error } = await supabase
      .from("daily_deals")
      .select("*")
      .order("is_featured", { ascending: false })
      .order("created_at", { ascending: false })
      .limit(24);

    if (!error && data) {
      setDeals(data as Deal[]);
      if (data.length > 0) {
        const latest = data.reduce((a: any, b: any) =>
          new Date(a.updated_at) > new Date(b.updated_at) ? a : b
        );
        const date = new Date(latest.updated_at);
        setLastUpdated(
          date.toLocaleDateString("en-NG", { day: "numeric", month: "short" }) +
          " " +
          date.toLocaleTimeString("en-NG", { hour: "2-digit", minute: "2-digit" })
        );
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchDeals();
    const channel = supabase
      .channel("daily-deals-changes")
      .on("postgres_changes", { event: "*", schema: "public", table: "daily_deals" }, () => fetchDeals())
      .subscribe();
    return () => { supabase.removeChannel(channel); };
  }, []);

  // Group deals by network, max 6 per network
  const networks = ["MTN", "Airtel", "Glo", "9mobile"];
  const grouped = networks.reduce((acc, net) => {
    acc[net] = deals.filter((d) => d.network === net).slice(0, 6);
    return acc;
  }, {} as Record<string, Deal[]>);

  return (
    <section className="py-6" id="daily-deals">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-destructive/10 text-destructive font-medium text-xs animate-pulse-glow">
              <Flame className="w-3 h-3" /> Live
            </div>
            <h2 className="text-lg font-bold font-heading text-foreground">
              Today's Deals
            </h2>
          </div>
          {lastUpdated && (
            <span className="text-[10px] text-muted-foreground inline-flex items-center gap-1">
              <Clock className="w-3 h-3" /> {lastUpdated}
            </span>
          )}
        </div>

        {loading ? (
          <p className="text-center py-8 text-muted-foreground text-sm">Loading deals...</p>
        ) : (
          <div className="space-y-5">
            {networks.map((net) => {
              const netDeals = grouped[net];
              if (!netDeals || netDeals.length === 0) return null;
              return (
                <div key={net}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm">{networkEmoji[net]}</span>
                    <h3
                      className="text-sm font-bold font-heading"
                      style={{ color: `hsl(${networkColors[net]})` }}
                    >
                      {net}
                    </h3>
                    <div className="flex-1 h-px bg-border" />
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {netDeals.map((deal, idx) => (
                      <motion.div
                        key={deal.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.03 }}
                        className="bg-card rounded-xl p-3 card-shadow border border-border hover:border-primary/30 transition-colors"
                      >
                        <p className="font-bold text-foreground text-base leading-tight">{deal.data_amount}</p>
                        <p className="text-primary font-bold text-sm">{deal.price}</p>
                        <p className="text-[10px] text-muted-foreground mt-0.5">{deal.validity}</p>
                        <a href={deal.buy_link} target="_blank" rel="noopener noreferrer" className="block mt-2">
                          <Button size="sm" className="w-full gold-gradient text-foreground border-0 hover:opacity-90 text-[10px] h-7 gap-1">
                            Buy <ExternalLink className="w-3 h-3" />
                          </Button>
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default DailyDeals;
