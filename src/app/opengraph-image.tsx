import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { profile } from "@/data/content";

export const alt = `${profile.name}: ${profile.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Open Graph image (§10): name + headline on the off-white background. */
export default async function OpenGraphImage() {
  const fontDir = path.join(process.cwd(), "node_modules/geist/dist/fonts");
  const [sans, mono] = await Promise.all([
    readFile(path.join(fontDir, "geist-sans/Geist-Regular.ttf")),
    readFile(path.join(fontDir, "geist-mono/GeistMono-Regular.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#F7F7F4",
          color: "#26251E",
          fontFamily: "Geist",
        }}
      >
        <div style={{ display: "flex", fontSize: 34 }}>{profile.name}</div>
        <div
          style={{
            display: "flex",
            fontSize: 68,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            maxWidth: 980,
          }}
        >
          {profile.headline}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontFamily: "Geist Mono",
            fontSize: 24,
            color: "#696862",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 7,
              background: "#4C9A6A",
              marginRight: 14,
            }}
          />
          {profile.availability}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: sans, weight: 400, style: "normal" },
        { name: "Geist Mono", data: mono, weight: 400, style: "normal" },
      ],
    },
  );
}
