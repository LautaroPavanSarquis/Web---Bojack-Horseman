import EpisodeCarousel from "@/components/EpisodeCarousel";
import { episodesData } from "@/data/episodes";
import Image from "next/image";

export default function Season1Page() {
  const episodes = episodesData[3];

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
            Temporada 3
          </h1>
        </div>

        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <video
            src="https://imdb-video.media-imdb.com/vi1653849369/1434659607842-pgv4ql-1552799621395.mp4?Expires=1790363300&Signature=fBsnhG4HRb52q1JqOz-pGaNXc9c-jLZ1W1d5fAo5Q3CRZNqWuUXuIJ8CIRizcizlcEwlz1QdiuCZZ9cxtJRcb0isB-zHiWIxyZ8Wt1DKoXMT2ef4exav-JhVqkgnRE2US7VP4D0rz4GiWMjCQDgyCPHTuMVSG3JsKeicbX8krZF1amJ1TMPUVYaLR6ySXR1aCp4eQlNryoGzt-yJ-o1Yt3AYx8zbMS~C4ZFuvHwktVOSQtZzoXe3TOkW5DgihqEpRRGG32zeIWAWBwfevAq5ijVmv77vIxzq934gaJSENq4xfSUCvkXXtnHiHcDyO5ZzWfiQQttSjmoupM0BR5tcyg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
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