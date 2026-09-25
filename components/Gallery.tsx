"use client";

import { useState } from "react";
import Image from "next/image";

import GalleryModal from "@/components/GalleryModal";
import type { GalleryItem } from "@/data/gallery";

type GalleryProps = {
  items: GalleryItem[];
};

export default function Gallery({ items }: GalleryProps) {
  const [selectedItem, setSelectedItem] =
    useState<GalleryItem | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setSelectedItem(item)}
            className="group relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-[var(--background-secondary)] text-left transition-all duration-300 hover:-translate-y-1 hover:border-[var(--teal)]/40"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-5">
              
              <h2 className="mt-1 text-lg font-semibold text-white">
                {item.title}
              </h2>
            </div>
          </button>
        ))}
      </div>

      <GalleryModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </>
  );
}