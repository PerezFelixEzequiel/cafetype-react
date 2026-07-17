import carrito from "../../assets/icons/tienda/carrito.svg";
import granocafe from "../../assets/icons/header/grano-cafe.svg";

import { Link } from "react-router-dom";

import "./HeaderTienda.css";

function HeaderTienda({ onAbrirCarrito, cantidadCarrito = 0 }) {
  return (
    <header>
      <div className="container-inf">
        <div className="logoPrincipal">
          <Link
            to="/"
            className="logoLink"
            aria-label="Ir al inicio de CAFETYPE"
          >
            <img src={granocafe} alt="Logo de CAFETYPE" className="logoGrano" />

            <span className="logoNombre">
              <span>Cafe</span>type
            </span>
          </Link>
        </div>

        <nav className="navegacion">
          <ul>
            <li>
              <button
                type="button"
                className="btn-carrito-header"
                onClick={onAbrirCarrito}
                aria-label="Abrir carrito"
              >
                <img src={carrito} alt="" className="btn-tienda" />

                <span className="contador-carrito">{cantidadCarrito ?? 0}</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default HeaderTienda;
