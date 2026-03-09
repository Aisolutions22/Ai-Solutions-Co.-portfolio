import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ProcessSection />
    <ContactSection />
    <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
      © 2026 Mohamed Ali — AI Solutions. All rights reserved.
    </footer>
  </div>
);

export default Index;
