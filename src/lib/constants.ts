// ─── Base Path ─────────────────────────────────────────────────────────────────
export const BASE_PATH =
  process.env.NODE_ENV === "production" ? "/portfolio" : "";

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
  highlights?: string[];
  tools: string[];
  accentColor: string;
  bgColor: string;
  image: string | null;
  prototype?: string;
  github?: string;
  status?: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

// ─── Data ──────────────────────────────────────────────────────────────────────
export const ROLES: string[] = [
  "AI Business Partner",
  "Full-stack Developer",
  "AI Solution Designer",
  "Business Analyst",
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Wire & Wireless Co., Ltd. (True Corporation Group)",
    role: "AI Business Partner",
    period: "Jun 2026 – Present",
    color: C.accentSoft,
    dot: C.accent,
    bullets: [
      "Translate business problems and workflows into AI use cases, then design solutions that fit real operations — not demos that die after the pitch.",
      "Own end-to-end delivery: requirements, solution design, full-stack build, integration, UAT, deployment, user training, and post-go-live support.",
      "Ship production systems (Sales KPI, SitePulse, SSO Portal) with Docker/Portainer deploy, role-based access, and capacity targets of ~500–1,000 concurrent users.",
      "Drive AI adoption through workshops, stakeholder demos, PoCs (e.g. on-device PPE detection), and feasibility / cost-benefit framing for leadership.",
      "Partner with field ops, sales, and cross-functional teams so technical choices map to measurable process gains.",
    ],
  },
  {
    company: "CP ALL Public Company Limited",
    role: "AI Prototype Developer Intern",
    period: "Jan – May 2026",
    color: C.accent2Soft,
    dot: C.accent2,
    bullets: [
      "Built AI prototypes and PoC features to test model / architecture feasibility before full investment.",
      "Designed UX/UI and migrated the department site from WordPress to Next.js + Sanity CMS so content teams can self-publish.",
      "Reviewed AI research papers and distilled findings into implementation notes for the team.",
    ],
  },
  {
    company: "Student Loans Fund",
    role: "Graphic Designer Intern",
    period: "Aug – Oct 2025",
    color: "#F0FDF4",
    dot: "#16A34A",
    bullets: [
      "Designed PR posters published on official university channels.",
      "Edited tutorial videos for the university website.",
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: "Sales Tools KPI Monitoring",
    year: "2026",
    tag: "Web · Full-stack · Production",
    status: "Production",
    description:
      "Mobile-first sales monitoring for True field sales — staff log daily sales; shop/area managers see near real-time totals, history, and rankings. Monitoring-only (not a CRM): real revenue + order counts, no KPI targets in-app. Designed for ~500 concurrent users.",
    highlights: [
      "Role-based experience for sale · shop manager (SM) · area manager (AM), each with scoped dashboards and ranking views.",
      "Auth via NextAuth credentials + optional SSO through the internal Portal hub; OTP password reset via SMTP.",
      "Thai-first UI framed for iPhone (390×844): home, entry sheets, history, podium ranking, and profile.",
      "Stack: Next.js 15 + Express + Prisma/PostgreSQL, Docker deploy (team shared-db or BU standalone / portal basePath).",
    ],
    tools: [
      "Next.js 15",
      "Express",
      "PostgreSQL",
      "Prisma",
      "NextAuth",
      "Docker",
      "Tailwind CSS",
    ],
    accentColor: C.accent,
    bgColor: C.accentSoft,
    image: null,
  },
  {
    id: 2,
    title: "SitePulse",
    year: "2026",
    tag: "Web · Ops Platform · Production",
    status: "Production",
    description:
      "Field operations platform for solar install / site inspection progress at W&W. Admin Console for planners and RPM; technicians check in via LINE/LIFF with photos and milestone updates. Architecture sized for ~1,000 concurrent users.",
    highlights: [
      "End-to-end flow: Customer → Site (geofence) → Project → Milestone → Task / Check-in / Photo, with RPM verify and Gantt-style tracking.",
      "LINE webhook + public check-in pages; Admin Console modules for exclusive summary, map, site progress, contractors, and PDF reports.",
      "Express API + Nuxt 3 SPA, MySQL, Redis cache, cron worker for milestone / non-compliance alerts.",
      "Production deploy via Docker + Portainer GitOps under /sitepulse on the corporate reverse proxy.",
    ],
    tools: [
      "Nuxt 3",
      "Express",
      "MySQL",
      "Redis",
      "Sequelize",
      "LINE LIFF",
      "Docker",
      "Portainer",
    ],
    accentColor: C.accent2,
    bgColor: C.accent2Soft,
    image: null,
  },
  {
    id: 3,
    title: "Internal SSO Portal Hub",
    year: "2026",
    tag: "Web · UX/UI · Full-stack",
    status: "Production",
    description:
      "Central hub for Wire & Wireless internal tools — UX/UI through full-stack: one place to discover apps, sign in, and jump into sibling systems via SSO.",
    highlights: [
      "Designed and built the portal as a center hub: landing program cards, login/register, profile, and admin surfaces.",
      "JWT SSO so users authenticate once and open linked internal apps (e.g. Sales KPI) without re-login.",
      "Program catalog + access control — admins manage which tools appear and who can request/use them.",
      "Shared PostgreSQL auth DB with Docker deploy alongside the team tool ecosystem.",
    ],
    tools: [
      "Next.js 15",
      "Prisma",
      "PostgreSQL",
      "JWT / jose",
      "Figma",
      "Tailwind CSS",
      "Docker",
    ],
    accentColor: "#0EA5E9",
    bgColor: "#F0F9FF",
    image: null,
  },
  {
    id: 4,
    title: "AI-PPE Safety Checker",
    year: "2026",
    tag: "AI · PoC",
    status: "PoC",
    description:
      "On-device PPE detection PoC — upload a site photo, run YOLO locally (no cloud inference), and see pass/fail for helmet, vest, boots plus a safety score. Built to support feasibility and cost-benefit conversations before production rollout.",
    highlights: [
      "Browser prototype with upload UI, per-item confidence, overall verdict, and local-only processing framing.",
      "ROI calculator comparing human inspector cost vs amortized AI/hardware at different monthly image volumes.",
      "Positioned as a decision artifact for workplace safety AI adoption, not just a model demo.",
    ],
    tools: ["YOLO", "JavaScript", "HTML/CSS", "On-device AI"],
    accentColor: "#D97706",
    bgColor: "#FFFBEB",
    image: null,
  },
  {
    id: 5,
    title: "CAiCAMP Internal Website",
    year: "2026",
    tag: "Web · Full-stack",
    status: "Shipped",
    description:
      "End-to-end rebuild of the Creative AI department site during the CP ALL internship — UX through production — so the content team can update pages themselves without waiting on a developer.",
    highlights: [
      "Migrated from WordPress to Next.js + Sanity CMS with structured content editing.",
      "Designed UX/UI in Figma, then implemented the full front-end experience.",
    ],
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity CMS", "Figma"],
    accentColor: C.accent,
    bgColor: C.accentSoft,
    prototype: "https://caicamp.vercel.app/",
    image: `${BASE_PATH}/assets/CAICAMP-Project.png`,
  },
  {
    id: 6,
    title: "Moodkit App",
    year: "2025",
    tag: "Mobile App · Full-stack",
    description:
      "A mood-tracking app built end-to-end — from pain-point discovery and UX research through Figma prototyping to production with .NET MAUI.",
    highlights: [
      "Ran UX research and Figma flows first, then shipped a cross-platform .NET MAUI client in C# / XAML.",
      "Daily mood logging with history views so users can spot patterns and reflect over time.",
    ],
    tools: ["Figma", ".NET MAUI", "C#", "XAML"],
    accentColor: C.accent2,
    bgColor: C.accent2Soft,
    prototype: "https://www.figma.com/proto/mWFOxUqXToT4DbF7TKxukN/MoodKit",
    github: "https://github.com/blymanor/MoodKitApp.git",
    image: `${BASE_PATH}/assets/MoodKit-Project.png`,
  },
  {
    id: 7,
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
    image: `${BASE_PATH}/assets/Techtalent-Project.png`,
  },
  {
    id: 8,
    title: "GetHealthy",
    year: "2023",
    tag: "Mobile · UX/UI",
    description:
      "A health & wellness mobile prototype guiding users through daily habits with clear goal-tracking screens and simple navigation.",
    tools: ["Figma"],
    accentColor: "#D97706",
    bgColor: "#FFFBEB",
    prototype: "https://www.figma.com/proto/DMSoDpl0Otf9rrxDDZvngD/GetHealthy",
    image: `${BASE_PATH}/assets/GetHealthy-Project.png`,
  },
  {
    id: 9,
    title: "Health Hub",
    year: "2023",
    tag: "Mobile · UX/UI",
    description:
      "A comprehensive health-monitoring platform prototype offering intuitive dashboards and concise data summaries, making complex health information easy to follow.",
    tools: ["Figma"],
    accentColor: "#0EA5E9",
    bgColor: "#F0F9FF",
    prototype:
      "https://www.figma.com/proto/LCntHv7Pl5A87pPvBDmcDR/Health-hub?page-id=1%3A3&node-id=1-288&p=f&viewport=97%2C-248%2C0.11&t=VNISNgMZXePifb5X-1&scaling=scale-down&content-scaling=fixed",
    image: `${BASE_PATH}/assets/Healthhub-Project.png`,
  },
];

export const PROJECTS_PER_PAGE = 4;

export const SKILLS_LEFT: SkillGroup[] = [
  {
    label: "Business & AI",
    items: [
      "Requirement Analysis",
      "AI Solution Design",
      "Stakeholder Management",
      "AI Adoption / Workshops",
      "Generative AI",
      "Prompt Engineering",
      "AI Chatbot / Agent",
      "Workflow Automation",
      "PoC & Feasibility",
    ],
  },
  {
    label: "Development",
    items: [
      "Next.js",
      "Nuxt.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "HTML / CSS",
    ],
  },
];

export const SKILLS_RIGHT: SkillGroup[] = [
  {
    label: "Database & DevOps",
    items: [
      "PostgreSQL",
      "MySQL",
      "Prisma",
      "Redis",
      "Docker",
      "Portainer",
      "Git",
    ],
  },
  {
    label: "Design & Tools",
    items: ["Figma", "UX/UI", "Sanity CMS", "Jira", "Photoshop", "CapCut"],
  },
  {
    label: "Languages",
    items: ["Thai — Native", "English — CEFR B2"],
  },
];
