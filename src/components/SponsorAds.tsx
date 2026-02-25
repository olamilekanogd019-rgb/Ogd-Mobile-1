import { motion } from "framer-motion";
import { Megaphone } from "lucide-react";

const SponsorAds = () => {
  return (
    <section className="py-6" id="sponsors">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-3">
          <Megaphone className="w-4 h-4 text-secondary" />
          <h2 className="text-sm font-bold font-heading text-foreground">Sponsored</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl p-5 card-shadow border border-border text-center"
        >
          <div className="w-full h-24 rounded-xl bg-muted flex items-center justify-center mb-3">
            <span className="text-muted-foreground text-xs font-medium">📢 Ad Space Available</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Want to promote your business here?{" "}
            <a
              href="https://wa.me/2348000000000?text=Hi%20I%20want%20to%20advertise%20on%20OGD%20Mobile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline"
            >
              Contact us on WhatsApp
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorAds;
