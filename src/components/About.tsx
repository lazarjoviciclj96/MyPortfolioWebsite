import Image from "next/image";
import { about, personal } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="border-t border-border bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-mono text-sm uppercase tracking-widest text-neon-soft">
          // About Me
        </h2>

        <div className="mt-6 flex flex-col gap-8 sm:flex-row sm:items-start">
          <div className="relative mx-auto h-40 w-40 shrink-0 overflow-hidden rounded-full border border-neon-dim border-glow sm:mx-0">
            <Image
              src={personal.headshot}
              alt={personal.name}
              fill
              sizes="160px"
              className="object-cover grayscale"
              priority
            />
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-foreground">
            {about.summary}
          </p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {about.highlights.map((point) => (
            <div
              key={point}
              className="flex items-start gap-3 rounded-lg border border-border bg-background-elevated p-4"
            >
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-neon" />
              <p className="text-sm leading-relaxed text-muted">{point}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
              Experience
            </h3>
            <ol className="mt-4 space-y-8 border-l border-border pl-6">
              {about.experience.map((job) => (
                <li key={`${job.company}-${job.period}`} className="relative">
                  <span className="absolute -left-[27px] top-1.5 h-2 w-2 rounded-full bg-neon" />
                  <p className="font-mono text-xs text-neon-soft">
                    {job.period} · {job.location}
                  </p>
                  <p className="mt-1 font-semibold text-foreground">
                    {job.role} · {job.company}
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {job.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-2 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>

            <h3 className="mt-10 font-mono text-xs uppercase tracking-widest text-muted">
              Education
            </h3>
            <div className="mt-4 space-y-2">
              {about.education.map((edu) => (
                <div key={edu.degree}>
                  <p className="font-semibold text-foreground">{edu.degree}</p>
                  <p className="text-sm text-muted">{edu.school}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
              Skills
            </h3>
            <div className="mt-4 space-y-5">
              {Object.entries(about.skills).map(([group, items]) => (
                <div key={group}>
                  <p className="mb-2 text-sm font-medium text-foreground">
                    {group}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-neon-dim px-3 py-1 font-mono text-xs text-neon-soft"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <h3 className="mt-10 font-mono text-xs uppercase tracking-widest text-muted">
              Certifications
            </h3>
            <ul className="mt-4 space-y-3">
              {about.certifications.map((cert) => (
                <li
                  key={cert.name}
                  className="flex items-start justify-between gap-3 rounded-lg border border-border bg-background-elevated px-4 py-3"
                >
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {cert.name}
                    </p>
                    <p className="text-xs text-muted">{cert.issuer}</p>
                  </div>
                  <span className="whitespace-nowrap font-mono text-xs text-neon-soft">
                    {cert.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
