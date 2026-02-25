import { motion } from "framer-motion";
import { MessageCircle, Send, Users } from "lucide-react";

const communities = [
  {
    name: "WhatsApp Community",
    description: "Get instant alerts for the cheapest data deals daily",
    icon: MessageCircle,
    color: "142 70% 45%",
    link: "https://wa.me/?text=Join%20our%20cheap%20data%20alerts%20group",
    cta: "Join WhatsApp",
    emoji: "📲",
  },
  {
    name: "Telegram Channel",
    description: "Exclusive deals & flash sales posted first here",
    icon: Send,
    color: "200 80% 50%",
    link: "https://t.me/ogdmobile",
    cta: "Join Telegram",
    emoji: "✈️",
  },
];

const CommunityLinks = () => {
  return (
    <section className="py-6" id="community">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-3">
          <Users className="w-4 h-4 text-primary" />
          <h2 className="text-sm font-bold font-heading text-foreground">Join Our Community</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {communities.map((c, idx) => (
            <motion.a
              key={c.name}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-card rounded-xl p-4 card-shadow border border-border hover:border-primary/30 transition-all group"
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: `hsl(${c.color} / 0.12)` }}
                >
                  <c.icon className="w-5 h-5" style={{ color: `hsl(${c.color})` }} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-foreground text-sm">{c.emoji} {c.name}</h3>
                  <p className="text-[11px] text-muted-foreground mt-0.5">{c.description}</p>
                  <span
                    className="inline-block mt-2 text-xs font-semibold group-hover:underline"
                    style={{ color: `hsl(${c.color})` }}
                  >
                    {c.cta} →
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityLinks;
