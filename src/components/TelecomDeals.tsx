import { motion } from "framer-motion";
import { Check, ExternalLink, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const deals = [
  {
    network: "MTN",
    color: "42 90% 55%",
    plans: [
      { data: "1.5GB", price: "₦500", validity: "30 days", code: "*131*1#", popular: false },
      { data: "6GB", price: "₦1,500", validity: "30 days", code: "*131*1#", popular: true },
      { data: "10GB", price: "₦3,000", validity: "30 days", code: "*131*1#", popular: false },
    ],
  },
  {
    network: "Airtel",
    color: "0 75% 50%",
    plans: [
      { data: "2GB", price: "₦500", validity: "30 days", code: "*141#", popular: false },
      { data: "6GB", price: "₦1,500", validity: "30 days", code: "*141#", popular: true },
      { data: "10GB", price: "₦3,000", validity: "30 days", code: "*141#", popular: false },
    ],
  },
  {
    network: "Glo",
    color: "145 63% 42%",
    plans: [
      { data: "3.2GB", price: "₦500", validity: "14 days", code: "*127*0#", popular: false },
      { data: "7.5GB", price: "₦1,500", validity: "30 days", code: "*127*0#", popular: true },
      { data: "12GB", price: "₦3,000", validity: "30 days", code: "*127*0#", popular: false },
    ],
  },
  {
    network: "9mobile",
    color: "145 30% 30%",
    plans: [
      { data: "1.5GB", price: "₦500", validity: "30 days", code: "*229*2*7#", popular: false },
      { data: "4.5GB", price: "₦1,200", validity: "30 days", code: "*229*2*12#", popular: true },
      { data: "11GB", price: "₦3,000", validity: "30 days", code: "*229*2*37#", popular: false },
    ],
  },
];

const TelecomDeals = () => {
  return (
    <section className="py-20 bg-muted" id="deals">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            <Star className="w-4 h-4" /> Best Deals
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
            Cheapest Data Plans <span className="text-primary">Right Now</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We compare all networks so you don't have to. Updated regularly with the latest deals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deals.map((network, idx) => (
            <motion.div
              key={network.network}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-card rounded-2xl overflow-hidden card-shadow hover:card-hover-shadow transition-shadow"
            >
              <div
                className="px-6 py-4 text-center font-bold font-heading text-lg"
                style={{
                  background: `hsl(${network.color})`,
                  color: "white",
                }}
              >
                {network.network}
              </div>
              <div className="p-5 space-y-4">
                {network.plans.map((plan) => (
                  <div
                    key={plan.data}
                    className={`rounded-xl p-4 border-2 transition-colors ${
                      plan.popular
                        ? "border-secondary bg-secondary/5"
                        : "border-border hover:border-primary/30"
                    }`}
                  >
                    {plan.popular && (
                      <span className="text-xs font-semibold text-secondary mb-1 block">
                        ⭐ Best Value
                      </span>
                    )}
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold font-heading text-foreground">{plan.data}</span>
                      <span className="text-lg font-bold text-primary">{plan.price}</span>
                    </div>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-xs text-muted-foreground">{plan.validity}</span>
                      <span className="text-xs font-mono text-muted-foreground">{plan.code}</span>
                    </div>
                  </div>
                ))}
                <Button
                  variant="outline"
                  className="w-full mt-2 gap-2 text-primary border-primary/30 hover:bg-primary/5"
                >
                  <ExternalLink className="w-4 h-4" /> Buy Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TelecomDeals;
