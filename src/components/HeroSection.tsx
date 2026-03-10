import { ArrowRight } from "lucide-react";

const HeroSection = () => (
  <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 relative overflow-hidden">
    {/* Subtle grid background */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
    {/* Glow orbs */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

    <div className="relative z-10">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 backdrop-blur-sm mb-8">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-sm text-muted-foreground">Available for new projects</span>
      </div>

      <h1 className="font-extrabold leading-tight max-w-5xl whitespace-nowrap" style={{ fontSize: 'clamp(1.75rem, 5vw, 4.5rem)' }}>
        We Build <span className="text-gradient">AI Automation Systems</span>
      </h1>

      <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
        From AI agents to smart workflows, we help companies automate operations, sales, and content to reduce manual work and scale efficiently.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#projects" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 hover:shadow-[0_0_20px_hsl(217,91%,60%,0.3)] transition-all duration-300">
          View Our Projects <ArrowRight size={18} />
        </a>
        <a href="#contact" className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-border text-foreground font-medium hover:bg-secondary hover:border-primary/30 hover:shadow-[0_0_15px_hsl(217,91%,60%,0.15)] transition-all duration-300">
          Get In Touch
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
