"use client";

import { ReactNode, HTMLAttributes } from "react";

interface HexCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: "default" | "hex";
  glow?: boolean;
  honeyBorder?: boolean;
  className?: string;
}

export const HexCard = ({
  children,
  variant = "hex",
  glow = false,
  honeyBorder = false,
  className = "",
  ...rest
}: HexCardProps) => {
  const baseClasses = variant === "hex" ? "card-hex" : "card";
  const glowClasses = glow ? "animate-hex-pulse" : "";
  const borderClasses = honeyBorder ? "glow-border-ai" : "";

  return (
    <div
      className={`${baseClasses} ${glowClasses} ${borderClasses} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};
