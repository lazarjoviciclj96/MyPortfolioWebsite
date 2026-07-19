import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  variant?: "primary" | "secondary";
  size?: "md" | "sm";
  href: string;
  external?: boolean;
  className?: string;
  children: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">;

const VARIANT_CLASSES = {
  primary:
    "bg-neon text-background hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(57,255,20,0.5)]",
  secondary:
    "border border-neon-dim text-neon-soft hover:border-neon hover:text-neon",
};

const SIZE_CLASSES = {
  md: "px-6 py-3 text-sm",
  sm: "px-4 py-2 text-xs",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  external = false,
  className = "",
  children,
  ...rest
}: ButtonProps) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-mono font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neon ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
