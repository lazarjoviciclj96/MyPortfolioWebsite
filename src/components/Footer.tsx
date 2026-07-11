import { personal } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted sm:flex-row">
        <p className="font-mono">
          <span className="text-neon-soft">{personal.handle}</span> · built
          with Next.js
        </p>
        <p>&copy; {year} {personal.name}. All rights reserved.</p>
        <a href="#top" className="font-mono text-xs hover:text-neon">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
