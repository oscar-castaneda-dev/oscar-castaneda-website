"use client";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import Image from "next/image";

import { images } from "@/data/sampleGallery";
import type { GalleryImage } from "@/types/image";
import { blurDataURL } from "@/conts/blur-placeholder";
import { Button } from "../ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { getImageDimensions } from "@/lib/image-utils";

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [open, setOpen] = useState(false);

  const handleOpenImage = (image: GalleryImage) => {
    setSelectedImage(image);
    setOpen(true);
  };

  return (
    <section>
      {/* grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative group cursor-pointer overflow-hidden rounded-lg hover:shadow-md transition-shadow duration-300 aspect-square"
            onClick={() => handleOpenImage(image)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              placeholder="blur"
              blurDataURL={blurDataURL}
              priority={image.id <= 4}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                <Button className="cursor-pointer gap-2" variant="secondary">
                  <ZoomIn className="size-4" />
                  View larger
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* image previewer */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="p-0 border-0 bg-transparent shadow-none flex items-center justify-center max-w-full md:max-w-2xl w-[90vw] h-auto"
          showCloseButton={false}
        >
          <DialogHeader className="sr-only">
            <DialogTitle>{selectedImage?.alt || ""}</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          {selectedImage &&
            (() => {
              const dimentions = getImageDimensions(selectedImage.src);
              return (
                <div
                  className="relative bg-black/95 rounded-lg overflow-hidden"
                  style={{
                    width: `${dimentions.modalWidth}px`,
                    height: `${dimentions.modalHeight}px`,
                  }}
                >
                  <Image
                    src={selectedImage.src || "/placeholder.svg"}
                    alt={selectedImage.alt}
                    fill
                    className="object-cover rounded-lg"
                    sizes="90vw"
                  />
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-2 rounded-lg">
                    <p className="text-sm font-medium">{selectedImage.alt}</p>
                  </div>
                  <Button
                    onClick={() => setOpen(false)}
                    aria-label="close"
                    className="absolute cursor-pointer top-3 right-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors z-10"
                  >
                    <X className="size-3" />
                  </Button>
                </div>
              );
            })()}
        </DialogContent>
      </Dialog>
    </section>
  );
}
