export default function Blog() {
  return (
    <section
      id="blog"
      className="border-t border-border bg-background-elevated py-24"
    >
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="font-mono text-sm uppercase tracking-widest text-neon-soft">
          // Blog
        </h2>
        <h3 className="mx-auto mt-4 max-w-xl text-3xl font-bold text-foreground sm:text-4xl">
          Notes on QA, automation, and shipping reliable software.
        </h3>
        <p className="mx-auto mt-4 max-w-md text-muted">
          Long-form write-ups are on the way — check back soon.
        </p>

        <div className="mt-8">
          <a
            href="/blog"
            className="inline-block rounded-md border border-neon bg-neon px-6 py-3 font-mono text-sm font-semibold text-background transition-transform hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(57,255,20,0.5)]"
          >
            Visit Blog →
          </a>
        </div>
      </div>
    </section>
  );
}
