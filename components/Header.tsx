'use client';

import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import AnimatedCursor from '@/components/AnimatedCursor';
import ThemeToggle from '@/components/ThemeToggle';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const navLinks = [
  { name: 'Home', href: '#hero', short: 'H' },
  { name: 'About', href: '#about', short: 'A' },
  { name: 'Skills', href: '#skills', short: 'S' },
  { name: 'Portfolio', href: '#portfolio', short: 'P' },
  { name: 'Testimonials', href: '#testimonials', short: 'T' },
  { name: 'Contact', href: '#contact', short: 'C' },
];

export default function Header() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 22,
    mass: 0.2,
  });
  const sectionIds = useMemo(
    () => navLinks.map((link) => link.href.replace('#', '')),
    []
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [showDock, setShowDock] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 16);
      setShowDock(scrollY > 420);
      setIsHidden(scrollY > lastScrollY && scrollY > 140 && !isMobileMenuOpen);
      lastScrollY = scrollY;
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0.1 }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  const handleNavClick = (href: string) => {
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <AnimatedCursor trailLength={4} />

      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: isHidden ? -120 : 0, opacity: 1 }}
        transition={{ duration: reduceMotion ? 0.25 : 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-[80] px-4 pt-6 md:px-6"
      >
        <div className="container-custom">
          <div
            className={`nav-shell transition-all duration-700 ${
              isScrolled ? 'is-scrolled mx-auto max-w-2xl' : 'mx-auto max-w-4xl'
            }`}
          >
          <motion.div
            aria-hidden="true"
            style={{ scaleX: progressScale, transformOrigin: 'left' }}
            className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-60"
          />
          <nav className="flex items-center justify-between gap-6 px-4 py-2.5 md:px-6">
            <button
              type="button"
              onClick={() => handleNavClick('#hero')}
              data-cursor="interactive"
              className="group flex items-center gap-3"
            >
              <span className="text-sm font-bold tracking-[0.4em] text-foreground transition-colors group-hover:text-accent">
                YUNUS
              </span>
              <span className="h-1 w-1 rounded-full bg-accent" />
            </button>

            <div className="hidden items-center gap-8 lg:flex">
              <div className="flex items-center gap-7">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.replace('#', '');

                  return (
                    <button
                      key={link.name}
                      onClick={() => handleNavClick(link.href)}
                      className={`relative text-[0.62rem] font-bold uppercase tracking-[0.25em] transition-colors hover:text-accent ${
                        isActive ? 'text-accent' : 'text-foreground/70'
                      }`}
                    >
                      {link.name}
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute -bottom-1 left-0 h-[1px] w-full bg-accent"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
              <div className="h-4 w-px bg-white/10" />
              <ThemeToggle />
            </div>

            <div className="flex items-center gap-3 lg:hidden">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen((value) => !value)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </nav>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mobile-menu-panel fixed inset-x-4 top-[92px] z-[75] rounded-[32px] p-5 shadow-[0_32px_80px_rgba(0,0,0,0.24)] lg:hidden"
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <div className="text-[0.65rem] uppercase tracking-[0.4em] text-muted">Navigate</div>
                <div className="mt-1 text-lg font-semibold text-foreground">Scene Index</div>
              </div>
              <div className="rounded-full border border-white/10 px-3 py-1 text-[0.62rem] uppercase tracking-[0.32em] text-accent">
                Scroll-aware
              </div>
            </div>
            <div className="grid gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className={`premium-hover relative rounded-[22px] px-4 py-3.5 text-left text-base font-medium transition-colors ${
                    activeSection === link.href.replace('#', '')
                      ? 'bg-[linear-gradient(135deg,rgba(141,247,211,1),rgba(124,114,255,0.84))] text-slate-950'
                      : 'bg-white/[0.03] text-foreground/80 hover:text-accent'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: showDock ? 1 : 0, y: showDock ? 0 : 16 }}
        transition={{ duration: 0.35 }}
        className="pointer-events-none fixed bottom-4 left-1/2 z-[70] hidden -translate-x-1/2 md:block"
      >
        <div className="nav-shell pointer-events-auto flex items-center gap-2 rounded-full px-3 py-2 shadow-[0_16px_40px_rgba(0,0,0,0.22)]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');

            return (
              <button
                key={link.name}
                type="button"
                onClick={() => handleNavClick(link.href)}
                className={`nav-link flex h-10 w-10 items-center justify-center rounded-full text-xs font-semibold transition-colors ${
                  isActive ? 'bg-[linear-gradient(135deg,rgba(141,247,211,1),rgba(255,173,102,0.96))] text-slate-950' : 'text-foreground/65 hover:text-accent'
                }`}
                aria-label={link.name}
              >
                {link.short}
              </button>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        aria-hidden="true"
        animate={{ opacity: isScrolled ? 1 : 0 }}
        className="pointer-events-none fixed inset-x-0 top-0 z-[79] h-24 bg-[linear-gradient(180deg,rgba(5,11,17,0.28),transparent)]"
      />
    </>
  );
}
