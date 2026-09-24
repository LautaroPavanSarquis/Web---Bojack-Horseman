import Image from "next/image";
import Link from "next/link";

export default function PrincessCarolynPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 pb-16 pt-[150px]">
      <section className="grid gap-8 md:grid-cols-[350px_1fr] md:items-center">
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10">
          <Image
            src="/images/princess-carolyn.jpg"
            alt="Princess Carolyn"
            fill
            priority
            sizes="350px"
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--teal)]">
            Agente / Representante
          </p>

          <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl">
            Princess Carolyn
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Interpretada por Amy Sedaris
          </p>

          <div className="mt-6 h-px w-full bg-white/10" />

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
            Princess Carolyn es una representante incansable capaz de
            solucionar prácticamente cualquier problema. Su carrera ocupa gran
            parte de su vida mientras intenta encontrar un equilibrio entre
            sus responsabilidades y sus relaciones.
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
        <h2 className="text-2xl font-bold text-white">Gallery</h2>

        <p className="mt-2 text-sm text-slate-400">
          Momentos de Princess Carolyn.
        </p>
      </section>
    </main>
  );
}