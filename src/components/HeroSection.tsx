import { ArrowRight, ShieldCheck, Workflow, Building2, Globe, Puzzle } from "lucide-react";

const stats = [
  { icon: Workflow, value: "15+", label: "Automation Projects", desc: "Real-world AI & workflow systems delivered" },
  { icon: Building2, value: "10+", label: "Industries Served", desc: "Hotels, Real Estate, Sales, & Content" },
  { icon: Globe, value: "6+", label: "Countries", desc: "Projects delivered and managed globally" },
  { icon: Puzzle, value: "100%", label: "Custom Solutions", desc: "Fully tailored architecture, no templates" },
];

const HeroSection = () => (
  <section className="flex flex-col items-center justify-start text-center px-6 pt-32 pb-20 relative overflow-hidden">
    <div className="relative z-10 w-full max-w-6xl">
      <div className="shimmer-badge pulse-badge inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900/80 text-white mb-10 shadow-[0_0_20px_rgba(251,146,60,0.4),0_0_40px_rgba(0,82,255,0.2)]">
        <ShieldCheck size={16} className="text-emerald-400 flex-shrink-0" />
        <span className="text-sm font-medium tracking-wide">Verified AI Architecture & Digital Transformation Expert</span>
      </div>

      <h1 className="font-extrabold leading-tight max-w-5xl mx-auto text-foreground tracking-[0.02em]" style={{ fontSize: 'clamp(1.5rem, 5vw, 4.5rem)' }}>
        We Build Intelligent <span className="text-[#0052FF]">Systems</span>
        <br />
        That <span className="italic font-extrabold text-gradient">Scale Business.</span>
      </h1>

      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#projects"
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:bg-[#0A192F] hover:scale-105 hover:shadow-xl transition-all duration-300"
        >
          View Our Projects <ArrowRight size={18} />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-border text-foreground font-medium glass-card hover:border-primary/40 hover:shadow-lg transition-all duration-300"
        >
          Get In Touch
        </a>
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="p-6 rounded-2xl glass-card border border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all duration-300 text-left">
              <Icon size={22} className="text-primary mb-3" />
              <div className="text-3xl font-bold text-primary mb-1">{s.value}</div>
              <div className="font-semibold text-foreground text-sm mb-1">{s.label}</div>
              <div className="text-xs text-muted-foreground">{s.desc}</div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default HeroSection;
