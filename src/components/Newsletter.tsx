import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("You're in! 🎉 Check your inbox for data saving secrets.");
      setEmail("");
    }
  };

  return (
    <section className="py-20 hero-gradient" id="newsletter">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground font-medium text-sm mb-4">
            <Mail className="w-4 h-4" /> Free Newsletter
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-foreground mb-4">
            Get Weekly <span className="text-gradient-gold">Data Saving</span> Hacks
          </h2>
          <p className="text-primary-foreground/70 mb-8">
            Join 10,000+ Nigerians who get the cheapest data deals and saving tips delivered to their inbox every week.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 py-6 text-lg rounded-xl"
              required
            />
            <Button
              type="submit"
              size="lg"
              className="gold-gradient text-foreground font-semibold px-8 py-6 text-lg rounded-xl hover:opacity-90 border-0 gap-2"
            >
              <Send className="w-5 h-5" /> Subscribe
            </Button>
          </form>

          <p className="text-primary-foreground/50 text-xs mt-4">
            No spam, ever. Unsubscribe anytime. 100% free.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
