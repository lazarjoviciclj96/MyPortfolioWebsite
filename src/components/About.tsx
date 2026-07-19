import Image from "next/image";
import type { ReactNode } from "react";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import ScheduleCallButton from "@/components/ScheduleCallButton";
import SectionHeader from "@/components/SectionHeader";
import { about, hero, personal } from "@/data/profile";

const certificationsUrl = `${personal.linkedin}details/certifications/`;

// Wrap metrics (numbers, percentages, "zero") in a neon span so achievements
// pop when a recruiter scans the bullets.
const METRIC_RE = /(~?\d[\d.,]*\+?%?|\bzero\b)/gi;
function highlightMetrics(text: string): ReactNode {
  return text
    .split(METRIC_RE)
    .map((part, i) =>
      i % 2 === 1 ? (
        <span key={i} className="font-mono font-medium text-neon-soft">
          {part}
        </span>
      ) : (
        part
      )
    );
}

function FactChip({ children }: { children: ReactNode }) {
  return (
    <li className="inline-flex items-center gap-2 rounded-full border border-neon-dim bg-background-elevated/60 px-3 py-1.5 font-mono text-xs text-neon-soft">
      {children}
    </li>
  );
}

export default function About() {
  const currentJob = about.experience[0];

  return (
    <section id="about" className="border-t border-border bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeader eyebrow="About Me" />
        </Reveal>

        {/* Intro: headshot + summary + quick facts + CTAs */}
        <Reveal className="mt-8">
          <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:items-start">
            <div className="relative mx-auto h-[280px] w-[280px] shrink-0 overflow-hidden rounded-3xl border border-neon-dim border-glow lg:mx-0">
              <Image
                src={personal.headshot}
                alt={personal.name}
                fill
                sizes="280px"
                className="object-cover"
                priority
              />
            </div>
            <div>
              <p className="text-lg leading-relaxed text-foreground">
                {about.summary}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                <FactChip>
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-neon opacity-75 motion-safe:animate-ping" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-neon" />
                  </span>
                  {hero.eyebrow}
                </FactChip>
                <FactChip>{personal.location}</FactChip>
                <FactChip>{currentJob.location}</FactChip>
                <FactChip>Currently @ {currentJob.company}</FactChip>
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={personal.resumeUrl} download>
                  Download resume
                </Button>
                <ScheduleCallButton variant="secondary" />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Experience */}
        <div className="mt-20">
          <Reveal>
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
              Experience
            </h3>
          </Reveal>
          <ol className="mt-8 space-y-12 border-l border-border pl-8">
            {about.experience.map((job, i) => (
              <Reveal
                as="li"
                key={`${job.company}-${job.period}`}
                className="relative"
                delay={i * 90}
              >
                {i === 0 ? (
                  <span className="absolute -left-[37px] top-1.5 flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-neon opacity-75 motion-safe:animate-ping" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-neon" />
                  </span>
                ) : (
                  <span className="absolute -left-[36px] top-2 h-2 w-2 rounded-full bg-neon-soft/60" />
                )}

                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                  <div>
                    <p className="text-base font-semibold text-foreground">
                      {job.role}
                    </p>
                    <p className="font-mono text-sm text-neon-soft">
                      {job.company}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted">
                      {job.period}
                    </span>
                    <span className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted">
                      {job.location}
                    </span>
                    {i === 0 && (
                      <span className="rounded-full border border-neon-dim px-3 py-1 font-mono text-xs text-neon">
                        Current
                      </span>
                    )}
                  </div>
                </div>

                <ul className="mt-3 space-y-1.5">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-2 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neon-dim" />
                      <span>{highlightMetrics(bullet)}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Skills */}
        <div className="mt-20">
          <Reveal>
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
              Skills
            </h3>
          </Reveal>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(about.skills).map(([group, items], i) => (
              <Reveal key={group} delay={Math.min(i, 5) * 70} className="h-full">
                <div className="h-full rounded-lg border border-border bg-background-elevated p-5 transition-colors hover:border-neon-dim">
                  <p className="font-mono text-xs uppercase tracking-widest text-neon-soft">
                    {group}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
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
              </Reveal>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-20">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
                Certifications
              </h3>
              <Button href={certificationsUrl} external size="sm">
                View all on LinkedIn →
              </Button>
            </div>
          </Reveal>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {about.certifications.map((cert, i) => (
              <Reveal
                key={cert.name}
                delay={Math.min(i, 5) * 60}
                className="h-full"
              >
                <div className="flex h-full flex-col gap-2 rounded-lg border border-neon-dim bg-background-elevated px-4 py-4 transition-[border-color,box-shadow] hover:border-glow">
                  <p className="text-sm font-medium leading-snug text-foreground">
                    {cert.name}
                  </p>
                  <div className="mt-auto flex items-center justify-between gap-3">
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
              </Reveal>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-20">
          <Reveal>
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
              Education
            </h3>
          </Reveal>
          <Reveal className="mt-6">
            <div className="rounded-lg border border-border bg-background-elevated px-5 py-4 sm:max-w-md">
              {about.education.map((edu) => (
                <div key={edu.degree}>
                  <p className="font-semibold text-foreground">{edu.degree}</p>
                  <p className="mt-1 text-sm text-muted">{edu.school}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
