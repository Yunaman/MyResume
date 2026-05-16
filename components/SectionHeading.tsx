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
  return (
    <Reveal
      className={`max-w-3xl ${alignmentClass}`}
    >
      <div className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
        <span className="h-px w-6 bg-accent/30" />
        <span className="text-[0.62rem] font-bold uppercase tracking-[0.4em] text-accent/80">{eyebrow}</span>
      </div>
      <h2 className="heading-2 mt-8 text-balance">{title}</h2>
      <p className="body-large mt-6 text-balance">{description}</p>
    </Reveal>
  );
}
