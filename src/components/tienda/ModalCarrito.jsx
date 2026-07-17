import { useState } from "react";
import "./ModalCarrito.css";

function ModalCarrito({
  carrito,
  carritoAbierto,
  onCerrarCarrito,
  onSumarCantidad,
  onRestarCantidad,
  onVaciarCarrito,
}) {
  const [compraFinalizada, setCompraFinalizada] = useState(false);

  if (!carritoAbierto) return null;

  const convertirPrecioANumero = (precio) => {
    return Number(precio.replace("$", "").replace(".", ""));
  };

  const formatearPrecio = (precio) => {
    return precio.toLocaleString("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0,
    });
  };

  const totalCarrito = carrito.reduce((total, item) => {
    const precioNumerico = convertirPrecioANumero(item.precio);
    return total + precioNumerico * item.cantidad;
  }, 0);

  const finalizarCompra = () => {
    setCompraFinalizada(true);
    onVaciarCarrito();
  };

  const cerrarCarrito = () => {
    setCompraFinalizada(false);
    onCerrarCarrito();
  };

  const seguirComprando = () => {
    setCompraFinalizada(false);
    onCerrarCarrito();
  };

  return (
    <div className="modal-carrito" onClick={cerrarCarrito}>
      <button
        className="close-carrito"
        type="button"
        onClick={cerrarCarrito}
        aria-label="Cerrar carrito"
      >
        &times;
      </button>

      <div
        className="modal-carrito-content"
        onClick={(evento) => evento.stopPropagation()}
      >
        {compraFinalizada ? (
          <div className="compra-finalizada-box">
            <h3>Compra finalizada</h3>

            <p>
              ¡Gracias por elegir <strong>CAFETYPE</strong>! Tu compra fue
              registrada correctamente.
            </p>

            <button
              className="btn-compra-carrito"
              type="button"
              onClick={seguirComprando}
            >
              Seguir comprando
            </button>
          </div>
        ) : carrito.length === 0 ? (
          <>
            <p className="carrito-vacio">Tu carrito está vacío.</p>

            <button className="btn-compra-carrito" type="button" disabled>
              Finalizar Compra
            </button>
          </>
        ) : (
          <>
            <ul className="carrito-items">
              {carrito.map((item) => {
                const precioUnitario = convertirPrecioANumero(item.precio);
                const subtotal = precioUnitario * item.cantidad;

                return (
                  <li className="item-carrito" key={item.id}>
                    <div className="item-carrito-detalle">
                      <img
                        src={item.imagen}
                        alt={item.nombre}
                        className="img-carrito-item"
                      />

                      <div className="item-carrito-info">
                        <p>{item.nombre}</p>

                        <div className="cantidad-control">
                          <button
                            className="btn-cantidad"
                            type="button"
                            aria-label="Disminuir cantidad"
                            onClick={() => onRestarCantidad(item.id)}
                          >
                            -
                          </button>

                          <input
                            className="input-cantidad"
                            type="number"
                            value={item.cantidad}
                            min="1"
                            readOnly
                          />

                          <button
                            className="btn-cantidad"
                            type="button"
                            aria-label="Aumentar cantidad"
                            onClick={() => onSumarCantidad(item.id)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="item-carrito-precio">
                      <p>{formatearPrecio(subtotal)}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="carrito-total">
              <span>Total:</span>
              <strong>{formatearPrecio(totalCarrito)}</strong>
            </div>

            <button
              className="btn-compra-carrito"
              type="button"
              onClick={finalizarCompra}
            >
              Finalizar Compra
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ModalCarrito;
