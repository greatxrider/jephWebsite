import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  isLoading?: boolean;
}

export const Button = ({
  variant = "primary",
  size = "md",
  children,
  isLoading,
  className = "",
  disabled,
  ...props
}: ButtonProps) => {
  const baseClasses =
    "font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer hover:cursor-pointer relative z-10";

  const variants = {
    primary: "btn-primary text-white",
    outline: "btn-outline",
    ghost:
      "text-orange-500 hover:text-white hover:bg-orange-500 border-transparent",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={classes} disabled={disabled || isLoading} {...props}>
      {isLoading ? (
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
          Loading...
        </div>
      ) : (
        children
      )}
    </button>
  );
};
