'use client';

import { useEffect, useRef } from 'react';
import { motion, useTransform, useSpring } from 'framer-motion';

interface FloatingUIElementsProps {
  count?: number;
  sizeRange?: [number, number];
  durationRange?: [number, number];
  delayRange?: [number, number];
  className?: string;
}

export default function FloatingUIElements({
  count = 10,
  sizeRange = [20, 80],
  durationRange = [10, 20],
  delayRange = [0, 5],
  className = '',
}: FloatingUIElementsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createFloatingElement = (index: number) => {
      const element = document.createElement('div');
      const size =
        sizeRange[0] +
        Math.random() * (sizeRange[1] - sizeRange[0]);
      const duration =
        durationRange[0] +
        Math.random() * (durationRange[1] - durationRange[0]);
      const delay =
        delayRange[0] +
        Math.random() * (delayRange[1] - delayRange[0]);

      element.className = 'floating-element';
      element.style.width = `${size}px`;
      element.style.height = `${size}px`;
      element.style.borderRadius = '50%';
      element.style.background = `radial-gradient(circle at 30% 30%, var(--accent)/20, transparent)`;
      element.style.position = 'absolute';
      element.style.pointerEvents = 'none';
      element.style.opacity = '0';
      element.style.filter = 'blur(2px)';

      // Random initial position
      element.style.left = `${Math.random() * 100}%`;
      element.style.top = `${Math.random() * 100}%`;

      // Animation
      element.animate(
        [
          { transform: 'translate(0, 0) scale(0)', offset: 0 },
          { transform: 'translate(0, 0) scale(1)', offset: 0.1 },
          {
            transform: `translate(${Math.random() * 200 - 100}px, ${Math.random() *
              200 -
              100}px) scale(1)`,
            offset: 0.5,
          },
          { transform: 'translate(0, 0) scale(0.8)', offset: 0.9 },
          { transform: 'translate(0, 0) scale(0)', offset: 1 },
        ],
        {
          duration: duration * 1000,
          delay: delay * 1000,
          iterations: Infinity,
          easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        }
      );

      container.appendChild(element);
    };

    // Create floating elements
    for (let i = 0; i < count; i++) {
      createFloatingElement(i);
    }

    return () => {
      container.innerHTML = '';
    };
  }, [count, sizeRange, durationRange, delayRange]);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none fixed inset-0 z-[9997] ${className}`}
    />
  );
}