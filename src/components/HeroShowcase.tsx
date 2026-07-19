import Image from "next/image";

// Both files are pre-cropped to the same 1400×875 (16:10) frame by
// scripts/optimize-hero-images.mjs, so the panels always render equal-sized.
const PANELS = [
  {
    src: "/hero-vscode.webp",
    alt: "VS Code running a Playwright TypeScript automation project",
  },
  {
    src: "/hero-jira.webp",
    alt: "Jira QA board with test tickets moving across sprint columns",
  },
];

export default function HeroShowcase() {
  return (
    <div className="mx-auto mt-16 grid w-[min(100rem,calc(100vw-8rem))] gap-10 md:grid-cols-2">
      {PANELS.map((panel) => (
        <div key={panel.src} className="relative">
          {/* Per-panel neon backlight — kept strong so it reads over both the
              dark VS Code panel and the bright Jira board. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-5 rounded-3xl bg-neon/30 blur-2xl"
          />
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-neon-dim border-glow">
            <Image
              src={panel.src}
              alt={panel.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      ))}
    </div>
  );
}
