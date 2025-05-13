import type { PexelsPhoto } from "@/types/pexels";

export async function getPexelsPhoto(id: string): Promise<PexelsPhoto> {
  const response = await fetch(`https://api.pexels.com/v1/photos/${id}`, {
    headers: {
      Authorization: process.env.NEXT_PEXELS_API_KEY || "",
    },
    cache: "force-cache",
    next: {
      revalidate: 86400,
      tags: [`pexels-photo-${id}`],
    },
  });

  if (!response.ok) {
    return {
      id: 0,
      width: 1200,
      height: 800,
      url: "",
      photographer: "Unknown photographer",
      photographer_url: "https://www.pexels.com",
      src: {
        original: "/placeholder.svg?text=Image+not+available",
        large: "/placeholder.svg?text=Image+not+available",
        medium: "/placeholder.svg?text=Image+not+available",
        small: "/placeholder.svg?text=Image+not+available",
        portrait: "/placeholder.svg?text=Image+not+available",
        landscape: "/placeholder.svg?text=Image+not+available",
        tiny: "data:image/svg+xml;base64,PCFET0NUWVBFIHNWRyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjY2NjY2NjIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlZWVlZWUiLz4KPC9zdmc+", // Base64 SVG placeholder
      },
      alt: "Image not available",
    };
  }

  return await response.json();
}
