"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setIsLoading(false), 1300);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.aside
          key="preloader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="preloader"
          aria-live="assertive"
        >
          <motion.div
            className="preloader__orb"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{
              scale: [0.6, 1, 0.92, 1],
              opacity: [0, 1, 1, 1],
            }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
          >
            <motion.span
              className="preloader__glow"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2.4, ease: "linear" }}
            />
          </motion.div>

          <motion.p
            className="preloader__label"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
          >
            Crafting the experience
          </motion.p>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
