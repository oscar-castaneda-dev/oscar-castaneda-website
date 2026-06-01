import { ImageResponse } from "next/og";
import { loadOgFonts } from "@/lib/og-font";
import { OgImageLayout } from "@/lib/og-image";

export const alt = "Oscar Castaneda — AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const fonts = await loadOgFonts();

  return new ImageResponse(
    <OgImageLayout
      label="// portfolio"
      title="Oscar Castaneda"
      description="AI Engineer — ML, NLP & inference-powered digital products"
    />,
    { ...size, fonts },
  );
}
