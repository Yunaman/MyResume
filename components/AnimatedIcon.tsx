"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface AnimatedIconProps {
  icon: LucideIcon;
  size?: number;
  className?: string;
  delay?: number;
  bounce?: boolean;
  float?: boolean;
  pulse?: boolean;
  rotate?: boolean;
}

export default function AnimatedIcon({
  icon: Icon,
  size = 24,
  className = "",
  delay = 0,
  bounce = false,
  float = false,
  pulse = false,
  rotate = false,
}: AnimatedIconProps) {
  const animations = {
    bounce: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      },
    },
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      },
    },
    pulse: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      },
    },
    rotate: {
      rotate: [0, 360],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
        delay,
      },
    },
  };

  let animation = {};
  if (bounce) animation = animations.bounce;
  if (float) animation = animations.float;
  if (pulse) animation = animations.pulse;
  if (rotate) animation = animations.rotate;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1, ...animation }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      <Icon size={size} />
    </motion.div>
  );
}
