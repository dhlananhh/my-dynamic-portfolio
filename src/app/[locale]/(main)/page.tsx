"use client";


import { ScrollProgress } from "@/components/custom-ui/ScrollProgress";
import HeroSection from "@/components/sections/HeroSection";


export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      <ScrollProgress />
      <HeroSection />
    </main>
  );
}
