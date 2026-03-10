"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";

const up = (delay: number = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
  },
});

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function FadeUp({
  children,
  delay = 0,
  className = "",
}: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      variants={up(delay)}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}
