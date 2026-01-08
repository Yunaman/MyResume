"use client";

import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: Github, href: "https://github.com/yenuss", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/yenuss", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/yenuss", label: "Twitter" },
  { icon: Mail, href: "mailto:yenus@example.com", label: "Email" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary dark:bg-dark-card text-light border-t border-transparent dark:border-dark-border">
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Branding */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif mb-2">Yenus Sadik</h3>
            <p className="text-light/70 text-sm">
              Full-Stack Developer & Digital Creator
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 360,
                  backgroundColor: "#B8986C",
                  borderColor: "#B8986C"
                }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full border border-light/20 flex items-center justify-center transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-light/10 text-center text-sm text-light/60">
          <p className="flex items-center justify-center gap-2">
            Made with{" "}
            <motion.span
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart size={16} className="text-accent" fill="currentColor" />
            </motion.span>
            {" "}in Addis Ababa
          </p>
          <p className="mt-2">
            © {currentYear} Yenus Sadik. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
