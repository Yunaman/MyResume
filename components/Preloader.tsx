'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('is-loading');
    const timeout = window.setTimeout(() => {
      root.classList.remove('is-loading');
      setIsLoading(false);
    }, reduceMotion ? 1100 : 2200);

    return () => {
      root.classList.remove('is-loading');
      window.clearTimeout(timeout);
    };
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.aside
          key="preloader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] overflow-hidden bg-canvas"
          aria-live="assertive"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(124,114,255,0.18),transparent_24%),radial-gradient(circle_at_78%_18%,rgba(141,247,211,0.18),transparent_26%),radial-gradient(circle_at_50%_82%,rgba(255,173,102,0.14),transparent_24%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_24%,rgba(255,255,255,0.02))]" />

          <div className="relative z-10 flex w-full max-w-3xl flex-col items-center px-6 text-center">
            <motion.div
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.92, y: 24 }}
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <motion.div
                animate={reduceMotion ? undefined : { rotate: 360 }}
                transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
              />
              <motion.div
                animate={reduceMotion ? undefined : { rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-accent/20"
              />
              <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-3xl" />
              <div className="surface-card-strong relative flex h-28 w-28 items-center justify-center rounded-[30px] border border-accent/20 bg-white/[0.03]">
                <motion.span
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="font-serif text-2xl font-semibold tracking-[0.35em] text-foreground"
                >
                  YS
                </motion.span>
              </div>
            </motion.div>

            <div className="mt-14 space-y-5">
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="text-xs uppercase tracking-[0.5em] text-accent/80"
              >
                Portfolio Experience
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 24, filter: 'blur(14px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ delay: 0.36, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.06em]"
              >
                Composing a refined digital atmosphere
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="mx-auto max-w-xl text-sm uppercase tracking-[0.28em] text-muted"
              >
                Motion, layout, depth, and detail synchronizing before first scroll
              </motion.p>
            </div>

            <div className="mt-12 w-full max-w-xl">
              <div className="h-px w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ scaleX: 0, transformOrigin: 'left' }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: reduceMotion ? 0.9 : 1.9, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full bg-gradient-to-r from-transparent via-accent to-secondary"
                />
              </div>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
