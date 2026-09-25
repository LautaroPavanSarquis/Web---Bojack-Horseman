import Image from "next/image";
import Link from "next/link";

export default function PrincessCarolynPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 pb-16 pt-[150px]">
      <section className="grid gap-8 md:grid-cols-[350px_1fr] md:items-start">
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
          <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl">
            Princess Carolyn
          </h1>

          <p className="mt-2 text-sm font-bold text-[var(--cream)] md:text-3xl">
            La resiliencia, el control y la ambición sin culpas
          </p>

          <p className="mt-2 text-sm text-slate-400">
            Interpretada por Amy Sedaris
          </p>

          <div className="mt-6 h-px w-full bg-white/10" />

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
            Princess Carolyn encarna en BoJack Horseman la lucha constante por el equilibrio entre la realización personal, el éxito profesional y las expectativas sociales. Marcada por una infancia de carencias y una madre pesimista, desarrolló desde muy joven un mecanismo de defensa basado en el hipertrabajo, la autosuficiencia y la resolución compulsiva de los problemas ajenos. Durante años, utilizó el caos de sus clientes —especialmente de BoJack— para evadir su propio vacío y el profundo dolor de sus pérdidas personales.
            <br />
            <br />
            
            Su verdadero arco de transformación comienza cuando aprende a desmantelar la creencia de que debe sobrecargarse sola. Al liberarse de dinámicas codependientes, romper con mandatos sobre cómo "debería" verse una mujer a los 40 años y asumir riesgos por su cuenta, Princess Carolyn transforma su ambición en un motor de emancipación. Su punto de inflexión psicológico ocurre al abrazar la maternidad soltera: deja de esperar al "compañero ideal" para tomar las riendas de sus deseos y adoptar a su hija Ruthie.
            <br />
            <br />
            A diferencia del mito de la mujer que "debe poder con todo a la perfección", su evolución culmina en la aceptación de sus propios límites. Al liberarse de la culpa, delegar y permitir que otros cuiden de ella —lo que finalmente le permite abrirse a un amor sano con Judah—, Princess Carolyn demuestra que la verdadera fortaleza radica en saber cuándo soltar el control y construir un destino bajo sus propios términos.
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