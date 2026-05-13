'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc',
    content:
      'Yunus delivered an exceptional website that exceeded our expectations. His attention to detail and ability to translate our vision into reality was remarkable.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder, Digital Ventures',
    content:
      'Working with Yunus was a pleasure. His technical expertise combined with creative problem-solving resulted in a platform that not only looks stunning but performs flawlessly.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emma Williams',
    role: 'Marketing Director, Brand Co',
    content:
      'Yunus brought our brand to life through a comprehensive campaign. He understood the identity immediately and translated it into visuals that actually moved the numbers.',
    rating: 5,
  },
  {
    id: 4,
    name: 'David Martinez',
    role: 'Product Manager, InnovateLab',
    content:
      'The dashboard Yunus built transformed how we manage operations. Strong engineering, thoughtful UX, and a delivery process that felt highly reliable.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5200);

    return () => window.clearInterval(interval);
  }, []);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section id="testimonials" data-tone="testimonials" className="section-shell cinematic-section section-padding relative overflow-hidden">
      <div className="section-noise" />
      <div className="section-grid" />
      <div className="section-beam" />
      <div className="ambient-orb ambient-orb--violet left-[8%] top-[18%] h-60 w-60" />
      <div className="container-custom">
        <SectionHeading
          eyebrow="Client Testimonials"
          title="Trust built through clarity, execution, and work that feels elevated."
          description="The content here stays intact, but the experience now treats social proof like a featured story instead of a generic slider."
        />

        <div className="mt-14 grid gap-6 xl:grid-cols-[0.72fr_1.28fr]">
          <Reveal className="grid gap-4">
            {testimonials.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`surface-card premium-hover glass-highlight p-5 text-left transition-colors ${
                    isActive ? 'border-accent/40 bg-white/[0.05] shadow-[0_18px_45px_rgba(57,214,197,0.12)]' : ''
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-lg font-semibold text-foreground">{item.name}</div>
                      <div className="mt-1 text-sm text-muted">{item.role}</div>
                    </div>
                    <div className="flex items-center gap-1 text-accent">
                      {Array.from({ length: item.rating }).map((_, starIndex) => (
                        <Star key={starIndex} size={14} className="fill-current" />
                      ))}
                    </div>
                  </div>
                </button>
              );
            })}
          </Reveal>

          <Reveal delay={0.1} interactive variant="rotate" className="surface-card-strong glass-highlight relative overflow-hidden p-8 md:p-10">
            <div className="absolute right-8 top-8 hidden h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(141,247,211,0.22),transparent_70%)] blur-2xl md:block" />
            <Quote size={52} className="text-accent/70" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="mt-8"
              >
                <p className="max-w-3xl text-2xl font-medium leading-relaxed text-foreground/92 md:text-[2rem]">
                  &ldquo;{activeTestimonial.content}&rdquo;
                </p>

                <div className="mt-8 flex items-center justify-between gap-6 border-t border-white/10 pt-6">
                  <div>
                    <div className="text-lg font-semibold text-foreground">
                      {activeTestimonial.name}
                    </div>
                    <div className="mt-1 text-sm text-muted">{activeTestimonial.role}</div>
                  </div>
                  <div className="flex items-center gap-2 text-accent">
                    {Array.from({ length: activeTestimonial.rating }).map((_, starIndex) => (
                      <Star key={starIndex} size={16} className="fill-current" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
