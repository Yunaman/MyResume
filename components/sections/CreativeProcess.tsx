'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Cpu, Layers3, Orbit, Sparkles } from 'lucide-react';
import { useRef } from 'react';
import SectionHeading from '@/components/SectionHeading';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const stages = [
  {
    id: '01',
    title: 'Signal Extraction',
    body: 'Every project starts by isolating the emotional tension: what the audience should feel before they understand the interface.',
    accent: 'Audience pulse, visual gravity, conversion pressure',
  },
  {
    id: '02',
    title: 'World Building',
    body: 'I shape an atmosphere first, then let layout, type, and motion inherit from that world so the product feels coherent from first glance to final interaction.',
    accent: 'Grid tension, depth layers, cinematic sequencing',
  },
  {
    id: '03',
    title: 'System Refinement',
    body: 'Polish happens in timing, spacing, and movement curves. The goal is not decoration. The goal is inevitability.',
    accent: 'Production logic, responsive choreography, tactile finish',
  },
];

function StageCard({
  index,
  progress,
  stage,
}: {
  index: number;
  progress: ReturnType<typeof useSpring>;
  stage: (typeof stages)[number];
}) {
  const opacity = useTransform(
    progress,
    [index * 0.2, index * 0.2 + 0.12, index * 0.2 + 0.3],
    [0.45, 1, 0.62]
  );
  const y = useTransform(progress, [index * 0.2, index * 0.2 + 0.14], [24, 0]);

  return (
    <motion.article
      style={{ opacity, y }}
      className="story-frame premium-hover rounded-[30px] p-6 md:p-7"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent">
          {index === 0 ? <Sparkles size={22} /> : index === 1 ? <Layers3 size={22} /> : <Cpu size={22} />}
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.32em] text-muted">{stage.id}</div>
          <h3 className="mt-2 text-2xl font-semibold text-foreground">{stage.title}</h3>
          <p className="mt-3 max-w-xl text-sm leading-7 text-muted">{stage.body}</p>
          <p className="mt-4 text-xs uppercase tracking-[0.24em] text-accent/80">{stage.accent}</p>
        </div>
      </div>
    </motion.article>
  );
}

export default function CreativeProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: reduceMotion ? 90 : 120,
    damping: 24,
    mass: 0.3,
  });

  const deviceY = useTransform(smooth, [0, 1], [0, reduceMotion ? -30 : -140]);
  const deviceRotate = useTransform(smooth, [0, 0.5, 1], [0, 10, -4]);
  const shellScale = useTransform(smooth, [0, 1], [1, 1.08]);
  const beamOpacity = useTransform(smooth, [0, 0.35, 0.8, 1], [0.25, 0.8, 0.5, 0.2]);

  return (
    <section
      id="process"
      ref={sectionRef}
      data-tone="process"
      className="section-shell cinematic-section relative min-h-[220vh] overflow-hidden"
    >
      <div className="section-noise" />
      <div className="section-grid" />
      <div className="section-beam" />
      <div className="section-rings" />
      <div className="ambient-orb ambient-orb--violet left-[4%] top-[10%] h-64 w-64" />
      <div className="ambient-orb ambient-orb--mint right-[2%] top-[32%] h-72 w-72" />

      <div className="sticky top-0 flex min-h-screen items-center py-24">
        <div className="container-custom grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Creative Process"
              title="A scroll-driven story about how Yunus builds atmosphere, clarity, and obsession into the product."
              description="This is not a checklist. It is a sequence: signal, world, system. The visuals evolve as the scroll advances so the process feels experienced, not explained."
              align="left"
            />

            <div className="mt-10 space-y-5">
              {stages.map((stage, index) => (
                <StageCard
                  key={stage.id}
                  index={index}
                  progress={smooth}
                  stage={stage}
                />
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <motion.div
              style={{ y: deviceY, rotateZ: deviceRotate, scale: shellScale }}
              className="relative mx-auto h-[620px] w-full max-w-[560px] [perspective:1400px]"
            >
              <motion.div
                style={{ opacity: beamOpacity }}
                className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-accent/20"
              />
              <motion.div
                animate={reduceMotion ? undefined : { rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                className="absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
              >
                <div className="absolute left-1/2 top-0 h-20 w-px -translate-x-1/2 bg-gradient-to-b from-accent via-white/60 to-transparent" />
              </motion.div>

              <motion.div
                animate={reduceMotion ? undefined : { y: [0, -14, 0], rotateY: [0, 8, 0, -8, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                className="surface-card-strong glass-highlight absolute left-1/2 top-1/2 h-[58%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-[42px] border border-white/10 p-6 [transform-style:preserve-3d]"
              >
                <div className="absolute inset-x-[10%] top-[12%] h-12 rounded-full bg-gradient-to-r from-transparent via-white/80 to-transparent blur-md" />
                <div className="absolute inset-x-[16%] top-[26%] h-24 rounded-[24px] bg-[linear-gradient(135deg,rgba(141,247,211,0.18),rgba(124,114,255,0.16))]" />
                <div className="absolute inset-x-[18%] top-[48%] h-3 rounded-full bg-white/12" />
                <div className="absolute inset-x-[18%] top-[56%] h-3 rounded-full bg-white/10" />
                <div className="absolute inset-x-[18%] top-[64%] h-3 rounded-full bg-white/8" />
                <div className="absolute bottom-[14%] left-[18%] flex items-center gap-3">
                  <span className="signal-dot h-2.5 w-2.5 rounded-full bg-accent" />
                  <span className="text-xs uppercase tracking-[0.35em] text-muted">Yunus Engine</span>
                </div>
              </motion.div>

              <motion.div
                animate={reduceMotion ? undefined : { x: [0, 14, 0], y: [0, -8, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="story-frame absolute right-0 top-[8%] w-44 rounded-[28px] p-4"
              >
                <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-muted">
                  <Orbit size={14} className="text-accent" />
                  Depth Logic
                </div>
                <p className="text-sm leading-6 text-foreground/80">
                  Scroll changes perspective, energy, and narrative focus in one continuous scene.
                </p>
              </motion.div>

              <motion.div
                animate={reduceMotion ? undefined : { x: [0, -12, 0], y: [0, 10, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
                className="story-frame absolute bottom-[10%] left-0 w-48 rounded-[28px] p-4"
              >
                <div className="mb-3 h-px w-16 bg-gradient-to-r from-accent to-transparent" />
                <p className="text-xs uppercase tracking-[0.26em] text-muted">Scroll Storytelling</p>
                <p className="mt-3 text-sm leading-6 text-foreground/80">
                  Premium motion should guide emotion before it announces information.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
