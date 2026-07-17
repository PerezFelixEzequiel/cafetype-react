import React from "react";

import granocafe from "../../assets/icons/header/grano-cafe.svg";

import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
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

        {/* Botón hamburguesa */}
        <button
          className="menu-toggle"
          type="button"
          aria-label="Abrir menú"
          aria-controls="menu-principal"
          aria-expanded="false"
        >
          <img
            src="./assets/header/hamburger-menu.svg"
            alt=""
            aria-hidden="true"
          />
        </button>

        {/* Barra Buscadora */}
        <form className="buscador-tienda" role="search">
          <input
            type="search"
            className="buscador-input"
            id="buscar-producto"
            name="buscar"
            placeholder="Buscar Productos"
          />

          <button
            className="buscador-btn"
            type="submit"
            aria-label="Buscar producto"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </form>

        {/* Navegacion */}
        <nav className="navegacion" id="menu-principal">
          <ul>
            <li>
              <a href="/#productos">Productos</a>
            </li>

            <li>
              <Link to="/tienda">Tienda</Link>
            </li>

            <li>
              <a href="/#descubre-cafe">Tu cafe ideal</a>
            </li>
            <li>
              <a href="/#explora-cafetype">Contacto</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
