type ValidImageCount = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

const layoutClasses = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-2 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-2 md:row-span-1",
];

export function generateImageGallery(
  slug: string,
  imageCount: ValidImageCount
) {
  return Array.from({ length: imageCount }, (_, index) => {
    const id = index + 1;
    const src = "/placeholder.svg";
    const alt = `Image of ${slug.replace(/-/g, " ")} ${id}`;
    const className = layoutClasses[index];

    return { id, src, alt, className };
  });
}

// https://example.com/${slug}-${id}.jpg
