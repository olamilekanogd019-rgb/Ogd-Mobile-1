import { motion } from "framer-motion";
import {
  Wifi,
  WifiOff,
  Moon,
  Download,
  Smartphone,
  Settings,
  Eye,
  Zap,
} from "lucide-react";

const tips = [
  {
    icon: WifiOff,
    title: "Turn Off Background Data",
    desc: "Go to Settings > Data Usage and restrict background data for apps you don't need.",
  },
  {
    icon: Download,
    title: "Download, Don't Stream",
    desc: "Download music, videos & maps on WiFi. Streaming eats 5x more data than downloads.",
  },
  {
    icon: Moon,
    title: "Use Lite Apps",
    desc: "Switch to Facebook Lite, Twitter Lite, YouTube Go — they use 70% less data.",
  },
  {
    icon: Settings,
    title: "Disable Auto-Updates",
    desc: "Set app updates to WiFi only. Auto-updates can drain 500MB+ monthly.",
  },
  {
    icon: Eye,
    title: "Lower Video Quality",
    desc: "Set YouTube & Netflix to 480p or lower. HD streaming uses 3GB per hour!",
  },
  {
    icon: Zap,
    title: "Use Data Saver Mode",
    desc: "Enable Chrome's Data Saver or Opera Mini's compression to cut browsing data by 50%.",
  },
  {
    icon: Wifi,
    title: "Hunt Free WiFi",
    desc: "Use WiFi Map app to find free hotspots near you. Save your data for when you need it.",
  },
  {
    icon: Smartphone,
    title: "Monitor Daily Usage",
    desc: "Check your data balance daily. Dial *131*4# (MTN), *140# (Airtel), *127*0# (Glo).",
  },
];

const DataSavingTips = () => {
  return (
    <section className="py-20 bg-background" id="tips">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            <Zap className="w-4 h-4" /> Pro Tips
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
            Save Up to <span className="text-primary">70% Data</span> Instantly
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Practical tips every Nigerian should know. Start saving data today!
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip, idx) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-card rounded-2xl p-6 card-shadow hover:card-hover-shadow transition-all hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <tip.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold font-heading text-foreground mb-2">{tip.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{tip.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataSavingTips;
