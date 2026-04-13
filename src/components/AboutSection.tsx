const stats = [
  { value: "15+", label: "Automation Projects", desc: "Real-world AI & workflow systems delivered" },
  { value: "10+", label: "Industries Served", desc: "Hotels, Real Estate, Sales, & Content" },
  { value: "6+", label: "Countries", desc: "Projects delivered and managed globally" },
  { value: "100%", label: "Custom Solutions", desc: "Fully tailored architecture, no templates" },
];

const AboutSection = () => (
  <section id="about" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">About Me</h2>
      <p className="text-muted-foreground text-lg max-w-3xl mb-16 leading-relaxed">
        I'm Mohamed Ali, Founder of AI Solutions | Automation & AI Specialist, focused on building practical AI systems that deliver real business results.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="p-6 rounded-2xl glass-card hover:border-primary/40 hover:shadow-lg transition-all duration-300">
            <div className="text-3xl font-bold text-gradient mb-2">{s.value}</div>
            <div className="font-semibold text-foreground mb-1">{s.label}</div>
            <div className="text-sm text-muted-foreground">{s.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
