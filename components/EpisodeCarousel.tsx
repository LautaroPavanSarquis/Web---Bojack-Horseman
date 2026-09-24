"use client";

import { useRef } from "react";
import Image from "next/image";

import type { Episode } from "@/data/episodes";

type EpisodeCarouselProps = {
  episodes: Episode[];
};

export default function EpisodeCarousel({
  episodes,
}: EpisodeCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    carouselRef.current.scrollBy({
      left: direction === "left" ? -700 : 700,
      behavior: "smooth",
    });
  };

  return (
    <div className="carousel-container">
      <button
        type="button"
        onClick={() => scroll("left")}
        aria-label="Previous episodes"
        className="carousel-button left-2 top-1/2 z-10 -translate-y-1/2"
      >
        ←
      </button>

      <div
        ref={carouselRef}
        className="carousel scrollbar-none"
      >
        {episodes.map((episode) => (
          <article
            key={episode.num}
            className="episode-card glass"
          >
            <div className="episode-card-image">
              <Image
                src={episode.img}
                alt={episode.titulo}
                fill
                sizes="340px"
              />

              <div className="episode-card-gradient" />

              <span className="episode-duration">
                {episode.duracion}
              </span>
            </div>

            <div className="episode-card-content">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--teal)]">
                Episodio {episode.num}
              </p>

              <h3 className="episode-card-title">
                {episode.titulo}
              </h3>

              <p className="episode-card-description">
                {episode.desc}
              </p>
            </div>
          </article>
        ))}
      </div>

      <button
        type="button"
        onClick={() => scroll("right")}
        aria-label="Next episodes"
        className="carousel-button right-2 top-1/2 z-10 -translate-y-1/2"
      >
        →
      </button>
    </div>
  );
}
