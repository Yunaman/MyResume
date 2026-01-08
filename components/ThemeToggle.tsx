"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="relative w-14 h-7 rounded-full bg-primary/10 dark:bg-light/10 flex items-center transition-colors duration-300 border border-primary/20 dark:border-light/20"
      aria-label="Toggle theme"
    >
      {/* Track */}
      <motion.div
        className="absolute w-6 h-6 rounded-full bg-gradient-to-br from-accent to-accent/70 shadow-lg flex items-center justify-center"
        animate={{
          x: theme === "dark" ? 28 : 2,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        {/* Icon with rotation animation */}
        <motion.div
          initial={false}
          animate={{ rotate: theme === "dark" ? 360 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {theme === "dark" ? (
            <Moon size={14} className="text-primary" />
          ) : (
            <Sun size={14} className="text-light" />
          )}
        </motion.div>
      </motion.div>

      {/* Background icons */}
      <div className="w-full flex items-center justify-between px-1.5">
        <Sun
          size={12}
          className={`transition-opacity duration-300 ${
            theme === "light" ? "opacity-0" : "opacity-40"
          } text-primary dark:text-light`}
        />
        <Moon
          size={12}
          className={`transition-opacity duration-300 ${
            theme === "dark" ? "opacity-0" : "opacity-40"
          } text-primary dark:text-light`}
        />
      </div>
    </motion.button>
  );
}
