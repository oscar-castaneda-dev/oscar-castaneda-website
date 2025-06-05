export function getImageDimensions(src: string) {
  const queryString = src.split("?")[1] || "";
  const params = new URLSearchParams(queryString);

  const height = Number(params.get("height") || "400");
  const width = Number(params.get("width") || 400);

  const aspectRatio = width / height;

  let orientation: "vertical" | "horizontal" | "square";

  if (aspectRatio > 1.2) {
    orientation = "horizontal";
  } else if (aspectRatio < 0.8) {
    orientation = "vertical";
  } else {
    orientation = "square";
  }

  const maxViewportWidth =
    typeof window !== "undefined" ? window.innerWidth * 0.9 : 1200;
  const maxViewportHeight =
    typeof window !== "undefined" ? window.innerHeight * 0.8 : 800;

  let modalWidth: number;
  let modalHeight: number;

  if (orientation === "horizontal") {
    modalWidth = Math.min(maxViewportWidth, 1000);
    modalHeight = Math.round(modalWidth / aspectRatio);

    if (modalHeight > maxViewportHeight) {
      modalHeight = maxViewportHeight;
      modalWidth = Math.round(modalHeight * aspectRatio);
    }
  } else if (orientation === "vertical") {
    modalHeight = Math.min(maxViewportHeight, 700);
    modalWidth = Math.round(modalHeight * aspectRatio);

    if (modalWidth > maxViewportWidth) {
      modalWidth = maxViewportWidth;
      modalHeight = Math.round(modalWidth / aspectRatio);
    }
  } else {
    const size = Math.min(maxViewportWidth, maxViewportHeight, 600);
    modalWidth = size;
    modalHeight = size;
  }

  return {
    originalWidth: width,
    originalHeight: height,
    aspectRatio,
    orientation,
    modalWidth,
    modalHeight,
  };
}
