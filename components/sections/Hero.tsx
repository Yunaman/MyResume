'use client';

import { motion, useScroll } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useMemo, useRef, useState } from 'react';
import FloatingSocial from '@/components/FloatingSocial';
import MagneticButton from '@/components/MagneticButton';
import ParticleSystem from '@/components/ParticleSystem';
import { useReducedMotion } from '@/hooks/useReducedMotion';

function VisualCore({
  x,
  y,
  reducedMotion,
}: {
  x: number;
  y: number;
  reducedMotion: boolean;
}) {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute h-[500px] w-[500px] rounded-full bg-accent/5 blur-[120px]" />
      <motion.div
        animate={
          reducedMotion
            ? {}
            : {
                rotate: 360,
              }
        }
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          rotateX: reducedMotion ? 0 : y * -0.1,
          rotateY: reducedMotion ? 0 : x * 0.1,
        }}
        className="relative flex h-[420px] w-[420px] items-center justify-center rounded-full border border-white/5"
      >
        <div className="absolute inset-8 rounded-full border border-white/5" />
        <div className="absolute inset-24 rounded-full border border-white/5" />
        <div className="h-32 w-32 rounded-full bg-gradient-to-tr from-accent/20 to-secondary/20 blur-2xl" />

        <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-accent" />
        <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-secondary/40" />
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });


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
      className="section-shell relative flex min-h-screen items-center overflow-hidden pt-32"
    >
      <div className="absolute inset-0 z-0">
        <div className="section-noise opacity-20" />
        <ParticleSystem
          particleCount={15}
          maxSize={1.5}
          particleSpeed={0.12}
          connectionRadius={0}
          className="opacity-40"
        />
      </div>

      <div className="container-custom relative z-10 grid items-center gap-20 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-8 bg-accent/50" />
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.5em] text-accent">
              Interactive Systems
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="heading-1 mt-8 max-w-[10ch]"
          >
            Building <span className="text-gradient">digital craft</span> with intent.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="body-large mt-10 max-w-xl"
          >
            I architect high-performance interfaces and cinematic experiences where
            design meets engineering precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 flex flex-wrap gap-5"
          >
            <MagneticButton
              strength={0.1}
              className="btn-primary px-8"
              onClick={() =>
                document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              View Work
            </MagneticButton>
            <MagneticButton
              strength={0.1}
              className="btn-outline px-8"
              onClick={() =>
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Contact
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden lg:block"
        >
          <VisualCore
            x={pointerValues.x}
            y={pointerValues.y}
            reducedMotion={reduceMotion}
          />
        </motion.div>
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
