import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
};

const variants = {
  primary:
    "bg-brand text-white shadow-[0_10px_30px_rgba(31,107,79,0.18)] hover:bg-brand-dark",
  secondary:
    "border border-line bg-white/70 text-foreground hover:border-brand/30 hover:bg-white",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
