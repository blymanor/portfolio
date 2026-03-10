import type { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
  color: string;
  bg: string;
}

export default function Tag({ children, color, bg }: TagProps) {
  return (
    <span
      className="inline-block text-xs font-semibold px-3 py-1 rounded-full"
      style={{ color, background: bg, fontFamily: "'DM Sans', sans-serif" }}
    >
      {children}
    </span>
  );
}
