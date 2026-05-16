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
    <section id="skills" data-tone="skills" className="section-shell section-padding relative overflow-hidden">
      <div className="section-noise opacity-10" />
      <div className="ambient-orb ambient-orb--mint left-[6%] top-[14%] h-52 w-52" />
      <div className="container-custom">
        <SectionHeading
          eyebrow="Core Disciplines"
          title="Hybrid craft shaped by product thinking."
          description="I work across the layers that make a product feel complete: the visual system, the codebase, and the narrative."
        />

        <div className="mt-20 grid gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {skillSet.map((skill, index) => (
            <Reveal
              key={skill.name}
              delay={index * 0.05}
              className="p-0"
            >
              <div className="group relative">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-accent/80 transition-colors group-hover:bg-accent group-hover:text-slate-950">
                    <skill.icon size={18} />
                  </div>
                  <span className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-muted/60">
                    {skill.value}%
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-medium text-foreground">
                  {skill.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {skill.description}
                </p>

                <div className="mt-6 h-px w-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ x: '-100%' }}
                    whileInView={{ x: '0%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full w-full bg-accent/40"
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
