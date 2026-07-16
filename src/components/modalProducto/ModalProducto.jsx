import "./ModalProducto.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { Link } from 'react-router-dom';

function ModalProducto({ producto, onCerrar }) {
  return (
    <div className="modal">
      <button className="close" type="button" onClick={onCerrar}>
        &times;
      </button>

      <div className="modal-content">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".modal-product-next",
            prevEl: ".modal-product-prev",
          }}
          loop={true}
          className="modalProductSwiper"
        >
          <SwiperSlide>
            <img
              className="img-modal"
              src={producto.imagen.frente}
              alt={`Café ${producto.nombre} frente`}
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="img-modal"
              src={producto.imagen.dorso}
              alt={`Café ${producto.nombre} dorso`}
            />
          </SwiperSlide>

          <button className="modal-product-prev" type="button">
            ‹
          </button>

          <button className="modal-product-next" type="button">
            ›
          </button>
        </Swiper>

        <div className="container-precio">
          <h3 className="cafe-titulo-modal">{producto.nombre}</h3>
          <p className="cafe-precio-modal">{producto.precio}</p>
        </div>

        <div className="container-descripcion">
          <div className="container-origen">
            <p className="cafe-descripcion">
              <span>Origen:</span> {producto.origen}
            </p>

            <p className="cafe-descripcion">
              <span>Tueste:</span> {producto.tueste}
            </p>
          </div>

          <p className="cafe-descripcion">{producto.descripcionLarga}</p>
        </div>

        <div className="container-detalle">
          <h4>Perfil de Sabores</h4>

          <div className="perfil-sabores">
            <FilaSabor nombre="Intensidad" valor={producto.perfilSabores.intensidad} />
            <FilaSabor nombre="Acidez" valor={producto.perfilSabores.acidez} />
            <FilaSabor nombre="Cuerpo" valor={producto.perfilSabores.cuerpo} />
            <FilaSabor nombre="Dulzor" valor={producto.perfilSabores.dulzor} />
          </div>

          <Link
            to="/tienda"
            className="btn-modal-tienda"
          >
            Agregar al carrito
          </Link>
        </div>
      </div>
    </div>
  );
}

function FilaSabor({ nombre, valor }) {
  return (
    <div className="sabor-row">
      <span className="sabor-label">{nombre}:</span>

      <div className="sabor-granos">
        {[1, 2, 3, 4, 5].map((numero) => (
          <span
            key={numero}
            className={`grano-svg ${numero <= valor ? "grano-activo" : ""}`}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default ModalProducto;