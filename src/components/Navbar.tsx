import { useState } from "react";
import { Menu, X, Facebook } from "lucide-react";
import logo from "@/assets/logo.webp";

const navLinks = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Projects", href: "#projects" },
  { label: "Our Roadmap", href: "#roadmap" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-2.5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <img src={logo} alt="AI Solutions Logo" width={52} height={48} className="h-11 w-auto" />
          <span className="text-lg font-bold tracking-tight text-foreground">AI Solutions</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
              {l.label}
            </a>
          ))}
          <a
            href="https://www.facebook.com/share/1Cd3zk5ZU7/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <Facebook size={18} />
          </a>
          <a href="#contact" className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-[#0A192F] hover:scale-105 hover:shadow-lg transition-all duration-300">
            Contact
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass-card border-t border-border/50 px-6 py-4 space-y-3">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="https://www.facebook.com/share/1Cd3zk5ZU7/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Facebook size={18} /> Facebook
          </a>
          <a href="#contact" onClick={() => setOpen(false)} className="block px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium text-center">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
