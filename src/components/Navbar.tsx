import { useState } from "react";
import { Menu, X, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <img src={logo} alt="AI Solutions Logo" className="h-10 w-auto" />
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
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <Facebook size={18} />
          </a>
          <a href="#contact" className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 hover:shadow-[0_0_15px_hsl(217,91%,60%,0.3)] transition-all duration-300">
            Contact
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/50 px-6 py-4 space-y-3">
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
