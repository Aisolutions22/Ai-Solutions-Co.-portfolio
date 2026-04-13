import { ArrowRight } from "lucide-react";

const HeroSection = () => (
  <section className="min-h-screen flex flex-col items-center justify-start text-center px-6 pt-32 relative overflow-hidden">
    <div className="relative z-10">
      <div className="shimmer-badge inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900/80 text-white mb-8 shadow-[0_0_20px_rgba(251,146,60,0.4),0_0_40px_rgba(0,82,255,0.2)]">
        <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
        <span className="text-sm font-medium tracking-wide">Available for new projects</span>
      </div>

      <h1 className="font-extrabold leading-tight max-w-5xl text-foreground" style={{ fontSize: 'clamp(1.5rem, 5vw, 4.5rem)' }}>
        We Build <span className="text-gradient">AI Automation</span>{" "}
        <span className="text-[#0052FF]">Systems</span>
      </h1>

      <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
        From AI agents to smart workflows, we help companies automate operations, sales, and content to reduce manual work and scale efficiently.
      </p>

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
    </div>
  </section>
);

export default HeroSection;
