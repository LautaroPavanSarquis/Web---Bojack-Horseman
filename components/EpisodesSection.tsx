'use client';

import { useState, useRef } from 'react';
import { episodesData } from '@/app/data/episodes'; 

export function EpisodesSection() {
  const [selectedSeason, setSelectedSeason] = useState<number>(1);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleSeasonChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSeason(Number(e.target.value));
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  const currentEpisodes = episodesData[selectedSeason] || [];

  return (
    <section id="episodios" className="py-8 px-[5%] max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
           <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mt-0.5">
            Episodios
          </h2>
        </div>

        <select
          value={selectedSeason}
          onChange={handleSeasonChange}
          className="bg-[#0f172a] text-slate-200 text-sm border border-[#00bcd4]/30 rounded-lg px-4 py-2 focus:outline-none focus:border-[#00bcd4] cursor-pointer shadow-md transition-colors"
        >
          <option value={1}>Temporada 1</option>
          <option value={2}>Temporada 2</option>
          <option value={3}>Temporada 3</option>
          <option value={4}>Temporada 4</option>
          <option value={5}>Temporada 5</option>
          <option value={6}>Temporada 6</option>
        </select>
      </div>

      <div className="relative group">
        <button
          onClick={() => scroll('left')}
          aria-label="Anterior"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-black/70 hover:bg-[#00bcd4] hover:text-black text-white p-3 rounded-full backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl hidden md:flex items-center justify-center"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div
          ref={carouselRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 pt-1"
        >
          {currentEpisodes.map((ep) => (
            <article
              key={ep.num}
              className="group/card flex-none w-[280px] md:w-[320px] snap-start rounded-xl p-3.5 bg-white/[0.03] border border-white/10 backdrop-blur-md flex flex-col gap-3 hover:border-[#00bcd4]/50 hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-300 shadow-lg cursor-pointer"
            >
              <div className="relative w-full h-[160px] rounded-lg overflow-hidden border border-white/5">
                <img
                  src={ep.img}
                  alt={ep.titulo}
                  className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-md border border-white/10 text-[#00bcd4] text-xs px-2 py-0.5 rounded font-mono font-bold">
                  {ep.duracion}
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                <h3 className="font-bold text-sm text-white group-hover/card:text-[#00bcd4] transition-colors line-clamp-1">
                  {ep.num}. {ep.titulo}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-3 leading-snug">
                  {ep.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          aria-label="Siguiente"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-black/70 hover:bg-[#00bcd4] hover:text-black text-white p-3 rounded-full backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl hidden md:flex items-center justify-center"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}