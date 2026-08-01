import sharp from "sharp";
import { writeFile, stat } from "fs/promises";

const targets = [
  { src: "public/ASSETS/pics/hq.png",       dest: "public/ASSETS/pics/hq.webp",       quality: 80 },
  { src: "public/ASSETS/pics/hq2.png",      dest: "public/ASSETS/pics/hq2.webp",      quality: 80 },
  { src: "public/ASSETS/pics/building.png", dest: "public/ASSETS/pics/building.webp", quality: 82 },
  { src: "public/ASSETS/pics/hand.png",     dest: "public/ASSETS/pics/hand.webp",     quality: 82 },
  { src: "public/ASSETS/par-logos/1.png",   dest: "public/ASSETS/par-logos/1.webp",   quality: 85 },
  { src: "public/ASSETS/par-logos/2.png",   dest: "public/ASSETS/par-logos/2.webp",   quality: 85 },
  { src: "public/ASSETS/par-logos/3.png",   dest: "public/ASSETS/par-logos/3.webp",   quality: 85 },
  { src: "public/ASSETS/par-logos/4.png",   dest: "public/ASSETS/par-logos/4.webp",   quality: 85 },
  { src: "public/ASSETS/par-logos/5.png",   dest: "public/ASSETS/par-logos/5.webp",   quality: 85 },
  { src: "public/ASSETS/par-logos/6.png",   dest: "public/ASSETS/par-logos/6.webp",   quality: 85 },
  { src: "public/ASSETS/par-logos/7.png",   dest: "public/ASSETS/par-logos/7.webp",   quality: 85 },
  { src: "public/ASSETS/par-logos/8.png",   dest: "public/ASSETS/par-logos/8.webp",   quality: 85 },
];

async function fileSize(path) {
  try { return ((await stat(path)).size / 1024).toFixed(1); } catch { return "N/A"; }
}

console.log("🔧 Converting images to WebP...\n");

for (const { src, dest, quality } of targets) {
  try {
    const before = await fileSize(src);
    const buf = await sharp(src).webp({ quality, effort: 6 }).toBuffer();
    await writeFile(dest, buf);
    const after = (buf.length / 1024).toFixed(1);
    const saved = ((1 - after / before) * 100).toFixed(0);
    console.log(`✅ ${src.split("/").pop().padEnd(16)} PNG ${before}KB → WebP ${after}KB  (-${saved}%)`);
  } catch (e) {
    console.error(`❌ ${src}: ${e.message}`);
  }
}

console.log("\n✨ Done! Update your <Image> src= to use .webp files.");
