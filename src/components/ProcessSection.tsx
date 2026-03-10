const steps = [
  { num: "01", title: "Meeting", desc: "Understanding your business needs and automation goals." },
  { num: "02", title: "Planning", desc: "Creating a detailed roadmap and timeline for implementation." },
  { num: "03", title: "Design", desc: "Mapping out the workflow and system architecture." },
  { num: "04", title: "Building & Testing", desc: "Developing the automation and rigorous quality testing." },
  { num: "05", title: "Launch", desc: "Deploying the system and ensuring smooth operation." },
];

const ProcessSection = () => (
  <section id="process" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Process</h2>
      <p className="text-muted-foreground text-lg max-w-2xl mb-12">
        From chaos to streamlined automation in 5 steps.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {steps.map((s) => (
          <div key={s.num} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors">
            <div className="text-2xl font-bold text-gradient mb-3">{s.num}</div>
            <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
