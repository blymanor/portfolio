"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { C, ROLES, BASE_PATH } from "@/lib/constants";
import { fadeUp, EASE } from "@/lib/animations";

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setRoleIdx((i) => (i + 1) % ROLES.length),
      2600,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="min-h-screen flex flex-col justify-center pt-20 pb-12 md:pt-24 md:pb-20 relative overflow-hidden"
      style={{ background: C.bg }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-0 right-0 pointer-events-none select-none"
        style={{
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, #FF4D2E14 0%, transparent 65%)",
          transform: "translate(25%, -25%)",
          zIndex: 0,
        }}
      />
      <div
        className="absolute bottom-0 left-0 pointer-events-none select-none"
        style={{
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: "radial-gradient(circle, #5B4FE814 0%, transparent 65%)",
          transform: "translate(-30%, 30%)",
          zIndex: 0,
        }}
      />

      <Container style={{ position: "relative", zIndex: 1 }}>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-16">
          {/* Left: Text content */}
          <motion.div
            className="flex-1"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {/* Role ticker */}
            <motion.div
              variants={fadeUp(0)}
              className="flex items-center gap-3 mb-6 md:mb-10"
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse shrink-0"
                style={{ background: C.accent }}
              />
              <div className="overflow-hidden" style={{ height: "22px" }}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIdx}
                    initial={{ y: 22, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -22, opacity: 0 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    className="block text-sm tracking-widest uppercase font-medium"
                    style={{ color: C.muted }}
                  >
                    {ROLES[roleIdx]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeUp(0.05)}
              className="font-heading font-black leading-none mb-8 md:mb-12"
              style={{
                fontSize: "clamp(2rem, 10vw, 7.5rem)",
                color: C.fg,
                letterSpacing: "-0.03em",
              }}
            >
              TIPPARIDA
              <br />
              <span
                style={{
                  WebkitTextStroke: `2px ${C.fg}`,
                  color: "transparent",
                }}
              >
                RUJISUN
              </span>
              <span style={{ color: C.accent }}>—</span>
              <br />
              <span
                style={{
                  WebkitTextStroke: `2px ${C.fg}`,
                  color: "transparent",
                }}
              >
                KUNTORN
              </span>
            </motion.h1>

            {/* Divider + bio + CTA */}
            <motion.div
              variants={fadeUp(0.1)}
              className="pt-6 md:pt-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6 md:gap-8"
              style={{ borderTop: `1px solid ${C.border}` }}
            >
              <p
                className="text-base leading-relaxed"
                style={{
                  color: C.muted,
                  maxWidth: "400px",
                }}
              >
                Developer passionate about UI/UX and web — with hands-on
                experience building AI prototypes, design systems, and
                full-stack products.
              </p>
              <div className="flex flex-wrap gap-3 shrink-0">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:opacity-80"
                  style={{
                    background: C.accent,
                    color: "#fff",
                  }}
                >
                  See my work
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 5v14" />
                    <path d="m19 12-7 7-7-7" />
                  </svg>
                </a>
                <a
                  href="mailto:tipparida.ruji@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-colors hover:bg-neutral-100"
                  style={{
                    border: `1.5px solid ${C.border}`,
                    color: C.fg,
                  }}
                >
                  Contact
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Profile photo */}
          <div className="shrink-0 self-center lg:self-end">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.35,
                ease: EASE,
              }}
            >
              <div className="relative" style={{ width: "160px" }}>
                <div
                  className="absolute rounded-3xl"
                  style={{
                    inset: "-10px",
                    background: `linear-gradient(135deg, ${C.accent}33, ${C.accent2}33)`,
                    borderRadius: "24px",
                  }}
                />
                <Image
                  src={`${BASE_PATH}/assets/self.png`}
                  alt="Tipparida"
                  width={160}
                  height={200}
                  className="relative rounded-2xl object-cover object-top w-40 h-50 lg:w-50 lg:h-62.5"
                  style={{
                    border: "3px solid white",
                    boxShadow: "0 24px 64px rgba(0,0,0,0.10)",
                    display: "block",
                  }}
                />
                <div
                  className="absolute font-heading font-black text-xs tracking-wider rounded-xl px-3 py-2"
                  style={{
                    bottom: "-14px",
                    right: "-14px",
                    background: C.lime,
                    color: C.fg,
                    whiteSpace: "nowrap",
                  }}
                >
                  BKK, TH
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
