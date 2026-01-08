"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
// import { useSound } from "@/hooks/useSound";

import portfolio1 from "@/assets/img/portfolio/portfolio-1.jpg";
import portfolio4 from "@/assets/img/portfolio/portfolio-4.jpg";
import portfolio5 from "@/assets/img/portfolio/portfolio-5.jpg";
import portfolio9 from "@/assets/img/portfolio/portfolio-9.jpg";
import portfolioDetails1 from "@/assets/img/portfolio/portfolio-details-1.jpg";
import portfolioDetails2 from "@/assets/img/portfolio/portfolio-details-2.jpg";

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
    title: "Apple Clone",
    category: "Web Development",
    description:
      "A clean Apple-style landing page clone focused on layout precision, responsive UI, and smooth interactions.",
    image: portfolio1.src,
    tags: ["HTML", "CSS", "JavaScript"],
    // TODO: Replace with your Apple Clone live link
    liveUrl: "https://apple-clone-flame.vercel.app/",
  },
  {
    id: 2,
    title: "Cake Store",
    category: "Web Development",
    description:
      "An e-commerce cake store experience with a modern storefront, product-focused UI, and clean responsive design.",
    image: portfolioDetails2.src,
    tags: ["React", "UI"],
    // TODO: Replace with your Cake Store live link
    liveUrl: "https://cake-store-ten.vercel.app",
  },
  {
    id: 3,
    title: "Organic Ecommerce",
    category: "Web Development",
    description:
      "A modern business website concept inspired by modern Ecommerce design patterns with polished layout and sections.",
    image: portfolio4.src,
    tags: ["HTML", "CSS", "JavaScript"],
    // TODO: Replace with your Bankist Business live link
    liveUrl: "https://yuna-organic.vercel.app",
  },
  {
    id: 4,
    title: "Yuna Videograph",
    category: "Web Development",
    description:
      "A video production portfolio built to showcase reels, services, and a strong visual brand presence.",
    image: portfolioDetails1.src,
    tags: ["Portfolio", "Branding", "Motion"],
    // TODO: Replace with your Videograph live link
    liveUrl: "https://yuna-videograph.vercel.app/",
  },
  {
    id: 5,
    title: "Feane Cafe",
    category: "Web Development",
    description:
      "A cafe website concept featuring menu layout, hero sections, and a clean modern restaurant vibe.",
    image: portfolio5.src,
    tags: ["HTML", "CSS", "UI"],
    // TODO: Replace with your Feane Cafe live link
    liveUrl: "https://feane-cafe.vercel.app/",
  },
  {
    id: 6,
    title: "Digital Agreement",
    category: "Web Development",
    description:
      "A digital agreement experience concept focused on clarity, flow, and a professional document UI.",
    image: portfolio9.src,
    tags: ["UI", "UX", "Web"],
    // TODO: Replace with your Digital Agreement live link
    liveUrl: "https://termagreement.vercel.app/",
  },
];

const categories = ["All", "Web Development", "Video Production"];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export default function Portfolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeCategory, setActiveCategory] = useState("All");
  
  // Sound effects
  // const { play: playHover } = useSound("/sounds/hover.mp3", 0.15);
  // const { play: playClick } = useSound("/sounds/click.mp3", 0.2);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="portfolio"
      className="section-padding bg-light dark:bg-dark-bg relative overflow-hidden"
      ref={ref}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-accent/35 via-primary/20 to-transparent blur-3xl"
        />
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.3, ease: "easeOut", delay: 0.1 }}
          className="absolute -bottom-28 -right-24 h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-primary/25 via-accent/25 to-transparent blur-3xl"
        />
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.25 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.10),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.06),transparent_50%),radial-gradient(circle_at_40%_85%,rgba(255,255,255,0.05),transparent_55%)]"
        />
      </div>

      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <p className="text-accent text-sm tracking-widest uppercase mb-4">
            Selected Works
          </p>
          <h2 className="heading-2 mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="body-large text-primary/70">
            A curated selection of projects showcasing technical expertise and
            creative vision
          </p>
          <motion.div
            aria-hidden="true"
            initial={{ width: 0, opacity: 0 }}
            animate={inView ? { width: 160, opacity: 1 } : {}}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            className="mx-auto mt-6 h-[2px] rounded-full bg-gradient-to-r from-transparent via-accent/70 to-transparent"
          />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                // playClick();
              }}
              // onMouseEnter={() => playHover()}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-full border ${
                activeCategory === category
                  ? "bg-primary dark:bg-accent text-light shadow-lg border-transparent shadow-primary/20"
                  : "bg-primary/5 dark:bg-dark-card text-primary dark:text-light border-primary/10 hover:bg-primary/10 dark:hover:bg-dark-border"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.a
              key={project.id}
              variants={itemVariants}
              transition={{ duration: 0.55, ease: "easeOut" }}
              whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
              href={project.liveUrl || project.githubUrl || "#"}
              target={project.liveUrl || project.githubUrl ? "_blank" : undefined}
              rel={project.liveUrl || project.githubUrl ? "noopener noreferrer" : undefined}
              className="group relative overflow-hidden rounded-3xl border border-primary/10 bg-primary/5 dark:bg-dark-card/40 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.45)]"
              // onMouseEnter={() => playHover()}
              // onFocus={() => playHover()}
              // onClick={() => playClick()}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-accent/35 via-primary/20 to-transparent blur-2xl" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.18),transparent_55%)]" />
              </div>

              <div className="relative aspect-[4/3]">
                <motion.div
                  className="absolute inset-0"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.08, rotate: 0.2 }}
                  transition={{ duration: 0.65, ease: "easeOut" }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 3}
                  />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-80" />

                <div className="absolute left-4 top-4 z-20">
                  <span className="inline-flex items-center gap-2 rounded-full bg-light/10 px-3 py-1 text-xs tracking-widest uppercase text-light/90 backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {project.category}
                  </span>
                </div>

                <div className="absolute right-4 top-4 z-20">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-light/10 text-light/90 text-sm font-semibold backdrop-blur border border-light/10">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 z-20 p-5">
                  <div className="glass-effect rounded-2xl p-4 border border-light/10">
                    <h3 className="text-light text-xl font-serif leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-light/70 text-xs mt-2 line-clamp-1">
                      {project.tags.slice(0, 4).join(" • ")}
                    </p>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0 z-30 flex flex-col justify-end p-6 bg-gradient-to-t from-primary via-primary/95 to-primary/20"
              >
                <p className="text-light/80 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-light/10 text-light/80 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-light">
                    {project.liveUrl && project.liveUrl !== "" && (
                      <span className="flex items-center gap-2 text-sm">
                        <ExternalLink size={16} />
                        <span>View Live</span>
                      </span>
                    )}
                    {project.githubUrl && project.githubUrl !== "" && (
                      <span className="flex items-center gap-2 text-sm">
                        <Github size={16} />
                        <span>Code</span>
                      </span>
                    )}
                  </div>

                  <span className="inline-flex items-center gap-2 rounded-full bg-light/10 px-4 py-2 text-xs tracking-widest uppercase text-light/90 backdrop-blur border border-light/10">
                    Open
                  </span>
                </div>
              </motion.div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
