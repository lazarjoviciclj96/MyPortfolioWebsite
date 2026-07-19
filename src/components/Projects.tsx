import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { personal, projects } from "@/data/profile";

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-border bg-background-elevated py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeader
            eyebrow="Projects"
            description="A few things I've built and tested on the job — from automation programs to the processes that keep releases predictable."
            action={
              <Button href={personal.github} external size="sm">
                View all on GitHub →
              </Button>
            }
          />
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 80} className="h-full">
              <div className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-border bg-background p-6 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-neon-dim hover:border-glow">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
