import Image from "next/image";
import Link from "next/link";

export default function DianePage() {
  return (
    <main className="mx-auto max-w-7xl px-5 pb-16 pt-[150px]">
      <section className="grid gap-8 md:grid-cols-[350px_1fr] md:items-start">
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10">
          <Image
            src="/images/diane.jpg"
            alt="Diane Nguyen"
            fill
            priority
            sizes="350px"
            className="object-cover"
          />
        </div>

        <div>
          <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl">
            Diane Nguyen
          </h1>

          <p className="mt-2 text-sm font-bold text-[var(--cream)] md:text-3xl">
            El trauma del origen, el peso de las expectativas y las fronteras de la empatía
          </p>

          <p className="mt-2 text-sm text-slate-400">
            Interpretada por Alison Brie
          </p>

          <div className="mt-6 h-px w-full bg-white/10" />

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
            El desarrollo psicológico de Diane Nguyen está signado por un trauma del desarrollo derivado de una dinámica familiar profundamente disfuncional e invalidadora. Al crecer en un entorno donde la crueldad era la norma y su valor individual era cancelado, Diane estructuró una creencia nuclear de inadecuación: la convicción de que solo es digna de afecto y respeto si demuestra su valía a través de acciones de impacto trascendental. Esta necesidad compulsiva de reparación la lleva a asumir una postura de salvadora moral y a albergar una constante insatisfacción existencial, manifestada en una marcada dificultad para establecer límites personales sanos y una tendencia involuntaria a someterse a patrones de explotación emocional.
            <br />
            <br />
            Su matrimonio con Mr. Peanutbutter y su estrecha amistad con BoJack Horseman representan dos caras de sus propios mecanismos de defensa. Mientras que con Mr. Peanutbutter intenta refugiarse en una estabilidad donde proyecta sus necesidades jamás satisfechas —chocando inevitablemente con la ceguera emocional de este—, con BoJack construye un vínculo especular fundado en el dolor compartido y la desesperanza. Con BoJack, Diane no necesita sostener la fachada de la corrección moral; sin embargo, esta resonancia afectiva la arrastra repetidamente a dinámicas de co-dependencia y refuerzo autodestructivo. Su arco evolutivo expone la dolorosa transición entre el deseo infantil de ser validada por un entorno tóxico y la dura necesidad adulta de asumir la responsabilidad de su propia felicidad, comprendiendo que para sanar debe aprender a soltar a quienes le exigen salvarlos a costa de su propia integridad.
            
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
