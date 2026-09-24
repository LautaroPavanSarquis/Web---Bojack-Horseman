import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 pb-16 pt-[150px]">
      <section className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-[var(--teal)]">
          Get in touch
        </p>

        <h1 className="mt-2 text-4xl font-bold text-white md:text-5xl">
          Contacto
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-slate-400">
          ¿Tenés alguna pregunta, sugerencia o simplemente querés hablar
          sobre BoJack? Dejá tu mensaje.
        </p>
      </section>

      <ContactForm />
    </main>
  );
}
