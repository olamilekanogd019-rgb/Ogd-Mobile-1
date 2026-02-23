import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Flame, Clock, ExternalLink, MessageCircle, Bell } from "lucide-react";
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

  const featuredDeals = deals.filter((d) => d.is_featured);
  const otherDeals = deals.filter((d) => !d.is_featured);

  return (
    <section className="py-20 bg-muted" id="daily-deals">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-destructive/10 text-destructive font-medium text-sm mb-4 animate-pulse-glow">
            <Flame className="w-4 h-4" /> Live Deals
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-2">
            Today&apos;s <span className="text-primary">Cheapest Data</span> Deals
          </h2>
          {lastUpdated && (
            <div className="inline-flex items-center gap-1.5 text-sm text-muted-foreground mt-2">
              <Clock className="w-3.5 h-3.5" />
              Updated: {lastUpdated}
            </div>
          )}
        </motion.div>

        {loading ? (
          <div className="text-center py-12 text-muted-foreground">Loading deals...</div>
        ) : (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {featuredDeals.map((deal, idx) => (
                <motion.div
                  key={deal.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="relative bg-card rounded-2xl p-5 card-shadow hover:card-hover-shadow transition-all hover:-translate-y-1 border-2 border-secondary/30"
                >
                  <span className="absolute -top-2.5 right-4 px-3 py-0.5 text-xs font-bold rounded-full gold-gradient text-foreground">
                    🔥 HOT
                  </span>
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="px-2.5 py-1 rounded-md text-xs font-bold"
                      style={{
                        background: `hsl(${networkColors[deal.network] || "0 0% 50%"} / 0.15)`,
                        color: `hsl(${networkColors[deal.network] || "0 0% 50%"})`,
                      }}
                    >
                      {deal.network}
                    </span>
                    <span className="text-xs text-muted-foreground">{deal.validity}</span>
                  </div>
                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <p className="text-2xl font-bold font-heading text-foreground">{deal.data_amount}</p>
                      <p className="text-xs text-muted-foreground">{deal.plan_name}</p>
                    </div>
                    <p className="text-xl font-bold text-primary">{deal.price}</p>
                  </div>
                  <a href={deal.buy_link} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full gold-gradient text-foreground font-semibold border-0 hover:opacity-90 gap-2">
                      Buy Now <ExternalLink className="w-4 h-4" />
                    </Button>
                  </a>
                </motion.div>
              ))}
            </div>

            {otherDeals.length > 0 && (
              <div className="bg-card rounded-2xl card-shadow overflow-hidden mb-8">
                <div className="px-5 py-3 bg-primary/5 border-b border-border">
                  <p className="text-sm font-semibold text-foreground">More Deals</p>
                </div>
                <div className="divide-y divide-border">
                  {otherDeals.map((deal) => (
                    <div key={deal.id} className="flex items-center justify-between px-5 py-4 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <span
                          className="px-2.5 py-1 rounded-md text-xs font-bold"
                          style={{
                            background: `hsl(${networkColors[deal.network] || "0 0% 50%"} / 0.15)`,
                            color: `hsl(${networkColors[deal.network] || "0 0% 50%"})`,
                          }}
                        >
                          {deal.network}
                        </span>
                        <div>
                          <p className="font-semibold text-foreground">
                            {deal.data_amount} — <span className="text-primary">{deal.price}</span>
                          </p>
                          <p className="text-xs text-muted-foreground">{deal.plan_name} · {deal.validity}</p>
                        </div>
                      </div>
                      <a href={deal.buy_link} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="outline" className="gap-1 text-primary border-primary/30 hover:bg-primary/5">
                          Buy <ExternalLink className="w-3.5 h-3.5" />
                        </Button>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <motion.a
            href="https://wa.me/?text=Join%20our%20cheap%20data%20alerts%20group"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 bg-card rounded-2xl p-5 card-shadow hover:card-hover-shadow transition-all hover:-translate-y-1 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "hsl(142 70% 45%)" }}>
              <MessageCircle className="w-6 h-6" style={{ color: "white" }} />
            </div>
            <div>
              <p className="font-bold font-heading text-foreground group-hover:text-primary transition-colors">
                📲 Join WhatsApp Alerts
              </p>
              <p className="text-xs text-muted-foreground">Get daily cheap data deals instantly</p>
            </div>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-3 bg-card rounded-2xl p-5 card-shadow hover:card-hover-shadow transition-all hover:-translate-y-1 cursor-pointer group"
            onClick={() => {
              if ("Notification" in window) {
                Notification.requestPermission();
              }
            }}
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Bell className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-bold font-heading text-foreground group-hover:text-primary transition-colors">
                🔔 Enable Push Alerts
              </p>
              <p className="text-xs text-muted-foreground">Never miss a cheap data deal again</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DailyDeals;
