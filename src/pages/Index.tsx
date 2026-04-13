import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";
import GeometricBackground from "@/components/GeometricBackground";

const Index = () => (
  <div className="min-h-screen">
    <GeometricBackground />
    <Navbar />
    <main>
      <HeroSection />
      
      <SkillsSection />
      <ProjectsSection />
      <ProcessSection />
      <ContactSection />
    </main>
    <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
      © 2026 Mohamed Ali — AI Solutions. All rights reserved.
    </footer>
  </div>
);

export default Index;
