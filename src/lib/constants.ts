// ─── Design Tokens ─────────────────────────────────────────────────────────────
export const C = {
  bg: "#FAFAFA",
  fg: "#141414",
  muted: "#888",
  accent: "#FF4D2E",
  accentSoft: "#FFF0ED",
  accent2: "#5B4FE8",
  accent2Soft: "#F0EFFE",
  lime: "#B8F400",
  border: "#EBEBEB",
} as const;

// ─── Types ─────────────────────────────────────────────────────────────────────
export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  color: string;
  dot: string;
  bullets: string[];
}

export interface ProjectItem {
  id: number;
  title: string;
  year: string;
  tag: string;
  description: string;
  tools: string[];
  accentColor: string;
  bgColor: string;
  image: string | null;
  prototype?: string;
  github?: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

// ─── Data ──────────────────────────────────────────────────────────────────────
export const ROLES: string[] = [
  "Frontend Developer",
  "Full-stack Developer",
  "UX/UI Designer",
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "CP ALL Public Company Limited",
    role: "AI Prototype Developer Intern",
    period: "Jan 2026 – Present",
    color: C.accentSoft,
    dot: C.accent,
    bullets: [
      "Designed UX/UI and developed websites per project requirements",
      "Built AI prototypes & PoC features to evaluate system feasibility",
      "Reviewed & summarised AI research papers for applied development",
    ],
  },
  {
    company: "Student Loans Fund",
    role: "Graphic Designer Intern",
    period: "Aug – Oct 2025",
    color: C.accent2Soft,
    dot: C.accent2,
    bullets: [
      "Designed PR posters published on official university channels",
      "Edited tutorial videos for the university website",
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: "CAiCAMP Internal Website",
    year: "2026",
    tag: "Web · Full-stack",
    description:
      "Rebuilt the department's internal website end-to-end — UX research, Figma, Next.js + TypeScript frontend, and Sanity CMS integration so non-devs can manage content independently.",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity CMS"],
    accentColor: C.accent,
    bgColor: C.accentSoft,
    prototype:
      "https://www.figma.com/proto/qwB5QsME8DZKC15corA6jA/Creative-AI-Club?page-id=1%3A3&node-id=900-2918&p=f&viewport=80%2C-24%2C0.11&t=TG77V510zocfHWVd-1&scaling=scale-down&content-scaling=fixed",
    image: null,
  },
  {
    id: 2,
    title: "Moodkit App",
    year: "2025",
    tag: "Mobile App · Full-stack",
    description:
      "A mood-tracking app built end-to-end — from pain-point discovery and UX research through Figma prototyping to production with .NET MAUI.",
    tools: ["Figma", ".NET MAUI", "C#", "XAML"],
    accentColor: C.accent2,
    bgColor: C.accent2Soft,
    prototype: "https://www.figma.com/proto/mWFOxUqXToT4DbF7TKxukN/MoodKit",
    github: "https://github.com/blymanor/MoodKitApp.git",
    image: "/assets/MoodKit-Project.png",
  },
  {
    id: 3,
    title: "TechTalent",
    year: "2024",
    tag: "Web · Frontend",
    description:
      "A job-application website with clean UI and smooth modal forms — built to make browsing openings and applying effortless.",
    tools: ["Figma", "HTML", "CSS", "JavaScript"],
    accentColor: "#16A34A",
    bgColor: "#F0FDF4",
    prototype: "https://blymanor.github.io/miniproject_cs319/",
    github: "https://github.com/blymanor/miniproject_cs319.git",
    image: "/assets/Techtalent-Project.png",
  },
  {
    id: 4,
    title: "GetHealthy",
    year: "2023",
    tag: "Mobile · UX/UI",
    description:
      "A health & wellness mobile prototype guiding users through daily habits with clear goal-tracking screens and simple navigation.",
    tools: ["Figma"],
    accentColor: "#D97706",
    bgColor: "#FFFBEB",
    prototype: "https://www.figma.com/proto/DMSoDpl0Otf9rrxDDZvngD/GetHealthy",
    image: "/assets/GetHealthy-Project.png",
  },
];

export const SKILLS_LEFT: SkillGroup[] = [
  {
    label: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    label: "Backend & CMS",
    items: ["C#", "C++", "Python", ".NET", "Sanity CMS"],
  },
];

export const SKILLS_RIGHT: SkillGroup[] = [
  {
    label: "Tools",
    items: ["Figma", "Git", "GitHub", "Jira", "Photoshop", "CapCut"],
  },
  { label: "Languages", items: ["Thai — Native", "English — CEFR B2"] },
];
