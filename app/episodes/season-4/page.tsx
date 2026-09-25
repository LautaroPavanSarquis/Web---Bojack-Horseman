import EpisodeCarousel from "@/components/EpisodeCarousel";
import { episodesData } from "@/data/episodes";
import Image from "next/image";

export default function Season1Page() {
  const episodes = episodesData[4];

  return (
    <main className="mx-auto max-w-7xl px-5 pb-16 pt-[150px]">
      <section>
        <div className="mb-6">
          <Image
            src="/images/logo-netflix.webp"
            alt="BoJack Horseman"
            width={520}
            height={140}
            priority
            className="w-[80px] sm:w-[120px] md:w-[180px] h-auto"
          />

          <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl">
            Temporada 4
          </h1>
        </div>

        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <video
            src="https://imdb-video.media-imdb.com/vi2065217817/1434659607842-pgv4ql-1503588953285.mp4?Expires=1790363551&Signature=XYK3ahMcpFJ1mdWVVUwh0IQGViCoSTQS2DOgNmQLZofaBMWOGkRRLuEXkK1fTSY71ta6yjjdHcuyQ0dIe2nn9ubHEeCXPpkVNptmMp4EoSI0N52rjbE8SOpC4CZwySBScPlAWIn~VjKRmzTRUg0B2nZ27DWakKvSvh7c~QcnHgOut9t4qznG8gH04ykZzxtgfrKRGYCSizSDJ9xco~PKCFwcZEKD5tj70jvTWVbKfbxQlAu0M9UcFjHDwNHHWNQeubRmsRY4lGGSK6-fpdcXa1eyt25TweE6PLcr2WIjYIPug6K3doT1pZRy5l9CNWYomgoR5AyXa5GyLm81pDYFSw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
            autoPlay
            muted
            loop
            playsInline
            controls
            className="h-full w-full object-cover"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--background)]/60 via-transparent to-transparent" />
        </div>
      </section>

      <section className="mt-12">
        <div className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--teal)]">
            Temporada 3
          </p>

          <h2 className="mt-1 text-2xl font-bold text-white md:text-3xl">
            Capítulos
          </h2>
        </div>

        <EpisodeCarousel episodes={episodes} />
      </section>
    </main>
  );
}