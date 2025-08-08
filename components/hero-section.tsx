"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  FolderOpen,
  Download,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Floating particles component
const FloatingParticles = () => {
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number; size: number; delay: number }>
  >([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-primary/20 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Animated background gradient
const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, #4F826F 0%, transparent 30%)",
            "radial-gradient(circle at 80% 20%, #4F826F 0%, transparent 30%)",
            "radial-gradient(circle at 40% 80%, #4F826F 0%, transparent 30%)",
            "radial-gradient(circle at 20% 50%, #4F826F 0%, transparent 30%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 80% 80%, #4F826F 0%, transparent 30%)",
            "radial-gradient(circle at 20% 20%, #4F826F 0%, transparent 30%)",
            "radial-gradient(circle at 60% 60%, #4F826F 0%, transparent 30%)",
            "radial-gradient(circle at 80% 80%, #4F826F 0%, transparent 30%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20"
    >
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Mouse follower effect */}
      {/* <motion.div
        className="absolute pointer-events-none z-0"
        animate={{
          x: mousePosition.x + "%",
          y: mousePosition.y + "%",
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 20,
        }}
      >
        <div className="w-96 h-96 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      </motion.div> */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Hi, I'm{" "}
              <motion.span
                className="text-primary font-semibold"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {"Zhaka Hidayat"}
              </motion.span>
            </motion.h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Passionate computer science student crafting{" "}
            <motion.span
              className="text-primary font-semibold"
              animate={{
                textShadow: [
                  "0 0 0px rgba(59, 130, 246, 0)",
                  "0 0 20px rgba(59, 130, 246, 0.5)",
                  "0 0 0px rgba(59, 130, 246, 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              digital experiences
            </motion.span>{" "}
            with modern web technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link href="#projects" passHref>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button size="lg" className="relative overflow-hidden group">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <FolderOpen className="mr-2 h-5 w-5 relative z-10" />
                  <span className="relative z-10">View My Work</span>
                </Button>
              </motion.div>
            </Link>
            <Link href="#" passHref>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-primary/10"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <Download className="mr-2 h-5 w-5 relative z-10" />
                  <span className="relative z-10">Download CV</span>
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center space-x-6"
          >
            {[
              {
                href: "https://github.com/zhakazx",
                icon: Github,
                label: "GitHub",
              },
              {
                href: "https://linkedin.com/in/zhakazx",
                icon: Linkedin,
                label: "LinkedIn",
              },
              { href: "mailto:zhakazx@gmail.com", icon: Mail, label: "Email" },
            ].map((social, index) => (
              <motion.div
                key={social.label}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  className="hover:text-primary relative group"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <motion.div
                      className="absolute inset-0 bg-primary/20 rounded-full"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                    <social.icon className="h-6 w-6 relative z-10" />
                  </a>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
