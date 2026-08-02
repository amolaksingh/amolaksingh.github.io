"use client";

import { motion } from "framer-motion";

type Props = {
  className?: string;
  color?: string;
};

export default function GradientBlob({
  className = "",
  color = "bg-blue-500/20",
}: Props) {
  return (
    <motion.div
      animate={{
        x: [0, 80, -40, 0],
        y: [0, -60, 60, 0],
        scale: [1, 1.2, 0.9, 1],
        rotate: [0, 20, -20, 0],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute rounded-full blur-[150px] ${color} ${className}`}
    />
  );
}