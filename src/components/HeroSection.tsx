import { ArrowRight } from "lucide-react";

const HeroSection = () => (
  <section className="min-h-screen flex flex-col items-center justify-start text-center px-6 pt-32 relative overflow-hidden">
    <div className="relative z-10">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-white/60 backdrop-blur-sm mb-8 shadow-sm">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span className="text-sm text-muted-foreground">Available for new projects</span>
      </div>

      <h1 className="font-extrabold leading-tight max-w-5xl text-foreground" style={{ fontSize: 'clamp(1.5rem, 5vw, 4.5rem)' }}>
        We Build <span className="text-gradient">AI Automation Systems</span>
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
