import Image from "next/image";
import Link from "next/link";

export default function MrPeanutbutterPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 pb-16 pt-[150px]">
      <section className="grid gap-8 md:grid-cols-[350px_1fr] md:items-start">
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10">
          <Image
            src="/images/mr-peanutbutter.jpg"
            alt="Mr. Peanutbutter"
            fill
            priority
            sizes="350px"
            className="object-cover"
          />
        </div>

        <div>
          <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl">
            Mr. Peanutbutter
          </h1>

          <p className="mt-2 text-sm font-bold text-[var(--cream)] md:text-3xl">
            La trampa del optimismo y la evación del conflicto
          </p>

          <p className="mt-2 text-sm text-slate-400">
            Interpretado por Paul F. Tompkins
          </p>

          <div className="mt-6 h-px w-full bg-white/10" />

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
            Mr. Peanutbutter encarna en BoJack Horseman la paradoja de la positividad tóxica y la inmadurez emocional. Protegido en su juventud del dolor y el duelo por su entorno familiar, construyó una personalidad basada en un entusiasmo arrollador que oculta una profunda inseguridad y una constante necesidad de validación externa. Detrás de su fachada de "buen chico", utiliza la hiperactividad y el espectáculo grandilocuente para evitar enfrentarse a la vacuidad, el paso del tiempo y las emociones complejas.
            <br />
            <br />
            Su mayor punto ciego en las relaciones es la incapacidad para la escucha activa y el reconocimiento de la alteridad. Mr. Peanutbutter opera bajo la premisa de que sus deseos son universales: invalida los límites de sus parejas —como sus repetidas fiestas sorpresa a Diane— al proyectar sus propias necesidades sobre las de los demás. Su patrón psicológico lo lleva a enamorarse de mujeres jóvenes a las que acompaña en su juventud, pero con las que es incapaz de evolucionar cuando ellas maduran y demandan un vínculo más profundo y auténtico.
            <br />
            <br />
            A diferencia de otros personajes que sufren de forma explícita, la tragedia de Mr. Peanutbutter radica en su resistencia al cambio. Su evolución pasa por entender que el conflicto no es una amenaza a evitar, sino una parte esencial de la intimidad, y que la verdadera conexión afectiva no se logra con grandes gestos escénicos, sino aprendiendo a sostener la mirada, escuchar en silencio y aceptar la vulnerabilidad propia y ajena.
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
