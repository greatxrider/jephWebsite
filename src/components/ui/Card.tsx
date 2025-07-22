import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export const Card = ({
  children,
  className = "",
  hover = true,
  glow = false,
}: CardProps) => {
  const baseClasses = "card";
  const hoverClasses = hover ? "hover:transform hover:scale-105" : "";
  const glowClasses = glow ? "glow-border" : "";

  const classes = `${baseClasses} ${hoverClasses} ${glowClasses} ${className}`;

  return <div className={classes}>{children}</div>;
};

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export const CardHeader = ({ children, className = "" }: CardHeaderProps) => {
  return <div className={`mb-4 ${className}`}>{children}</div>;
};

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export const CardContent = ({ children, className = "" }: CardContentProps) => {
  return <div className={`mb-4 ${className}`}>{children}</div>;
};

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export const CardFooter = ({ children, className = "" }: CardFooterProps) => {
  return <div className={`mt-auto ${className}`}>{children}</div>;
};
