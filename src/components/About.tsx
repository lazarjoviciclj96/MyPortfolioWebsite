import Image from "next/image";
import { about, personal } from "@/data/profile";

const certificationsUrl = `${personal.linkedin}details/certifications/`;

export default function About() {
  return (
    <section id="about" className="border-t border-border bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-mono text-sm uppercase tracking-widest text-neon-soft">
          // About Me
        </h2>

        <div className="mt-6 flex flex-col gap-8 sm:flex-row sm:items-center">
          <div className="relative mx-auto h-[280px] w-[280px] shrink-0 overflow-hidden rounded-3xl border border-neon-dim border-glow sm:mx-0">
            <Image
              src={personal.headshot}
              alt={personal.name}
              fill
              sizes="280px"
              className="object-cover"
              priority
            />
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-foreground">
            {about.summary}
          </p>
        </div>

        <div className="mt-16">
          <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
            Skills
          </h3>
          <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(about.skills).map(([group, items]) => (
              <div key={group}>
                <p className="mb-3 text-sm font-medium text-foreground">
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
        </div>

        <div className="mt-16">
          <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
            Experience
          </h3>
          <ol className="mt-6 space-y-8 border-l border-border pl-6">
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
        </div>

        <div className="mt-16">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
              Certifications
            </h3>
            <a
              href={certificationsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-neon bg-neon px-4 py-2 font-mono text-xs font-semibold text-background transition-transform hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(57,255,20,0.5)]"
            >
              View all on LinkedIn →
            </a>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {about.certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex flex-col gap-2 rounded-lg border border-neon-dim bg-background-elevated px-4 py-4"
              >
                <p className="text-sm font-medium leading-snug text-foreground">
                  {cert.name}
                </p>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs text-muted">{cert.issuer}</span>
                  <span
                    className={`whitespace-nowrap font-mono text-xs ${
                      cert.status.toLowerCase().includes("progress")
                        ? "text-amber-400"
                        : "text-neon-soft"
                    }`}
                  >
                    {cert.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
            Education
          </h3>
          <div className="mt-6 space-y-2">
            {about.education.map((edu) => (
              <div key={edu.degree}>
                <p className="font-semibold text-foreground">{edu.degree}</p>
                <p className="text-sm text-muted">{edu.school}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
