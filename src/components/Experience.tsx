"use client";

import Container from "@/components/ui/Container";
import FadeUp from "@/components/ui/FadeUp";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { C, EXPERIENCE } from "@/lib/constants";

export default function Experience() {
  return (
    <section id="about" className="py-16 md:py-32" style={{ background: C.bg }}>
      <Container>
        <FadeUp>
          <SectionEyebrow number="01" label="Experience" />
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left */}
          <FadeUp delay={0.05}>
            <h2
              className="font-heading font-black leading-tight mb-8"
              style={{
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                color: C.fg,
                letterSpacing: "-0.02em",
              }}
            >
              From design to
              <br />
              <span style={{ color: C.accent }}>deployment.</span>
            </h2>
            <p
              className="text-base leading-relaxed mb-10"
              style={{ color: C.muted }}
            >
              I&apos;m Pleng — a developer who owns the whole process: UX
              research, Figma, code, and CMS. Currently interning as an AI
              Prototype Developer at CP ALL.
            </p>

            {/* Education card */}
            <div
              className="rounded-2xl p-5 md:p-7 flex gap-4 md:gap-5 items-start"
              style={{ background: C.accentSoft, border: "1px solid #FFD5CC" }}
            >
              <div
                className="font-heading w-11 h-11 rounded-xl flex items-center justify-center font-black text-xs shrink-0"
                style={{
                  background: C.accent,
                  color: "#fff",
                }}
              >
                BU
              </div>
              <div>
                <p className="font-semibold text-sm" style={{ color: C.fg }}>
                  Bangkok University
                </p>
                <p
                  className="text-sm mt-0.5"
                  style={{
                    color: C.muted,
                  }}
                >
                  B.Sc. Computer Science · 4th Year
                </p>
                <p
                  className="text-sm font-medium mt-1"
                  style={{
                    color: C.accent,
                  }}
                >
                  2022 – Present <br />
                  Expected Graduation: 2026
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Right — cards */}
          <div className="flex flex-col gap-6">
            {EXPERIENCE.map((exp, i) => (
              <FadeUp key={i} delay={0.1 + i * 0.08}>
                <div
                  className="rounded-2xl p-5 md:p-7 transition-shadow duration-300 hover:shadow-lg"
                  style={{
                    background: exp.color,
                    border: `1px solid ${exp.dot}22`,
                  }}
                >
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div>
                      <p
                        className="font-heading font-bold text-base"
                        style={{ color: C.fg }}
                      >
                        {exp.company}
                      </p>
                      <p
                        className="text-sm font-medium mt-0.5"
                        style={{ color: exp.dot }}
                      >
                        {exp.role}
                      </p>
                    </div>
                    <span
                      className="text-xs font-medium whitespace-nowrap mt-0.5 shrink-0"
                      style={{ color: C.muted }}
                    >
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2.5">
                    {exp.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="text-sm flex gap-2.5 items-start"
                        style={{ color: C.fg + "BB" }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5"
                          style={{ background: exp.dot }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
