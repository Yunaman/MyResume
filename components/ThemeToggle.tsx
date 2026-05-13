"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileTap={{ scale: 0.96 }}
      data-cursor="interactive"
      className="surface-panel relative flex h-12 w-[74px] items-center rounded-full border border-white/10 px-1"
      aria-label="Toggle theme"
    >
      <motion.div
        className="absolute h-10 w-10 rounded-full bg-gradient-to-br from-accent to-accent-strong shadow-[0_10px_30px_rgba(57,214,197,0.26)]"
        animate={{ x: theme === "dark" ? 30 : 0 }}
        transition={{ type: "spring", stiffness: 340, damping: 30 }}
      />

      <div className="relative z-10 flex w-full items-center justify-between px-2 text-foreground/70">
        <Sun size={14} className={theme === "light" ? "text-slate-950" : ""} />
        <Moon size={14} className={theme === "dark" ? "text-slate-950" : ""} />
      </div>
    </motion.button>
  );
}
