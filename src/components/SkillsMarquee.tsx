import { about } from "@/data/profile";

// Flatten every skill category into one ordered list, then split it into two
// rows that scroll in opposite directions.
const allSkills = Object.values(about.skills).flat();
const mid = Math.ceil(allSkills.length / 2);
const rows = [allSkills.slice(0, mid), allSkills.slice(mid)];

export default function SkillsMarquee() {
  return (
    <div className="relative border-t border-border bg-background/80 py-6 backdrop-blur-sm">
      {/* Edge fades so pills appear/disappear softly */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

      <div className="flex flex-col gap-4">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="marquee overflow-hidden">
            <div
              className={`marquee-track flex w-max ${
                rowIndex % 2 === 1 ? "marquee-reverse" : ""
              }`}
            >
              {/* Two identical copies make the -50% translate loop seamless */}
              {[0, 1].map((copy) => (
                <div
                  key={copy}
                  className="flex items-center gap-4 pr-4"
                  aria-hidden={copy === 1}
                >
                  {row.map((skill) => (
                    <span
                      key={skill}
                      className="whitespace-nowrap rounded-full border border-neon-dim bg-background-elevated/60 px-4 py-2 font-mono text-xs text-neon-soft transition-colors hover:border-neon hover:text-neon"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
