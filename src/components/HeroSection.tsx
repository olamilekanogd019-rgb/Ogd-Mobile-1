import { motion } from "framer-motion";
import { Wifi, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-illustration.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden hero-gradient min-h-[90vh] flex items-center">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 animate-float">
          <Wifi className="w-8 h-8 text-primary-foreground" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: "1s" }}>
          <Wifi className="w-12 h-12 text-primary-foreground" />
        </div>
        <div className="absolute bottom-32 left-1/4 animate-float" style={{ animationDelay: "2s" }}>
          <Wifi className="w-6 h-6 text-primary-foreground" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary font-medium text-sm mb-6">
              🇳🇬 Nigeria's #1 Data Saving Resource
            </span>
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-primary-foreground leading-tight mb-6">
              Stop Wasting <br />
              <span className="text-gradient-gold">Your Data</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-lg">
              Your data finishes too fast? We've got the tips, tools, and cheapest plans to keep you online longer. Made for Nigerians, by Nigerians.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="gold-gradient text-foreground font-semibold px-8 py-6 text-lg rounded-xl hover:opacity-90 transition-opacity border-0"
              >
                Get Free Tips
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-primary-foreground/30 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl hover:bg-primary-foreground/10"
              >
                Compare Plans
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <img
              src={heroImage}
              alt="Nigerian person saving mobile data while browsing happily"
              className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto"
            />
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6 text-primary-foreground/60" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
