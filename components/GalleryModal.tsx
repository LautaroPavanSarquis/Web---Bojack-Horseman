"use client";

import Image from "next/image";

import type { GalleryItem } from "@/data/gallery";

type GalleryModalProps = {
  item: GalleryItem | null;
  onClose: () => void;
};

export default function GalleryModal({
  item,
  onClose,
}: GalleryModalProps) {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-5 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="glass relative grid w-full max-w-5xl overflow-hidden md:grid-cols-[1.4fr_1fr]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close gallery"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-lg text-white transition-colors hover:bg-[var(--teal)] hover:text-[var(--background)]"
        >
          ×
        </button>

        <div className="relative min-h-[280px] bg-black md:min-h-[500px]">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-contain"
          />
        </div>

        <div className="flex flex-col justify-center p-6 md:p-8">
          
          <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
            {item.title}
          </h2>

          <div className="my-5 h-px w-full bg-white/10" />

          <p className="text-sm leading-relaxed text-slate-300 md:text-base">
            {item.context}
          </p>
        </div>
      </div>
    </div>
  );
}
