'use client';

import { motion } from 'framer-motion';
import { Braces, LayoutDashboard, Megaphone, Palette, ServerCog, Video } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

const skillSet = [
  {
    name: 'React',
    value: 70,
    description:
      'Modern component-driven interfaces using React, Next.js, TypeScript, and Tailwind.',
    icon: Braces,
  },
  {
    name: 'Front-end Development',
    value: 75,
    description:
      'Responsive UX with performance-first animation, accessibility, and premium visual finish.',
    icon: LayoutDashboard,
  },
  {
    name: 'Back-end Development',
    value: 70,
    description:
      'Robust APIs and scalable data flows using Node.js, Express, Prisma, and cloud-ready patterns.',
    icon: ServerCog,
  },
  {
    name: 'UI/UX Design',
    value: 80,
    description:
      'User-centered product thinking, strong layout systems, and clear interaction hierarchy.',
    icon: Palette,
  },
  {
    name: 'Video Editing',
    value: 65,
    description:
      'Motion-aware storytelling with Premiere Pro, After Effects, and clean visual rhythm.',
    icon: Video,
  },
  {
    name: 'Digital Marketing',
    value: 60,
    description: 'Audience-minded campaigns across SEO, social, and messaging strategy.',
    icon: Megaphone,
  },
];

export default function Skills() {
  return (
    <section id="skills" data-tone="skills" className="section-shell cinematic-section section-padding relative overflow-hidden">
      <div className="section-noise" />
      <div className="section-grid" />
      <div className="section-beam" />
      <div className="ambient-orb ambient-orb--mint left-[6%] top-[14%] h-52 w-52" />
      <div className="container-custom">
        <SectionHeading
          eyebrow="Core Disciplines"
          title="Hybrid craft shaped by product thinking, motion, and technical depth."
          description="I work across the layers that make a portfolio or product feel complete: the visual system, the codebase behind it, and the narrative that ties both together."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {skillSet.map((skill, index) => (
            <Reveal
              key={skill.name}
              delay={index * 0.08}
              interactive
              className="surface-card group glass-highlight overflow-hidden p-6 md:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/15 bg-accent/10 text-accent">
                    <skill.icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground transition-colors group-hover:text-accent">
                      {skill.name}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-muted">
                      {skill.description}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-semibold text-foreground">{skill.value}%</div>
                  <div className="mt-1 text-[0.7rem] uppercase tracking-[0.26em] text-muted">
                    Confidence
                  </div>
                </div>
              </div>

              <div className="mt-7">
                <div className="h-3 rounded-full bg-white/8">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.value}%` }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.9, delay: 0.18 + index * 0.05, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-accent via-accent-strong to-secondary"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
