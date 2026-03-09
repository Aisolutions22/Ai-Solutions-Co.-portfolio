const projects = [
  {
    category: "Business Automation",
    location: "UAE",
    title: "E-Commerce Workflow Automation",
    description: "Automated end-to-end e-commerce operations including order processing, inventory management, and customer notifications using n8n workflows.",
    highlight: "Full e-commerce pipeline automation",
    tags: ["n8n", "API", "Automation", "E-Commerce"],
  },
  {
    category: "Marketing AI",
    location: "Saudi Arabia",
    title: "AI-Powered Ad Campaign Manager",
    description: "Built an intelligent system that optimizes ad spend across platforms, analyzes performance metrics, and adjusts bidding strategies automatically.",
    highlight: "Smart ad optimization with AI",
    tags: ["Marketing AI", "Media Buying", "Analytics", "Automation"],
  },
  {
    category: "Process Automation",
    location: "Egypt",
    title: "CRM Lead Nurturing System",
    description: "Developed an automated lead scoring and nurturing pipeline that routes prospects through personalized follow-up sequences based on behavior.",
    highlight: "Automated lead scoring & follow-ups",
    tags: ["CRM", "n8n", "AI Agents", "Google Sheets"],
  },
  {
    category: "Content Automation",
    location: "Global",
    title: "Social Media Content Pipeline",
    description: "Created an AI-driven content generation and scheduling system that produces, reviews, and publishes social media content across multiple platforms.",
    highlight: "End-to-end content automation",
    tags: ["AI", "Automation", "Social Media", "n8n"],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected Projects</h2>
      <p className="text-muted-foreground text-lg max-w-2xl mb-12">
        Showcasing advanced AI automation and agentic systems dealing with real-world complexities.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div key={p.title} className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{p.category}</span>
              <span className="text-xs text-muted-foreground">{p.location}</span>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.description}</p>
            <p className="text-sm text-accent font-medium mb-4">{p.highlight}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-secondary text-muted-foreground">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
