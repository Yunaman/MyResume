'use client';

import Image from 'next/image';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import MagneticButton from '@/components/MagneticButton';
import { BrandGitHub } from '@/components/BrandIcons';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

import portfolio1 from '@/assets/img/portfolio/portfolio-1.jpg';
import portfolio4 from '@/assets/img/portfolio/portfolio-4.jpg';
import portfolio5 from '@/assets/img/portfolio/portfolio-5.jpg';
import portfolio9 from '@/assets/img/portfolio/portfolio-9.jpg';
import portfolioDetails1 from '@/assets/img/portfolio/portfolio-details-1.jpg';
import portfolioDetails2 from '@/assets/img/portfolio/portfolio-details-2.jpg';

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Apple Clone',
    category: 'Web Development',
    description:
      'A clean Apple-style landing page clone focused on layout precision, responsive UI, and smooth interactions.',
    image: portfolio1.src,
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://apple-clone-flame.vercel.app/',
  },
  {
    id: 2,
    title: 'Cake Store',
    category: 'Web Development',
    description:
      'An e-commerce cake store experience with a modern storefront, product-focused UI, and clean responsive design.',
    image: portfolioDetails2.src,
    tags: ['React', 'UI'],
    liveUrl: 'https://cake-store-ten.vercel.app',
  },
  {
    id: 3,
    title: 'Organic Ecommerce',
    category: 'Web Development',
    description:
      'A modern business website concept inspired by contemporary ecommerce design patterns with polished layout and sections.',
    image: portfolio4.src,
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://yuna-organic.vercel.app',
  },
  {
    id: 4,
    title: 'Yuna Videograph',
    category: 'Video Production',
    description:
      'A video production portfolio built to showcase reels, services, and a strong visual brand presence.',
    image: portfolioDetails1.src,
    tags: ['Portfolio', 'Branding', 'Motion'],
    liveUrl: 'https://yuna-videograph.vercel.app/',
  },
  {
    id: 5,
    title: 'Feane Cafe',
    category: 'Web Development',
    description:
      'A cafe website concept featuring menu layout, hero sections, and a clean modern restaurant atmosphere.',
    image: portfolio5.src,
    tags: ['HTML', 'CSS', 'UI'],
    liveUrl: 'https://feane-cafe.vercel.app/',
  },
  {
    id: 6,
    title: 'Digital Agreement',
    category: 'Web Development',
    description:
      'A digital agreement experience focused on clarity, flow, and a professional document-first UI.',
    image: portfolio9.src,
    tags: ['UI', 'UX', 'Web'],
    liveUrl: 'https://termagreement.vercel.app/',
  },
];

const categories = ['All', 'Web Development', 'Video Production'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="portfolio" data-tone="portfolio" className="section-shell cinematic-section section-padding relative overflow-hidden">
      <div className="section-noise" />
      <div className="section-grid" />
      <div className="section-beam" />
      <div className="section-rings" />
      <div className="ambient-orb ambient-orb--amber right-[4%] top-[12%] h-56 w-56" />
      <div className="container-custom">
        <SectionHeading
          eyebrow="Selected Works"
          title="Projects designed to feel polished, useful, and unmistakably intentional."
          description="I preserved the existing project content and upgraded the presentation around it: stronger hierarchy, richer cards, cleaner categorization, and a premium interaction model."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => {
            const isActive = category === activeCategory;

            return (
              <MagneticButton
                key={category}
                strength={0.14}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] transition-colors ${
                  isActive
                    ? 'bg-accent text-slate-950'
                    : 'surface-panel text-foreground/80 hover:text-accent'
                }`}
              >
                {category}
              </MagneticButton>
            );
          })}
        </div>

        <Reveal delay={0.08} className="mt-6 flex items-center justify-center">
          <div className="story-frame rounded-full px-4 py-2.5">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-muted">
              <span className="signal-dot h-2 w-2 rounded-full bg-accent" />
              <span>Visible Projects</span>
              <span className="text-foreground">
                {String(filteredProjects.length).padStart(2, '0')}
              </span>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <Reveal
              key={project.id}
              delay={index * 0.06}
              interactive
              variant="flip"
              className="group surface-card-strong glass-highlight overflow-hidden transition-transform duration-500 hover:-translate-y-1.5"
            >
              <div className="relative aspect-[1.1] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  priority={index < 3}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,11,17,0.04),rgba(5,11,17,0.78))]" />
                <div className="absolute left-5 right-5 top-5 flex items-start justify-between gap-4">
                  <span className="eyebrow !px-3 !py-1.5 !text-[0.64rem]">{project.category}</span>
                  <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs font-semibold text-white/80">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="glass-effect-dark rounded-[24px] p-5">
                    <div className="mb-3 h-px w-14 bg-gradient-to-r from-accent/90 to-transparent transition-all duration-500 group-hover:w-24" />
                    <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/68">{project.description}</p>
                  </div>
                </div>
              </div>

              <div className="p-5 md:p-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[0.7rem] uppercase tracking-[0.18em] text-foreground/72"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 text-sm text-muted">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 transition-colors hover:text-accent"
                      >
                        <ExternalLink size={16} />
                        Live
                      </a>
                    ) : null}
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 transition-colors hover:text-accent"
                      >
                        <BrandGitHub size={16} />
                        Code
                      </a>
                    ) : null}
                  </div>

                  <MagneticButton
                    strength={0.14}
                    className="btn-outline px-4 py-2.5 text-[0.68rem]"
                    onClick={() => {
                      const url = project.liveUrl || project.githubUrl;
                      if (url) {
                        window.open(url, '_blank', 'noopener,noreferrer');
                      }
                    }}
                  >
                    Open
                    <ArrowUpRight size={14} />
                  </MagneticButton>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
