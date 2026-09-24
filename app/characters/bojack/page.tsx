import Image from "next/image";
import Link from "next/link";

export default function BoJackPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 pb-16 pt-[150px]">
      <section className="grid gap-8 md:grid-cols-[350px_1fr] md:items-center">
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10">
          <Image
            src="/images/bojack.jpg"
            alt="BoJack Horseman"
            fill
            priority
            sizes="350px"
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--teal)]">
            Protagonista
          </p>

          <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl">
            BoJack Horseman
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Interpretado por Will Arnett
          </p>

          <div className="mt-6 h-px w-full bg-white/10" />

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
            BoJack fue la estrella de una exitosa sitcom de los años 90.
            Veinte años después, vive en una mansión de Hollywoo intentando
            recuperar su fama mientras lidia con sus adicciones, sus
            relaciones y las consecuencias de sus propias decisiones.
          </p>

          <Link
            href="/characters"
            className="mt-8 inline-flex rounded-full bg-[var(--teal)] px-5 py-2.5 text-sm font-semibold text-[var(--background)] transition-all hover:brightness-110"
          >
            ← Volver a personajes
          </Link>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-white">
          Gallery
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          Momentos de BoJack Horseman.
        </p>
      </section>
    </main>
  );
}

