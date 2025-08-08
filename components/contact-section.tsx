"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.section
      className="py-16 px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial={{ opacity: 0, y: -20 }}
      whileInView="visible"
      viewport={{ once: true }}
      id="contact"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          variants={itemVariants}
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
            Get In Touch
          </motion.h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from
            you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            variants={itemVariants}
            initial={{ opacity: 0, y: -20 }}
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
              <p className="text-muted-foreground mb-6">
                I'm always open to discussing new opportunities and interesting
                projects.
              </p>
            </div>

            <div className="space-y-4">
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-foreground">zhakazx@gmail.com</span>
              </motion.div>

              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-foreground">
                  +62 812 4274 6476 (Whatsapp Only)
                </span>
              </motion.div>

              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-foreground">Makassar, Indonesia</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            initial={{ opacity: 0, y: -20 }}
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Send Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" required />
                  </motion.div>

                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                    />
                  </motion.div>

                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      required
                    />
                  </motion.div>

                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project or just say hi!"
                      rows={4}
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
