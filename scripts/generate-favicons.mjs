import sharp from "sharp";
import { writeFile } from "fs/promises";

// Source: the 192x192 logo icon
const SRC = "public/icon-192.png";

const sizes = [
  { size: 16,  out: "public/favicon-16x16.png"  },
  { size: 32,  out: "public/favicon-32x32.png"  },
  { size: 48,  out: "public/favicon-48x48.png"  },
  { size: 96,  out: "public/favicon-96x96.png"  },
  { size: 180, out: "public/apple-touch-icon.png" }, // standard Apple touch icon size
  { size: 192, out: "public/icon-192.png",  overwrite: true },
  { size: 512, out: "public/icon-512.png",  overwrite: true },
];

console.log("🔧 Generating favicon sizes from logo...\n");

for (const { size, out } of sizes) {
  const buf = await sharp(SRC)
    .resize(size, size, { fit: "contain", background: { r: 255, g: 251, b: 243, alpha: 1 } }) // #fffbf3 background
    .png({ quality: 90 })
    .toBuffer();
  await writeFile(out, buf);
  console.log(`✅ ${String(size).padStart(3)}×${size}  →  ${out}`);
}

// Also replace app/favicon.ico — copy the 48x48 PNG as a raw .ico
// (browsers accept PNG renamed as .ico in modern usage)
// For a proper multi-size ICO we just use the 32x32 PNG bytes
const ico32 = await sharp(SRC)
  .resize(32, 32, { fit: "contain", background: { r: 255, g: 251, b: 243, alpha: 1 } })
  .png()
  .toBuffer();

// Save a proper PNG-based favicon.ico (modern browsers support PNG inside ICO containers)
// We'll just replace it with the 32x32 PNG — all modern browsers support it
await writeFile("public/favicon.ico", ico32);
await writeFile("app/favicon.ico", ico32);
console.log("✅  32×32  →  public/favicon.ico (updated)");
console.log("✅  32×32  →  app/favicon.ico    (updated)");

console.log("\n✨ Done!");
