import Gallery from "@/components/Gallery";
import { galleryData } from "@/data/gallery";
import Image from "next/image";

export default function GalleryPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 pb-16 pt-[150px]">
      <section>
        <p className="text-sm font-semibold uppercase tracking-widest text-[var(--teal)]">
          The Moments
        </p>

        <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl">
          Galería
        </h1>

        <p className="mt-4 max-w-2xl text-slate-400">
          Algunos de los momentos más memorables de BoJack Horseman.
          Hacé clic en una imagen para conocer el contexto detrás de cada
          momento.
        </p>
      </section>

      <section className="mt-10">
        <Gallery items={galleryData} />
      </section>
    </main>
  );
}
