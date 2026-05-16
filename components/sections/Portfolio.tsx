'use client';

import { motion } from 'framer-motion';
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
    <section id="portfolio" data-tone="portfolio" className="section-shell section-padding relative overflow-hidden">
      <div className="section-noise opacity-10" />
      <div className="ambient-orb ambient-orb--amber right-[4%] top-[12%] h-56 w-56" />
      <div className="container-custom">
        <SectionHeading
          eyebrow="Selected Works"
          title="Digital products with intent."
          description="A collection of projects focused on performance, clarity, and visual precision."
        />

        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {categories.map((category) => {
            const isActive = category === activeCategory;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative text-[0.65rem] font-bold uppercase tracking-[0.3em] transition-colors ${
                  isActive ? 'text-accent' : 'text-muted/60 hover:text-foreground'
                }`}
              >
                {category}
                {isActive && (
                  <motion.span
                    layoutId="portfolio-cat"
                    className="absolute -bottom-2 left-0 h-[1px] w-full bg-accent"
                  />
                )}
              </button>
            );
          })}
        </div>

        <div className="mt-24 grid gap-x-10 gap-y-20 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <Reveal
              key={project.id}
              delay={index * 0.05}
              className="group p-0"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] border border-white/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="absolute bottom-6 right-6 opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  <MagneticButton
                    strength={0.1}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-950"
                    onClick={() => {
                      const url = project.liveUrl || project.githubUrl;
                      if (url) window.open(url, '_blank');
                    }}
                  >
                    <ArrowUpRight size={20} />
                  </MagneticButton>
                </div>
              </div>

              <div className="mt-8 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-medium tracking-tight text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[0.6rem] font-bold uppercase tracking-[0.25em] text-muted/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <span className="text-[0.65rem] font-bold uppercase tracking-[0.4em] text-muted/30">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
