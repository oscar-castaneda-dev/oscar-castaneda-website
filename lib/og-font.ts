// lib/og-font.ts

async function fetchFont(family: string, weight: number): Promise<ArrayBuffer> {
  const url = `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&display=swap`;

  const css = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0" },
  }).then((r) => r.text());

  const fontUrl = css.match(/src: url\((.+?)\) format/)?.[1];
  if (!fontUrl) throw new Error(`Font URL not found for ${family}`);

  return fetch(fontUrl).then((r) => r.arrayBuffer());
}

export async function loadOgFonts() {
  const [spaceGrotesk, spaceMono, doto] = await Promise.all([
    fetchFont("Space+Grotesk", 500),
    fetchFont("Space+Mono", 400),
    fetchFont("Doto", 400),
  ]);

  return [
    { name: "Space Grotesk", data: spaceGrotesk, weight: 500 as const },
    { name: "Space Mono", data: spaceMono, weight: 400 as const },
    { name: "Doto", data: doto, weight: 400 as const },
  ];
}
