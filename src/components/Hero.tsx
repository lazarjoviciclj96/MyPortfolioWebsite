import Button from "@/components/Button";
import HeroShowcase from "@/components/HeroShowcase";
import InteractiveGrid from "@/components/InteractiveGrid";
import { hero } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col overflow-hidden bg-background"
    >
      <InteractiveGrid />

      {/* Fade the grid toward the edges so it reads as a background, not noise */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_75%)]" />

      <div className="relative flex w-full flex-1 flex-col items-center justify-center px-6 pb-20 pt-32 text-center">
        <div className="flex max-w-4xl flex-col items-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-neon-dim bg-background-elevated/60 px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-neon opacity-75 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-neon" />
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-neon-soft">
              {hero.eyebrow}
            </span>
          </div>

          <h1 className="font-mono text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            <span className="block text-foreground">{hero.headline}</span>
            <span className="block text-neon text-glow">
              {hero.headlineAccent}
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {hero.subheadline}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href={hero.primaryCta.href}>
              {hero.primaryCta.label} <span aria-hidden="true">→</span>
            </Button>
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>

        <HeroShowcase />
      </div>
    </section>
  );
}
