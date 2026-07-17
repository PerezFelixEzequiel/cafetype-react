import cafeBrasilCard from "../assets/productos/cards/cafe-brasil.png";
import cafeColombiaCard from "../assets/productos/cards/cafe-colombia.png";
import cafeEspanaCard from "../assets/productos/cards/cafe-espana.png";
import cafeItaliaCard from "../assets/productos/cards/cafe-italia.png";

import cafeBrasilFrente from "../assets/productos/packaging/cafe-brasil-frente.png";
import cafeBrasilDorso from "../assets/productos/packaging/cafe-brasil-dorso.png";

import cafeColombiaFrente from "../assets/productos/packaging/cafe-colombia-frente.png";
import cafeColombiaDorso from "../assets/productos/packaging/cafe-colombia-dorso.png";

import cafeEspanaFrente from "../assets/productos/packaging/cafe-espana-frente.png";
import cafeEspanaDorso from "../assets/productos/packaging/cafe-espana-dorso.png";

import cafeItaliaFrente from "../assets/productos/packaging/cafe-italia-frente.png";
import cafeItaliaDorso from "../assets/productos/packaging/cafe-italia-dorso.png";

export const productosCafe = [
  {
    id: "brasil-selvatico",
    perfil: "Intenso",
    familiaSabor: "Achocolatado",
    nombre: "Brasil Selvático",
    origen: "Brasil",
    tueste: "Medio-oscuro",
    intensidad: "Alta",
    acidez: "Baja",
    cuerpo: "Alto",
    dulzor: "Medio-alto",
    notas: "Chocolate, nuez, caramelo",
    metodoIdeal: "Espresso, moka, prensa francesa",
    descripcionCorta:
      "Café intenso y envolvente, con cuerpo alto y notas cálidas a chocolate y frutos secos.",
    descripcionLarga:
      "Brasil Selvático ofrece una taza intensa y envolvente, con cuerpo alto, baja acidez y un perfil claramente achocolatado. Su tueste medio-oscuro resalta notas de chocolate, nuez y caramelo, logrando una experiencia cálida, profunda y persistente. Es ideal para quienes buscan un café con carácter y una presencia marcada en boca.",
    precio: "$15.000",
    cuotas: "3 x $5.000 sin interés",
    imagenCard: cafeBrasilCard,
    imagen: {
      frente: cafeBrasilFrente,
      dorso: cafeBrasilDorso,
    },
    perfilSabores: {
      intensidad: 5,
      acidez: 2,
      cuerpo: 5,
      dulzor: 4,
    },
  },

  {
    id: "colombia-supremo",
    perfil: "Equilibrado",
    familiaSabor: "Frutal",
    nombre: "Colombia Supremo",
    origen: "Colombia",
    tueste: "Medio",
    intensidad: "Media-alta",
    acidez: "Media-alta",
    cuerpo: "Medio",
    dulzor: "Medio",
    notas: "Frutos rojos, cacao, panela",
    metodoIdeal: "Filtro, espresso, prensa francesa",
    descripcionCorta:
      "Café equilibrado y vibrante, con acidez media-alta y notas frutales suaves.",
    descripcionLarga:
      "Colombia Supremo destaca por su perfil equilibrado y su carácter frutal, con una taza vibrante, limpia y de cuerpo medio. Su tueste medio permite expresar notas de frutos rojos, cacao y panela, manteniendo una acidez media-alta agradable y bien integrada. Es una gran opción para quienes buscan complejidad, frescura y balance en cada sorbo.",
    precio: "$10.000",
    cuotas: "3 x $3.250 sin interés",
    imagenCard: cafeColombiaCard,
    imagen: {
      frente: cafeColombiaFrente,
      dorso: cafeColombiaDorso,
    },
    perfilSabores: {
      intensidad: 3,
      acidez: 4,
      cuerpo: 3,
      dulzor: 4,
    },
  },

  {
    id: "espana-reserva",
    perfil: "Intenso",
    familiaSabor: "Tostado y Especiado",
    nombre: "España Reserva",
    origen: "España",
    tueste: "Oscuro",
    intensidad: "Alta",
    acidez: "Baja",
    cuerpo: "Medio-alto",
    dulzor: "Medio-bajo",
    notas: "Cacao amargo, especias, caramelo tostado",
    metodoIdeal: "Espresso, moka, cafetera italiana",
    descripcionCorta:
      "Café de perfil intenso y tostado, con carácter fuerte y final persistente.",
    descripcionLarga:
      "España Reserva presenta un perfil intenso, de tueste oscuro y marcada personalidad, ideal para quienes prefieren sabores profundos y expresivos. Su familia de sabor tostado y especiado se apoya en notas de cacao amargo, especias y caramelo tostado, con baja acidez y un final persistente. Es un café pensado para una experiencia potente, clásica y contundente.",
    precio: "$12.500",
    cuotas: "3 x $4.200 sin interés",
    imagenCard: cafeEspanaCard,
    imagen: {
      frente: cafeEspanaFrente,
      dorso: cafeEspanaDorso,
    },
    perfilSabores: {
      intensidad: 4,
      acidez: 2,
      cuerpo: 4,
      dulzor: 3,
    },
  },

  {
    id: "italia-elegant",
    perfil: "Suave",
    familiaSabor: "Dulce y Suave",
    nombre: "Italia Elegant",
    origen: "Italia",
    tueste: "Medio-claro",
    intensidad: "Media",
    acidez: "Media",
    cuerpo: "Medio",
    dulzor: "Medio-alto",
    notas: "Almendra, vainilla, cacao suave",
    metodoIdeal: "Filtro, prensa francesa, espresso suave",
    descripcionCorta:
      "Café delicado y refinado, con perfil suave, aromático y elegante.",
    descripcionLarga:
      "Italia Elegant propone una experiencia suave, delicada y refinada, con un perfil dulce y armonioso. Su tueste medio-claro conserva un carácter aromático sutil, donde aparecen notas de almendra, vainilla y cacao suave, acompañadas por un cuerpo medio y una sensación ligera en boca. Es ideal para quienes buscan una taza elegante, amable y fácil de disfrutar.",
    precio: "$15.000",
    cuotas: "3 x $5.000 sin interés",
    imagenCard: cafeItaliaCard,
    imagen: {
      frente: cafeItaliaFrente,
      dorso: cafeItaliaDorso,
    },
    perfilSabores: {
      intensidad: 2,
      acidez: 3,
      cuerpo: 2,
      dulzor: 5,
    },
  },
];
