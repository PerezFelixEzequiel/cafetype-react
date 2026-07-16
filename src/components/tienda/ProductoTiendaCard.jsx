function ProductoTiendaCard({ producto, onAgregarCarrito }) {
  return (
    <article className={`card-tienda ${producto.esCombo ? "card-combo" : ""}`}>
      <div className="card-tienda-img">
        <img src={producto.imagen} alt={producto.nombre} />
      </div>

      <div className="texto-card">
        <h3>{producto.nombre}</h3>
        <p>{producto.formato}</p>
      </div>

      <div className="card-footer">
        <div className="card-precio">
          <p>{producto.precio}</p>
          <small>{producto.cuotas}</small>
        </div>

        <button
          className="btn-card-tienda"
          type="button"
          onClick={() => onAgregarCarrito(producto)}
        >
          Agregar al carrito
        </button>
      </div>
    </article>
  );
}

export default ProductoTiendaCard;