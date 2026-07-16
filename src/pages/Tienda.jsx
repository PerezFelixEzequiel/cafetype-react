import { useState } from "react";

import HeaderTienda from "../components/headerTienda/HeaderTienda";
import Footer from "../components/footer/Footer";
import FiltrosTienda from "../components/tienda/FiltrosTienda";
import TiendaProductos from "../components/tienda/TiendaProductos";
import ModalCarrito from "../components/tienda/ModalCarrito";

import { productosTienda } from "../data/productosTienda";

import "../components/tienda/Tienda.css";

function Tienda() {
  const [filtros, setFiltros] = useState({
    tipo: "todo",
    origen: [],
    tueste: [],
  });

  const [carrito, setCarrito] = useState([]);
  const [carritoAbierto, setCarritoAbierto] = useState(false);

  const abrirCarrito = () => {
    console.log("Abriendo carrito");
    setCarritoAbierto(true);
  };

  const cerrarCarrito = () => {
    setCarritoAbierto(false);
  };

  const agregarAlCarrito = (producto) => {
    setCarrito((carritoActual) => {
      const productoExiste = carritoActual.find(
        (item) => item.id === producto.id
      );

      if (productoExiste) {
        return carritoActual.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }

      return [...carritoActual, { ...producto, cantidad: 1 }];
    });

    setCarritoAbierto(true);
  };

  const sumarCantidad = (idProducto) => {
    setCarrito((carritoActual) =>
      carritoActual.map((item) =>
        item.id === idProducto
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      )
    );
  };

  const restarCantidad = (idProducto) => {
    setCarrito((carritoActual) =>
      carritoActual
        .map((item) =>
          item.id === idProducto
            ? { ...item, cantidad: item.cantidad - 1 }
            : item
        )
        .filter((item) => item.cantidad > 0)
    );
  };

  const vaciarCarrito = () => {
  setCarrito([]);
};

  const cambiarTipo = (evento) => {
    setFiltros({
      ...filtros,
      tipo: evento.target.value,
    });
  };

  const cambiarCheckbox = (evento) => {
    const { name, value, checked } = evento.target;

    setFiltros((filtrosActuales) => {
      const valoresActuales = filtrosActuales[name];

      return {
        ...filtrosActuales,
        [name]: checked
          ? [...valoresActuales, value]
          : valoresActuales.filter((item) => item !== value),
      };
    });
  };

  const productosFiltrados = productosTienda.filter((producto) => {
    const coincideTipo =
      filtros.tipo === "todo" || producto.tipo === filtros.tipo;

    const coincideOrigen =
      filtros.origen.length === 0 ||
      filtros.origen.some((origen) => producto.origen.includes(origen));

    const coincideTueste =
      filtros.tueste.length === 0 ||
      filtros.tueste.some((tueste) => producto.tueste.includes(tueste));

    return coincideTipo && coincideOrigen && coincideTueste;
  });

  const cantidadTotalCarrito = carrito.reduce((total, item) => {
  return total + item.cantidad;
}, 0);

  return (
    <>
      <HeaderTienda
  onAbrirCarrito={abrirCarrito}
  cantidadCarrito={cantidadTotalCarrito}
/>

      <main className="tienda-layout">
        <FiltrosTienda
          filtros={filtros}
          onCambiarTipo={cambiarTipo}
          onCambiarCheckbox={cambiarCheckbox}
        />

        <TiendaProductos
          productos={productosFiltrados}
          onAgregarCarrito={agregarAlCarrito}
        />
      </main>

      <Footer />

      <ModalCarrito
  carrito={carrito}
  carritoAbierto={carritoAbierto}
  onCerrarCarrito={cerrarCarrito}
  onSumarCantidad={sumarCantidad}
  onRestarCantidad={restarCantidad}
  onVaciarCarrito={vaciarCarrito}
/>
    </>
  );
}

export default Tienda;