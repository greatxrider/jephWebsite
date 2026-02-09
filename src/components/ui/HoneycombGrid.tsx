"use client";

import { ReactNode } from "react";

interface HoneycombGridProps {
  children: ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
}

export const HoneycombGrid = ({
  children,
  columns = 3,
  className = "",
}: HoneycombGridProps) => {
  const colClasses = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 xl:grid-cols-4",
  };

  return (
    <div className={`grid ${colClasses[columns]} gap-6 ${className}`}>
      {children}
    </div>
  );
};
