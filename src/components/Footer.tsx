import { personal } from "@/data/profile";

const socialLinks = [
  { label: "GitHub", href: personal.github, external: true },
  { label: "LinkedIn", href: personal.linkedin, external: true },
  { label: "Email", href: `mailto:${personal.email}`, external: false },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted sm:flex-row">
        <p className="font-mono">
          <span className="text-neon-soft">{personal.handle}</span> · built
          with Next.js
        </p>

        <nav aria-label="Social links" className="flex items-center gap-3">
          {socialLinks.map((link, i) => (
            <span key={link.label} className="flex items-center gap-3">
              {i > 0 && (
                <span aria-hidden="true" className="text-neon-soft/40">
                  {"//"}
                </span>
              )}
              <a
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="font-mono text-xs transition-colors hover:text-neon"
              >
                {link.label}
              </a>
            </span>
          ))}
        </nav>

        <p>
          &copy; {year} {personal.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
