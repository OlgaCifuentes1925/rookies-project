import quevedoImg from "@/assets/foto_quevedo.jpg.asset.json";
import panteraImg from "@/assets/foto_la_pantera.jpg.asset.json";
import luchoImg from "@/assets/foto_lucho.jpg.asset.json";
import jusephImg from "@/assets/foto_jusepe.jpg.asset.json";

export type Artist = {
  id: string;
  name: string;
  realName: string;
  origin: string;
  bio: string;
  chips: string[];
  video?: string;
  /** Placeholder key for the photo to be provided: [IMAGEN_*] */
  photoKey: string;
  photo?: string;
  accent: string;
};

export const artists: Artist[] = [
  {
    id: "quevedo",
    name: "Quevedo",
    realName: "Pedro Luis Domínguez Quevedo",
    origin: "Las Palmas de Gran Canaria 🇮🇨",
    bio: "El que abrió la puerta a todos. Quevedo llegó a Las Palmas de Gran Canaria con 5 años y pasó a estar en boca de todos con “Cayó la noche (Remix)”. Después llegó la sesión de Bizarrap, “Quédate”, que reventó todos los récords y lo puso número uno mundial en Spotify. Grammy Latino, estadios llenos y una lista de éxitos infinita tras su primer disco “Donde quiero estar” —“Vista al mar”, “Punto G”, “Playa del Inglés”— no le han cambiado el acento. Su último disco, El Baifo, es su carta de amor más canaria: hasta el nombre es puro habla isleña.",
    chips: [
      "Quédate (Bzrp #52)",
      "Vista al mar",
      "Punto G",
      "Playa del Inglés",
      "Grammy Latino",
      "El Baifo",
    ],
    video: "knGfe_UujWE",
    photoKey: "IMAGEN_QUEVEDO",
    photo: quevedoImg.url,
    accent: "var(--sol)",
  },
  {
    id: "la-pantera",
    name: "La Pantera",
    realName: "Sergio Aimar Castellano Almeida",
    origin: "Gran Canaria 🇮🇨",
    bio: "Empezó rapeando en las plazas de Gran Canaria y hoy es una de las voces más reconocibles del urbano canario. La Pantera trae flow, calle y un alma boricua que se le nota en cada tema. Junto a su productor Izak (BDP Music) firmó bombazos como “Cayó la noche”, himno de toda una generación en las islas, y en solitario brilla con temas como “California”. Lealtad infinita por bandera.",
    chips: ["Cayó la noche (Remix)", "California", "Flow Cardi", "Ando Fino", "Lucy"],
    video: "XxxV2fWJfK0",
    photoKey: "IMAGEN_LAPANTERA",
    photo: panteraImg.url,
    accent: "var(--turquesa)",
  },
  {
    id: "lucho-rk",
    name: "Lucho RK",
    realName: "Emilio Roca Cáceres",
    origin: "Barrio de Triana, Las Palmas de Gran Canaria 🇮🇨",
    bio: "Del barrio de Triana al panorama nacional. Lucho RK aparcó los estudios para apostarlo todo por la música durante la pandemia, se metió a técnico de sonido y ahí conoció a Linton, el productor clave de la escena canaria. Su sonido no se casa con nadie: mezcla el boom bap noventero con el reggaetón actual. Su disco debut, ¿Quién está aquí?, lo colocó entre los nombres del momento, y temas como “Guaya” (con Quevedo) confirman que llegó para quedarse.",
    chips: ["¿Quién está aquí?", "Esos ojitos", "Aquí estoy", "Guaya (con Quevedo)", "Ta fácil"],
    video: "oW1AhnZM-t0",
    photoKey: "IMAGEN_LUCHORK",
    photo: luchoImg.url,
    accent: "var(--sol)",
  },
  {
    id: "juseph",
    name: "Juseph",
    realName: "Juseph Zapata",
    origin: "Nacido en Cali (Colombia), criado en Gran Canaria — barrio Los Brezos 🇮🇨",
    bio: "Canario-colombiano y corazón de Los Brezos. Juseph nació en Cali y se crió en Gran Canaria, y esa mezcla se le nota en la música: reggaetón con la puerta abierta a mil influencias, de Frank Ocean a Myke Towers. Publicando freestyles en redes se fue haciendo un nombre hasta soltar su álbum Muchachito, y desde entonces no ha parado de crecer con proyectos como Los del Glamoür. Sigue siendo, en sus propias palabras, “el mismo pibe que salió de Los Brezos”.",
    chips: ["Muchachito", "Los del Glamoür", "Cayó la noche", "Colaboraciones con La Pantera"],
    video: "EZRQNCpN63o",
    photoKey: "IMAGEN_JUSEPH",
    photo: jusephImg.url,
    accent: "var(--turquesa)",
  },
];

export const timeline = [
  {
    title: "Los Brezos",
    text: "La casa de Gran Canaria donde empieza todo: amistad y música por encima del ego.",
  },
  {
    title: "“Cayó la noche” (Remix)",
    text: "La Pantera, Quevedo y Juseph (+ Bejo, Abhir Hathi, Cruz Cafuné, El Ima) firman un himno generacional del urbano canario.",
  },
  { title: "“Guaya”", text: "Lucho RK y Quevedo demuestran que su dúo nunca falla." },
  { title: "“Ta fácil”", text: "Lucho RK y La Pantera, sorpresa de final de año." },
  {
    title: "“Algo va a pasar”",
    text: "Los cuatro juntos por fin en un mismo tema, dentro de El Baifo (2026).",
  },
];

export const sections = [
  { id: "intro", label: "Intro" },
  { id: "quevedo", label: "Quevedo" },
  { id: "la-pantera", label: "La Pantera" },
  { id: "lucho-rk", label: "Lucho RK" },
  { id: "juseph", label: "Juseph" },
  { id: "juntos", label: "Juntos" },
];
