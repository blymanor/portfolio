"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { C } from "@/lib/constants";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(250,250,250,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? `1px solid ${C.border}` : "none",
      }}
    >
      <Container className="flex items-center justify-between py-5">
        <span
          className="font-black text-sm tracking-widest"
          style={{ fontFamily: "'Syne', sans-serif", color: C.fg }}
        >
          PLENG<span style={{ color: C.accent }}>.</span>
        </span>
        <div
          className="hidden md:flex gap-8 text-sm"
          style={{ fontFamily: "'DM Sans', sans-serif", color: C.muted }}
        >
          {["About", "Experience", "Work", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-black transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>
      </Container>
    </motion.nav>
  );
}
