'use client';

import { motion } from 'framer-motion';
import { Aperture, Boxes, Eye, Telescope } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

const labCards = [
  {
    icon: Aperture,
    title: 'Vision / Philosophy',
    text: 'I want products to feel like they were directed, not assembled. Motion should reveal intention, not just feature lists.',
  },
  {
    icon: Boxes,
    title: 'Experimental Lab',
    text: 'I prototype interactions that push a product toward memorability without compromising performance or clarity.',
  },
  {
    icon: Eye,
    title: 'Motion Gallery',
    text: 'Transitions, depth, and pacing are treated like a visual soundtrack running beneath the interface.',
  },
  {
    icon: Telescope,
    title: 'Behind The Build',
    text: 'The final feeling comes from constraint: tuning render cost, timing curves, responsive behavior, and interaction hierarchy together.',
  },
];

export default function ExperimentalLab() {
  return (
    <section id="lab" className="section-shell section-padding relative overflow-hidden">
      <div className="ambient-orb ambient-orb--violet right-[6%] top-[10%] h-60 w-60" />
      <div className="container-custom">
        <SectionHeading
          eyebrow="Experience Lab"
          title="A philosophy section disguised as an immersive lab."
          description="This is where the portfolio stops behaving like a resume and starts behaving like a living creative system. The goal is not noise. The goal is wonder with control."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <Reveal className="story-frame rounded-[36px] p-7 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.34em] text-muted">Yunus / Addis Ababa / Interactive Systems</p>
                <h3 className="mt-4 max-w-2xl text-[clamp(2rem,4vw,3.4rem)] font-semibold leading-[1] tracking-[-0.05em] text-foreground">
                  Building digital experiences that feel cinematic, tactile, and slightly unreal.
                </h3>
              </div>
              <div className="story-frame rounded-full px-4 py-2 text-xs uppercase tracking-[0.28em] text-accent/85">
                Experimental but deployable
              </div>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {labCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="surface-card glass-highlight rounded-[28px] p-5"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent">
                    <card.icon size={18} />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground">{card.title}</h4>
                  <p className="mt-3 text-sm leading-7 text-muted">{card.text}</p>
                </motion.div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="surface-card-strong glass-highlight rounded-[36px] p-7 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="signal-dot h-2.5 w-2.5 rounded-full bg-accent" />
              <span className="text-xs uppercase tracking-[0.34em] text-muted">Direct Line to Yunus</span>
            </div>

            <div className="space-y-5">
              <div className="story-frame rounded-[28px] p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-muted">Email</p>
                <a href="mailto:yunadreamboy@gmail.com" className="mt-3 block text-lg font-semibold text-foreground hover:text-accent">
                  yunadreamboy@gmail.com
                </a>
              </div>
              <div className="story-frame rounded-[28px] p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-muted">Phone</p>
                <a href="tel:+251974557038" className="mt-3 block text-lg font-semibold text-foreground hover:text-accent">
                  +251 974557038
                </a>
              </div>
              <div className="story-frame rounded-[28px] p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-muted">Current Intent</p>
                <p className="mt-3 text-sm leading-7 text-foreground/78">
                  Collaborating with founders, brands, and teams that want their digital presence
                  to feel unmistakably premium and alive.
                </p>
              </div>
            </div>

            <MagneticButton
              strength={0.18}
              className="btn-primary mt-8 w-full"
              onClick={() =>
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Build Something Cinematic
            </MagneticButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
