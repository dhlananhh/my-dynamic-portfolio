"use client";

import { ScrollProgress } from "@/components/custom-ui/ScrollProgress";
import HeroSection from "@/components/sections/HeroSection";
import AboutMeSection from "@/components/sections/AboutMeSection";
import CareerGoalsSection from "@/components/sections/CareerGoalsSection";
import WorkExperiencesSection from "@/components/sections/WorkExperiencesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ResumeSection from "@/components/sections/ResumeSection";
import ContactSection from "@/components/sections/ContactSection";
import FAQSection from "@/components/sections/FAQSection";
import GitHubContributionsSection from "@/components/sections/GitHubContributionsSection";

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <ScrollProgress />
      <HeroSection />
      <AboutMeSection />
      <CareerGoalsSection />
      <WorkExperiencesSection />
      <ProjectsSection />
      <SkillsSection />
      <GitHubContributionsSection />
      <TestimonialsSection />
      <FAQSection />
      <ResumeSection />
      <ContactSection />
    </main>
  );
}
