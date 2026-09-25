import Image from "next/image";
import Link from "next/link";

export default function BoJackPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 pb-16 pt-[150px]">
      <section className="grid gap-8 md:grid-cols-[350px_1fr] md:items-start">
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
          <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl">
            BoJack Horseman
          </h1>

          <p className="mt-2 text-sm font-bold text-[var(--cream)] md:text-3xl">
            La espiral de la autodestrucción, la irresponsabilidad afectiva y el peso del destino
          </p>

          <p className="mt-2 text-sm text-slate-400">
            Interpretado por Will Arnett
          </p>

          <div className="mt-6 h-px w-full bg-white/10" />

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
            Antes de convertirse en el rostro de una sitcom multimillonaria, BoJack solo era un niño asustado sentado frente al televisor, absorbiendo en silencio el odio de sus padres. Aprendió muy temprano una lección envenenada: el amor no se da de manera incondicional, se actúa; y la única forma de existir sin ser aplastado es logrando que una multitud te aplauda. Cuando desembarcó en Los Ángeles en los años ochenta con la ilusión de ser comediante, llevaba esa carencia cosida al alma. La fama de "Horsing Arround" no fue el inicio de su talento, sino el refugio definitivo donde anestesiar sus vacíos. El éxito masivo no lo curó; simplemente le dio los recursos económicos y el poder social para que sus mecanismos de defensa no tuvieran consecuencias inmediatas.
            <br />
            <br />
            El verdadero drama de BoJack no es que no sepa lo que está mal en él, sino que utiliza esa lucidez como un escudo moral. Se analiza, se juzga, se desprecia ante los demás y usa su propio autoodio como un pase libre para seguir dañando. Cada vez que la vida le ofrece una salida limpia —la amistad leal de Herb, el amor maduro de Wanda, la calma de Nuevo México o el proyecto de Secretariat—, la angustia del vacío regresa. Si el mundo descubre quién es en realidad debajo de los aplausos, nadie lo va a querer. Ante ese pánico a la exposición, prefiere sabotear la felicidad antes de que se la quiten. No destruye por crueldad fría, sino por la cobardía atávica de quien se siente ahogando y manotea desesperado, hundiendo a cualquiera que intente salvarlo.
            <br />
            <br />
            Su tragedia alcanza el punto de no retorno cuando la ilusión de impunidad se quiebra. Al arrastrar a Sarah Lynn a una espiral de excesos que culmina bcon una sobredosis, BoJack no solo liquida la última oportunidad de ser la figura protectora que        ella necesitaba, sino que toma la decisión más oscura de su vida: esperar diecisiete minutos fatídicos antes de pedir ayuda, calculando fríamente cómo proteger su nombre mientras la vida de ella se apaga. Ahí se desmorona definitivamente el mito de la «víctima incomprendida». BoJack deja de ser el sobreviviente de un entorno tóxico para convertirse en el ejecutor consciente de su propia degradación. La serie decide no concederle la comodidad de un final trágico o un castigo grandilocuente; lo condena a algo mucho más exigente: sobrevivir a sus propios actos, despojado de los aplausos que lo anestesiaban, obligándolo a mirar de frente los escombros que dejó a su paso y a entender que la reconstrucción ya no depende de la compasión ajena, sino de la disciplina diaria de no volver a equivocarse.
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

