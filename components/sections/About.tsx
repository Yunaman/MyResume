'use client';

import Image from 'next/image';
import { ArrowUpRight, Award, Code2, Palette, Sparkles, Video } from 'lucide-react';
import aboutMeImage from '@/assets/img/aboutme.png';
import MagneticButton from '@/components/MagneticButton';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

const capabilities = [
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description: 'Modern product builds with React, Next.js, APIs, and performance-aware architecture.',
  },
  {
    icon: Palette,
    title: 'Interface Direction',
    description: 'Design systems, premium UI treatment, and conversion-minded user journeys.',
  },
  {
    icon: Video,
    title: 'Motion & Video',
    description: 'Cinematic editing, storytelling, and dynamic visuals that strengthen the brand.',
  },
  {
    icon: Award,
    title: 'Digital Strategy',
    description: 'Marketing context and business framing that keep creative work outcome-focused.',
  },
];

const focusAreas = [
  'Clean component architecture',
  'Accessible high-end interfaces',
  'Scalable front-end systems',
  'Design-led product execution',
];

export default function About() {
  return (
    <section id="about" data-tone="about" className="section-shell section-padding relative overflow-hidden">
      <div className="section-noise opacity-10" />
      <div className="ambient-orb ambient-orb--violet right-[8%] top-[18%] h-56 w-56" />
      <div className="container-custom">
        <div className="grid gap-16 xl:grid-cols-[0.92fr_1.08fr]">
          <Reveal className="overflow-hidden p-0">
            <div className="relative overflow-hidden rounded-[24px] border border-white/5">
              <Image
                src={aboutMeImage}
                alt="Portrait of Yunus"
                className="aspect-[0.84] w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
                priority
              />
            </div>
          </Reveal>

          <div className="grid gap-8">
            <SectionHeading
              eyebrow="About Me"
              title="I turn ideas into premium digital experiences with engineering discipline."
              description="I'm a multidisciplinary digital creator based in Addis Ababa, Ethiopia, combining development, UI/UX direction, video craft, and digital strategy to build work that feels elevated and ships cleanly."
              align="left"
            />

            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <Reveal className="p-0">
                <p className="body-large">
                  My work sits at the intersection of visual refinement and technical reliability.
                  I focus on fast interfaces, clean systems, and storytelling that makes the
                  experience memorable.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  {focusAreas.map((item) => (
                    <span
                      key={item}
                      className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-muted/60"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.08} className="p-0">
                <h3 className="text-xl font-medium tracking-tight">
                  Full-stack developer focused on fast, accessible web experiences.
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  I build clean UI, scalable architecture, and reliable APIs while keeping the
                  final experience expressive and human.
                </p>
                <button
                  className="mt-8 flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.4em] text-accent transition-colors hover:text-white"
                  onClick={() =>
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  Collaborate
                  <ArrowUpRight size={14} />
                </button>
              </Reveal>
            </div>

            <div className="grid gap-12 md:grid-cols-2">
              {capabilities.map((item, index) => (
                <Reveal
                  key={item.title}
                  delay={index * 0.08}
                  className="p-0"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 text-accent/80">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
