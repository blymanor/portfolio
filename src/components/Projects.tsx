"use client";

import { useMemo, useState } from "react";
import Container from "@/components/ui/Container";
import FadeUp from "@/components/ui/FadeUp";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Tag from "@/components/ui/Tag";
import {
  C,
  PROJECTS,
  PROJECTS_PER_PAGE,
  type ProjectItem,
} from "@/lib/constants";

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
          className="relative overflow-hidden shrink-0 h-45 md:h-55"
          style={{ background: project.bgColor }}
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
          <div className="absolute top-4 right-4 flex gap-2">
            {project.status && (
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-lg"
                style={{
                  background: "rgba(255,255,255,0.92)",
                  color: project.accentColor,
                }}
              >
                {project.status}
              </span>
            )}
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
        <div className="p-5 md:p-8 flex flex-col flex-1 gap-4 md:gap-5">
          <h3
            className="font-heading font-black text-xl"
            style={{
              color: C.fg,
              letterSpacing: "-0.02em",
            }}
          >
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
            {project.description}
          </p>
          {project.highlights && project.highlights.length > 0 && (
            <ul className="space-y-2 flex-1">
              {project.highlights.map((h) => (
                <li
                  key={h}
                  className="text-sm flex gap-2.5 items-start leading-relaxed"
                  style={{ color: C.fg + "BB" }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5"
                    style={{ background: project.accentColor }}
                  />
                  {h}
                </li>
              ))}
            </ul>
          )}
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
          {(project.prototype || project.github) && (
            <div className="flex gap-3 pt-2">
              {project.prototype && (
                <a
                  href={project.prototype}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-semibold py-2.5 rounded-full transition-opacity duration-200 hover:opacity-80"
                  style={{
                    background: project.accentColor,
                    color: "#fff",
                  }}
                >
                  View Prototype
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0"
                  >
                    <path d="M15 3h6v6" />
                    <path d="M10 14 21 3" />
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  </svg>
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-semibold py-2.5 rounded-full transition-colors hover:bg-black/5"
                  style={{
                    border: `1.5px solid ${C.fg}30`,
                    color: C.fg,
                  }}
                >
                  GitHub
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="shrink-0"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </FadeUp>
  );
}

export default function Projects() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(PROJECTS.length / PROJECTS_PER_PAGE);

  const pageItems = useMemo(() => {
    const start = page * PROJECTS_PER_PAGE;
    return PROJECTS.slice(start, start + PROJECTS_PER_PAGE);
  }, [page]);

  const goTo = (next: number) => {
    setPage(next);
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="work" className="py-16 md:py-32" style={{ background: C.bg }}>
      <Container>
        <FadeUp>
          <SectionEyebrow number="03" label="Selected Work" />
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2
            className="font-heading font-black mb-10 md:mb-20 leading-tight"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {pageItems.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-10 md:mt-14 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm" style={{ color: C.muted }}>
              Page {page + 1} of {totalPages}
              <span className="mx-2 opacity-40">·</span>
              {PROJECTS.length} projects
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => goTo(Math.max(0, page - 1))}
                disabled={page === 0}
                className="px-4 py-2 rounded-full text-sm font-semibold transition-opacity disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-80"
                style={{
                  border: `1.5px solid ${C.border}`,
                  color: C.fg,
                  background: "#fff",
                }}
                aria-label="Previous page"
              >
                Prev
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  className="w-9 h-9 rounded-full text-sm font-semibold transition-all"
                  style={{
                    background: page === i ? C.accent : "transparent",
                    color: page === i ? "#fff" : C.muted,
                    border:
                      page === i ? "none" : `1.5px solid ${C.border}`,
                  }}
                  aria-label={`Page ${i + 1}`}
                  aria-current={page === i ? "page" : undefined}
                >
                  {i + 1}
                </button>
              ))}
              <button
                type="button"
                onClick={() => goTo(Math.min(totalPages - 1, page + 1))}
                disabled={page >= totalPages - 1}
                className="px-4 py-2 rounded-full text-sm font-semibold transition-opacity disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-80"
                style={{
                  border: `1.5px solid ${C.border}`,
                  color: C.fg,
                  background: "#fff",
                }}
                aria-label="Next page"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
