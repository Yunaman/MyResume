'use client';

import { Mail } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';
import {
  BrandGitHub,
  BrandLinkedIn,
  BrandTwitter,
} from '@/components/BrandIcons';
import Reveal from '@/components/Reveal';

const socialLinks = [
  { Icon: BrandGitHub, href: 'https://github.com/yenuss', label: 'GitHub' },
  { Icon: BrandLinkedIn, href: 'https://linkedin.com/in/yenuss', label: 'LinkedIn' },
  { Icon: BrandTwitter, href: 'https://twitter.com/yenuss', label: 'Twitter' },
  { Icon: Mail, href: 'mailto:yunadreamboy@gmail.com', label: 'Email' },
];

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-shell cinematic-section relative overflow-hidden pb-10 pt-4" data-tone="contact">
      <div className="section-noise" />
      <div className="section-beam" />
      <div className="container-custom">
        <Reveal interactive variant="flip" className="surface-card-strong glass-highlight rounded-[36px] p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="eyebrow">Ready to Build</div>
              <h2 className="heading-3 mt-6 text-[2.25rem]">
                Let&apos;s create a digital experience that feels premium from the first scroll.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-8 text-muted">
                Yunus is an interactive developer and digital creator based in Addis Ababa,
                available for global collaborations and high-quality product work.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.label === 'Email' ? undefined : '_blank'}
                  rel={social.label === 'Email' ? undefined : 'noopener noreferrer'}
                >
                  <MagneticButton
                    strength={0.14}
                    className="surface-panel h-12 w-12 rounded-2xl text-foreground hover:text-accent"
                    aria-label={social.label}
                  >
                    <social.Icon size={18} />
                  </MagneticButton>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 h-px w-full bg-white/10" />

          <div className="mt-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-5 text-sm text-muted">
              {footerLinks.map((link) => (
                <a key={link.label} href={link.href} className="transition-colors hover:text-accent">
                  {link.label}
                </a>
              ))}
            </div>
            <p className="text-sm text-muted">
              &copy; {currentYear} Yunus. Crafted with care in Addis Ababa.
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
