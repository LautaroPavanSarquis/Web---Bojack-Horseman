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
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABd8EydlgHpcXY_GKR6uqBc_-qTiNuQ96fm88Ow0ltBo6jBsM30lkK9_zIZCsAUhRB9B_4MV4NapUtjH9OaObNjuSXcRfmgHG-hODW3A7FgDZvkyRxtcDz3rk.webp?r=418"
    },
    {
      num: 2,
      titulo: "BoJack enemigo público",
      duracion: "25 min",
      desc: "BoJack se transforma en el centro de atención de los medios nacionales después de insultar a las tropas.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUCwHtgRbgG_MLBcLv3DwVExmVtvJ-Zg0LVpW4jeSKuDhBLvqZCJO-wxp_9Xny4_7CvNdiPM89iUHcpykDFOAhTEEQztAReUNQj7-8RCdOuNIzT9fBMV_N0U.webp?r=84b"
    },
    {
      num: 3,
      titulo: "Fantasmas del pasado",
      duracion: "25 min",
      desc: "BoJack se reconecta con una vieja amiga de Horsin' Around que se muda a su casa y desata el caos.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABc4a36QYH7iz0-96-FvqEMut5BomxPb6jeShcAv6xHdtT7W08G5shcBpctiWi3u-N1LTWPayfAw-LK3cHu0990VfSFECbIu4-SdfK5auXRxO7ophJ7H0Rf-j.webp?r=d15"
    },
    {
      num: 4,
      titulo: "Entre Zoe y Zelda",
      duracion: "25 min",
      desc: "BoJack decide asesorar a Todd; el exnovio de Diane escribe un artículo sobre el Sr. Peanutbutter.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABThfg5VqW3Tn5Kb0_G7xjBm2oqeA7o7cZJT1wuZIdue4u9bIAbOSNNYzayUjodzoF4gfQvj_vEQEkgZAY7mzFbytPWwlXV3L7o-hRPIUps8e4WGfU_JRcp1f.webp?r=98c"
    },
    {
      num: 5,
      titulo: "Corre Diane, corre",
      duracion: "25 min",
      desc: "El viaje de negocios de BoJack y Diane cambia de rumbo; Todd organiza una estafa que lo mete en problemas.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABezOi70BG0Qfa2tdhaZsJBfqejjr79-ZhBQOSFExOzPqyiZWz2f0RlfXWajW5JWFje6nJ3PDyIpzRdd9zWvvZY4VGWO8hAHE8kmTCX-Ms4XWNHvDAsIV8iC_.webp?r=172"
    },
    {
      num: 6,
      titulo: "Relación turbulenta",
      duracion: "25 min",
      desc: "BoJack está celoso de la relación entre Diane y el Sr. Peanutbutter, provocando situaciones incómodas.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABW4nsE7DMFQ2noIadCtN6x3UDk55G0kk4gQ7O8EYZ4Wdy7NjXVVTrfS7LQAPrX29bUc5wzGkVNK81P0W1IO2zBhsm8SL453_IPXTh8360WK6iM8Ad6zbNJTb.webp?r=6b2"
    },
    {
      num: 7,
      titulo: "Di algo",
      duracion: "25 min",
      desc: "BoJack se autosabotea tras una juerga épica; la agencia de Princesa Carolyn se fusiona con otra.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZ9zOSvoHoESh4-9dy3YXrWnRaMCH2DMYU15LyOf9w0IYvrWSzRFjzpgL1BFidyOz6NGpCoiDVHN46Wm90Pa_DYa_ksdQxIiNp-CZJAdY5YcELNLWR1cAQC9.webp?r=906"
    },
    {
      num: 8,
      titulo: "El telescopio",
      duracion: "25 min",
      desc: "Al enterarse de que su viejo amigo Herb Kazzaz tiene cáncer, BoJack viaja para intentar hacer las paces.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABd2DxNPc4oae7xSMgphZBgfBBklbDcUmYBwubBGSE_lSawTMTu6YN8EnRZp05dgB_HMrdymg11Vf6_Wu6My2E9_CzpCR8kRzIKq32whL37crVgMbnxHuhgfJ.webp?r=111"
    },
    {
      num: 9,
      titulo: "Caballo conmocionado",
      duracion: "26 min",
      desc: "BoJack, enamorado de Diane, intenta sabotear su boda con el Sr. Peanutbutter.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfHyyJ1uet-ulWl9iPXcRgazz6vguaXTFuJsNyjJx7eAR0w-UsDZwjDaUphdRi4CmAoTfJMxCAgc9D4FcHFLMgxKJsn2R7cZEhHm_2eEa5FueLbgTjKJDGWi.webp?r=024"
    },
    {
      num: 10,
      titulo: "Truco de poni",
      duracion: "25 min",
      desc: "BoJack filma una película en casa del Sr. Peanutbutter mientras Diane termina el borrador de su libro.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQznEcujGXMKOdWUnq-i-a6yVK5dbd5z5jQlFnk-OL7iA87mvsICRNgM4w3lh-x10tIiE-_AyRek9JyiScAUPRRQdedky2GAGhI7jdtsgsja_IeYAVvhqAlT.webp?r=486"
    }
  ],
  2: [
    {
      num: 1,
      titulo: "Un sofá completamente nuevo",
      duracion: "26 min",
      desc: "BoJack piensa que tener una actitud más alegre le cambiará la vida, pero para su nuevo rol es bastante contradictorio.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABVUXOQ2QgyKWaLxlJiTZEOxkw0DRue1ihb7Jv2mqC_qOY18Vi4W8FXstcYSl21ZJQx_B0rpEQ-JdMm6Tep4iYjmMZxmza2n7PZvagZ7jD-nlo7RiGmkeOuOU.webp?r=f18",
    },
    {
      num: 2,
      titulo: "Pasadolandia",
      duracion: "26 min",
      desc: "BoJack se siente atraído por una mujer que no tiene idea de quién es: un beneficio de haber estado en coma... Todd, por su parte, abre un parque temático.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABebPkCUXa4nNxRI3549KlxPYjn6l2Z8mD7yw03sE-cvFKJsLKWEiOlfz7k0hvGfZTvOdUM_imsfDYVMhU46MU1ePYmCIIM0KtNuBuDBT6YNu44RXmyU6nuII.webp?r=e2d",
    },
    {
      num: 3,
      titulo: "Irreparable",
      duracion: "26 min",
      desc: "Un funeral se convierte en una búsqueda del tesoro, además del lugar perfecto para que Princesa Carolyn y el Sr. Peanutbutter sean el centro de atención.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABeNYJvGFRCIreQs6nn9qkNIfx04w-OtJY_ogy6rY-MRLDPJn_kWUuwAGB-aP0sjZE06woS_O1IF0-qSytqCxdS-EkXDmocstBFejjHRhsIChbk82Nt0suapx.webp?r=e2a",
    },
    {
      num: 4,
      titulo: "After party",
      duracion: "26 min",
      desc: "Falta poco para que empiece la fiesta sorpresa y parece que Princesa Carolyn, BoJack, Diane y el Sr. Peanutbutter solo trajeron sus corazones en bandeja.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABW04bUs9PlNHN6n7oPLTZ9uofnraM_8oFG_VCT-RzKzKldxHYCiIWRbMhrojgAMEFpl3FDHHvAg6bYapFUurEjToQ0mmaLUZGDgVmiF7jvHREMZ0lUG2RpyX.webp?r=623",
    },
    {
      num: 5,
      titulo: "Gallinas",
      duracion: "26 min",
      desc: "BoJack está desesperado por agradarle a Kelsey, su directora, mientras que la hija de ella, con Todd y Diane, ayuda a una gallina prófuga de la justicia.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaXmrnsU_gjE3-whIsT6JUTiVROgpTIOo4Jsnvf-iUaoEM9apMS-bkLw9o-1o4MKs63r-okHN2ZhCEvwhrlFR2DGHsWzG45MEdWPmWJxKjhkPTOcGodkE9lZ.webp?r=8f5",
    },
    {
      num: 6,
      titulo: "Amor pendiente",
      duracion: "26 min",
      desc: "Al morir el agente del Sr. Peanutbutter, Princesa Carolyn quiere dar el zarpazo. BoJack le dice a Wanda la palabra que empieza con \"A\" y se le van las riendas.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQ-73lvZF8sFi87tSP040WgJC5k3a7eWPS8zou65zpGu9PdEIaZXQmYFSnOMef9bYwL3u0T9B20Agn7QT8WwE0nvKKTX0sw3xf9Z-OjdnlcJp4xY0QGd5-en.webp?r=7da",
    },
    {
      num: 7,
      titulo: "Hank de noche",
      duracion: "26 min",
      desc: "Diane se sale del libreto durante la gira promocional de BoJack y pone en peligro el nuevo programa del Sr. Peanutbutter. Todd ahora tiene alcance internacional...",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSeNSe-ofULP7lpzfIfM2O6ygiGq7S3kxwKbBNhFJxs_Azyg9tbQZcUeLyZ_pw7UvDVnGp7htYz5cMuSFzgHFiN_OlTvACaJgXXl3PGRdWSqloowR9DRkRFq.webp?r=00f",
    },
    {
      num: 8,
      titulo: "Averigüémoslo",
      duracion: "25 min",
      desc: "BoJack es una de las estrellas invitadas al estreno del programa de juegos del Sr. Peanutbutter. ¿Perro contento? Más bien caballo en la pista.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSZDZkzaozPnEQAzD5An415a0qhkWV2B4yrqPim1mOIcEfmJ4m9xJMqSO3NB9sB9mZ34PQe4zlJ4ZwEkdGgZ0V_ytQdfsWA8SrPN3hOn4bkGKPXDDDb0E4g6.webp?r=044",
    },
    {
      num: 9,
      titulo: "La escena",
      duracion: "26 min",
      desc: "BoJack teje un plan con Kelsey, Todd, Princesa Carolyn y el Sr. Peanutbutter para robar una toma crucial de \"Secretariat\".",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYEUj9ks7ziCmjNNJSZ4qbFrisIuTXHJZzuvkwUCAskxxdzhnkWd4PVvQsb0GtB6V_kCxlnMksRXsPhASFT8nIMB3Ian1E1TDG4NErDSSPGAonajeKtbqI8t.webp?r=842",
    },
    {
      num: 10,
      titulo: "Sí, y",
      duracion: "26 min",
      desc: "Todd no puede salirse de una secta de comedia de improvisación. BoJack enfrenta una crisis profesional y Wanda cree que Diane es una mala influencia para él.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWH0Wsv5VqlNEvTRKqx-_uqkJy-0VlCwxuDAqzTAbAwgA9G5HD7neTdfMvkQLly-ELeJNj-FODB88eq_7SU5sTbbOVI2-2ZGjzNAEivLzSuLndQw9HMfKVA9.webp?r=fc5",
    }
  ],
  3: [
    {
      num: 1,
      titulo: "Corran la voz",
      duracion: "26 min",
      desc: "Ana Spanakopita envía a BoJack a Nueva York para responder entrevistas y Todd se suma al plan. Princesa Carolyn manda al Sr. Peanutbutter de vuelta al trabajo.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUos7Jwlok9oC0HuIM_62J1LwWbk0ub6xBauFU-ZIjvJfMY8jBGMhkS7nrOgIaE9otLuFpAe5lEd7W3vyls0Ba8_nH8Ry5IoPmC48KfP56dEhQRHHJUHmvIB.webp?r=f08"
    },
    {
      num: 2,
      titulo: "El programa de BoJack Horseman",
      duracion: "25 min",
      desc: "En 2007, Princesa Carolyn tiene un nuevo proyecto para BoJack, Diane conoce al Sr. Peanutbutter en la cafetería donde trabaja y Todd besa a una chica.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABdB-mwsoESVqKeBSZdkOdM_tSxcfBr4yj3RgGFAAhz2hwrzmeodTBjk8lOdWLL3YivYIzhWSW6Donc8EvChs0g-EE2UEKMxixObh1-cq-ei7Ld1PdiiC5Rq8.webp?r=063"
    },
    {
      num: 3,
      titulo: "BoJack mata",
      duracion: "25 min",
      desc: "BoJack es culpado por el asesinato de una estrella de la danza. El Sr. Peanutbutter y Todd se meten en aprietos con el zorrillo vecino y la cosa huele mal.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaeD264lVxOwzXHLA2kgXUqshnXrrcvzxvIlXNKnLxY8RcVfWVCXoCTbeyrg1HcSj8soAxV9Fz0HIW7yassdQKBZA_8JJkVvoVb_Yb4WytQP6nwFh67BAY7x.webp?r=fe0"
    },
    {
      num: 4,
      titulo: "Como pez fuera del agua",
      duracion: "26 min",
      desc: "BoJack emprende un viaje submarino hacia el Festival de Cine del Océano Pacífico para presentar “Secretariat” e intentar contactar a Kelsey.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYxMxXSmlH1hlh8acmgP7YxabNK-lgmGbDsGQaH_2bTi5JNejVmt7zAzk8VC-j0qoufVrFykNsBaDjW-fZ4igO8eqti2_jLjkEuAVZ4vG5MUQXoeGnht69T1.webp?r=b12"
    },
    {
      num: 5,
      titulo: "Amor y/o matrimonio",
      duracion: "26 min",
      desc: "Todd y BoJack aparecen sin invitación en el ensayo de una boda, Diane decide que es buena idea drogarse con un cliente y Princesa Carolyn tiene citas a ciegas.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABcKMePj2KmfC4I8wtjbYy_xvn4cznzc6Kdpvmu0-2wmHrh3yCkLMytZluJ5TmZPfbZAlnZmw_65FBPi9Z7ouqZ6A7f0mKHj4MzgcCGaWxC1sqa9Jx5mWfrbb.webp?r=c15"
    },
    {
      num: 6,
      titulo: "Brrap Brrap Pew PewE",
      duracion: "26 min",
      desc: "l tuit de Diane mete en problemas a Sextina Aquafina. El bromista y superestrella Jurj Clooners irrita de sobremanera a BoJack.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABX2rYsv2Y2gShPb8o6-dpuiVecjUK7irYVNfgJcsUuBRzEqnImfNK38rxIJNyTEeZIaAACpvH9Dm58Nj3-HLrAtHS8j3uJEcHRa1QE4YfNPn5qD6pLqy1BQW.webp?r=63a"
    },
    {
      num: 7,
      titulo: "Paren las prensas",
      duracion: "26 min",
      desc: "Todd construye una versión gigante de su cabeza. BoJack recibe un consejo cuando intenta cancelar su suscripción a un periódico.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfunNjQqw345yBdmB66oRi1N11HJ-1wzVi1UN1eJ8aR80Qrtj-pwdzxF_v2tU7MWR6zYdKXQ4mXlqlDtOx034iZaq9fyplOUOjixiMt4J0XkX-QT8XgPocvG.webp?r=b35"
    },
    {
      num: 8,
      titulo: "Viejos conocidos",
      duracion: "26 min",
      desc: "BoJack está listo para interpretar un papel en la próxima película de David Pincher. Diane conoce al hermano del Sr. Peanutbutter y Todd cambia el rumbo del negocio.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABeS_SOjOvic5lAV8b-htLsnh0r3qyFOLmEJja-4uGmI9WFl2vuaMuw99L5XN033BNFgfssKFDjJ1YRcfGnqeHhpqQmBpaxq2HicoCG7T7KmtCiAQPrcU6f6F.webp?r=da1"
    },
    {
      num: 9,
      titulo: "Lo mejor que pudo haberte pasado",
      duracion: "26 min",
      desc: "BoJack se encuentra con Princesa Carolyn en Elefante y juntos emprenden una velada de introspección mientras ayudan al personal a impresionar a un crítico gastronómico.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSK5YWvXxmNqbMrmxBG69O2ipKdMPZFFnUG-ARXSPU70GSvnuA71cHtukgbEopWxXvlWCa5DujXr2vyaxX4YGfHtvjAaGBl49r28n0uzbv0iOtpZKw1svJFw.webp?r=32f"
    },
    {
      num: 10,
      titulo: "Eres tú",
      duracion: "26 min",
      desc: "El Sr. Peanutbutter anuncia quiénes son los nominados al Óscar. BoJack se rodea de admiradores, mientras sus amistades verdaderas se desmoronan.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABVlfDhCVzk57aA6vT3X2sGpzImflPSN0Ripe4zQ1gmWLA2KdolSsooCO6FrlvdlNV9dJ0ID5BKO2Vxr66yIwjaQFcdYvSqKyfoiVubt2qtp1QMin87PDydTT.webp?r=86b"
    }
  ],
  4: [
    {
      num: 1,
      titulo: "El señor Peanutbutter se mete en política",
      duracion: "25 min",
      desc: "La campaña del Sr. Peanutbutter para sacar al gobernador de California termina en una peligrosa carrera de esquí. Mientras tanto, nadie sabe dónde está BoJack.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaoQBUrVWYcFUeJu_OLnGUSNC0b2xo6NyGZeVYDBMyJCTkazybdtf6rfBQ5l6tIdHJ7avUSKL3jXmUGbFn8KwkCMWCdlxvT4WebOsimqpGJtFTMEt2DEI8hS.webp?r=0f9"
    },
    {
      num: 2,
      titulo: "La vieja casa de los Sugarman",
      duracion: "26 min",
      desc: "BoJack desaparece de Hollywoo y pasa meses restaurando la antigua casa de verano de sus abuelos en Míchigan.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaCgKZ7f_kGNNc_olaLosdMCBN4GJFur95x2vWSCEQWiicXNdWIzAfFr3wTOT27mMCtRVg_92UYPDm0W3Ijj5Qm9SaDpu4HHjwpqejUJo1dsdO5hpftRuM97.webp?r=3b1"
    },
    {
      num: 3,
      titulo: "¡Viva! ¡El episodio de Todd!",
      duracion: "25 min",
      desc: "Servicial hasta el hartazgo, Todd se desvive haciendo favores para Princesa Carolyn, el Sr. Peanutbutter y una visita que podría tener algún vínculo con BoJack.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaHn6gGADpMhXfsZ1Xid94av1_r1fnyQV1N3G8RKWdqlrFgP10VAieRH3v5FN3fGxY4-EWELCFdkF43Iycyv2KEiNfjZ3tHVghqBnwYd_BYyabZ9WaJ798x8.webp?r=f98"
    },
    {
      num: 4,
      titulo: "Iniciar perforación",
      duracion: "26 min",
      desc: "La campaña hace estragos en la vida amorosa de Diane. BoJack ayuda a Hollyhock a buscar a la mamá. Princesa Carolyn trata de quedar embarazada.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSloV4SMTaRRSJwRSoDXxl_4jX4_r715sZID3WjWctMmI0pRCETpNce61C5kqlgrbGm54kRDqpkjYYnQ5h0CTR5098eZIAxTk6e_KQ1xL7tWxjOhAU76_qLu.webp?r=018"
    },
    {
      num: 5,
      titulo: "Mis condolencias",
      duracion: "26 min",
      desc: "Un tiroteo en un centro comercial genera una pesadilla de RR. PP. para Princesa Carolyn. BoJack visita a la madre, a quien no ve desde hace mucho, y lleva a Hollyhock.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQD8HLFWp5eBxlDqBwBSgj7jzJLqUDYvPQN1hd5x9er8CpD6ZnIQ-NJ7t1Dm3MMojziLOlewC_b-zqkKt9OpL1wlWxYX3d896Aj8XXdqVDWLdK4LVY1VIVBG.webp?r=f70"
    },
    {
      num: 6,
      titulo: "Estúpido desgraciado",
      duracion: "26 min",
      desc: "Rodeado por la familia, BoJack desciende poco a poco al infierno del autodesprecio. Princesa Carolyn y Rutabaga Rabitowitz planean la boda falsa de Courtney y Todd.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABVM-6jkN6K2idUyk3K8LHtsd79xNAbfZfXVoXfyAeKlfeV4RRPLqHoIK3bzQBQKv9Nwq5KpKBOTaEUYs5odQCbBDi2N7wcDsu7PZ5Cqi9lH4-HGKlGS4ZLmc.webp?r=283"
    },
    {
      num: 7,
      titulo: "Bajo tierra",
      duracion: "26 min",
      desc: "La lujosa colecta para la campaña del Sr. Peanutbutter da un giro aterrador. Mientras el caos se apodera de todo, BoJack y Diane se emborrachan.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABci6n3aGs-nLG-BdOyalIArHiqHDpbvfgVO-LMCMMGqD2R3WafXjINjTaDFRd_gL9Lki7OxU4hXQK9vg2iL_iU9F00L8mKapD1PLu3yfl7lEQVEgBo9v89bJ.webp?r=33b"
    },
    {
      num: 8,
      titulo: "El juez",
      duracion: "26 min",
      desc: "Hollyhock empieza a salir con un pasante del nuevo programa de BoJack. Princesa Carolyn conoce a los padres de Ralph. El Sr. Peanutbutter da su respaldo a Woodchuck.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWSrqS9vNkfzXkpW_KLkD9JfgFcSK_EILMLfwQZtvnawklgfWi-YvaOxN8R-7BVq8FohCTy60d68dwBarQ5vZc7J2u8iu4TDaERXpit6i3LTo92oYOy3uD1K.webp?r=68f"
    },
    {
      num: 9,
      titulo: "Ruthie",
      duracion: "26 min",
      desc: "Princesa Carolyn tiene un día de terror con pasajes de rechazo, engaño y pérdida. BoJack y Diane buscan el certificado de nacimiento de Hollyhock.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABdjbqWpYhjbXQXlhG_E5CVfxplHn5QIg9VYdhDT4TvTy0HAxEzcjN7JPYxIns6QYWDMfCcwGwNsh_TMeuF5UtphlfNKCd6YhbWroSJGBVrG5yOJ6gaBLJ2fK.webp?r=c74"
    },
    {
      num: 10,
      titulo: "¡Me encanta el estilo de vida californiano!",
      duracion: "26 min",
      desc: "Diane filtra información sobre Jessica Biel, el negocio de dentistas payasos de Todd se topa con un problema, y Princesa Carolyn encuentra esperanza donde menos esperaba.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABTTQvuU0LGwdvUbHrwiQu30X8eyHPZx4TuXHecj3j6qPwRObhIwnsCfuXC9pkW3xmO3JJ86S30W2ia3ndpNMGUGvKOE8PVnfLqXise7CM0G5SC2LrGQFkfLv.webp?r=7de"
    }
  ],
  5: [
    {
      num: 1,
      titulo: "La escena del desnudo",
      duracion: "25 min",
      desc: "BoJack tiene dudas sobre su nuevo programa. Princesa Carolyn visita una agencia de adopción. Entrevistan a Todd en Quehoraesahora.com.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABd2FU8MSZi_YQULc19zgltI8zFlqqrNZprMxPqaP6BSmdYE5XHoNbmzxNqIcjhQ0o-PR8TK1zjJiZrzpo4lKWZt3kBx7RJF8L3PJjGqK28bls6CaVMJh5Yvt.webp?r=a4e"
    },    
    {
      num: 2,
      titulo: "Los días de perros se acabaron",
      duracion: "25 min",
      desc: "Diane se divorcia del Sr. Peanutbutter y se muda a un apartamento destartalado. Melancólica, emprende un viaje a Vietnam para alejarse de todo.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABdK5CbYQGHv7qp9qAQj3NBgEhdQm52SoJxf_QvNgYsBdWPZSXzPp2bMjjCFY-dZa_D1lJlhUdI6aYaXYdLLHHaxfNWcehqgE8fXMDA4iR1yDfAW2dE3xwiTl.webp?r=344"
    }
    ,
    {
      num: 3,
      titulo: "Obsolescencia programada",
      duracion: "25 min",
      desc: "Todd conoce a los padres de Yolanda, que ignoran que ella es asexual. El Sr. Peanutbutter sale con una mesera joven. Gina le confiesa a BoJack un sueño de su infancia.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQIgUdjvtaSb6Vyp7kNIG6Vk5Pe1hfvjzK4qkTECFgG2K9lL5TNoIfxKtvLRk7VRlx7hY88HrepNxelZNRQhjH4fFTp8KdexX9GHWhI0xSctUxuhyAZZ8zrM.webp?r=6c2"
    }
    ,
    {
      num: 4,
      titulo: "BoJack, el feminista",
      duracion: "25 min",
      desc: "Princesa Carolyn recluta a una celebridad en desgracia para salir en Philbert, y BoJack asume una postura sin querer. El Sr. Peanutbutter intenta endurecer su imagen.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABarYt5fsjTgmjFs4HaUOkF2VVvIiqX37x5Y9QJrl2FsGT57TbXWEBycoKyXAovWsSqDSt4HIUfIrH1qPCPNlWc7Tv2LyCXFIZPDSRm-33IuOc56WphfpVW60.webp?r=ef9"
    },
    {
      num: 5,
      titulo: "La historia de Amelia Earhart",
      duracion: "25 min",
      desc: "Princesa Carolyn viaja a su pueblo natal y sufre una dolorosa regresión cuando conoce a una adolescente embarazada. Una escena de peligro sale mal en Philbert.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABco7uzA6IcAQ2XTt7yiOKIc_C1WDz6wm5JotnUsQw3SaevYmfK4BAmlVz6jZSjl44RV0cts7biCNzYvkN2DB_RTzoKuq-Uy5oQJNdXLUCXAcY-ofidPwn_gR.webp?r=95a"
    },
    {
      num: 6,
      titulo: "Churro gratis",
      duracion: "25 min",
      desc: "BoJack hace un homenaje póstumo en un funeral.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQ_gnzXgpZ7o88sglX73nkhZBQuv6MM1uff2RD4UceHBFcnJCr9IDyDLTvana_zpykIMDoY64f7RrwcLVIq3yIIIFefsi460mK-C7idDlRqI3ND9kwycqwwy.webp?r=f9e"
    },
    {
      num: 7,
      titulo: "Interior. Sub.",
      duracion: "25 min",
      desc: "La terapeuta de Diane le propone que le ponga límites a BoJack. Una hebra de queso perdida hace que Todd y Princesa Carolyn empiecen a discutir.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABVNrpWSXg93UuoynwM4Qmd3-N5lqR3XD7i67nhA68UxmMdCJ7Hc7klJxN9sV6-4gkTSuThNsQCA-oWkYdggtu34J-BUjFaKMKrXR-zztlvqhIZ_dVpTM1ilS.webp?r=92b"
    },
    {
      num: 8,
      titulo: "Las novias del Sr. Peanutbutter",
      duracion: "25 min",
      desc: "Durante la fiesta anual número 25 que BoJack organiza por Halloween, Pickles recibe un curso intensivo sobre el pasado romántico del Sr. Peanutbutter y consejos de Diane.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABcI7n3caw53Q0d6GwqkzDgyvjx6uQbMXV4Sq9pr3olqlDQi0-eMEXbXRpOgQdq8B-HbBxP1ynlD2t0N5FoUuNU5gS9Np_jRQif4.webp?r=b9e"
    },
    {
      num: 9,
      titulo: "Historia antigua",
      duracion: "25 min",
      desc: "BoJack sale a buscar más analgésicos con desesperación cuando Hollyhock se deshace de los suyos. Todd intenta resolver el problema de citas de Emily.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYpS0MsyEln-HmA2Pycm-GaMWwNmvXA14M5L4VP8ErfxWP_NwAYy0jegk6hPpftklUwH5JOzd4GFE9ibQryOyO5kztCYQ_ip3VkeCgEFs7N7l0tzqOsSCXLm.webp?r=746"
    },
    {
      num: 10,
      titulo: "Con la cabeza en las nubes",
      duracion: "25 min",
      desc: "Durante la fiesta de estreno de Philbert, Princesa Carolyn hace un trato astuto. Gina se roba el protagonismo y Diane se enfrenta a BoJack.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABT0KerJcQv4aA11Hts0_XmKv8CocSGGhhO-S8r2z4OvWNhCZCPMdZCA4uE46nfJ5xJqFNjSpJxtxl5IIw1xsPqDcNhF_zww1D2Ry2aZyLZzSN9lcME-m9fOg.webp?r=c37"
    },
  ],
  6: [
    {
      num: 1,
      titulo: "Un caballo entra a rehabilitación",
      duracion: "25 min",
      desc: "BoJack ingresa a Pastiches, un centro de rehabilitación de Malibú, donde confronta recuerdos de la muerte de Sarah Lynn y su propia infancia tormentosa.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSUuHRASaNNrLudkoVo4giHP_95xr-I4FPcbEGiSbwZa_XLJhlt2ozYe2VddP3w9fxHIbtC1PPqbJqTD9mDC0eNMQEha2LSs2gMgNBjLZ2KonzdvYxa_V3Yp.webp?r=fc0"
    },
    {
      num: 2,
      titulo: "El nuevo cliente",
      duracion: "25 min",
      desc: "Cuando su niñera renuncia, a Princesa Carolyn le cuesta equilibrar las exigencias del trabajo y la maternidad. El Sr. Peanutbutter visita a BoJack en rehabilitación.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUxWbcGTaAXBNO9iZX6QKxfgO_ASMGATNaClPhW0lN3PGTnEDafbeTi94YHAzRPXkOjMBGuBdZ3oH-fsxFTiKNWMQ0m4co9Uyjp2jpZFJB8Z8AofKOTeIrYe.webp?r=bb8"
    },
    {
      num: 3,
      titulo: "Una historia edificante",
      duracion: "26 min",
      desc: "Girl Croosh envía a Diane a la calle con Guy, un robusto camarógrafo. La joven no quiere saber nada con la idea de producir historias más positivas y edificantes.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQ6Af8dHoz5grRKwC9RkNS0Tz7_Oajdi6ceG2cmMxBvfMgMHzmmb7L4h9BkuGWKhNxiu9k1QE62fa1h3Fq4SSFdDpWSgsTpTnDD184OyfMILBOg0m_M8Ag5C.webp?r=2ae"
    },
    {
      num: 4,
      titulo: "Sorpresa",
      duracion: "26 min",
      desc: "Todd organiza una boda sorpresa para Pickles y el Sr. Peanutbutter, pero la fiesta se le va de las manos cuando el Sr. Peanutbutter hace una confesión.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUbwQ8OisOpv8u-ZVE4U786w1wrGHzdeUQ7nxpXTsymn5JVJHUkwh9CTZqTux0u5gNdyUAWTSVOPEFr2HjeISIknbjqq9OZBDMuDYAdIknndxZ83jpxXc7Dx.webp?r=810"
    },
    {
      num: 5,
      titulo: "Un poco disparejo, es todo",
      duracion: "26 min",
      desc: "El doctor Champ le dice a BoJack que es hora de salir de rehabilitación. La honra del Sr. Peanutbutter queda en jaque. En Chicago, Diane sufre una falta de inspiración.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSLzndN3oFSoT4WgbuOAgl_E41Nb0Rbeu2NM3H0tMl5WHFgBUDT736DTjym3D9AbBvC-uC4Mr6twXDyopoh8-y-F4JArJVo67CkcsKNfr4OHfN5YjL7Mn0Uv.webp?r=469"
    },
    {
      num: 6,
      titulo: "El riñón que conquistó Hollywood",
      duracion: "26 min",
      desc: "Los asistentes de Hollywoo se declaran en huelga. BoJack intenta ayudar al doctor Champ. Todd se entera de que su madre necesita un riñón, y Diane le propone un plan.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZJCPrYodRg4ZwfoJPAaC-1K4_czVFRuAiFnyNpoFTqhI8yIuKGW0m7TAD6u01t8_iEmZJ-a7Q-9JdeSGayWabpcxKO0Y4tJkwZLhUIOpffE1niVM6gF6CPo.webp?r=ecf"
    },
    {
      num: 7,
      titulo: "El rostro de la depresión",
      duracion: "26 min",
      desc: "BoJack recorre el país para reanudar la relación con sus seres queridos, y el Sr. Peanutbutter emprende una gira nacional como el rostro de la depresión.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUFLqUYecDYVvdx5wi70SrOTZuJryZsWwwdpW88w5pkKWbvwOZOt7MUKPcdvKjyz5DvO1guVOFSn3JAuxP16K36MLBsT3d3dOVDF6VrvS3NfTImplumAEcuO.webp?r=d56"
    },
    {
      num: 8,
      titulo: "Uno rapidito mientras él no está",
      duracion: "26 min",
      desc: "Una reportera investiga las circunstancias en torno a la muerte de Sarah Lynn. Hollyhock va a una fiesta en Nueva York.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABdGXOsHkDc8O5gKzllspVyYzMV3mMqKK-p2szwx3x_oS_H51xbYtRurE7WqWVTAUQOVDRQfk0u4dZkIv1ZG7x6dQsOglKAm5PVoRaEEUyDGULUS8ZSnH0YUv.webp?r=0e1"
    },
    {
      num: 9,
      titulo: "Estudio de escena intermedia con BoJack Horseman",
      duracion: "26 min",
      desc: "Luego de que BoJack comienza a dar clases de actuación en Wesleyan, Hollyhock pone algunos límites a su relación",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABa3ftbJeMwgnxo09txm4IpjsP62XCYdizbZEvI5mq1nKdn0Xc7HuoYWeY7h72Lvtqgv8iqghlN2qvK2G8KCNEXhoKZJ4PrHZ6BBI1QdvNr0SoYQok6nkKArt.webp?r=6d1"
    },
    {
      num: 10,
      titulo: "Daño del bueno",
      duracion: "26 min",
      desc: "Diane sale de su depresión, pero aún le cuesta comenzar a escribir sus memorias. Los periodistas Max y Paige visitan a Penny.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfMdrvGrKHH0HHOVE1x2YGZCgHq3JFXU5SYCNP4KP_7e85d43_5AOQ9kjH7lxTRmEkkqV20XXNvat2fJk1T_2iUr9qWAsWN5WZxCNzOwTYpIDrxI-epmf1uV.webp?r=325"
    },
  ]
};