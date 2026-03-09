const skills = [
  "n8n Automation",
  "Business Process Automation",
  "Marketing AI",
  "Media Buying",
  "AI Agents",
  "Workflow Automation",
  "API Integrations",
  "CRM Automation",
];

const SkillsSection = () => (
  <section id="skills" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <p className="text-muted-foreground text-sm font-medium mb-2 uppercase tracking-wider">Tech Stack</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Capabilities</h2>
      <p className="text-muted-foreground text-lg max-w-2xl mb-12">
        Specialized tools and technologies I use to build intelligent automation systems
      </p>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-5 py-2.5 rounded-full border border-border bg-secondary/50 text-foreground text-sm font-medium hover:border-primary/40 hover:bg-secondary transition-all cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
