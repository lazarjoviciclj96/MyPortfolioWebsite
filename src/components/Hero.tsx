import InteractiveGrid from "@/components/InteractiveGrid";
import { hero } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-background"
    >
      <InteractiveGrid />

      {/* Fade the grid toward the edges so it reads as a background, not noise */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_75%)]" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-32">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon-dim bg-background-elevated/60 px-3 py-1">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-neon" />
          </span>
          <span className="font-mono text-xs text-neon-soft">
            {hero.eyebrow}
          </span>
        </div>

        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
          {hero.headline}
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          {hero.subheadline}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={hero.primaryCta.href}
            className="rounded-md bg-neon px-6 py-3 font-mono text-sm font-semibold text-background transition-transform hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(57,255,20,0.5)]"
          >
            {hero.primaryCta.label}
          </a>
          <a
            href={hero.secondaryCta.href}
            className="rounded-md border border-neon-dim px-6 py-3 font-mono text-sm font-semibold text-neon-soft transition-colors hover:border-neon hover:text-neon"
          >
            {hero.secondaryCta.label}
          </a>
        </div>

        <dl className="mt-20 grid max-w-2xl grid-cols-3 gap-6 border-t border-border pt-8">
          {hero.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="font-mono text-2xl font-bold text-neon sm:text-3xl">
                {stat.value}
              </dt>
              <dd className="mt-1 text-xs text-muted sm:text-sm">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
