import { C } from "@/lib/constants";

interface SectionEyebrowProps {
  number: string;
  label: string;
}

export default function SectionEyebrow({ number, label }: SectionEyebrowProps) {
  return (
    <div className="flex items-center gap-3 mb-14">
      <span
        className="font-heading text-xs font-bold"
        style={{ color: C.accent }}
      >
        {number}
      </span>
      <div className="h-px w-8" style={{ background: C.accent }} />
      <span
        className="text-xs tracking-[0.22em] uppercase font-medium"
        style={{ color: C.muted }}
      >
        {label}
      </span>
    </div>
  );
}
