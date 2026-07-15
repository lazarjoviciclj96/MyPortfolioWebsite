import { contact, personal } from "@/data/profile";
import ScheduleCallButton from "@/components/ScheduleCallButton";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-border bg-background py-24"
    >
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="font-mono text-sm uppercase tracking-widest text-neon-soft">
          // Contact
        </h2>
        <h3 className="mx-auto mt-4 max-w-xl text-3xl font-bold text-foreground sm:text-4xl">
          {contact.heading}
        </h3>
        <p className="mx-auto mt-4 max-w-md text-muted">
          {contact.subheading}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <ScheduleCallButton />
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-neon-dim px-6 py-3 font-mono text-sm font-semibold text-neon-soft transition-colors hover:border-neon hover:text-neon"
          >
            Visit my LinkedIn profile
          </a>
          <a
            href={personal.resumeUrl}
            download
            className="rounded-md border border-neon-dim px-6 py-3 font-mono text-sm font-semibold text-neon-soft transition-colors hover:border-neon hover:text-neon"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
