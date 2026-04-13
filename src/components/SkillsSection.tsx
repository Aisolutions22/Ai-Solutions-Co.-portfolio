import { motion } from "framer-motion";
import { Compass, GitBranch, Bot, TrendingUp, Link, Users } from "lucide-react";

const capabilities = [
  { icon: Compass, title: "Digital Transformation Strategy", desc: "Consulting on full-scale business modernization and AI adoption roadmaps." },
  { icon: GitBranch, title: "Enterprise n8n Orchestration", desc: "Architecting complex, multi-layered workflows to eliminate manual bottlenecks." },
  { icon: Bot, title: "Autonomous AI Agents", desc: "Deploying intelligent, self-learning agents for customer support and operational tasks." },
  { icon: TrendingUp, title: "AI-Powered Media Buying", desc: "Optimizing marketing spend and performance through predictive AI modeling." },
  { icon: Link, title: "System & API Integration", desc: "Seamlessly connecting disparate business tools into a unified, high-performance ecosystem." },
  { icon: Users, title: "Intelligent CRM & Workflow Design", desc: "Tailoring business logic and lead management through automated intelligence." },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-2">Capabilities</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-[0.02em] text-foreground">
        Strategic Capabilities & Digital Transformation Ecosystem
      </h2>
      <p className="text-muted-foreground text-base max-w-3xl mb-14">
        Advanced architectures and intelligent technologies engineered to modernize business infrastructure and drive automated growth.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {capabilities.map((cap, i) => (
          <motion.div
            key={cap.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="group relative p-6 rounded-2xl glass-card border border-border/60 overflow-hidden cursor-default
                       hover:border-primary/40 hover:shadow-[0_0_24px_rgba(251,146,60,0.2)] transition-all duration-300"
          >
            {/* Shimmer overlay */}
            <div className="absolute inset-0 shimmer-badge pointer-events-none rounded-2xl" />

            <div className="relative z-10">
              <motion.div
                className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <cap.icon className="w-5 h-5 text-primary group-hover:animate-pulse" strokeWidth={1.5} />
              </motion.div>
              <h3 className="font-semibold text-foreground mb-1.5">{cap.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
