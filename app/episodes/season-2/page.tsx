import EpisodeCarousel from "@/components/EpisodeCarousel";
import { episodesData } from "@/data/episodes";
import Image from "next/image";


export default function Season1Page() {
  const episodes = episodesData[2];

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
            Temporada 2
          </h1>
        </div>

        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <video
            src="https://imdb-video.media-imdb.com/vi1989393689/1434659607842-pgv4ql-1552799595573.mp4?Expires=1790363307&Signature=kslduxvyEtJGRpl8hO5sRkF3zbdARBK3ZdNjuPkAkyIDSf8Ko~-KYKwrrzPREqcrKWY36lNQQ9n0x8Dd7gdqr94vMoBGlm745VR~4f6HYxY9PUfHOElreY3YTKs4KQ49eNy796025Leo6Y9sI5~jmfmZMVgcazxXw6xjJyAPJ63WaK17pwK7VJnQ3BoyUXD~G3GD5fFl9d5JoGR6BDgfupIt1OMqc8pdFqcNkTE-E5bYGG9bSmCE2iqYjmqWOfUI5wjrFykSa9UoZNBfYvdUf3bqUrAfXvi4Ji9e58K-U4Eke6ud8xp7gFsxhEydFuU-aB~vWbZu7tSsKO-G-qEs0w__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
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
            Temporada 2
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