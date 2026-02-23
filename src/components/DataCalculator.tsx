import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Smartphone, Video, Music, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

const activities = [
  { icon: Video, label: "YouTube/TikTok", perHour: 1000, unit: "hours" },
  { icon: MessageCircle, label: "WhatsApp", perHour: 30, unit: "hours" },
  { icon: Smartphone, label: "Social Media", perHour: 300, unit: "hours" },
  { icon: Music, label: "Streaming Music", perHour: 150, unit: "hours" },
];

const DataCalculator = () => {
  const [values, setValues] = useState([2, 3, 2, 1]);

  const totalMB = activities.reduce((sum, act, i) => sum + act.perHour * values[i], 0);
  const totalGB = (totalMB / 1024).toFixed(1);

  return (
    <section className="py-20 bg-background" id="calculator">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            <Calculator className="w-4 h-4" /> Data Calculator
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
            How Much Data Do You <span className="text-primary">Really Need?</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Adjust the sliders to match your daily usage and find out how much data you need per day.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl p-8 card-shadow space-y-8">
            {activities.map((act, i) => (
              <div key={act.label} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <act.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">{act.label}</span>
                  </div>
                  <span className="text-sm font-semibold text-secondary">
                    {values[i]} {act.unit}/day
                  </span>
                </div>
                <Slider
                  value={[values[i]]}
                  onValueChange={(v) => {
                    const next = [...values];
                    next[i] = v[0];
                    setValues(next);
                  }}
                  min={0}
                  max={8}
                  step={1}
                  className="w-full"
                />
              </div>
            ))}

            <div className="border-t border-border pt-6 mt-6">
              <div className="text-center">
                <p className="text-muted-foreground text-sm mb-1">You need approximately</p>
                <p className="text-5xl font-bold font-heading text-primary">{totalGB} GB</p>
                <p className="text-muted-foreground text-sm mt-1">per day</p>
              </div>
            </div>

            <Button className="w-full gold-gradient text-foreground font-semibold py-6 text-lg rounded-xl hover:opacity-90 border-0">
              Find the Cheapest Plan →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataCalculator;
