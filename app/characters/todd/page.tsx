import Image from "next/image";
import Link from "next/link";

export default function ToddPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 pb-16 pt-[150px]">
      <section className="grid gap-8 md:grid-cols-[350px_1fr] md:items-start">
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10">
          <Image
            src="/images/todd.jpg"
            alt="Todd Chavez"
            fill
            priority
            sizes="350px"
            className="object-cover"
          />
        </div>

        <div>
          <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl">
            Todd Chavez
          </h1>

          <p className="mt-2 text-sm font-bold text-[var(--cream)] md:text-3xl">
            La psicología del propósito y la autenticidad
          </p>

          <p className="mt-2 text-sm text-slate-400">
            Interpretado por Aaron Paul
          </p>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
            Todd Chavez comienza en BoJack Horseman como el prototipo del joven a la deriva: atrapado por la baja autoestima y la falta de rumbo, busca refugio en las adicciones a los videojuegos y las sustancias para evadir la angustia del vacío existencial. Su estancia de cinco años en el sofá de BoJack refleja una dependencia emocional en la que permite que otros definan su valor.
            
            <br />
            <br />

            Sin embargo, su verdadera transformación empieza cuando aprende a marcar límites. Al descubrir las manipulaciones de BoJack y liberarse de su influencia tóxica, Todd encauza su caótica creatividad en disparatados emprendimientos que, más allá de su absurdidad, representan su búsqueda de identidad. Su punto de inflexión psicológico ocurre al abrazar y comunicar su asexualidad, un paso decisivo de autoconocimiento que le permite buscar conexiones afectivas reales sin presiones sociales.

            <br />
            <br />

            A diferencia de los adultos que lo rodean, la evolución de Todd no pasa por el éxito convencional, sino por la responsabilidad afectiva y el cuidado de los demás —desde rescatar a la gallina Becca hasta convertirse en el niñero de Ruthie—. Su historia demuestra que encontrar un propósito no es un camino lineal, y que la verdadera madurez radica en la aceptación personal, la empatía y la capacidad de construir la propia paz.
          </p>

          <Link
            href="/characters"
            className="mt-8 inline-flex rounded-full bg-[var(--teal)] px-5 py-2.5 text-sm font-semibold text-[var(--background)] transition-all hover:brightness-110"
          >
            ← Volver a personajes
          </Link>
        </div>
      </section>
    </main>
  );
}