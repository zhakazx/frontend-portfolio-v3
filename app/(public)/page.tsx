"use client";
import { AboutSection } from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import ProjectSection from "@/components/project-section";
import { SkillsSection } from "@/components/skills-section";
import { Navigation } from "@/components/navigation";

export default function PublicPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
      </main>
    </>
  );
}
