'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function DynamicAtmosphere() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const smooth = useSpring(scrollYProgress, {
    stiffness: reduceMotion ? 80 : 120,
    damping: reduceMotion ? 26 : 24,
    mass: 0.35,
  });

  const opacityA = useTransform(smooth, [0, 0.22, 0.45], [0.85, 0.45, 0.2]);
  const opacityB = useTransform(smooth, [0.18, 0.5, 0.78], [0.1, 0.75, 0.28]);
  const opacityC = useTransform(smooth, [0.55, 0.82, 1], [0.08, 0.62, 0.9]);
  const yA = useTransform(smooth, [0, 1], [0, 140]);
  const yB = useTransform(smooth, [0, 1], [0, -120]);
  const scale = useTransform(smooth, [0, 1], [1, 1.18]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[2] overflow-hidden" aria-hidden="true">
      <motion.div
        style={{ opacity: opacityA, y: yA, scale }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(141,247,211,0.16),transparent_28%),radial-gradient(circle_at_82%_14%,rgba(124,114,255,0.14),transparent_24%)]"
      />
      <motion.div
        style={{ opacity: opacityB, y: yB }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(255,173,102,0.12),transparent_26%),radial-gradient(circle_at_74%_68%,rgba(141,247,211,0.12),transparent_20%)]"
      />
      <motion.div
        style={{ opacity: opacityC }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_22%_72%,rgba(124,114,255,0.16),transparent_22%),radial-gradient(circle_at_50%_92%,rgba(141,247,211,0.1),transparent_18%)]"
      />
    </div>
  );
}
