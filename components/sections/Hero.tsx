'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown, Sparkles, Star, Zap } from 'lucide-react';
import { useMemo, useRef, useState } from 'react';
import FloatingSocial from '@/components/FloatingSocial';
import HeroWordLoop from '@/components/HeroWordLoop';
import MagneticButton from '@/components/MagneticButton';
import ParticleSystem from '@/components/ParticleSystem';
import Reveal from '@/components/Reveal';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const quickStats = [
  { label: 'Disciplines', value: '04' },
  { label: 'Focus', value: 'UI + Code' },
  { label: 'Based In', value: 'Addis' },
];

const storyPoints = [
  'Full-stack systems with polished interfaces',
  'Brand-aware motion and premium interaction design',
  'Fast, scalable builds prepared for production',
];

const emotionalSignals = [
  'Atmosphere first',
  'Motion with purpose',
  'Precision in every layer',
];

function OrbitalCraft({
  x,
  y,
  reducedMotion,
}: {
  x: number;
  y: number;
  reducedMotion: boolean;
}) {
  return (
    <motion.div
      animate={
        reducedMotion
          ? undefined
          : {
              y: [0, -12, 0],
              rotateZ: [0, 1.5, 0, -1.5, 0],
            }
      }
      transition={{
        duration: 9,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      style={{
        rotateX: reducedMotion ? 0 : y * -0.025,
        rotateY: reducedMotion ? 0 : x * 0.03,
      }}
      className="relative mx-auto aspect-square w-full max-w-[560px] gpu-layer [transform-style:preserve-3d]"
    >
      <div className="absolute inset-[8%] rounded-full border border-accent/20" />
      <div className="absolute inset-[18%] rounded-full border border-white/10" />
      <div className="absolute inset-[28%] rounded-full border border-secondary/20" />
      <div className="absolute inset-x-[4%] bottom-[12%] h-[28%] rounded-[100%] bg-[radial-gradient(circle,rgba(141,247,211,0.14),transparent_72%)] blur-3xl" />

      <motion.div
        animate={reducedMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        className="absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10"
      />
      <div className="orbit-scan absolute left-1/2 top-1/2 h-[74%] w-[74%] -translate-x-1/2 -translate-y-1/2">
        <div className="absolute left-1/2 top-0 h-12 w-px -translate-x-1/2 bg-gradient-to-b from-accent/0 via-accent/80 to-accent/0 blur-[0.5px]" />
      </div>

      <div className="absolute left-1/2 top-1/2 h-[74%] w-[74%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(141,247,211,0.18),transparent_60%)] blur-3xl" />

      <motion.div
        animate={reducedMotion ? undefined : { rotate: [0, 4, 0, -4, 0], y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="surface-card-strong absolute left-1/2 top-1/2 h-[60%] w-[54%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[46px] border border-accent/20 p-5"
      >
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(124,114,255,0.04)_32%,rgba(5,11,17,0.74)_88%)]" />
        <div className="absolute inset-x-[16%] top-[8%] h-[10%] rounded-full bg-gradient-to-r from-transparent via-white/90 to-transparent blur-md" />
        <div className="absolute left-1/2 top-[12%] h-[18%] w-[20%] -translate-x-1/2 rounded-full hero-silhouette" />
        <motion.div
          animate={reducedMotion ? undefined : { rotateZ: [0, -7, 0, 7, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="hero-silhouette absolute left-[27%] top-[30%] h-[28%] w-[20%] origin-top rounded-[40px] [clip-path:polygon(18%_0,100%_16%,78%_100%,0_82%)]"
        />
        <motion.div
          animate={reducedMotion ? undefined : { rotateZ: [0, 12, 0, 18, 0] }}
          transition={{ duration: 7.8, repeat: Infinity, ease: 'easeInOut' }}
          className="hero-silhouette absolute right-[25%] top-[28%] h-[32%] w-[18%] origin-top rounded-[40px] [clip-path:polygon(0_18%,84%_0,100%_82%,22%_100%)]"
        />
        <div className="hero-silhouette absolute left-1/2 top-[24%] h-[48%] w-[34%] -translate-x-1/2 rounded-[42%_42%_28%_28%/22%_22%_18%_18%]" />
        <div className="absolute left-1/2 top-[41%] h-[16%] w-[24%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.18),transparent_72%)] blur-2xl" />
        <div className="absolute bottom-[14%] left-[18%] right-[18%] h-[10%] rounded-full bg-gradient-to-r from-transparent via-accent/90 to-transparent blur-sm" />
        <div className="absolute inset-x-[26%] bottom-[19%] h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      </motion.div>

      <motion.div
        animate={reducedMotion ? undefined : { x: [0, 12, 0], y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="surface-card glass-highlight absolute right-[3%] top-[10%] w-44 rounded-[26px] p-4"
      >
        <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-muted">
          <span>Hover Field</span>
          <Zap size={14} className="text-accent" />
        </div>
        <div className="text-2xl font-semibold text-foreground">Reactive</div>
        <p className="mt-2 text-sm text-muted">
          Cursor-sensitive depth and layered motion built for a cinematic intro.
        </p>
      </motion.div>

      <motion.div
        animate={reducedMotion ? undefined : { x: [0, -8, 0], y: [0, 14, 0] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut' }}
        className="surface-card glass-highlight absolute bottom-[10%] left-[4%] w-52 rounded-[26px] p-4"
      >
        <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted">
          <Star size={14} className="text-highlight" />
          Motion Storytelling
        </div>
        <div className="h-2 rounded-full bg-white/10">
          <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-accent to-secondary" />
        </div>
        <p className="mt-3 text-sm text-muted">
          Ambient glow, layered panels, and premium transitions without heavy 3D cost.
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? -12 : -92]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 20 : 180]);
  const layerY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? -8 : -56]);

  const pointerValues = useMemo(
    () => ({
      x: Math.max(-12, Math.min(12, pointer.x)),
      y: Math.max(-12, Math.min(12, pointer.y)),
    }),
    [pointer.x, pointer.y]
  );

  const handleMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 24;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 24;
    setPointer({ x, y });
  };

  const handleLeave = () => setPointer({ x: 0, y: 0 });

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      data-tone="hero"
      className="section-shell cinematic-section relative flex min-h-screen items-center overflow-hidden pt-28 md:pt-32"
    >
      <div className="section-noise" />
      <div className="section-grid" />
      <div className="section-beam" />
      <div className="section-rings" />
      <ParticleSystem
        particleCount={24}
        maxSize={2}
        particleSpeed={0.18}
        connectionRadius={130}
        className="opacity-80"
      />

      <motion.div
        aria-hidden="true"
        style={{ y: glowY }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,114,255,0.24),transparent_26%),radial-gradient(circle_at_70%_18%,rgba(141,247,211,0.2),transparent_24%),radial-gradient(circle_at_50%_70%,rgba(255,173,102,0.18),transparent_30%)]"
      />
      <motion.div
        aria-hidden="true"
        style={{ y: layerY, x: pointerValues.x * -0.9 }}
        className="ambient-orb ambient-orb--mint left-[-10%] top-[18%] h-72 w-72"
      />
      <motion.div
        aria-hidden="true"
        style={{ y: layerY, x: pointerValues.x * 0.8 }}
        className="ambient-orb ambient-orb--violet right-[-8%] top-[10%] h-80 w-80"
      />
      <motion.div
        aria-hidden="true"
        style={{ y: contentY, x: pointerValues.x * 0.45 }}
        className="absolute inset-x-[8%] top-[22%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-black/35" />

      <div className="container-custom relative z-10 grid items-center gap-14 pb-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)]">
        <motion.div
          style={{ y: contentY }}
          initial={{ opacity: 0, y: 42 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="eyebrow"
          >
            <Sparkles size={14} />
            Futuristic Product Portfolio
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30, filter: 'blur(18px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.95, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="heading-1 mt-7 max-w-[12ch] text-balance"
          >
            Yunus builds <span className="text-gradient">cinematic digital systems</span>.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 text-[clamp(1.05rem,2.4vw,1.7rem)] font-medium leading-relaxed text-foreground/88"
          >
            <span className="mb-3 block text-sm uppercase tracking-[0.45em] text-muted">
              I shape experiences as a
            </span>
            <HeroWordLoop
              phrases={[
                'full-stack web developer',
                'freelancer and product designer',
                'digital marketer',
                'video editor',
                'creative problem solver',
                'ui and ux designer',
                'motion graphics artist',
              ]}
              preferReducedMotion={reduceMotion}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="body-large text-muted mt-8 max-w-2xl text-balance"
          >
            From Addis Ababa, I craft high-end interfaces and robust product foundations
            where strategy, motion, and engineering all move in the same direction.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.62, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <MagneticButton
              strength={0.18}
              className="btn-primary min-w-[210px] shadow-[0_22px_42px_rgba(57,214,197,0.26)]"
              onClick={() =>
                document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Explore Projects
              <ArrowRight size={16} />
            </MagneticButton>
            <MagneticButton
              strength={0.14}
              className="btn-outline min-w-[210px]"
              onClick={() =>
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Start a Conversation
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.74, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 grid gap-4 md:grid-cols-[1.2fr_0.8fr]"
          >
            <div className="surface-card-strong glass-highlight p-5">
              <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Creative System Signal
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {quickStats.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                    <div className="text-xl font-semibold text-foreground">{item.value}</div>
                    <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="surface-card glass-highlight p-5">
              <div className="mb-4 text-xs uppercase tracking-[0.3em] text-muted">
                Experience Stack
              </div>
              <ul className="grid gap-3 text-sm text-foreground/80">
                {storyPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.84, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5"
          >
            <div className="story-frame rounded-[28px] px-5 py-4 md:px-6">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-3">
                  <span className="signal-dot h-2.5 w-2.5 rounded-full bg-accent" />
                  <span className="text-[0.7rem] uppercase tracking-[0.34em] text-muted">
                    Live Creative Direction
                  </span>
                </div>
                <div className="flex flex-wrap gap-3 text-sm text-foreground/78">
                  {emotionalSignals.map((signal) => (
                    <span
                      key={signal}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5"
                    >
                      {signal}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <Reveal delay={0.25} variant="flip" className="relative">
          <OrbitalCraft
            x={pointerValues.x}
            y={pointerValues.y}
            reducedMotion={reduceMotion}
          />
        </Reveal>
      </div>

      <motion.button
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() =>
          document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
        }
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-muted transition-colors hover:text-accent"
        aria-label="Scroll to about section"
      >
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-xs uppercase tracking-[0.35em]"
        >
          Scroll
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>

      <FloatingSocial instagramUrl="https://www.instagram.com/yunaon_ice/" />
    </section>
  );
}
