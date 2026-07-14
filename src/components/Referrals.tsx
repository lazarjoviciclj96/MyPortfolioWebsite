import { personal, referrals } from "@/data/profile";

const recommendationsUrl = `${personal.linkedin}details/recommendations/`;

export default function Referrals() {
  return (
    <section
      id="referrals"
      className="border-t border-border bg-background py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-mono text-sm uppercase tracking-widest text-neon-soft">
              // Referrals
            </h2>
            <p className="mt-4 max-w-xl text-muted">
              What colleagues and managers have said about working with me.
            </p>
          </div>
          <a
            href={recommendationsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-neon bg-neon px-4 py-2 font-mono text-xs font-semibold text-background transition-transform hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(57,255,20,0.5)]"
          >
            View all on LinkedIn →
          </a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {referrals.map((ref, i) => (
            <blockquote
              key={i}
              className="rounded-lg border border-border bg-background-elevated p-6"
            >
              <p className="font-mono text-neon-soft">&ldquo;</p>
              <p className="-mt-4 text-sm leading-relaxed text-foreground">
                {ref.quote}
              </p>
              <footer className="mt-4 text-sm">
                <span className="font-medium text-foreground">
                  {ref.name}
                </span>
                <span className="text-muted"> · {ref.title}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
