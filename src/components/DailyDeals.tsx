import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Flame, Clock, ExternalLink, MessageCircle } from "lucide-react";
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

const DailyDeals = () => {
  const [deals, setDeals] = useState<Deal[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState("");

  const fetchDeals = async () => {
    const { data, error } = await supabase
      .from("daily_deals")
      .select("*")
      .order("is_featured", { ascending: false })
      .order("created_at", { ascending: false });

    if (!error && data) {
      setDeals(data as Deal[]);
      if (data.length > 0) {
        const latest = data.reduce((a: any, b: any) =>
          new Date(a.updated_at) > new Date(b.updated_at) ? a : b
        );
        const date = new Date(latest.updated_at);
        setLastUpdated(
          date.toLocaleDateString("en-NG", { day: "numeric", month: "short", year: "numeric" }) +
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

  return (
    <section className="py-12" id="daily-deals">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 text-destructive font-medium text-sm mb-2 animate-pulse-glow">
            <Flame className="w-4 h-4" /> Live Deals
          </div>
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-foreground">
            Today's <span className="text-primary">Cheapest Data</span>
          </h2>
          {lastUpdated && (
            <p className="text-xs text-muted-foreground mt-1 inline-flex items-center gap-1">
              <Clock className="w-3 h-3" /> Updated: {lastUpdated}
            </p>
          )}
        </div>

        {loading ? (
          <p className="text-center py-8 text-muted-foreground">Loading deals...</p>
        ) : (
          <div className="space-y-2 max-w-2xl mx-auto">
            {deals.map((deal, idx) => (
              <motion.div
                key={deal.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04 }}
                className="flex items-center justify-between bg-card rounded-xl px-4 py-3 card-shadow"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="px-2 py-0.5 rounded text-xs font-bold"
                    style={{
                      background: `hsl(${networkColors[deal.network] || "0 0% 50%"} / 0.15)`,
                      color: `hsl(${networkColors[deal.network] || "0 0% 50%"})`,
                    }}
                  >
                    {deal.network}
                  </span>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {deal.data_amount} — <span className="text-primary">{deal.price}</span>
                    </p>
                    <p className="text-xs text-muted-foreground">{deal.plan_name} · {deal.validity}</p>
                  </div>
                </div>
                <a href={deal.buy_link} target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className="gold-gradient text-foreground border-0 hover:opacity-90 gap-1 text-xs h-8">
                    Buy <ExternalLink className="w-3 h-3" />
                  </Button>
                </a>
              </motion.div>
            ))}
          </div>
        )}

        <div className="text-center mt-8">
          <a
            href="https://wa.me/?text=Join%20our%20cheap%20data%20alerts%20group"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-card card-shadow text-sm font-semibold text-foreground hover:text-primary transition-colors"
          >
            <MessageCircle className="w-4 h-4" style={{ color: "hsl(142 70% 45%)" }} />
            📲 Join WhatsApp Alerts
          </a>
        </div>
      </div>
    </section>
  );
};

export default DailyDeals;
