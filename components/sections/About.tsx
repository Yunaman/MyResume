"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import { Award, Code2, Palette, Video } from "lucide-react";
import aboutMeImage from "@/assets/img/aboutme.png";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Modern web applications with React, Next.js, Node.js",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, user-centered interfaces that convert",
  },
  {
    icon: Video,
    title: "Video Production",
    description: "Cinematic editing and motion graphics",
  },
  {
    icon: Award,
    title: "Digital Marketing",
    description: "Strategic campaigns that drive results",
  },
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax effects for the image coming from Hero
  const imageY = useTransform(scrollYProgress, [0, 0.5], [-100, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const imageRotate = useTransform(scrollYProgress, [0, 0.5], [-10, 0]);

  return (
    <section id="about" className="section-padding bg-light dark:bg-dark-bg relative overflow-hidden" ref={ref}>
      <div ref={containerRef} className="absolute inset-0 pointer-events-none" />
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.08, 0.16, 0.08], x: [0, 18, 0], y: [0, -12, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-accent/15 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.06, 0.12, 0.06], x: [0, -14, 0], y: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-52 -left-52 w-[640px] h-[640px] rounded-full bg-primary/10 dark:bg-light/5 blur-3xl"
      />
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] relative overflow-hidden group">
              {/* Animated image from Hero section */}
              <motion.div
                style={{ 
                  y: imageY,
                  scale: imageScale,
                  rotate: imageRotate
                }}
                className="w-full h-full"
              >
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ 
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  whileHover={{ scale: 1.1 }}
                  className="w-full h-full relative overflow-hidden"
                >
                  {/* Same background image as Hero for continuity */}
                  <motion.img
                    src={aboutMeImage.src}
                    alt="Yenus Sadik"
                    className="object-cover w-full h-full transition-all duration-700"
                  />
                  
                  {/* Overlay gradient */}
                  <motion.div
                    initial={{ opacity: 0.3 }}
                    whileHover={{ opacity: 0.1 }}
                    className="absolute inset-0 bg-gradient-to-t from-accent/30 via-transparent to-primary/20"
                  />
                  
                  {/* Animated particles/sparkles overlay */}
                  <motion.div
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/10"
                  />
                </motion.div>
              </motion.div>
              
              {/* Animated border frame */}
              <motion.div
                animate={{ 
                  x: [-16, -12, -16], 
                  y: [-16, -12, -16],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 border-4 border-accent -translate-x-4 -translate-y-4 -z-10"
              />
              
              {/* Glow effect on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 shadow-2xl shadow-accent/20 pointer-events-none"
              />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-accent text-sm tracking-widest uppercase mb-4">
              About Me
            </p>
            <h2 className="heading-2 mb-6">
              Transforming Ideas into Digital Excellence
            </h2>
            <p className="body-large text-primary/70 mb-6">
              I&apos;m a multidisciplinary digital creator based in Addis Ababa,
              Ethiopia, specializing in crafting premium web experiences that
              blend cutting-edge technology with thoughtful design.
            </p>
            <p className="text-primary/70 mb-8">
              With expertise spanning full-stack development, UI/UX design,
              video editing, and digital marketing, I bring a unique
              perspective to every project — combining technical precision with
              creative vision to deliver solutions that not only function
              flawlessly but also captivate and inspire.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              whileHover={{ y: -2 }}
              className="relative overflow-hidden rounded-xl border border-primary/10 dark:border-dark-border bg-primary/5 dark:bg-dark-card p-6 mb-10"
            >
              <motion.div
                animate={{ x: ["-20%", "120%"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-accent/15 to-transparent"
              />
              <div className="relative">
                <p className="text-accent text-xs tracking-widest uppercase mb-3">
                  Resume Summary
                </p>
                <p className="text-primary/80 dark:text-light/80 leading-relaxed">
                  Full-stack developer focused on building fast, accessible web
                  experiences with clean UI, scalable architecture, and reliable
                  APIs.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["React", "Front-end Development", "Back-end Development"].map((item) => (
                    <span
                      key={item}
                      className="text-xs px-3 py-1 bg-light/60 dark:bg-dark-bg/40 text-primary/70 dark:text-light/70 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <motion.div
                      whileHover={{ rotate: 12 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors"
                    >
                      <motion.div>
                        <item.icon className="text-accent" size={20} />
                      </motion.div>
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-serif mb-3 group-hover:text-accent transition-colors dark:text-light">{item.title}</h3>
                      <p className="text-primary/70 dark:text-light/70 text-sm mb-4 leading-relaxed group-hover:text-primary dark:group-hover:text-light transition-colors">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-10"
            >
              <a href="#contact" className="btn-primary">
                Let&apos;s Collaborate
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
