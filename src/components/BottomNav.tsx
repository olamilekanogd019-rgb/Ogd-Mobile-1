import { Flame, Calculator, Lightbulb, Mail, Home } from "lucide-react";

const sections = [
  { icon: Home, label: "Home", href: "#" },
  { icon: Flame, label: "Deals", href: "#daily-deals" },
  { icon: Calculator, label: "Calc", href: "#calculator" },
  { icon: Lightbulb, label: "Tips", href: "#tips" },
  { icon: Mail, label: "News", href: "#newsletter" },
];

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-lg border-t border-border shadow-lg">
      <div className="flex items-center justify-around h-14 max-w-md mx-auto">
        {sections.map((s) => (
          <a
            key={s.label}
            href={s.href}
            className="flex flex-col items-center gap-0.5 text-muted-foreground hover:text-primary transition-colors"
          >
            <s.icon className="w-5 h-5" />
            <span className="text-[10px] font-medium">{s.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
