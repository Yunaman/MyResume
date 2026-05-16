'use client';

import { motion, useMotionValue, useSpring, type HTMLMotionProps } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

type RevealProps = HTMLMotionProps<'div'> & {
  delay?: number;
  blur?: number;
  distance?: number;
  once?: boolean;
  amount?: number;
  interactive?: boolean;
  interactiveStrength?: number;
  variant?: 'up' | 'rotate' | 'flip';
  active?: boolean;
};

export default function Reveal({
  children,
  delay = 0,
  blur = 14,
  distance = 28,
  once = true,
  amount = 0.24,
  interactive = false,
  interactiveStrength = 1,
  active = false,
  className,
  onMouseMove,
  onMouseLeave,
  ...props
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const x = useMotionValue(0);
  const scale = useMotionValue(1);
  const smoothRotateX = useSpring(rotateX, { stiffness: 180, damping: 18, mass: 0.4 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 180, damping: 18, mass: 0.4 });
  const smoothX = useSpring(x, { stiffness: 180, damping: 20, mass: 0.45 });
  const smoothScale = useSpring(scale, { stiffness: 180, damping: 20, mass: 0.45 });

  const initialState = {
    opacity: 0,
    y: reduceMotion ? 0 : distance,
    filter: reduceMotion || !blur ? 'blur(0px)' : `blur(${blur}px)`
  };

  const visibleState = {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)'
  };

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || reduceMotion) {
      onMouseMove?.(event);
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const pointerX = event.clientX - rect.left;
    const pointerY = event.clientY - rect.top;
    const percentX = pointerX / rect.width - 0.5;
    const percentY = pointerY / rect.height - 0.5;

    event.currentTarget.style.setProperty('--mx', `${pointerX}px`);
    event.currentTarget.style.setProperty('--my', `${pointerY}px`);

    rotateX.set(percentY * -8 * interactiveStrength);
    rotateY.set(percentX * 10 * interactiveStrength);
    x.set(percentX * 6 * interactiveStrength);
    scale.set(1.01 + Math.abs(percentX * percentY) * 0.04);
    onMouseMove?.(event);
  };

  const handleLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    rotateX.set(0);
    rotateY.set(0);
    x.set(0);
    scale.set(1);
    onMouseLeave?.(event);
  };

  return (
    <motion.div
      initial={initialState}
      whileInView={visibleState}
      viewport={{ once, amount }}
      transition={{
        duration: reduceMotion ? 0.35 : 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={
        interactive && !reduceMotion
          ? {
              x: smoothX,
              scale: smoothScale,
              rotateX: smoothRotateX,
              rotateY: smoothRotateY,
              transformPerspective: 1400,
            }
          : undefined
      }
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      data-active={active}
      className={`${interactive ? 'premium-hover gpu-layer' : ''} ${className ?? ''}`.trim()}
      {...props}
    >
      {children}
    </motion.div>
  );
}
