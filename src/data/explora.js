import groupTeamIcon from "../assets/icons/explora/group-team-svgrepo-com.svg";
import marketIcon from "../assets/icons/explora/market.svg";
import contactIcon from "../assets/icons/explora/contact-new-svgrepo-com.svg";
import promotionIcon from "../assets/icons/explora/promotion-segments-svgrepo-com.svg";

import { Link } from "react-router-dom";

export const exploraItems = [
  {
    id: "nosotros",
    titulo: "Nosotros",
    descripcion:
      "Conocé la historia de CAFETYPE y nuestra forma de seleccionar cada café.",
    cta: "Saber más",
    to: "#",
    icono: groupTeamIcon,
  },
  {
    id: "tienda",
    titulo: "Tienda online",
    descripcion:
      "Explorá nuestros cafés disponibles y encontrá el blend ideal para vos.",
    cta: "Ir a tienda",
    to: "/tienda",
    icono: marketIcon,
  },
  {
    id: "whatsapp",
    titulo: "WhatsApp",
    descripcion:
      "Hablá con nosotros para recibir ayuda, recomendaciones o resolver dudas.",
    cta: "Contactar",
    href: "https://wa.me/5493794762251?text=Hola%20CAFETYPE%2C%20quiero%20hacer%20una%20consulta%20sobre%20sus%20caf%C3%A9s.",
    icono: contactIcon,
    externo: true,
  },
  {
    id: "promociones",
    titulo: "Promociones",
    descripcion:
      "Descubrí ofertas especiales, combos y beneficios por tiempo limitado.",
    cta: "Ver promos",
    to: "/tienda",
    icono: promotionIcon,
  },
];
