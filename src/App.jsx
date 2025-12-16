import FloatingNavbar from "./components/navbar/FloatingNavbar";
import ScrollProgress from "./components/ui/ScrollProgress";

import HeroSection from "./components/hero/HeroSection";
import AboutSection from "./components/about/AboutSection";
import ExperienceSection from "./components/experience/ExperienceSection"; // Internship
import SkillsSection from "./components/skills/SkillsSection";
import ProjectsSection from "./components/projects/ProjectsSection";
import ExtraActivitiesSection from "./components/extras/ExtraActivitiesSection";
import ContactSection from "./components/contact/ContactSection";

export default function App() {
  return (
    <>
      <FloatingNavbar />
      <ScrollProgress />

      <HeroSection />
      <AboutSection />

      {/* Internship */}
      <ExperienceSection />

      <SkillsSection />
      <ProjectsSection />

      {/* Extra Activities */}
      <ExtraActivitiesSection />

      <ContactSection />
    </>
  );
}
