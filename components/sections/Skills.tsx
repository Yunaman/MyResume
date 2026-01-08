"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skillSet = [
  {
    name: "React",
    value: 70,
    description:
      "Modern component-driven interfaces using React, Next.js, TypeScript, and Tailwind",
  },
  {
    name: "Front-end Development",
    value: 75,
    description:
      "Pixel-perfect, responsive UX with performance-first animations and accessibility in mind",
  },
  {
    name: "Back-end Development",
    value: 70,
    description:
      "Robust APIs and data layers using Node.js, Express, Prisma, and cloud-native tooling",
  },
];

export default function Skills() {
  const [containerRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  return (
    <section id="skills" className="section-padding bg-primary/5 dark:bg-dark-card">
      <div className="container-custom" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-accent text-sm tracking-[0.35em] uppercase mb-4">
            Core Disciplines
          </p>
          <h2 className="heading-2 mb-6">Hybrid Craft. Technical Precision.</h2>
          <p className="body-large text-primary/70 dark:text-light/70">
            A balanced blend of product design sensibility, modern engineering, and systems thinking
            to deliver experiences that feel premium, fast, and scalable.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid gap-10">
          {skillSet.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
              className="rounded-2xl bg-light/80 dark:bg-dark-bg/60 shadow-[0px_18px_60px_rgba(15,15,15,0.08)] dark:shadow-none backdrop-blur-md border border-light/40 dark:border-dark-border px-8 py-8"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
                <div>
                  <h3 className="text-2xl font-serif text-primary dark:text-light">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-primary/70 dark:text-light/60 mt-2 max-w-xl">
                    {skill.description}
                  </p>
                </div>

                <span className="text-3xl font-light text-accent min-w-[4rem] text-right">
                  {skill.value}%
                </span>
              </div>

              <div className="relative h-3 w-full overflow-hidden rounded-full bg-primary/10 dark:bg-dark-border/60">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.value}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.12, ease: "easeOut" }}
                  className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-accent via-accent/80 to-primary"
                  style={{ boxShadow: "0px 12px 30px rgba(184, 152, 108, 0.25)" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
