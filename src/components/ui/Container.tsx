import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function Container({
  children,
  className = "",
  style = {},
}: ContainerProps) {
  return (
    <div
      className={`w-full mx-auto px-7 sm:px-12 md:px-16 lg:px-24 ${className}`}
      style={{ maxWidth: "1280px", ...style }}
    >
      {children}
    </div>
  );
}
