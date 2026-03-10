"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { C } from "@/lib/constants";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="py-32 relative overflow-hidden"
      style={{ background: C.accent }}
    >
      {/* Big bg letter */}
      <div
        className="absolute bottom-0 right-0 leading-none select-none pointer-events-none font-black opacity-10"
        style={{
          fontFamily: "'Syne', sans-serif",
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
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "rgba(255,255,255,0.65)",
            }}
          >
            Let&apos;s build something great
          </p>
          <h2
            className="font-black leading-tight mb-14"
            style={{
              fontFamily: "'Syne', sans-serif",
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
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105"
              style={{
                background: "#fff",
                color: C.accent,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              tipparida.ruji@gmail.com ↗
            </a>
            <a
              href="https://linkedin.com/in/tipparida"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:bg-white hover:bg-opacity-10"
              style={{
                border: "2px solid rgba(255,255,255,0.35)",
                color: "#fff",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              LinkedIn ↗
            </a>
          </div>

          <div
            className="flex items-center justify-between mt-24 pt-10"
            style={{ borderTop: "1px solid rgba(255,255,255,0.2)" }}
          >
            <span
              className="font-black text-sm tracking-widest"
              style={{
                fontFamily: "'Syne', sans-serif",
                color: "rgba(255,255,255,0.85)",
              }}
            >
              PLENG.
            </span>
            <p
              className="text-sm"
              style={{
                color: "rgba(255,255,255,0.5)",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              © 2025 Tipparida Rujisunkuntorn
            </p>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
}
