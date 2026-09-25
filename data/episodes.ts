export interface Episode {
  num: number;
  titulo: string;
  duracion: string;
  desc: string;
  img: string;
}

export const episodesData: Record<number, Episode[]> = {
  1: [
    {
      num: 1,
      titulo: "La historia de BoJack, capítulo 1",
      duracion: "25 min",
      desc: "BoJack contrata a una escritora fantasma para ayudarlo con sus memorias y volver a estar bajo los reflectores.",
      img: "/images/episodes/t1/t1e1.jpg"
    },
    {
      num: 2,
      titulo: "BoJack enemigo público",
      duracion: "25 min",
      desc: "BoJack se transforma en el centro de atención de los medios nacionales después de insultar a las tropas.",
      img: "/images/episodes/t1/t1e2.jpg"
    },
    {
      num: 3,
      titulo: "Fantasmas del pasado",
      duracion: "25 min",
      desc: "BoJack se reconecta con una vieja amiga de Horsin' Around que se muda a su casa y desata el caos.",
      img: "/images/episodes/t1/t1e3.jpg"
    },
    {
      num: 4,
      titulo: "Entre Zoe y Zelda",
      duracion: "25 min",
      desc: "BoJack decide asesorar a Todd; el exnovio de Diane escribe un artículo sobre el Sr. Peanutbutter.",
      img: "/images/episodes/t1/t1e4.jpg"
    },
    {
      num: 5,
      titulo: "Corre Diane, corre",
      duracion: "25 min",
      desc: "El viaje de negocios de BoJack y Diane cambia de rumbo; Todd organiza una estafa que lo mete en problemas.",
      img: "/images/episodes/t1/t1e5.jpg"
    },
    {
      num: 6,
      titulo: "Relación turbulenta",
      duracion: "25 min",
      desc: "BoJack está celoso de la relación entre Diane y el Sr. Peanutbutter, provocando situaciones incómodas.",
      img: "/images/episodes/t1/t1e6.jpg"
    },
    {
      num: 7,
      titulo: "Di algo",
      duracion: "25 min",
      desc: "BoJack se autosabotea tras una juerga épica; la agencia de Princesa Carolyn se fusiona con otra.",
      img: "/images/episodes/t1/t1e7.jpg"
    },
    {
      num: 8,
      titulo: "El telescopio",
      duracion: "25 min",
      desc: "Al enterarse de que su viejo amigo Herb Kazzaz tiene cáncer, BoJack viaja para intentar hacer las paces.",
      img: "/images/episodes/t1/t1e8.jpg"
    },
    {
      num: 9,
      titulo: "Caballo conmocionado",
      duracion: "26 min",
      desc: "BoJack, enamorado de Diane, intenta sabotear su boda con el Sr. Peanutbutter.",
      img: "/images/episodes/t1/t1e9.jpg"
    },
    {
      num: 10,
      titulo: "Truco de poni",
      duracion: "25 min",
      desc: "BoJack filma una película en casa del Sr. Peanutbutter mientras Diane termina el borrador de su libro.",
      img: "/images/episodes/t1/t1e10.jpg"
    }
  ],
  2: [
    { num: 1, titulo: "Un sofá completamente nuevo", duracion: "26 min", desc: "BoJack piensa que tener una actitud más alegre le cambiará la vida, pero para su nuevo rol es bastante contradictorio.", img: "/images/episodes/t2/t2e1.jpg" },
    { num: 2, titulo: "Pasadolandia", duracion: "26 min", desc: "BoJack se siente atraído por una mujer que no tiene idea de quién es: un beneficio de haber estado en coma... Todd, por su parte, abre un parque temático.", img: "/images/episodes/t2/t2e2.jpg" },
    { num: 3, titulo: "Irreparable", duracion: "26 min", desc: "Un funeral se convierte en una búsqueda del tesoro, además del lugar perfecto para que Princesa Carolyn y el Sr. Peanutbutter sean el centro de atención.", img: "/images/episodes/t2/t2e3.jpg" },
    { num: 4, titulo: "After party", duracion: "26 min", desc: "Falta poco para que empiece la fiesta sorpresa y parece que Princesa Carolyn, BoJack, Diane y el Sr. Peanutbutter solo trajeron sus corazones en bandeja.", img: "/images/episodes/t2/t2e4.jpg" },
    { num: 5, titulo: "Gallinas", duracion: "26 min", desc: "BoJack está desesperado por agradarle a Kelsey, su directora, mientras que la hija de ella, con Todd y Diane, ayuda a una gallina prófuga de la justicia.", img: "/images/episodes/t2/t2e5.jpg" },
    { num: 6, titulo: "Amor pendiente", duracion: "26 min", desc: "Al morir el agente del Sr. Peanutbutter, Princesa Carolyn quiere dar el zarpazo. BoJack le dice a Wanda la palabra que empieza con \"A\" y se le van las riendas.", img: "/images/episodes/t2/t2e6.jpg" },
    { num: 7, titulo: "Hank de noche", duracion: "26 min", desc: "Diane se sale del libreto durante la gira promocional de BoJack y pone en peligro el nuevo programa del Sr. Peanutbutter. Todd ahora tiene alcance internacional...", img: "/images/episodes/t2/t2e7.jpg" },
    { num: 8, titulo: "Averigüémoslo", duracion: "25 min", desc: "BoJack es una de las estrellas invitadas al estreno del programa de juegos del Sr. Peanutbutter. ¿Perro contento? Más bien caballo en la pista.", img: "/images/episodes/t2/t2e8.jpg" },
    { num: 9, titulo: "La escena", duracion: "26 min", desc: "BoJack teje un plan con Kelsey, Todd, Princesa Carolyn y el Sr. Peanutbutter para robar una toma crucial de \"Secretariat\".", img: "/images/episodes/t2/t2e9.jpg" },
    { num: 10, titulo: "Sí, y", duracion: "26 min", desc: "Todd no puede salirse de una secta de comedia de improvisación. BoJack enfrenta una crisis profesional y Wanda cree que Diane es una mala influencia para él.", img: "/images/episodes/t2/t2e10.jpg" }
  ],
  3: [
    { num: 1, titulo: "Corran la voz", duracion: "26 min", desc: "Ana Spanakopita envía a BoJack a Nueva York para responder entrevistas y Todd se suma al plan. Princesa Carolyn manda al Sr. Peanutbutter de vuelta al trabajo.", img: "/images/episodes/t3/t3e1.jpg" },
    { num: 2, titulo: "El programa de BoJack Horseman", duracion: "25 min", desc: "En 2007, Princesa Carolyn tiene un nuevo proyecto para BoJack, Diane conoce al Sr. Peanutbutter en la cafetería donde trabaja y Todd besa a una chica.", img: "/images/episodes/t3/t3e2.jpg" },
    { num: 3, titulo: "BoJack mata", duracion: "25 min", desc: "BoJack es culpado por el asesinato de una estrella de la danza. El Sr. Peanutbutter y Todd se meten en aprietos con el zorrillo vecino y la cosa huele mal.", img: "/images/episodes/t3/t3e3.jpg" },
    { num: 4, titulo: "Como pez fuera del agua", duracion: "26 min", desc: "BoJack emprende un viaje submarino hacia el Festival de Cine del Océano Pacífico para presentar “Secretariat” e intentar contactar a Kelsey.", img: "/images/episodes/t3/t3e4.jpg" },
    { num: 5, titulo: "Amor y/o matrimonio", duracion: "26 min", desc: "Todd y BoJack aparecen sin invitación en el ensayo de una boda, Diane decide que es buena idea drogarse con un cliente y Princesa Carolyn tiene citas a ciegas.", img: "/images/episodes/t3/t3e5.jpg" },
    { num: 6, titulo: "Brrap Brrap Pew PewE", duracion: "26 min", desc: "l tuit de Diane mete en problemas a Sextina Aquafina. El bromista y superestrella Jurj Clooners irrita de sobremanera a BoJack.", img: "/images/episodes/t3/t3e6.jpg" },
    { num: 7, titulo: "Paren las prensas", duracion: "26 min", desc: "Todd construye una versión gigante de su cabeza. BoJack recibe un consejo cuando intenta cancelar su suscripción a un periódico.", img: "/images/episodes/t3/t3e7.jpg" },
    { num: 8, titulo: "Viejos conocidos", duracion: "26 min", desc: "BoJack está listo para interpretar un papel en la próxima película de David Pincher. Diane conoce al hermano del Sr. Peanutbutter y Todd cambia el rumbo del negocio.", img: "/images/episodes/t3/t3e8.jpg" },
    { num: 9, titulo: "Lo mejor que pudo haberte pasado", duracion: "26 min", desc: "BoJack se encuentra con Princesa Carolyn en Elefante y juntos emprenden una velada de introspección mientras ayudan al personal a impresionar a un crítico gastronómico.", img: "/images/episodes/t3/t3e9.jpg" },
    { num: 10, titulo: "Eres tú", duracion: "26 min", desc: "El Sr. Peanutbutter anuncia quiénes son los nominados al Óscar. BoJack se rodea de admiradores, mientras sus amistades verdaderas se desmoronan.", img: "/images/episodes/t3/t3e10.jpg" }
  ],
  4: [
    { num: 1, titulo: "El señor Peanutbutter se mete en política", duracion: "25 min", desc: "La campaña del Sr. Peanutbutter para sacar al gobernador de California termina en una peligrosa carrera de esquí. Mientras tanto, nadie sabe dónde está BoJack.", img: "/images/episodes/t4/t4e1.jpg" },
    { num: 2, titulo: "La vieja casa de los Sugarman", duracion: "26 min", desc: "BoJack desaparece de Hollywoo y pasa meses restaurando la antigua casa de verano de sus abuelos en Míchigan.", img: "/images/episodes/t4/t4e2.jpg" },
    { num: 3, titulo: "¡Viva! ¡El episodio de Todd!", duracion: "25 min", desc: "Servicial hasta el hartazgo, Todd se desvive haciendo favores para Princesa Carolyn, el Sr. Peanutbutter y una visita que podría tener algún vínculo con BoJack.", img: "/images/episodes/t4/t4e3.jpg" },
    { num: 4, titulo: "Iniciar perforación", duracion: "26 min", desc: "La campaña hace estragos en la vida amorosa de Diane. BoJack ayuda a Hollyhock a buscar a la mamá. Princesa Carolyn trata de quedar embarazada.", img: "/images/episodes/t4/t4e4.jpg" },
    { num: 5, titulo: "Mis condolencias", duracion: "26 min", desc: "Un tiroteo en un centro comercial genera una pesadilla de RR. PP. para Princesa Carolyn. BoJack visita a la madre, a quien no ve desde hace mucho, y lleva a Hollyhock.", img: "/images/episodes/t4/t4e5.jpg" },
    { num: 6, titulo: "Estúpido desgraciado", duracion: "26 min", desc: "Rodeado por la familia, BoJack desciende poco a poco al infierno del autodesprecio. Princesa Carolyn y Rutabaga Rabitowitz planean la boda falsa de Courtney y Todd.", img: "/images/episodes/t4/t4e6.jpg" },
    { num: 7, titulo: "Bajo tierra", duracion: "26 min", desc: "La lujosa colecta para la campaña del Sr. Peanutbutter da un giro aterrador. Mientras el caos se apodera de todo, BoJack y Diane se emborrachan.", img: "/images/episodes/t4/t4e7.jpg" },
    { num: 8, titulo: "El juez", duracion: "26 min", desc: "Hollyhock empieza a salir con un pasante del nuevo programa de BoJack. Princesa Carolyn conoce a los padres de Ralph. El Sr. Peanutbutter da su respaldo a Woodchuck.", img: "/images/episodes/t4/t4e8.jpg" },
    { num: 9, titulo: "Ruthie", duracion: "26 min", desc: "Princesa Carolyn tiene un día de terror con pasajes de rechazo, engaño y pérdida. BoJack y Diane buscan el certificado de nacimiento de Hollyhock.", img: "/images/episodes/t4/t4e9.jpg" },
    { num: 10, titulo: "¡Me encanta el estilo de vida californiano!", duracion: "26 min", desc: "Diane filtra información sobre Jessica Biel, el negocio de dentistas payasos de Todd se topa con un problema, y Princesa Carolyn encuentra esperanza donde menos esperaba.", img: "/images/episodes/t4/t4e10.jpg" }
  ],
  5: [
    { num: 1, titulo: "La escena del desnudo", duracion: "25 min", desc: "BoJack tiene dudas sobre su nuevo programa. Princesa Carolyn visita una agencia de adopción. Entrevistan a Todd en Quehoraesahora.com.", img: "/images/episodes/t5/t5e1.jpg" },
    { num: 2, titulo: "Los días de perros se acabaron", duracion: "25 min", desc: "Diane se divorcia del Sr. Peanutbutter y se muda a un apartamento destartalado. Melancólica, emprende un viaje a Vietnam para alejarse de todo.", img: "/images/episodes/t5/t5e2.jpg" },
    { num: 3, titulo: "Obsolescencia programada", duracion: "25 min", desc: "Todd conoce a los padres de Yolanda, que ignoran que ella es asexual. El Sr. Peanutbutter sale con una mesera joven. Gina le confiesa a BoJack un sueño de su infancia.", img: "/images/episodes/t5/t5e3.jpg" },
    { num: 4, titulo: "BoJack, el feminista", duracion: "25 min", desc: "Princesa Carolyn recluta a una celebridad en desgracia para salir en Philbert, y BoJack asume una postura sin querer. El Sr. Peanutbutter intenta endurecer su imagen.", img: "/images/episodes/t5/t5e4.jpg" },
    { num: 5, titulo: "La historia de Amelia Earhart", duracion: "25 min", desc: "Princesa Carolyn viaja a su pueblo natal y sufre una dolorosa regresión cuando conoce a una adolescente embarazada. Una escena de peligro sale mal en Philbert.", img: "/images/episodes/t5/t5e5.jpg" },
    { num: 6, titulo: "Churro gratis", duracion: "25 min", desc: "BoJack hace un homenaje póstumo en un funeral.", img: "/images/episodes/t5/t5e6.jpg" },
    { num: 7, titulo: "Interior. Sub.", duracion: "25 min", desc: "La terapeuta de Diane le propone que le ponga límites a BoJack. Una hebra de queso perdida hace que Todd y Princesa Carolyn empiecen a discutir.", img: "/images/episodes/t5/t5e7.jpg" },
    { num: 8, titulo: "Las novias del Sr. Peanutbutter", duracion: "25 min", desc: "Durante la fiesta anual número 25 que BoJack organiza por Halloween, Pickles recibe un curso intensivo sobre el pasado romántico del Sr. Peanutbutter y consejos de Diane.", img: "/images/episodes/t5/t5e8.jpg" },
    { num: 9, titulo: "Historia antigua", duracion: "25 min", desc: "BoJack sale a buscar más analgésicos con desesperación cuando Hollyhock se deshace de los suyos. Todd intenta resolver el problema de citas de Emily.", img: "/images/episodes/t5/t5e9.jpg" },
    { num: 10, titulo: "Con la cabeza en las nubes", duracion: "25 min", desc: "Durante la fiesta de estreno de Philbert, Princesa Carolyn hace un trato astuto. Gina se roba el protagonismo y Diane se enfrenta a BoJack.", img: "/images/episodes/t5/t5e10.jpg" }
  ],
  6: [
    { num: 1, titulo: "Un caballo entra a rehabilitación", duracion: "25 min", desc: "BoJack ingresa a Pastiches, un centro de rehabilitación de Malibú, donde confronta recuerdos de la muerte de Sarah Lynn y su propia infancia tormentosa.", img: "/images/episodes/t6/t6e1.jpg" },
    { num: 2, titulo: "El nuevo cliente", duracion: "25 min", desc: "Cuando su niñera renuncia, a Princesa Carolyn le cuesta equilibrar las exigencias del trabajo y la maternidad. El Sr. Peanutbutter visita a BoJack en rehabilitación.", img: "/images/episodes/t6/t6e2.jpg" },
    { num: 3, titulo: "Una historia edificante", duracion: "26 min", desc: "Girl Croosh envía a Diane a la calle con Guy, un robusto camarógrafo. La joven no quiere saber nada con la idea de producir historias más positivas y edificantes.", img: "/images/episodes/t6/t6e3.jpg" },
    { num: 4, titulo: "Sorpresa", duracion: "26 min", desc: "Todd organiza una boda sorpresa para Pickles y el Sr. Peanutbutter, pero la fiesta se le va de las manos cuando el Sr. Peanutbutter hace una confesión.", img: "/images/episodes/t6/t6e4.jpg" },
    { num: 5, titulo: "Un poco disparejo, es todo", duracion: "26 min", desc: "El doctor Champ le dice a BoJack que es hora de salir de rehabilitación. La honra del Sr. Peanutbutter queda en jaque. En Chicago, Diane sufre una falta de inspiración.", img: "/images/episodes/t6/t6e5.jpg" },
    { num: 6, titulo: "El riñón que conquistó Hollywood", duracion: "26 min", desc: "Los asistentes de Hollywoo se declaran en huelga. BoJack intenta ayudar al doctor Champ. Todd se entera de que su madre necesita un riñón, y Diane le propone un plan.", img: "/images/episodes/t6/t6e6.jpg" },
    { num: 7, titulo: "El rostro de la depresión", duracion: "26 min", desc: "BoJack recorre el país para reanudar la relación con sus seres queridos, y el Sr. Peanutbutter emprende una gira nacional como el rostro de la depresión.", img: "/images/episodes/t6/t6e7.jpg" },
    { num: 8, titulo: "Uno rapidito mientras él no está", duracion: "26 min", desc: "Una reportera investiga las circunstancias en torno a la muerte de Sarah Lynn. Hollyhock va a una fiesta en Nueva York.", img: "/images/episodes/t6/t6e8.jpg" },
    { num: 9, titulo: "Estudio de escena intermedia con BoJack Horseman", duracion: "26 min", desc: "Luego de que BoJack comienza a dar clases de actuación en Wesleyan, Hollyhock pone algunos límites a su relación", img: "/images/episodes/t6/t6e9.jpg" },
    { num: 10, titulo: "Daño del bueno", duracion: "26 min", desc: "Diane sale de su depresión, pero aún le cuesta comenzar a escribir sus memorias. Los periodistas Max y Paige visitan a Penny.", img: "/images/episodes/t6/t6e10.jpg" }
  ]
};