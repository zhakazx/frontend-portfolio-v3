"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-primary/10">
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
            About me
          </motion.h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate developer with 3+ years of experience creating digital
            solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a dedicated fullstack developer and computer science student
                at Universitas Islam Negeri Alauddin Makassar. I specialize in
                both frontend and backend technologies, with expertise in modern
                frameworks and languages that enable me to build comprehensive
                web applications from concept to deployment.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
