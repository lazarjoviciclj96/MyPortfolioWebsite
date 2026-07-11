import InteractiveGrid from "@/components/InteractiveGrid";
import SkillsMarquee from "@/components/SkillsMarquee";
import { hero } from "@/data/profile";

const statIcons = [
  // Shield — years of experience
  <svg
    key="shield"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <path d="M12 2l8 4v6c0 5-3.4 8.6-8 10-4.6-1.4-8-5-8-10V6l8-4z" />
  </svg>,
  // Target — defect escape rate
  <svg
    key="target"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="h-6 w-6"
  >
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
  </svg>,
  // Zap — faster automation
  <svg
    key="zap"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
  </svg>,
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col overflow-hidden bg-background"
    >
      <InteractiveGrid />

      {/* Fade the grid toward the edges so it reads as a background, not noise */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_75%)]" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-6 pb-16 pt-32 text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-neon-dim bg-background-elevated/60 px-4 py-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-neon" />
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-neon-soft">
            {hero.eyebrow}
          </span>
        </div>

        <h1 className="max-w-4xl font-mono text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          <span className="block text-foreground">{hero.headline}</span>
          <span className="block text-neon text-glow">
            {hero.headlineAccent}
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {hero.subheadline}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={hero.primaryCta.href}
            className="rounded-md bg-neon px-6 py-3 font-mono text-sm font-semibold text-background transition-transform hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(57,255,20,0.5)]"
          >
            {hero.primaryCta.label} <span aria-hidden="true">→</span>
          </a>
          <a
            href={hero.secondaryCta.href}
            className="rounded-md border border-neon-dim px-6 py-3 font-mono text-sm font-semibold text-neon-soft transition-colors hover:border-neon hover:text-neon"
          >
            {hero.secondaryCta.label}
          </a>
        </div>

        <dl className="mt-16 flex w-full max-w-2xl items-stretch justify-center divide-x divide-border">
          {hero.stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-1 flex-col items-center gap-2 px-4"
            >
              <span className="text-neon" aria-hidden="true">
                {statIcons[i]}
              </span>
              <dt className="font-mono text-2xl font-bold text-neon sm:text-3xl">
                {stat.value}
              </dt>
              <dd className="text-xs text-muted sm:text-sm">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <SkillsMarquee />
    </section>
  );
}
