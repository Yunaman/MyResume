'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface MagneticButtonProps extends HTMLMotionProps<'button'> {
  strength?: number;
  children: React.ReactNode;
  className?: string;
}

export default function MagneticButton({
  strength = 0.3,
  children,
  className = '',
  disabled = false,
  onMouseMove,
  onMouseLeave,
  type = 'button',
  ...props
}: MagneticButtonProps) {
  const reduceMotion = useReducedMotion();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)');
    const updateEnabled = () => setEnabled(mediaQuery.matches && !reduceMotion);

    updateEnabled();
    mediaQuery.addEventListener('change', updateEnabled);
    return () => mediaQuery.removeEventListener('change', updateEnabled);
  }, [reduceMotion]);

  const handlePointerMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current;
    if (!button || disabled || !enabled) {
      onMouseMove?.(event);
      return;
    }

    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const offsetX = (x - rect.width / 2) * strength;
    const offsetY = (y - rect.height / 2) * strength;
    const rotateY = ((x / rect.width) - 0.5) * 10;
    const rotateX = ((y / rect.height) - 0.5) * -10;

    button.style.setProperty("--mx", `${x}px`);
    button.style.setProperty("--my", `${y}px`);
    button.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    onMouseMove?.(event);
  };

  const resetPointer = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current;
    if (button) {
      button.style.transform = "translate3d(0, 0, 0)";
    }
    onMouseLeave?.(event);
  };

  return (
    <motion.button
      ref={buttonRef}
      type={type}
      className={`magnetic-button premium-hover relative flex items-center justify-center gap-2 overflow-hidden transition-transform duration-300 ${className}`}
      disabled={disabled}
      onMouseMove={handlePointerMove}
      onMouseLeave={resetPointer}
      data-cursor="interactive"
      whileTap={disabled ? undefined : { scale: 0.97 }}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {!disabled && (
        <span
          aria-hidden="true"
          className="button-ripple pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
        />
      )}
    </motion.button>
  );
}
