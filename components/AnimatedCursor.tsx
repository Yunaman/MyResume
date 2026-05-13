'use client';

import { useEffect, useState } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface AnimatedCursorProps {
  trailLength?: number;
}

export default function AnimatedCursor({
  trailLength = 3,
}: AnimatedCursorProps) {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState(
    Array.from({ length: trailLength }, () => ({ x: 0, y: 0 }))
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)');
    const updateEnabled = () => setEnabled(mediaQuery.matches && !reduceMotion);

    updateEnabled();
    mediaQuery.addEventListener('change', updateEnabled);

    return () => mediaQuery.removeEventListener('change', updateEnabled);
  }, [reduceMotion]);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    document.documentElement.classList.add('has-custom-cursor');

    const handleMouseMove = (event: MouseEvent) => {
      const nextPoint = { x: event.clientX, y: event.clientY };
      setMousePos(nextPoint);
      setTrail((current) => [nextPoint, ...current].slice(0, trailLength));
    };

    const handlePointerState = (event: Event) => {
      const target = event.target as HTMLElement | null;
      const interactive = target?.closest(
        'a, button, input, textarea, select, [data-cursor="interactive"]'
      );
      setHovered(Boolean(interactive));
    };

    const handleDown = () => setPressed(true);
    const handleUp = () => setPressed(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handlePointerState, { passive: true });
    window.addEventListener('mousedown', handleDown, { passive: true });
    window.addEventListener('mouseup', handleUp, { passive: true });

    return () => {
      document.documentElement.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handlePointerState);
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);
    };
  }, [enabled, trailLength]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <span
        className="pointer-events-none fixed left-0 top-0 z-[95] rounded-full border border-accent/45 bg-white/[0.04] backdrop-blur-md transition-[width,height,margin,opacity,background-color,border-color,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          width: hovered ? 52 : pressed ? 24 : 18,
          height: hovered ? 52 : pressed ? 24 : 18,
          marginLeft: hovered ? -26 : pressed ? -12 : -9,
          marginTop: hovered ? -26 : pressed ? -12 : -9,
          opacity: 0.95,
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0) scale(${pressed ? 0.92 : 1})`,
          borderColor: hovered ? 'rgba(141, 247, 211, 0.65)' : 'rgba(141, 247, 211, 0.38)',
          backgroundColor: hovered ? 'rgba(141, 247, 211, 0.08)' : 'rgba(255,255,255,0.04)',
          boxShadow: hovered
            ? '0 0 0 12px rgba(141,247,211,0.05), 0 18px 45px rgba(57,214,197,0.16)'
            : '0 12px 32px rgba(57,214,197,0.12)',
        }}
      />

      <span
        className="pointer-events-none fixed left-0 top-0 z-[96] h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_20px_rgba(141,247,211,0.8)]"
        style={{
          transform: `translate3d(${mousePos.x - 3}px, ${mousePos.y - 3}px, 0)`,
        }}
      />

      {trail.map((point, index) => {
        const size = Math.max(16 - index * 4, 4);
        const opacity = 0.14 - index * 0.03;

        return (
          <span
            key={index}
            className="pointer-events-none fixed left-0 top-0 z-[94] rounded-full bg-accent/20 blur-[1px]"
            style={{
              width: size,
              height: size,
              opacity,
              transform: `translate3d(${point.x - size / 2}px, ${point.y - size / 2}px, 0)`,
              transition: `transform ${180 + index * 55}ms cubic-bezier(0.22, 1, 0.36, 1), opacity 240ms ease`,
              boxShadow: '0 0 24px rgba(141,247,211,0.18)',
            }}
          />
        );
      })}
    </>
  );
}
