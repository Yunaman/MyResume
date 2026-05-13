'use client';

import { useEffect, useRef } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  velocityX: number;
  velocityY: number;
  opacity: number;
}

interface ParticleSystemProps {
  particleCount?: number;
  maxSize?: number;
  particleSpeed?: number;
  connectionRadius?: number;
  className?: string;
}

export default function ParticleSystem({
  particleCount = 50,
  maxSize = 3,
  particleSpeed = 0.5,
  connectionRadius = 100,
  className = '',
}: ParticleSystemProps) {
  const preferReducedMotion = useReducedMotion();
  const actualParticleCount = preferReducedMotion ? 15 : particleCount;
  const actualMaxSize = preferReducedMotion ? 2 : maxSize;
  const actualParticleSpeed = preferReducedMotion ? 0.2 : particleSpeed;
  const actualConnectionRadius = preferReducedMotion ? 50 : connectionRadius;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    if (!context) {
      return;
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const particles: Particle[] = Array.from({ length: actualParticleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * actualMaxSize,
      color: `rgba(141, 247, 211, ${Math.random() * 0.26 + 0.08})`,
      velocityX: (Math.random() - 0.5) * actualParticleSpeed,
      velocityY: (Math.random() - 0.5) * actualParticleSpeed,
      opacity: Math.random() * 0.45 + 0.16,
    }));

    let rafId = 0;

    const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i += 1) {
        const particle = particles[i];
        particle.x += particle.velocityX;
        particle.y += particle.velocityY;

        if (particle.x < 0 || particle.x > canvas.width) {
          particle.velocityX *= -1;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.velocityY *= -1;
        }

        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = particle.color;
        context.globalAlpha = particle.opacity;
        context.fill();
        context.closePath();

        for (let j = i + 1; j < particles.length; j += 1) {
          const otherParticle = particles[j];
          const distance = Math.hypot(
            otherParticle.x - particle.x,
            otherParticle.y - particle.y
          );

          if (distance < actualConnectionRadius) {
            context.beginPath();
            context.strokeStyle = `rgba(141, 247, 211, ${0.16 * (1 - distance / actualConnectionRadius)})`;
            context.lineWidth = 0.5;
            context.moveTo(particle.x, particle.y);
            context.lineTo(otherParticle.x, otherParticle.y);
            context.stroke();
            context.closePath();
          }
        }
      }

      rafId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(rafId);
    };
  }, [
    actualConnectionRadius,
    actualMaxSize,
    actualParticleCount,
    actualParticleSpeed,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none fixed inset-0 z-[5] ${className}`}
      aria-hidden="true"
    />
  );
}
