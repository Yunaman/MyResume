'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface SectionTransitionProps {
  children: React.ReactNode;
  initial?: boolean;
  animateIn?: boolean;
  animateOut?: boolean;
  className?: string;
}

export default function SectionTransition({
  children,
  initial = true,
  animateIn = true,
  animateOut = true,
  className = '',
}: SectionTransitionProps) {
  const [isVisible, setIsVisible] = useState(initial);

  useEffect(() => {
    if (animateIn) {
      setIsVisible(true);
    }
  }, [animateIn]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className={className}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}