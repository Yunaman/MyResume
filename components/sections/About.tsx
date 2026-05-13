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
    <section id="about" data-tone="about" className="section-shell cinematic-section section-padding relative overflow-hidden">
      <div className="section-noise" />
      <div className="section-grid" />
      <div className="section-beam" />
      <div className="ambient-orb ambient-orb--violet right-[8%] top-[18%] h-56 w-56" />
      <div className="container-custom">
        <div className="grid gap-8 xl:grid-cols-[0.92fr_1.08fr]">
          <Reveal interactive variant="flip" className="section-grid surface-card-strong glass-highlight overflow-hidden p-5 md:p-7">
            <div className="relative overflow-hidden rounded-[28px]">
              <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,transparent_45%,rgba(5,11,17,0.86)_100%)]" />
              <Image
                src={aboutMeImage}
                alt="Portrait of Yunus"
                className="aspect-[0.84] w-full object-cover"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 z-20 p-5 md:p-7">
                <div className="surface-panel rounded-[26px] p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.32em] text-muted">Craft Approach</p>
                      <h3 className="mt-2 text-2xl font-semibold text-foreground">
                        Strategy, story, and execution in one workflow.
                      </h3>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-slate-950">
                      <Sparkles size={18} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-8">
            <SectionHeading
              eyebrow="About Me"
              title="I turn ideas into premium digital experiences with engineering discipline."
              description="I'm a multidisciplinary digital creator based in Addis Ababa, Ethiopia, combining development, UI/UX direction, video craft, and digital strategy to build work that feels elevated and ships cleanly."
              align="left"
            />

            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <Reveal interactive className="surface-card glass-highlight p-7">
                <p className="text-sm leading-8 text-muted">
                  My work sits at the intersection of visual refinement and technical reliability.
                  I care about the feel of a product as much as the code that powers it, which
                  means I focus on fast interfaces, clean systems, and storytelling that makes the
                  experience memorable.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {focusAreas.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.18em] text-foreground/72"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.08} interactive className="surface-card glass-highlight p-7">
                <p className="text-xs uppercase tracking-[0.35em] text-muted">Resume Summary</p>
                <h3 className="heading-3 mt-4 text-[2rem]">
                  Full-stack developer focused on fast, accessible web experiences.
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted">
                  I build clean UI, scalable architecture, and reliable APIs while keeping the
                  final experience expressive and human.
                </p>
                <MagneticButton
                  strength={0.16}
                  className="btn-outline mt-6 w-full justify-between"
                  onClick={() =>
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  Let&apos;s Collaborate
                  <ArrowUpRight size={16} />
                </MagneticButton>
              </Reveal>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {capabilities.map((item, index) => (
                <Reveal
                  key={item.title}
                  delay={index * 0.08}
                  interactive
                  className="surface-card group glass-highlight p-6"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/15 bg-accent/10 text-accent">
                    <item.icon size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground transition-colors group-hover:text-accent">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
