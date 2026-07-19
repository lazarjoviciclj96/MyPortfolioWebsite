// One-off: shrinks public/headshot.png (1254px, ~2.1MB) to a 640px WebP.
// 640px = 280 CSS px at 2x DPR with headroom.
// Imports the sharp that ships inside next's optionalDependencies — no new deps.
// If resolution ever breaks after a lockfile change, fall back to
// `npx --yes sharp-cli` or add sharp as a devDependency.
import sharp from "sharp";

await sharp("public/headshot.png")
  .resize(640, 640, { fit: "cover" })
  .webp({ quality: 82 })
  .toFile("public/headshot.webp");

console.log("wrote public/headshot.webp");
