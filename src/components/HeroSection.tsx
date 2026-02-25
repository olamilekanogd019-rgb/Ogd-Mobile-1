import { motion } from "framer-motion";
import { Wifi } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-gradient py-6 pt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 mb-1">
            <Wifi className="w-5 h-5 text-primary-foreground" />
            <span className="text-primary-foreground/80 font-medium text-xs">🇳🇬 Nigeria's #1 Data Deals</span>
          </div>
          <h1 className="text-xl md:text-2xl font-bold font-heading text-primary-foreground leading-tight">
            Cheapest <span className="text-gradient-gold">Data Plans</span> Today
          </h1>
          <p className="text-primary-foreground/60 text-xs mt-1">
            MTN · Airtel · Glo · 9mobile — Updated daily
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
