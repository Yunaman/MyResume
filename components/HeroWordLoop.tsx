"use client";

import { useEffect, useRef } from "react";

const WORD_COLORS = [
  "#B8986C",
  "#8A5CF6",
  "#29C7AC",
  "#FF4D6D",
  "#00C2FF",
  "#FFD166",
  "#A1FF0A",
];

const DEFAULT_PHRASES = [
  "full-stack web developer",
  "freelancer & product designer",
  "digital marketer",
  "video editor",
  "creative problem solver",
];

type HeroWordLoopProps = {
  phrases?: string[];
  cycleDurationMs?: number;
  typingSpeedMs?: number;
};

function pickColor() {
  return WORD_COLORS[Math.floor(Math.random() * WORD_COLORS.length)] ?? WORD_COLORS[0];
}

export default function HeroWordLoop({
  phrases = DEFAULT_PHRASES,
  cycleDurationMs = 8000,
  typingSpeedMs = 38,
}: HeroWordLoopProps) {
  const containerRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || phrases.length === 0) {
      return;
    }

    let frameId = 0;
    let startTs = 0;
    let lastTs = 0;
    let phraseIndex = 0;
    let wordIndex = 0;
    let charIndex = 0;
    let isSettled = false;
    let wordSpans: HTMLSpanElement[] = [];

    const accentColor = getComputedStyle(document.documentElement).getPropertyValue("--hero-accent").trim() || "#B8986C";

    const reset = () => {
      container.innerHTML = "";
      wordSpans = [];
      wordIndex = 0;
      charIndex = 0;
      isSettled = false;
    };

    const settlePhrase = () => {
      if (isSettled) return;
      isSettled = true;
      wordSpans.forEach((span) => {
        span.style.setProperty("--w", accentColor);
        span.classList.remove("hero-word-loop__word--live");
        span.classList.add("hero-word-loop__word--settled");
      });
    };

    const typeStep = (ts: number) => {
      if (!startTs) startTs = ts;
      if (!lastTs) lastTs = ts;

      const phrase = phrases[phraseIndex % phrases.length] ?? "";
      const words = phrase.split(/\s+/).filter(Boolean);
      const typingTarget = Math.min(Math.max(1600, phrase.length * typingSpeedMs), cycleDurationMs * 0.6);
      const elapsed = ts - startTs;

      if (elapsed >= cycleDurationMs) {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        startTs = ts;
        lastTs = ts;
        reset();
        frameId = requestAnimationFrame(typeStep);
        return;
      }

      if (elapsed >= typingTarget) {
        settlePhrase();
        frameId = requestAnimationFrame(typeStep);
        return;
      }

      const dt = ts - lastTs;
      if (dt < typingSpeedMs) {
        frameId = requestAnimationFrame(typeStep);
        return;
      }
      lastTs = ts;

      if (wordIndex >= words.length) {
        settlePhrase();
        frameId = requestAnimationFrame(typeStep);
        return;
      }

      const targetWord = words[wordIndex];
      charIndex += 1;
      const currentSlice = targetWord.slice(0, charIndex);
      let liveSpan = wordSpans[wordIndex];

      if (!liveSpan) {
        liveSpan = document.createElement("span");
        liveSpan.className = "hero-word-loop__word hero-word-loop__word--live hero-word-loop__word--pop";
        liveSpan.style.setProperty("--w", pickColor());
        container.appendChild(liveSpan);
        container.appendChild(document.createTextNode(" "));
        wordSpans[wordIndex] = liveSpan;
        window.setTimeout(() => liveSpan?.classList.remove("hero-word-loop__word--pop"), 500);
      }

      liveSpan.textContent = currentSlice;

      if (charIndex >= targetWord.length) {
        liveSpan.classList.remove("hero-word-loop__word--live");
        liveSpan.classList.add("hero-word-loop__word--pop");
        window.setTimeout(() => liveSpan?.classList.remove("hero-word-loop__word--pop"), 500);
        wordIndex += 1;
        charIndex = 0;
      }

      frameId = requestAnimationFrame(typeStep);
    };

    reset();
    frameId = requestAnimationFrame(typeStep);

    return () => cancelAnimationFrame(frameId);
  }, [phrases, cycleDurationMs, typingSpeedMs]);

  return (
    <span ref={containerRef} className="hero-word-loop" aria-live="polite" />
  );
}
