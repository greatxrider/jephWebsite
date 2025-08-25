import { ReactNode, HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
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
  ...rest
}: CardProps) => {
  const baseClasses = "card";
  const hoverClasses = hover ? "hover:transform hover:scale-105" : "";
  const glowClasses = glow ? "glow-border" : "";

  const classes = `${baseClasses} ${hoverClasses} ${glowClasses} ${className}`;

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export const CardHeader = ({
  children,
  className = "",
  ...rest
}: CardHeaderProps) => {
  return (
    <div className={`mb-4 ${className}`} {...rest}>
      {children}
    </div>
  );
};

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export const CardContent = ({
  children,
  className = "",
  ...rest
}: CardContentProps) => {
  return (
    <div className={`mb-4 ${className}`} {...rest}>
      {children}
    </div>
  );
};

interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export const CardFooter = ({
  children,
  className = "",
  ...rest
}: CardFooterProps) => {
  return (
    <div className={`mt-auto ${className}`} {...rest}>
      {children}
    </div>
  );
};
