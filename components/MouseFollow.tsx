'use client';

import { useEffect, useRef } from 'react';

interface MouseFollowProps {
  depth?: number;
  speed?: number;
  className?: string;
  children: React.ReactNode;
}

export default function MouseFollow({
  depth = 30,
  speed = 0.1,
  className = '',
  children,
}: MouseFollowProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = (window.innerWidth - e.clientX * depth) * speed;
      const y = (window.innerHeight - e.clientY * depth) * speed;

      element.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [depth, speed]);

  return (
    <div
      ref={ref}
      className={`pointer-events-none fixed inset-0 z-[9998] ${className}`}
    >
      {children}
    </div>
  );
}