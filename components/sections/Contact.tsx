'use client';

import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import MagneticButton from '@/components/MagneticButton';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

const contactDetails = [
  {
    icon: MapPin,
    label: 'Location',
    value: 'Addis Ababa, Ethiopia',
    href: undefined,
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'yunadreamboy@gmail.com',
    href: 'mailto:yunadreamboy@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+251 974557038',
    href: 'tel:+251974557038',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  return (
    <section id="contact" data-tone="contact" className="section-shell cinematic-section section-padding relative overflow-hidden">
      <div className="section-noise" />
      <div className="section-grid" />
      <div className="section-beam" />
      <div className="section-rings" />
      <div className="ambient-orb ambient-orb--mint right-[8%] top-[14%] h-64 w-64" />
      <div className="container-custom">
        <SectionHeading
          eyebrow="Get In Touch"
          title="If you have a project in mind, let's shape it into something memorable."
          description="The contact area now feels like the close of the story instead of a plain form block, while keeping the existing API route and deployment behavior intact."
        />

        <div className="mt-14 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <Reveal interactive variant="rotate" className="surface-card-strong glass-highlight p-7 md:p-8">
            <div className="eyebrow">Open for Select Collaborations</div>
            <h3 className="heading-3 mt-6 text-[2rem]">
              Freelance work, product builds, and interface-driven brand experiences.
            </h3>
            <p className="mt-4 text-sm leading-8 text-muted">
              Available for freelance work and full-time opportunities. Currently accepting
              projects that value strong execution, thoughtful design, and production-ready code.
            </p>

            <div className="mt-8 grid gap-4">
              {contactDetails.map((item) => {
                const content = (
                  <div className="surface-panel flex items-start gap-4 rounded-[24px] p-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-accent/15 bg-accent/10 text-accent">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.3em] text-muted">{item.label}</div>
                      <div className="mt-2 text-base font-medium text-foreground">{item.value}</div>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="transition-transform duration-300 hover:-translate-y-1"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1} interactive variant="flip" className="surface-card-strong glass-highlight">
            <form onSubmit={handleSubmit} className="grid gap-5 p-7 md:p-8">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2 text-sm text-foreground/80">
                  Your Name
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-premium"
                    placeholder="John Doe"
                  />
                </label>

                <label className="grid gap-2 text-sm text-foreground/80">
                  Your Email
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-premium"
                    placeholder="john@example.com"
                  />
                </label>
              </div>

              <label className="grid gap-2 text-sm text-foreground/80">
                Subject
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="input-premium"
                  placeholder="Project Inquiry"
                />
              </label>

              <label className="grid gap-2 text-sm text-foreground/80">
                Message
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={7}
                  className="input-premium resize-none rounded-[24px]"
                  placeholder="Tell me about your project..."
                />
              </label>

              <MagneticButton
                type="submit"
                disabled={isSubmitting}
                strength={0.16}
                className="btn-primary mt-2 inline-flex w-full items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={16} />
              </MagneticButton>

              {submitStatus === 'success' ? (
                <p className="text-sm text-green-400">
                  Message sent successfully. I&apos;ll get back to you soon.
                </p>
              ) : null}

              {submitStatus === 'error' ? (
                <p className="text-sm text-red-400">
                  Something went wrong. Please try again.
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
