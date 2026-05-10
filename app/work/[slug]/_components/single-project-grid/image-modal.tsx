"use client";

import Image from "next/image";

interface ImageModalProps {
  alt: string;
  index: number;
  src: string;
}

export function ImageModal({ alt, index, src }: ImageModalProps) {
  return (
    <div
      id={`lightbox-${index}`}
      popover="auto"
      className="fixed inset-0 w-screen h-screen max-w-none max-h-none m-0 p-0 border-0 bg-black/92 cursor-zoom-out overflow-hidden"
      onToggle={(e) => {
        const { newState } = e.nativeEvent as ToggleEvent;
        document.body.style.overflow = newState === "open" ? "hidden" : "";
      }}
    >
      {/* button that closes the modal anywhere on the screen */}
      <button
        popoverTarget={`lightbox-${index}`}
        popoverTargetAction="hide"
        className="absolute inset-0 cursor-zoom-out"
        aria-label="close modal"
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-full max-w-5xl mx-8 h-[90vh]">
          <Image
            src={src}
            alt={alt}
            loading="eager"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
