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
          <div className="inline-flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg gold-gradient flex items-center justify-center">
              <Wifi className="w-5 h-5 text-foreground" />
            </div>
            <span className="font-heading font-extrabold text-2xl text-primary-foreground tracking-tight">
              OGD <span className="text-gradient-gold">MOBILE</span>
            </span>
          </div>
          <p className="text-primary-foreground/70 text-xs mb-1">🇳🇬 Nigeria's #1 Data Deals Platform</p>
          <h1 className="text-lg md:text-xl font-bold font-heading text-primary-foreground leading-tight">
            Cheapest Data Plans — Updated Daily
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
