import HeroSection from "@/components/Portfolio/HeroSection";
import SkillsSection from "@/components/Portfolio/SkillsSection";
import ExperienceSection from "@/components/Portfolio/ExperienceSection";
import ProjectsSection from "@/components/Portfolio/ProjectsSection";
import EducationSection from "@/components/Portfolio/EducationSection";
import ContactSection from "@/components/Portfolio/ContactSection";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
    </div>
  );
};

export default Portfolio;