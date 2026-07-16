import { productosCafe } from "./productos";

import euroComboImg from "../assets/tienda/euro-combo.png";
import latinComboImg from "../assets/tienda/latin-combo.png";

export const productosTienda = [
  ...productosCafe.map((producto) => ({
    id: producto.id,
    tipo: "productos",
    nombre: producto.nombre,
    formato: `${producto.origen} · ${producto.tueste} · 1kg`,
    origen: producto.origen.toLowerCase(),
    tueste: producto.tueste.toLowerCase(),
    perfil: producto.perfil.toLowerCase(),
    precio: producto.precio,
    cuotas: producto.cuotas,
    imagen: producto.imagenCard,
    esCombo: false,
  })),

  {
    id: "euro-combo",
    tipo: "promociones",
    nombre: "Euro Combo",
    formato: "Italia Elegant + España Reserva · 1kg",
    origen: "espana italia",
    tueste: "oscuro medio-claro",
    perfil: "intenso suave",
    precio: "$25.000",
    cuotas: "3 x $8.300 sin interés",
    imagen: euroComboImg,
    esCombo: true,
  },

  {
    id: "latin-combo",
    tipo: "promociones",
    nombre: "Latin Combo",
    formato: "Colombia Supremo + Brasil Selvático · 1kg",
    origen: "brasil colombia",
    tueste: "medio-oscuro medio",
    perfil: "intenso equilibrado",
    precio: "$22.500",
    cuotas: "3 x $7.500 sin interés",
    imagen: latinComboImg,
    esCombo: true,
  },
];