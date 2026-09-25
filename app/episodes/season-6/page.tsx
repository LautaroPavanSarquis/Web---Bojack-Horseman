import EpisodeCarousel from "@/components/EpisodeCarousel";
import { episodesData } from "@/data/episodes";
import Image from "next/image";

export default function Season1Page() {
  const episodes = episodesData[6];

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
            Temporada 6
          </h1>
        </div>

        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <video
            src="https://imdb-video.media-imdb.com/vi1350483737/1434659607842-pgv4ql-1579118889181.mp4?Expires=1790363671&Signature=kHsOAPC1RnuGO95X~-djE3~RPBHVsOQ-cJ7zBF4L5iMeSwxw2Xj9rwMKuPZ4JEJcq9KydYqbfnjf9c7pn1of3FfiHjEqLh0oOWDw8ZloVtFf3TIw5QJksV5WXeorMiOK0sXhjE-EJmwmdThUFx0owUK66UOod7kkf7knrfW7WeDOvmBQIZx8Ozt9VoPEbOP1FEYeeWqnsM9jmPdwRBOz6CyilVz4qpMqNql0Y~eRygg2Obx5ibK2c1bSZLzC3EoIJxVGBj~zrCe~lTH~-Qep2CuH1yPhDWbK8zgqjx57eA1IYOqEAD1zSe0SINGcSDZWMe~SF2U5B60CUAym4QdlaA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
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
            Temporada 6
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