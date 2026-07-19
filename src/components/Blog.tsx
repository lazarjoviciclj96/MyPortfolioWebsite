import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

export default function Blog() {
  return (
    <section
      id="blog"
      className="border-t border-border bg-background-elevated py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeader
            align="center"
            eyebrow="Blog"
            title="Notes on QA, automation, and shipping reliable software."
            description="Long-form write-ups are on the way — check back soon."
            action={
              <Button href="/blog">
                Visit Blog <span aria-hidden="true">→</span>
              </Button>
            }
          />
        </Reveal>
      </div>
    </section>
  );
}
