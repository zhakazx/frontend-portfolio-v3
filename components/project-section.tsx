"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

// import { Project } from "@/types/project";
import { projects } from "@/data/projects";

export default function ProjectSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={cardVariants}
          initial={{ opacity: 0, y: -20 }}
          whileInView="visible"
          viewport={{ once: true }}
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
            Featured Projects
          </motion.h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a
            unique challenge and learning experience.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={cardVariants}
          initial={{ opacity: 0, y: -20 }}
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="h-full py-0 pb-6 flex flex-col group hover:shadow-lg transition-shadow duration-300">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <CardHeader className="flex-grow">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Tech Stack */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        className={project.codeUrl ? "flex-1" : "w-full"}
                        asChild
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Preview
                        </a>
                      </Button>
                    )}

                    {project.codeUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        className={project.liveUrl ? "flex-1" : "w-full"}
                        asChild
                      >
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <Github className="w-4 h-4" />
                          View Code
                        </a>
                      </Button>
                    )}

                    {project.isPrivate &&
                      !project.liveUrl &&
                      !project.codeUrl && (
                        <div className="w-full">
                          <Button
                            size="sm"
                            variant="secondary"
                            className="w-full cursor-default"
                            disabled
                          >
                            Private Project
                          </Button>
                          <p className="text-xs text-muted-foreground mt-2 text-center">
                            Code confidential due to NDA
                          </p>
                        </div>
                      )}

                    {!project.liveUrl &&
                      !project.codeUrl &&
                      !project.isPrivate && (
                        <Button size="sm" variant="outline" className="w-full">
                          Case Study
                        </Button>
                      )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Button variant="outline" size="lg">
            View All Projects (Coming Soon)
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
