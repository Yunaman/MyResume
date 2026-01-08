"use client";

import { useState, useEffect } from "react";

interface UseTypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
}

export function useTypewriter({ text, speed = 100, delay = 0 }: UseTypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex === 0 && delay > 0) {
      const delayTimeout = setTimeout(() => {
        setCurrentIndex(1);
      }, delay);
      return () => clearTimeout(delayTimeout);
    }

    if (currentIndex > 0 && currentIndex <= text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex));
        setCurrentIndex(currentIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (currentIndex > text.length) {
      setIsComplete(true);
    }
  }, [currentIndex, text, speed, delay]);

  return { displayText, isComplete };
}
