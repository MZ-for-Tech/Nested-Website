/* eslint-disable */
import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import { join, extname } from "path";

const ASSETS = "public/ASSETS";

// Target images to compress (those above 50KB)
const targets = [
  // pics — the heaviest
  { src: "public/ASSETS/pics/hq.png",       quality: 82 },
  { src: "public/ASSETS/pics/hq2.png",      quality: 82 },
  { src: "public/ASSETS/pics/building.png", quality: 82 },
  { src: "public/ASSETS/pics/hand.png",     quality: 82 },
  // partner logos
  { src: "public/ASSETS/par-logos/1.png",   quality: 85 },
  { src: "public/ASSETS/par-logos/2.png",   quality: 85 },
  { src: "public/ASSETS/par-logos/3.png",   quality: 85 },
  { src: "public/ASSETS/par-logos/4.png",   quality: 85 },
  { src: "public/ASSETS/par-logos/5.png",   quality: 85 },
  { src: "public/ASSETS/par-logos/6.png",   quality: 85 },
  { src: "public/ASSETS/par-logos/7.png",   quality: 85 },
  { src: "public/ASSETS/par-logos/8.png",   quality: 85 },
  // icons
  { src: "public/ASSETS/icons/9.png",       quality: 80 },
  { src: "public/ASSETS/icons/10.png",      quality: 80 },
  { src: "public/ASSETS/icons/2.png",       quality: 80 },
  { src: "public/ASSETS/icons/3.png",       quality: 80 },
  { src: "public/ASSETS/icons/5.png",       quality: 80 },
];

async function fileSize(path) {
  const s = await stat(path);
  return (s.size / 1024).toFixed(1);
}

console.log("🔧 Optimizing images...\n");

for (const { src, quality } of targets) {
  try {
    const before = await fileSize(src);
    const img = sharp(src);
    const meta = await img.metadata();

    // Re-compress as PNG with pngquant-level compression
    await img
      .png({ quality, compressionLevel: 9, palette: false })
      .toBuffer()
      .then(async (buf) => {
        // Only overwrite if we actually saved space
        if (buf.length < (await stat(src)).size) {
          const { writeFile } = await import("fs/promises");
          await writeFile(src, buf);
        }
      });

    const after = await fileSize(src);
    const saved = ((1 - after / before) * 100).toFixed(0);
    console.log(`✅ ${src.split("/").pop().padEnd(16)} ${before}KB → ${after}KB  (-${saved}%)`);
  } catch (e) {
    console.error(`❌ ${src}: ${e.message}`);
  }
}

console.log("\n✨ Done!");
