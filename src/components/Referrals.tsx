import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { personal, referrals } from "@/data/profile";

const recommendationsUrl = `${personal.linkedin}details/recommendations/`;

export default function Referrals() {
  return (
    <section
      id="referrals"
      className="border-t border-border bg-background py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Referrals"
            description="What colleagues and managers have said about working with me."
            action={
              <Button href={recommendationsUrl} external size="sm">
                View all on LinkedIn →
              </Button>
            }
          />
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {referrals.map((ref, i) => (
            <Reveal key={ref.name} delay={i * 80} className="h-full">
              <blockquote className="relative flex h-full flex-col rounded-lg border border-border bg-background-elevated p-6 transition-colors hover:border-neon-dim">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-5 top-3 select-none font-mono text-6xl leading-none text-neon-dim"
                >
                  &rdquo;
                </span>
                <p className="relative pr-10 text-sm leading-relaxed text-foreground">
                  {ref.quote}
                </p>
                <footer className="mt-auto pt-4 text-sm">
                  <span className="font-medium text-foreground">{ref.name}</span>
                  <span className="text-neon-soft/60">{" // "}</span>
                  <span className="font-mono text-muted">{ref.title}</span>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
