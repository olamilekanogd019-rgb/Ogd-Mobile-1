import { motion } from "framer-motion";
import { ArrowRight, Bitcoin, Repeat, Shield } from "lucide-react";

const SponsorAds = () => {
  return (
    <section className="py-6" id="sponsors">
      <div className="container mx-auto px-4">
        <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium mb-2">
          Sponsored
        </div>

        <motion.a
          href="https://wa.me/2348000000000?text=Hi%20I%20want%20to%20trade%20on%20ADE%20MART"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="block rounded-2xl overflow-hidden card-shadow border border-border group"
        >
          {/* Banner Background */}
          <div className="relative bg-gradient-to-br from-[hsl(35,90%,15%)] via-[hsl(30,80%,20%)] to-[hsl(25,70%,12%)] p-5 pb-4">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[hsl(42,90%,55%/0.08)] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-4 w-20 h-20 bg-[hsl(42,90%,55%/0.05)] rounded-full translate-y-1/2" />

            <div className="relative z-10">
              {/* Logo / Title */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[hsl(42,90%,55%)] flex items-center justify-center">
                  <Bitcoin className="w-6 h-6 text-[hsl(30,80%,10%)]" />
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-xl text-[hsl(42,90%,55%)] tracking-tight">
                    ADE MART
                  </h3>
                  <p className="text-[hsl(42,60%,70%)] text-[10px] font-medium tracking-wide uppercase">
                    Exchange App
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[hsl(42,90%,55%/0.12)] text-[hsl(42,80%,70%)] text-[11px] font-medium">
                  <Bitcoin className="w-3 h-3" /> Buy & Sell BTC
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[hsl(42,90%,55%/0.12)] text-[hsl(42,80%,70%)] text-[11px] font-medium">
                  <Repeat className="w-3 h-3" /> Instant Exchange
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[hsl(42,90%,55%/0.12)] text-[hsl(42,80%,70%)] text-[11px] font-medium">
                  <Shield className="w-3 h-3" /> Secure & Fast
                </span>
              </div>

              {/* CTA */}
              <div className="flex items-center justify-between">
                <p className="text-[hsl(42,40%,60%)] text-xs max-w-[180px]">
                  Trade Bitcoin, USDT & more at the best rates 🚀
                </p>
                <div className="flex items-center gap-1 px-4 py-2 rounded-xl bg-[hsl(42,90%,55%)] text-[hsl(30,80%,10%)] font-bold text-xs group-hover:opacity-90 transition-opacity">
                  Trade Now <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
};

export default SponsorAds;
