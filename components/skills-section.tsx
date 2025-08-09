"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Palette, Server, Settings } from "lucide-react";

// Data skill dimasukkan sebagai array of objects
const skillCategories = [
  {
    title: "Frontend",
    icon: Palette,
    items: [
      "HTML/CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    items: [
      "PHP",
      "Laravel",
      "Node.js",
      "Python",
      "REST APIs",
      "Database Design",
    ],
  },
  {
    title: "Tools & Others",
    icon: Settings,
    items: [
      "Git",
      "VS Code",
      "Docker",
      "Postman",
      "Responsive Design",
      "Agile",
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-4 text-primary"
            animate={{
              textShadow: [
                "0 0 0px rgba(79, 130, 111, 0)",
                "0 0 20px rgba(79, 130, 111, 0.5)",
                "0 0 0px rgba(79, 130, 111, 0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Skills & Expertise
          </motion.h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <h3
                  className={`text-xl font-semibold mb-4 flex items-center gap-2 text-primary`}
                >
                  <Icon className="w-5 h-5" />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.items.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="border border-[#4f826f] text-[#4f826f] hover:bg-[#4f826f]/10"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
