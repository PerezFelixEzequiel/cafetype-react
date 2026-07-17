import { Link } from "react-router-dom";

function ProductoCard({ producto, onVerMas }) {
  return (
    <div className="cards-cafe">
      <div className="container-img-card">
        <img
          src={producto.imagenCard}
          alt={`Café ${producto.nombre}`}
          className="img-card-cafe"
        />

        <button
          className="btn-action-modal open-modal-btn"
          type="button"
          onClick={() => onVerMas(producto)}
        >
          Ver más
        </button>
      </div>

      <div className="container-descripcion-card">
        <span className="producto-categoria">Café de especialidad</span>

        <h3 className="producto-nombre">{producto.nombre}</h3>

        <p className="producto-formato">
          {producto.origen} · {producto.tueste} · 1kg
        </p>

        <div className="producto-tags">
          <span>{producto.perfil}</span>
          <span>{producto.origen}</span>
          <span>{producto.familiaSabor}</span>
        </div>

        <div className="producto-precio-box">
          <p className="producto-precio">{producto.precio}</p>
          <p className="producto-cuotas">{producto.cuotas}</p>
        </div>
      </div>

      <Link to="/tienda" className="btn-card">
        Comprar
      </Link>
    </div>
  );
}

export default ProductoCard;
