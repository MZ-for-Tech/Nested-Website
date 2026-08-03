import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const alt = "Nested United";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  // Read actual assets
  const logoPath = path.join(process.cwd(), "public", "ASSETS", "logos", "logo.svg");
  const logoSrc = fs.readFileSync(logoPath);
  const logoDataUrl = `data:image/svg+xml;base64,${logoSrc.toString("base64")}`;

  // Pick 5 icons from public/ASSETS/icons
  const iconPaths = [
    "1.png",
    "3.png",
    "4.png",
    "9.png",
    "14.png"
  ];

  const icons = iconPaths.map((iconName) => {
    const p = path.join(process.cwd(), "public", "ASSETS", "icons", iconName);
    const buf = fs.readFileSync(p);
    return `data:image/png;base64,${buf.toString("base64")}`;
  });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FFF9E9",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Scattered Icons */}

        {/* 1 */}
        <img
          alt=""
          src={icons[0]}
          style={{
            position: "absolute",
            top: 80,
            left: 120,
            width: 120,
            height: 120,
          }}
        />

        {/* 2 */}
        <img
          alt=""
          src={icons[1]}
          style={{
            position: "absolute",
            bottom: 90,
            left: 180,
            width: 110,
            height: 110,
          }}
        />

        {/* 3 */}
        <img
          alt=""
          src={icons[2]}
          style={{
            position: "absolute",
            top: 100,
            right: 150,
            width: 130,
            height: 130,
          }}
        />

        {/* 4 */}
        <img
          alt=""
          src={icons[3]}
          style={{
            position: "absolute",
            bottom: 120,
            right: 220,
            width: 100,
            height: 100,
          }}
        />

        {/* 5 */}
        <img
          alt=""
          src={icons[4]}
          style={{
            position: "absolute",
            top: 250,
            right: 50,
            width: 90,
            height: 90,
          }}
        />

        {/* Center Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 800,
            height: 400,
          }}
        >
          <img alt="" src={logoDataUrl} width={1100} height={1100} />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
