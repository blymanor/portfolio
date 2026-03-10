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
      className={`w-full mx-auto px-5 sm:px-8 md:px-16 lg:px-24 ${className}`}
      style={{ maxWidth: "1280px", ...style }}
    >
      {children}
    </div>
  );
}
