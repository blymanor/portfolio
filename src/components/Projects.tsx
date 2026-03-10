"use client";

import Container from "@/components/ui/Container";
import FadeUp from "@/components/ui/FadeUp";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Tag from "@/components/ui/Tag";
import { C, PROJECTS, type ProjectItem } from "@/lib/constants";

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <FadeUp delay={index * 0.06}>
      <div
        className="rounded-3xl overflow-hidden flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
        style={{
          background: project.bgColor,
          border: `1px solid ${project.accentColor}20`,
        }}
      >
        {/* Image */}
        <div
          className="relative overflow-hidden shrink-0"
          style={{ height: "220px", background: project.bgColor }}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span
                className="font-heading font-black opacity-10"
                style={{
                  fontSize: "6rem",
                  color: project.accentColor,
                }}
              >
                {project.title[0]}
              </span>
            </div>
          )}
          <div className="absolute top-4 left-4">
            <Tag color={project.accentColor} bg="white">
              {project.tag}
            </Tag>
          </div>
          <div className="absolute top-4 right-4">
            <span
              className="text-xs font-bold px-2.5 py-1 rounded-lg"
              style={{
                background: "rgba(0,0,0,0.18)",
                color: "#fff",
              }}
            >
              {project.year}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col flex-1 gap-5">
          <h3
            className="font-heading font-black text-xl"
            style={{
              color: C.fg,
              letterSpacing: "-0.02em",
            }}
          >
            {project.title}
          </h3>
          <p
            className="text-sm leading-relaxed flex-1"
            style={{ color: C.muted }}
          >
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 rounded-full font-medium"
                style={{
                  background: project.accentColor + "18",
                  color: project.accentColor,
                }}
              >
                {t}
              </span>
            ))}
          </div>
          <div className="flex gap-3 pt-2">
            {project.prototype && (
              <a
                href={project.prototype}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center text-sm font-semibold py-2.5 rounded-full transition-opacity duration-200 hover:opacity-80"
                style={{
                  background: project.accentColor,
                  color: "#fff",
                }}
              >
                View Prototype ↗
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center text-sm font-semibold py-2.5 rounded-full transition-colors hover:bg-black/5"
                style={{
                  border: `1.5px solid ${C.fg}30`,
                  color: C.fg,
                }}
              >
                GitHub ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </FadeUp>
  );
}

export default function Projects() {
  return (
    <section id="work" className="py-32" style={{ background: C.bg }}>
      <Container>
        <FadeUp>
          <SectionEyebrow number="03" label="Selected Work" />
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2
            className="font-heading font-black mb-20 leading-tight"
            style={{
              fontSize: "clamp(2.5rem, 5.5vw, 5rem)",
              color: C.fg,
              letterSpacing: "-0.03em",
            }}
          >
            Things I&apos;ve
            <br />
            <span style={{ color: C.accent }}>Built.</span>
          </h2>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
