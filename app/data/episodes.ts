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
      titulo: "Campaña para el Oscar",
      duracion: "26 min",
      desc: "BoJack viaja promocionando Secretariat para asegurar una nominación al Oscar con la ayuda de Ana Spanikopita.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUos7Jwlok9oC0HuIM_62J1LwWbk0ub6xBauFU-ZIjvJfMY8jBGMhkS7nrOgIaE9otLuFpAe5lEd7W3vyls0Ba8_nH8Ry5IoPmC48KfP56dEhQRHHJUHmvIB.webp?r=f08"
    },
    {
      num: 2,
      titulo: "BoJack en el mar",
      duracion: "25 min",
      desc: "BoJack asiste a un festival de cine submarino donde no puede hablar y busca disculparse con Kelsey.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABdB-mwsoESVqKeBSZdkOdM_tSxcfBr4yj3RgGFAAhz2hwrzmeodTBjk8lOdWLL3YivYIzhWSW6Donc8EvChs0g-EE2UEKMxixObh1-cq-ei7Ld1PdiiC5Rq8.webp?r=063"
    },
    {
      num: 3,
      titulo: "Aborto en Hollywoo",
      duracion: "25 min",
      desc: "Un tuit accidental de Diane genera una controversia pública masiva en los medios.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaeD264lVxOwzXHLA2kgXUqshnXrrcvzxvIlXNKnLxY8RcVfWVCXoCTbeyrg1HcSj8soAxV9Fz0HIW7yassdQKBZA_8JJkVvoVb_Yb4WytQP6nwFh67BAY7x.webp?r=fe0"
    },
    {
      num: 4,
      titulo: "Eso es demasiado, hombre",
      duracion: "26 min",
      desc: "BoJack y Sarah Lynn se embarcan en un viaje descontrolado buscando corregir errores del pasado.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABYxMxXSmlH1hlh8acmgP7YxabNK-lgmGbDsGQaH_2bTi5JNejVmt7zAzk8VC-j0qoufVrFykNsBaDjW-fZ4igO8eqti2_jLjkEuAVZ4vG5MUQXoeGnht69T1.webp?r=b12"
    }
  ],
  4: [
    {
      num: 1,
      titulo: "Candidato a Gobernador",
      duracion: "25 min",
      desc: "El Sr. Peanutbutter inicia su campaña política contra la gobernadora de California.",
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
      titulo: "Hollywoo Stars and Celebrities",
      duracion: "25 min",
      desc: "Una joven llamada Hollyhock llega buscando a su padre biológico con la ayuda de BoJack.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaCgKZ7f_kGNNc_olaLosdMCBN4GJFur95x2vWSCEQWiicXNdWIzAfFr3wTOT27mMCtRVg_92UYPDm0W3Ijj5Qm9SaDpu4HHjwpqejUJo1dsdO5hpftRuM97.webp?r=3b1"
    },
    {
      num: 4,
      titulo: "Flecha del tiempo",
      duracion: "26 min",
      desc: "A través de recuerdos fragmentados, exploramos el trágico pasado de Beatrice Horseman y su demencia actual.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaHn6gGADpMhXfsZ1Xid94av1_r1fnyQV1N3G8RKWdqlrFgP10VAieRH3v5FN3fGxY4-EWELCFdkF43Iycyv2KEiNfjZ3tHVghqBnwYd_BYyabZ9WaJ798x8.webp?r=f98"
    }
  ],
  5: [
    {
      num: 1,
      titulo: "Philbert",
      duracion: "25 min",
      desc: "BoJack comienza a trabajar en su nueva serie policial 'Philbert', producida por Princesa Carolyn.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABd2FU8MSZi_YQULc19zgltI8zFlqqrNZprMxPqaP6BSmdYE5XHoNbmzxNqIcjhQ0o-PR8TK1zjJiZrzpo4lKWZt3kBx7RJF8L3PJjGqK28bls6CaVMJh5Yvt.webp?r=a4e"
    },
    {
      num: 2,
      titulo: "El churro gratis",
      duracion: "26 min",
      desc: "BoJack da un monólogo ininterrumpido durante el funeral de su madre, Beatrice Horseman.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABd2FU8MSZi_YQULc19zgltI8zFlqqrNZprMxPqaP6BSmdYE5XHoNbmzxNqIcjhQ0o-PR8TK1zjJiZrzpo4lKWZt3kBx7RJF8L3PJjGqK28bls6CaVMJh5Yvt.webp?r=a4e"
    },
    {
      num: 3,
      titulo: "El show de la Sra. Peanutbutter",
      duracion: "25 min",
      desc: "La frontera entre la realidad y la ficción de la serie Philbert se vuelve difusa para BoJack.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABdK5CbYQGHv7qp9qAQj3NBgEhdQm52SoJxf_QvNgYsBdWPZSXzPp2bMjjCFY-dZa_D1lJlhUdI6aYaXYdLLHHaxfNWcehqgE8fXMDA4iR1yDfAW2dE3xwiTl.webp?r=344"
    }
  ],
  6: [
    {
      num: 1,
      titulo: "Rehabilitación Pastiches",
      duracion: "25 min",
      desc: "BoJack ingresa a un centro de rehabilitación de lujo para enfrentar su adicción al alcohol.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSUuHRASaNNrLudkoVo4giHP_95xr-I4FPcbEGiSbwZa_XLJhlt2ozYe2VddP3w9fxHIbtC1PPqbJqTD9mDC0eNMQEha2LSs2gMgNBjLZ2KonzdvYxa_V3Yp.webp?r=fc0"
    },
    {
      num: 2,
      titulo: "Profesor Horseman",
      duracion: "25 min",
      desc: "BoJack se muda a Massachusetts para enseñar actuación en la Universidad Wesleyan.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUxWbcGTaAXBNO9iZX6QKxfgO_ASMGATNaClPhW0lN3PGTnEDafbeTi94YHAzRPXkOjMBGuBdZ3oH-fsxFTiKNWMQ0m4co9Uyjp2jpZFJB8Z8AofKOTeIrYe.webp?r=bb8"
    },
    {
      num: 3,
      titulo: "La vista desde el medio",
      duracion: "26 min",
      desc: "BoJack experimenta un sueño poético y surrealista reuniendo a todas las personas importantes de su vida.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQ6Af8dHoz5grRKwC9RkNS0Tz7_Oajdi6ceG2cmMxBvfMgMHzmmb7L4h9BkuGWKhNxiu9k1QE62fa1h3Fq4SSFdDpWSgsTpTnDD184OyfMILBOg0m_M8Ag5C.webp?r=2ae"
    },
    {
      num: 4,
      titulo: "Fue bueno mientras duró",
      duracion: "26 min",
      desc: "BoJack se reúne por última vez con Todd, Princesa Carolyn, Mr. Peanutbutter y Diane en Hollywoo.",
      img: "https://occ-0-4916-1740.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABUbwQ8OisOpv8u-ZVE4U786w1wrGHzdeUQ7nxpXTsymn5JVJHUkwh9CTZqTux0u5gNdyUAWTSVOPEFr2HjeISIknbjqq9OZBDMuDYAdIknndxZ83jpxXc7Dx.webp?r=810"
    }
  ]
};