// One-off: normalizes the two hero showcase screenshots to identical
// 1400×875 (16:10) WebP files so both panels render at exactly the same size.
// Uses the sharp that ships inside next's optionalDependencies — no new deps.
// Re-run with fresh source paths if the screenshots are ever replaced.
import sharp from "sharp";

const W = 1400;
const H = 875;

const jobs = [
  {
    src: "C:/Users/LuckyLJ/Downloads/199ae102-e9ea-41f6-989a-3403c70423e5.png",
    out: "public/hero-vscode.webp",
    // 3:2 source → tiny even crop top/bottom.
    position: "centre",
  },
  {
    src: "C:/Users/LuckyLJ/Downloads/a8b4ccf9-27b9-4243-a491-66dfd83d16bd.png",
    out: "public/hero-jira.webp",
    // Wide board → keep the left columns, clip the far-right edge.
    position: "left",
  },
];

for (const { src, out, position } of jobs) {
  await sharp(src)
    .resize(W, H, { fit: "cover", position })
    .webp({ quality: 82 })
    .toFile(out);
  console.log("wrote", out);
}
