import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import ScheduleCallButton from "@/components/ScheduleCallButton";
import SectionHeader from "@/components/SectionHeader";
import { contact, personal } from "@/data/profile";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-border bg-background py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeader
            align="center"
            eyebrow="Contact"
            title={contact.heading}
            description={contact.subheading}
          />
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <ScheduleCallButton />
            <Button href={personal.linkedin} external variant="secondary">
              Visit my LinkedIn profile
            </Button>
            <Button href={personal.resumeUrl} download variant="secondary">
              Download Resume
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
