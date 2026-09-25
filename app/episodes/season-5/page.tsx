import EpisodeCarousel from "@/components/EpisodeCarousel";
import { episodesData } from "@/data/episodes";
import Image from "next/image";

export default function Season1Page() {
  const episodes = episodesData[5];

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
            Temporada 5
          </h1>
        </div>

        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <video
            src="https://imdb-video.media-imdb.com/vi1569963289/1434659607842-pgv4ql-1552799487919.mp4?Expires=1790363632&Signature=DZvyB03vbUKakT0LTBrlhrvlitfV9WVbpvyILxZU8C3~byUf0co21XR3T3dGuolM8bk4WJU6jOYjPL82DPQ4820AdEK3Hg6Eb5R~kC-9d6ZlZO9vcZ2TqZw5s2gy33-cX7oe39DqW4L-JibZEVeBCUPNlGh6F5lqkYfK2MTU03-hrr~RejdyIEyQpJ0TbhIweDYgS3zfhz~bV0V3Qt6P58he4JXsyHpyjhTFYdNrXLx2C0mO0E-Fnfm12kM2AqOcI6Znz-MTDY~PgDbFR3nsNdWwhK9kwoMx~D4X6mwxrXyTt9fyvtBrxc7FeczgpQna4b83NkWA-K3bmd8MI9SNNw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
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
            Temporada 5
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