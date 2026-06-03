import { ImageResponse } from "next/og";
import { loadOgFonts } from "@/lib/og-font";
import { OgImageLayout } from "@/lib/og-image";

export const alt = "About — Oscar Castaneda";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const fonts = await loadOgFonts();

  return new ImageResponse(
    <OgImageLayout
      label="// about"
      title="About"
      description="AI Engineer based in Mexico — ML, NLP & full-stack development."
    />,
    { ...size, fonts },
  );
}
