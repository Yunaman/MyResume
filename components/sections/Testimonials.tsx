"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Quote, Star } from "lucide-react";
import { useState, useEffect } from "react";
import { useSound } from "@/hooks/useSound";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    content:
      "Yenus delivered an exceptional website that exceeded our expectations. His attention to detail and ability to translate our vision into reality was remarkable. The project was completed on time and the results speak for themselves.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, Digital Ventures",
    content:
      "Working with Yenus was a pleasure. His technical expertise combined with creative problem-solving resulted in a platform that not only looks stunning but performs flawlessly. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
  },
  {
    id: 3,
    name: "Emma Williams",
    role: "Marketing Director, Brand Co",
    content:
      "Yenus brought our brand to life through his comprehensive video campaign. His cinematography and editing skills are top-notch, and he understood our brand identity perfectly. The campaign exceeded our engagement goals by 200%.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
  },
  {
    id: 4,
    name: "David Martinez",
    role: "Product Manager, InnovateLab",
    content:
      "The dashboard Yenus built for us has transformed how we manage our operations. His full-stack capabilities and UX sensibility resulted in a tool that our entire team loves using daily.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
  },
];

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  
  // Sound effects
  const { play: playSlide } = useSound("/sounds/slide.mp3", 0.3);
  const { play: playClick } = useSound("/sounds/click.mp3", 0.2);
  
  // Auto-scroll slideshow
  useEffect(() => {
    if (!isAutoPlay || isPaused) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const nextIndex = (prev + 1) % testimonials.length;
        playSlide();
        return nextIndex;
      });
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, [isAutoPlay, isPaused, playSlide]);
  
  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    playClick();
    setIsPaused(false);
  };
  
  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
    setIsPaused(false);
    playClick();
  };

  return (
    <section id="testimonials" className="section-padding bg-primary dark:bg-dark-card text-light" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-accent text-sm tracking-widest uppercase mb-4">
            Client Testimonials
          </p>
          <h2 className="heading-2 mb-6">What Clients Say</h2>
          <p className="body-large text-light/80">
            Trusted by businesses and brands across industries
          </p>
        </motion.div>

        {/* Testimonials Display */}
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.8 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="text-center"
              onHoverStart={() => setIsPaused(true)}
              onHoverEnd={() => setIsPaused(false)}
            >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Quote className="text-accent mx-auto mb-8" size={48} />
            </motion.div>

            <p className="text-xl md:text-2xl font-serif leading-relaxed mb-8 text-light/90">
              &quot;{testimonials[activeIndex].content}&quot;
            </p>

            <div className="flex items-center justify-center gap-1 mb-6">
              {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                <Star
                  key={i}
                  className="text-accent fill-accent"
                  size={20}
                />
              ))}
            </div>

            <div className="text-center">
              <motion.h4
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="font-semibold text-lg"
              >
                {testimonials[activeIndex].name}
              </motion.h4>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-light/60 text-sm"
              >
                {testimonials[activeIndex].role}
              </motion.p>
            </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex items-center justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => handleDotClick(index)}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                className={`relative h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-12 bg-accent shadow-lg"
                    : "w-2 bg-light/30 hover:bg-light/50"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
