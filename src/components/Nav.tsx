"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import { C } from "@/lib/constants";

const NAV_ITEMS = ["About", "Experience", "Work", "Contact"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled || open ? "rgba(250,250,250,0.92)" : "transparent",
        backdropFilter: scrolled || open ? "blur(16px)" : "none",
        borderBottom: scrolled ? `1px solid ${C.border}` : "none",
      }}
    >
      <Container className="flex items-center justify-between py-5">
        <span
          className="font-heading font-black text-sm tracking-widest"
          style={{ color: C.fg }}
        >
          PLENG<span style={{ color: C.accent }}>.</span>
        </span>

        {/* Desktop links */}
        <div
          className="hidden md:flex gap-8 text-sm"
          style={{ color: C.muted }}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-black transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="Toggle menu"
        >
          <span
            className="block w-5 h-0.5 rounded-full transition-transform duration-300 origin-center"
            style={{
              background: C.fg,
              transform: open ? "translateY(4px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block w-5 h-0.5 rounded-full transition-opacity duration-200"
            style={{
              background: C.fg,
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-0.5 rounded-full transition-transform duration-300 origin-center"
            style={{
              background: C.fg,
              transform: open ? "translateY(-4px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </Container>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden"
            style={{
              background: "rgba(250,250,250,0.98)",
              borderTop: `1px solid ${C.border}`,
            }}
          >
            <div className="flex flex-col gap-1 px-7 py-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="py-3 text-base font-medium transition-colors duration-200 hover:text-black"
                  style={{ color: C.muted }}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
