import { motion } from "framer-motion";
import { Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden hero-gradient py-16 pt-24">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Wifi className="w-6 h-6 text-primary-foreground" />
            <span className="text-primary-foreground/80 font-medium text-sm">🇳🇬 Nigeria's #1 Data Saving Resource</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-heading text-primary-foreground leading-tight mb-4">
            Stop Wasting <span className="text-gradient-gold">Your Data</span>
          </h1>
          <p className="text-primary-foreground/70 mb-6 max-w-lg mx-auto">
            Find the cheapest data plans. Updated daily for MTN, Airtel, Glo & 9mobile.
          </p>
          <Button
            size="lg"
            className="gold-gradient text-foreground font-semibold px-8 rounded-xl hover:opacity-90 border-0"
            onClick={() => document.getElementById("daily-deals")?.scrollIntoView({ behavior: "smooth" })}
          >
            See Today's Deals ↓
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
