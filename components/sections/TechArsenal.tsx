'use client';

import { motion } from 'framer-motion';
import { Code2, Database, Layers3, Radar, ShieldCheck, Sparkles, Video } from 'lucide-react';
import { useState } from 'react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

const arsenal = [
  {
    icon: Layers3,
    label: 'Interface Systems',
    stack: 'React, Next.js, Tailwind, Framer Motion',
    note: 'For responsive experiences that feel sharp, animated, and deliberate.',
  },
  {
    icon: Database,
    label: 'Data and Logic',
    stack: 'Node.js, APIs, structured flows, deployment-ready architecture',
    note: 'For products that need stability beneath the spectacle.',
  },
  {
    icon: Sparkles,
    label: 'Experience Direction',
    stack: 'Storyboarding, layout choreography, interaction hierarchy',
    note: 'For interfaces that read like scenes instead of templates.',
  },
  {
    icon: Video,
    label: 'Motion Language',
    stack: 'After Effects thinking translated into UI motion',
    note: 'For rhythm, emotional pacing, and cinematic transitions.',
  },
  {
    icon: ShieldCheck,
    label: 'Production Discipline',
    stack: 'Build reliability, responsiveness, optimization, polish',
    note: 'For work that survives real devices and real users.',
  },
  {
    icon: Radar,
    label: 'Creative R&D',
    stack: 'Experimental visuals, scroll systems, interactive prototypes',
    note: 'For moments that make people stop and look twice.',
  },
];

export default function TechArsenal() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="arsenal" data-tone="arsenal" className="section-shell cinematic-section section-padding relative overflow-hidden">
      <div className="section-noise" />
      <div className="section-grid" />
      <div className="section-beam" />
      <div className="ambient-orb ambient-orb--amber left-[8%] top-[14%] h-56 w-56" />
      <div className="container-custom">
        <SectionHeading
          eyebrow="Tech Arsenal"
          title="An arsenal tuned for products that need both elegance and force."
          description="The tools matter less than the orchestration. Each layer in the stack is chosen to support atmosphere, responsiveness, and production-grade performance at the same time."
        />

        <div className="mt-14 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <Reveal interactive variant="rotate" className="story-frame rounded-[34px] p-6 md:p-7">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent">
                <Code2 size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.34em] text-muted">Active Stack Signal</p>
                <h3 className="mt-1 text-2xl font-semibold text-foreground">{arsenal[activeIndex]?.label}</h3>
              </div>
            </div>

            <motion.div
              key={arsenal[activeIndex]?.label}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="surface-card-strong glass-highlight rounded-[28px] p-6"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-accent/85">{arsenal[activeIndex]?.stack}</p>
              <p className="mt-5 max-w-xl text-base leading-8 text-foreground/82">{arsenal[activeIndex]?.note}</p>
            </motion.div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {arsenal.map((item, index) => (
              <Reveal
                key={item.label}
                delay={index * 0.06}
                interactive
                className="group [perspective:1400px]"
              >
                <button
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className="h-full w-full text-left"
                >
                  <div className="relative min-h-[260px] rounded-[30px] transition-transform duration-500 [transform-style:preserve-3d] group-hover:rotate-y-[8deg] group-hover:-translate-y-2">
                    <div className="absolute inset-0 rounded-[30px] bg-[linear-gradient(135deg,rgba(141,247,211,0.32),rgba(124,114,255,0.2),rgba(255,173,102,0.12))] p-[1px] shadow-[0_28px_70px_rgba(0,0,0,0.18)]">
                      <div className={`surface-card glass-highlight flex h-full flex-col justify-between rounded-[29px] p-5 ${activeIndex === index ? 'border-accent/35 shadow-[0_24px_60px_rgba(57,214,197,0.14)]' : ''}`}>
                        <div>
                          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent">
                            <item.icon size={20} />
                          </div>
                          <h3 className="text-xl font-semibold text-foreground">{item.label}</h3>
                          <p className="mt-4 text-sm leading-7 text-muted">{item.note}</p>
                        </div>
                        <div className="mt-6 text-[0.68rem] uppercase tracking-[0.28em] text-accent/80">
                          {item.stack}
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
