import { Wifi, Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Wifi className="w-6 h-6 text-secondary" />
              <span className="font-heading font-bold text-lg text-background">OGD MOBILE</span>
            </div>
            <p className="text-background/60 text-sm">
              Helping Nigerians save data and money since 2024. Your trusted guide to the cheapest data plans.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-background mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#tips" className="text-background/60 hover:text-secondary transition-colors">Data Tips</a></li>
              <li><a href="#calculator" className="text-background/60 hover:text-secondary transition-colors">Data Calculator</a></li>
              <li><a href="#deals" className="text-background/60 hover:text-secondary transition-colors">Best Deals</a></li>
              <li><a href="#newsletter" className="text-background/60 hover:text-secondary transition-colors">Newsletter</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-background mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-secondary/20 transition-colors">
                <Twitter className="w-5 h-5 text-background/70" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-secondary/20 transition-colors">
                <Instagram className="w-5 h-5 text-background/70" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-secondary/20 transition-colors">
                <Facebook className="w-5 h-5 text-background/70" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-8 pt-8 text-center">
          <p className="text-background/40 text-sm">
            © 2024 DataSaverNG. Made with ❤️ in Nigeria.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
