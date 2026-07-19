import type { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow: string;
  title?: string;
  description?: string;
  action?: ReactNode;
  align?: "left" | "center";
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  align = "left",
}: SectionHeaderProps) {
  if (align === "center") {
    return (
      <div className="text-center">
        <h2 className="font-mono text-sm uppercase tracking-widest text-neon-soft">
          {`// ${eyebrow}`}
        </h2>
        {title && (
          <h3 className="mx-auto mt-4 max-w-xl text-3xl font-bold text-foreground sm:text-4xl">
            {title}
          </h3>
        )}
        {description && (
          <p className="mx-auto mt-4 max-w-md text-muted">{description}</p>
        )}
        {action && <div className="mt-8">{action}</div>}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div>
        <h2 className="font-mono text-sm uppercase tracking-widest text-neon-soft">
          {`// ${eyebrow}`}
        </h2>
        {title && (
          <h3 className="mt-4 max-w-xl text-3xl font-bold text-foreground sm:text-4xl">
            {title}
          </h3>
        )}
        {description && <p className="mt-4 max-w-xl text-muted">{description}</p>}
      </div>
      {action}
    </div>
  );
}
