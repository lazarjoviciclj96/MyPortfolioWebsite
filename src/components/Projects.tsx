import { projects } from "@/data/profile";

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-border bg-background-elevated py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-mono text-sm uppercase tracking-widest text-neon-soft">
          // Projects
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          A few things I&apos;ve built and tested on the job — from automation
          programs to the processes that keep releases predictable.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col rounded-lg border border-border bg-background p-6 transition-colors hover:border-neon-dim hover:border-glow"
            >
              <p className="font-mono text-xs text-muted">{project.company}</p>
              <h3 className="mt-1 font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <p className="mt-4 font-mono text-sm text-neon">
                {project.metric}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-neon-dim px-2.5 py-0.5 font-mono text-xs text-neon-soft"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
