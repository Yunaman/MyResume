"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown, Sparkles, Code2, Palette, Video, Zap } from "lucide-react";

import AnimatedIcon from "@/components/AnimatedIcon";
import FloatingSocial from "@/components/FloatingSocial";
import HeroWordLoop from "@/components/HeroWordLoop";
import heroBg from "@/assets/img/herobg1.jpg";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  // Parallax effects
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <motion.div
          style={{
            scale: imageScale,
            y: imageY,
          }}
          className="absolute inset-0 w-full h-full"
        >
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ 
              scale: [1.1, 1.15, 1.1],
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${heroBg.src}')`,
            }}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/80 dark:from-dark-bg/90 dark:via-dark-bg/70 dark:to-dark-bg/90" />

        <motion.div
          aria-hidden="true"
          animate={{ opacity: [0.12, 0.22, 0.12] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-accent/20 blur-3xl"
        />
        <motion.div
          aria-hidden="true"
          animate={{ opacity: [0.08, 0.16, 0.08], x: [0, 20, 0], y: [0, -10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-48 -right-48 w-[620px] h-[620px] rounded-full bg-light/10 blur-3xl"
        />
        <motion.div
          aria-hidden="true"
          animate={{ opacity: [0.08, 0.14, 0.08] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(184,152,108,0.20),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.10),transparent_45%),radial-gradient(circle_at_50%_90%,rgba(184,152,108,0.12),transparent_45%)]"
        />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 z-5 overflow-hidden pointer-events-none">
        <AnimatedIcon
          icon={Code2}
          size={48}
          className="absolute top-20 left-[10%] text-accent/20"
          float
          delay={0}
        />
        <AnimatedIcon
          icon={Palette}
          size={40}
          className="absolute top-40 right-[15%] text-accent/20"
          float
          delay={0.5}
        />
        <AnimatedIcon
          icon={Video}
          size={36}
          className="absolute bottom-40 left-[20%] text-accent/20"
          float
          delay={1}
        />
        <AnimatedIcon
          icon={Zap}
          size={44}
          className="absolute bottom-32 right-[10%] text-accent/20"
          float
          delay={1.5}
        />
        <AnimatedIcon
          icon={Sparkles}
          size={32}
          className="absolute top-1/3 right-[25%] text-accent/20"
          float
          delay={2}
        />
      </div>

      {/* Content */}
      <motion.div 
        style={{ y: contentY, opacity }}
        className="container-custom relative z-10 text-center text-light dark:text-light"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="text-accent" size={20} />
            </motion.div>
            <p className="text-accent text-sm md:text-base tracking-widest uppercase">
              Welcome to my world
            </p>
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="text-accent" size={20} />
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="heading-1 mb-6 text-balance"
          >
            Yenus Sadik
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl mb-6 text-light/90 text-balance"
          >
            <span className="text-accent text-sm md:text-base uppercase tracking-[0.45em] block mb-3">
              {"I\'m"}
            </span>
            <HeroWordLoop
              phrases={[
                "full-stack web developer",
                "freelancer & product designer",
                "digital marketer",
                "video editor",
                "creative problem solver",
              ]}
            />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="body-large text-light/80 max-w-2xl mx-auto mb-12"
          >
            <p>
              Crafting premium digital experiences from Addis Ababa — where
              elegant code meets creative vision.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#portfolio"
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#portfolio")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="btn-outline border-light text-light hover:bg-light hover:text-primary"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-light hover:text-accent transition-colors"
        aria-label="Scroll to about section"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.button>
      <FloatingSocial instagramUrl="https://www.instagram.com/yunaon_ice/" />
    </section>
  );
}
