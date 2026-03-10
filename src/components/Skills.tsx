"use client";

import Container from "@/components/ui/Container";
import FadeUp from "@/components/ui/FadeUp";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { C, SKILLS_LEFT, SKILLS_RIGHT } from "@/lib/constants";

export default function Skills() {
  return (
    <section id="experience" className="py-32" style={{ background: C.fg }}>
      <Container>
        <FadeUp>
          <SectionEyebrow number="02" label="Skills" />
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-4">
          {[SKILLS_LEFT, SKILLS_RIGHT].map((col, ci) => (
            <div key={ci} className="flex flex-col gap-10">
              {col.map((group, gi) => (
                <FadeUp key={gi} delay={gi * 0.05}>
                  <p
                    className="text-xs font-semibold uppercase tracking-[0.2em] mb-5"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: ci === 0 ? C.accent : C.accent2,
                    }}
                  >
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-sm px-4 py-2 rounded-full font-medium transition-transform duration-200 hover:scale-105 cursor-default"
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          background: "#242424",
                          color: "#E0E0E0",
                          border: "1px solid #333",
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </FadeUp>
              ))}
            </div>
          ))}
        </div>

        <FadeUp delay={0.2}>
          <p
            className="font-black mt-24 leading-tight"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(2rem, 4.5vw, 4rem)",
              color: "#2A2A2A",
              letterSpacing: "-0.02em",
            }}
          >
            Design → Code → <span style={{ color: C.lime }}>Ship.</span>
          </p>
        </FadeUp>
      </Container>
    </section>
  );
}
