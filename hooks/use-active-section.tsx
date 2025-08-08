"use client";

import { useState, useEffect } from "react";

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log("Checking entry:", entry.target.id, entry.isIntersecting);
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setActiveSection(sectionId);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -20% 0px",
      }
    );

    const timeout = setTimeout(() => {
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => observer.observe(section));
      console.log(
        "Sections observed:",
        [...sections].map((s) => s.id)
      );
    }, 100);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);

  return activeSection;
}
