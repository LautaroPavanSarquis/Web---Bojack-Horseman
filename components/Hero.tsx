"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  return (
    <section id="hero" className="pt-[130px]">
      <div className="max-w-7xl mx-auto px-[5%] pb-8 flex justify-center">
        <Image
          src="/images/logo-netflix.webp"
          alt="BoJack Horseman"
          width={520}
          height={140}
          priority
          className="w-[240px] sm:w-[320px] md:w-[700px] h-auto"
        />
      </div>

      <div className="relative w-full max-w-7xl mx-auto aspect-video overflow-hidden rounded-2xl border border-[#4FB0AE]/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <video
          ref={videoRef}
          src="/videos/herovideo.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128] via-transparent to-transparent pointer-events-none" />

        <button
          onClick={toggleMute}
          aria-label={muted ? "Activar sonido" : "Silenciar"}
          className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-[#0a1128]/70 backdrop-blur-md border border-[#F1E4C3]/30 flex items-center justify-center text-[#F1E4C3] hover:bg-[#4FB0AE]/40 transition-colors"
        >
          {muted ? "🔇" : "🔊"}
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-5 py-8">
        <div className="glass flex flex-col items-start gap-3 p-4 md:p-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              BoJack Horseman
            </h1>

            <ul className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm md:text-base text-slate-300">
              <li>2020</li>
              <li>6 temporadas</li>
              <li>16+</li>
              <li>Comedia</li>
            </ul>
          </div>

          <div className="w-full flex flex-col gap-5">
            <p className="text-slate-200 text-base md:text-lg leading-relaxed max-w-5xl">
              Conocé al caballo más amado de las comedias de los 90... Veinte
              años después, BoJack es un cincuentón malhumorado, con problemas
              de adicción y una mansión que ya no sabe cómo llenar. Entre
              excesos y malas decisiones busca recuperar la fama y volver al
              estrellato en un Hollywood tan caótico como él.
            </p>

            <div className="w-full h-px bg-white/10" />

            <div className="flex flex-col gap-1.5 text-xs md:text-sm text-slate-400">
              <p>
                <span className="text-[#F1E4C3] font-semibold">
                  Protagonizada por:
                </span>{" "}
                Will Arnett, Aaron Paul y Amy Sedaris
              </p>

              <p>
                <span className="text-[#F1E4C3] font-semibold">
                  Creada por:
                </span>{" "}
                Raphael Bob-Waksberg
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}