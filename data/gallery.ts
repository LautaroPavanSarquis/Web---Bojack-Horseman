export interface GalleryItem {
  id: number;
  title: string;
  season: number;
  chapter: number;
  context: string;
  image: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: 1,
    title: "I need you to tell me that I'm a good person.",
    season: 1,
    chapter: 11,
    context:
      "BoJack irrumpe drogado e inestable en la convención de editores donde Diane da una charla. Tras leer el borrador del libro que ella escribió sobre él, descubre que lo retrató con cruda honestidad. Desesperado, toma el micrófono de la audiencia para rogarle que le diga que en el fondo es una buena persona. Es una escena clave porque expone su vacuidad emocional y demuestra cómo busca en la validación ajena la absolución que él mismo no puede darse.",
    image: "/images/gallery/1_DownerEnding.jpg",
  },
  {
    id: 2,
    title: "Escape from L.A.",
    season: 2,
    chapter: 11,
    context:
      "Charlotte descubre a BoJack a solas con su hija adolescente, Penny, en el camarote del barco que él compró. BoJack había huido a Nuevo México buscando la ilusión de una vida tranquila y sin culpa junto a su antiguo amor. Esta escena marca el quiebre donde sus acciones cruzan un límite ético irreversible, demostrando que no puede escapar de sus tendencias autodestructivas simplemente cambiando de ciudad.",
    image: "/images/gallery/2_Escape _from_L.A.jpg",
  },
  {
    id: 3,
    title: "Every day it gets a little easier. But you gotta do it every day",
    season: 2,
    chapter: 12,
    context:
      "Tras colapsar en el suelo agotado intentando trotar, un simio corredor se detiene y le da un breve consejo sobre la disciplina y el cambio personal. Esta escena cierra la segunda temporada ofreciendo la síntesis filosófica de la serie: la motivación es efímera y la verdadera transformación no proviene de grandes gestos, sino de la constancia diaria.",
    image: "/images/gallery/3_Out_to_sea.jpg",
  },
  {
    id: 4,
    title: "That's Too Much",
    season: 3,
    chapter: 11,
    context:
      "Mientras observan las estrellas proyectadas en el domo de un planetario tras un maratón de excesos de un mes, Sarah Lynn muere por una sobredosis apoyada en los hombros de BoJack. Es el hito más trágico de la serie y la consecuencia definitiva de la irresponsabilidad afectiva de BoJack, al haber arrastrado a la adicción a la joven a la que debió proteger como una figura paterna.",
    image: "/images/gallery/4_That_is_too.jpg"
  },
  {
    id: 5,
    title: "It's You",
    season: 1,
    chapter: 11,
    context:
      "Todd confronta a BoJack en el pasillo tras descubrir que se acostó con Emily. Cuando BoJack intenta justificarse usando el alcohol y su malestar emocional, Todd le exige que deje de culpar a su pasado. Es un momento crucial porque rompe la dinámica de complicidad y desarma el discurso victimista de BoJack, marcando un límite claro en la relación.",
    image: "/images/gallery/5_its.jpg"
  },
  {
    id: 6,
    title: "Free Churro",
    season: 5,
    chapter: 6,
    context:
      "BoJack realiza un extenso monólogo frente al ataúd de su madre durante su velatorio. Reflexiona sobre el maltrato recibido en su infancia, el duelo no resuelto y la dolorosa certeza de que nunca obtendrá la aprobación o el afecto maternal. La escena resume el impacto del trauma generacional y la aceptación de un vacío afectivo que jamás podrá ser llenado.",
    image: "/images/gallery/6_Freechurro.jpg"
  },
  {
    id: 7,
    title: "The View from Halfway Down",
    season: 6,
    chapter: 15,
    context:
      "En una representación mental previa a la muerte, la figura paterna de Secretariat recita un poema sobre el arrepentimiento minutos antes de saltar al abismo, mientras intenta huir en vano de una puerta negra que devora todo. La escena funciona como una alegoría del pánico frente a la irreversibilidad del fin y el deseo desesperado de volver atrás cuando ya es demasiado tarde.",
    image: "/images/gallery/7_theview.jpg"
  },
  {
    id: 8,
    title: "The View from Halfway Down",
    season: 6,
    chapter: 15,
    context:
      "Se revela el contenido del correo de voz que BoJack le dejó a Diane la noche de su sobredosis, amenazando con meterse al agua si ella no atendía el teléfono. Es la manifestación más extrema de su co-dependencia emocional, al colocar sobre Diane la responsabilidad ética y psicológica de su propia supervivencia.",
    image: "/images/gallery/8_theview.jpg"
  },
  {
    id: 9,
    title: "Nice While It Lasted",
    season: 6,
    chapter: 16,
    context:
      "BoJack y Diane se sientan juntos en el techo durante una fiesta, observando el cielo nocturno en silencio tras compartir su última conversación. Representa la conclusión de la serie sin soluciones mágicas ni redenciones absolutas; una despedida sobria entre dos personas que se dañaron, se acompañaron a sobrevivir y ahora deben continuar sus caminos por separado.",
    image: "/images/gallery/9_while.jpg"
  },
];
