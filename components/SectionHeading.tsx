'use client';

import Reveal from '@/components/Reveal';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  const alignmentClass = align === 'left' ? 'text-left' : 'text-center';
  const lineClass = align === 'left' ? 'mr-auto' : 'mx-auto';

  return (
    <Reveal
      variant="rotate"
      className={`max-w-3xl ${alignmentClass}`}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="heading-2 mt-6 text-balance">{title}</h2>
      <p className="body-large text-muted mt-5 text-balance">{description}</p>
      <div
        aria-hidden="true"
        className={`mt-7 h-px w-40 rounded-full bg-gradient-to-r from-transparent via-accent/70 to-transparent ${lineClass}`}
      />
    </Reveal>
  );
}
