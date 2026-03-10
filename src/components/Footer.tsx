"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { C } from "@/lib/constants";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="py-16 md:py-32 relative overflow-hidden"
      style={{ background: C.accent }}
    >
      {/* Big bg letter */}
      <div
        className="absolute bottom-0 right-0 leading-none select-none pointer-events-none font-heading font-black opacity-10"
        style={{
          fontSize: "30vw",
          color: "#fff",
          transform: "translate(10%, 20%)",
        }}
      >
        P
      </div>

      <Container className="relative" style={{ zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-8"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            Let&apos;s build something great
          </p>
          <h2
            className="font-heading font-black leading-tight mb-14"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 6rem)",
              color: "#fff",
              letterSpacing: "-0.03em",
            }}
          >
            Have a project
            <br />
            in mind?
          </h2>

          <div className="flex flex-col sm:flex-row gap-5">
            <a
              href="mailto:tipparida.ruji@gmail.com"
              className="inline-flex items-center justify-center gap-3 px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-sm md:text-base transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              style={{
                background: "#fff",
                color: C.accent,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span className="truncate">tipparida.ruji@gmail.com</span>
            </a>
            <a
              href="http://linkedin.com/in/tipparida-rujisunkuntorn-038103384"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-sm md:text-base transition-all duration-300 hover:bg-white hover:bg-opacity-10 w-full sm:w-auto"
              style={{
                border: "2px solid rgba(255,255,255,0.35)",
                color: "#fff",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="shrink-0"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>

          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-14 md:mt-24 pt-8 md:pt-10"
            style={{ borderTop: "1px solid rgba(255,255,255,0.2)" }}
          >
            <span
              className="font-heading font-black text-sm tracking-widest"
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              PLENG.
            </span>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
              © 2026 Tipparida Rujisunkuntorn
            </p>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
}
