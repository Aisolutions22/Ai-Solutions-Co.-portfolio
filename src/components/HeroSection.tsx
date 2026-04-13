import { ArrowRight, ShieldCheck } from "lucide-react";

const HeroSection = () => (
  <section className="min-h-screen flex flex-col items-center justify-start text-center px-6 pt-32 relative overflow-hidden">
    <div className="relative z-10">
      <div className="shimmer-badge pulse-badge inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900/80 text-white mb-12 shadow-[0_0_20px_rgba(251,146,60,0.4),0_0_40px_rgba(0,82,255,0.2)]">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-sm font-medium tracking-wide">Available for new projects</span>
      </div>

      <h1 className="font-extrabold leading-tight max-w-5xl text-foreground tracking-[0.02em]" style={{ fontSize: 'clamp(1.5rem, 5vw, 4.5rem)' }}>
        We Build <span className="text-gradient">Intelligent Systems</span>{" "}
        <span className="text-[#0052FF]">That Scale Business.</span>
      </h1>

      <div className="mt-8 flex items-center justify-center gap-2 text-muted-foreground">
        <ShieldCheck size={18} className="text-[#0052FF] flex-shrink-0" />
        <span className="text-xs font-semibold uppercase tracking-[0.15em]">Verified AI Architecture Expert</span>
      </div>

      <p className="mt-6 text-slate-700 max-w-2xl mx-auto text-lg leading-relaxed">
        I'm Mohamed Ali, Founder of AI Solutions. With over a decade of experience in business leadership and sales management, I bridge the gap between complex AI technology and real-world business growth through advanced n8n automation.
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
