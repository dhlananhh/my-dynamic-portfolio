/* "use client";


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
 */


// src/app/(main)/page.tsx
"use client";

import { ScrollProgress } from "@/components/custom-ui/ScrollProgress";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";


export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <ScrollProgress />
      <HeroSection />

      {/* Giữ lại Projects nhưng có thể chỉ hiển thị vài dự án và thêm nút "View More" */}
      <ProjectsSection />
      {/* <div className="text-center -mt-16 mb-24">
        <Button asChild>
            <Link href="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4"/>
            </Link>
        </Button>
      </div> */}

      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
