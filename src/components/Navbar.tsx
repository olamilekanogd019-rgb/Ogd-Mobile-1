import { useState } from "react";
import { Wifi, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Tips", href: "#tips" },
  { label: "Calculator", href: "#calculator" },
  { label: "Deals", href: "#deals" },
  { label: "Newsletter", href: "#newsletter" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-2">
          <Wifi className="w-6 h-6 text-primary" />
          <span className="font-heading font-bold text-lg text-foreground">OGD MOBILE</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button className="gold-gradient text-foreground font-semibold border-0 hover:opacity-90">
            Get Free Tips
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-muted-foreground hover:text-primary py-2"
            >
              {link.label}
            </a>
          ))}
          <Button className="w-full gold-gradient text-foreground font-semibold border-0">
            Get Free Tips
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
