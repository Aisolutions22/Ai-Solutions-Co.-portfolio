import { ArrowRight } from "lucide-react";

const HeroSection = () => (
  <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-8">
      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
      <span className="text-sm text-muted-foreground">Available for new projects</span>
    </div>

    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight max-w-4xl">
      I Build <span className="text-gradient">AI Automation Systems</span>
      <br />for Real Businesses
    </h1>

    <p className="mt-6 text-muted-foreground max-w-2xl text-lg leading-relaxed">
      From AI agents to smart workflows, I help companies automate operations, sales, and content to reduce manual work and scale efficiently.
    </p>

    <div className="mt-10 flex flex-col sm:flex-row gap-4">
      <a href="#projects" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
        View My Projects <ArrowRight size={18} />
      </a>
      <a href="#contact" className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-border text-foreground font-medium hover:bg-secondary hover:border-primary/30 transition-all">
        Get In Touch
      </a>
    </div>
  </section>
);

export default HeroSection;
