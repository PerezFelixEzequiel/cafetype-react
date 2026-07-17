import { useState } from "react";
import "./DescubreCafe.css";

import { productosCafe } from "../../data/productos";

import leafIcon from "../../assets/icons/descubre-cafe/leaf-amarilla.svg";
import frenchPressIcon from "../../assets/icons/descubre-cafe/french-press-3-svgrepo-com.svg";
import espressoIcon from "../../assets/icons/descubre-cafe/coffe-machine.svg";
import filtroIcon from "../../assets/icons/descubre-cafe/coffee-pot-svgrepo-com.svg";
import mokaIcon from "../../assets/icons/descubre-cafe/moka-pot-svgrepo-com.svg";

function DescubreCafe({ onVerCafe }) {
  const [testActivo, setTestActivo] = useState(false);

  const [respuestas, setRespuestas] = useState({
    intensidad: "equilibrado",
    metodo: "espresso",
    notas: "Achocolatado",
  });

  const cafeRecomendado = buscarCafeRecomendado(respuestas);

  const activarTest = () => {
    setTestActivo(true);
  };

  const cambiarRespuesta = (evento) => {
    const { name, value } = evento.target;

    setRespuestas({
      ...respuestas,
      [name]: value,
    });
  };

  return (
    <section
      className={`descubre-cafe ${testActivo ? "activo" : ""}`}
      id="descubre-cafe"
    >
      <div className="container-inf">
        <div className="container-descubre-cafe">
          {/* módulo 1 */}
          <div className="modulo-1 cafe-ideal">
            <h2>Encontrá tu Café Ideal</h2>

            <div className="divider-cafe" aria-hidden="true">
              <span className="linea"></span>
              <img src={leafIcon} alt="" className="icono-cafe" />
              <span className="linea"></span>
            </div>

            <p>
              Respondé algunas preguntas y te recomendamos el café perfecto para
              vos.
            </p>

            <button
              className="btn-descubrir"
              type="button"
              onClick={activarTest}
              aria-controls="form-test-cafe"
            >
              <span>Descubrir mi perfil</span>

              <svg
                className="icono-flecha"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5 12H19M13 6L19 12L13 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <form className="modulo-2 test-cafe" id="form-test-cafe">
            {/* pregunta 1 */}
            <fieldset className="pregunta-cafe">
              <legend>
                <span className="span-pregunta">1.</span>
                ¿Cómo te gusta el café?
              </legend>

              <OpcionRadio
                name="intensidad"
                value="suave"
                texto="Suave"
                respuestaActual={respuestas.intensidad}
                onChange={cambiarRespuesta}
              />

              <OpcionRadio
                name="intensidad"
                value="equilibrado"
                texto="Equilibrado"
                respuestaActual={respuestas.intensidad}
                onChange={cambiarRespuesta}
              />

              <OpcionRadio
                name="intensidad"
                value="intenso"
                texto="Intenso"
                respuestaActual={respuestas.intensidad}
                onChange={cambiarRespuesta}
              />
            </fieldset>
            {/* pregunta 2 */}
            <fieldset className="pregunta-cafe">
              <legend>
                <span className="span-pregunta">2.</span>
                ¿Qué método usás?
              </legend>

              <OpcionRadio
                name="metodo"
                value="prensa-francesa"
                texto="Prensa Francesa"
                icono={frenchPressIcon}
                respuestaActual={respuestas.metodo}
                onChange={cambiarRespuesta}
              />

              <OpcionRadio
                name="metodo"
                value="espresso"
                texto="Espresso"
                icono={espressoIcon}
                respuestaActual={respuestas.metodo}
                onChange={cambiarRespuesta}
              />

              <OpcionRadio
                name="metodo"
                value="filtro"
                texto="Filtro"
                icono={filtroIcon}
                respuestaActual={respuestas.metodo}
                onChange={cambiarRespuesta}
              />

              <OpcionRadio
                name="metodo"
                value="moka"
                texto="Moka"
                icono={mokaIcon}
                respuestaActual={respuestas.metodo}
                onChange={cambiarRespuesta}
              />
            </fieldset>
            {/* pregunta 3 */}
            <fieldset className="pregunta-cafe pregunta-3">
              <legend>
                <span className="span-pregunta">3.</span>
                ¿Qué notas preferís?
              </legend>

              <OpcionRadio
                name="notas"
                value="Frutal"
                texto="Frutal"
                respuestaActual={respuestas.notas}
                onChange={cambiarRespuesta}
              />

              <OpcionRadio
                name="notas"
                value="Achocolatado"
                texto="Achocolatado"
                respuestaActual={respuestas.notas}
                onChange={cambiarRespuesta}
              />

              <OpcionRadio
                name="notas"
                value="Tostado y Especiado"
                texto="Tostado y Especiado"
                respuestaActual={respuestas.notas}
                onChange={cambiarRespuesta}
              />

              <OpcionRadio
                name="notas"
                value="Dulce y Suave"
                texto="Dulce y Suave"
                respuestaActual={respuestas.notas}
                onChange={cambiarRespuesta}
              />
            </fieldset>
          </form>
          {/* modulo 3 */}
          <article className="modulo-3 match-cafe" aria-live="polite">
            <span className="match-label">Tu café ideal</span>

            <h3 className="match-title">{cafeRecomendado.nombre}</h3>

            <img
              className="match-img"
              src={cafeRecomendado.imagenCard}
              alt={`Paquete de café ${cafeRecomendado.nombre}`}
            />

            <button
              className="btn-ver-cafe open-modal-btn"
              type="button"
              onClick={() => onVerCafe(cafeRecomendado)}
            >
              Ver este café
            </button>
          </article>
        </div>
      </div>
    </section>
  );
}

function OpcionRadio({ name, value, texto, icono, respuestaActual, onChange }) {
  return (
    <label className="opcion-cafe">
      <input
        type="radio"
        name={name}
        value={value}
        checked={respuestaActual === value}
        onChange={onChange}
      />

      <span>
        {icono && <img src={icono} alt="" />}
        {texto}
      </span>
    </label>
  );
}

function buscarCafeRecomendado(respuestas) {
  const cafePorNotas = productosCafe.find(
    (producto) => producto.familiaSabor === respuestas.notas,
  );

  if (cafePorNotas) {
    return cafePorNotas;
  }

  return productosCafe[0];
}

export default DescubreCafe;
