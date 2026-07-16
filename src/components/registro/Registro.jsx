import { useState } from "react";
import "./Registro.css";

import animacionCafe from "../../assets/registrate/maquina-de-cafe.json?url";

function Registro() {
  const [email, setEmail] = useState("");

  const enviarFormulario = (evento) => {
    evento.preventDefault();

    if (email.trim() === "") {
      alert("Por favor ingresá tu correo electrónico.");
      return;
    }

    alert(`Gracias por registrarte: ${email}`);
    setEmail("");
  };

  return (
    <section className="section-registrate">
      <div className="container-registro">
        <div className="texto-registro">
          <h3>El irresistible aroma de las novedades</h3>

          <p>
            Regístrate para recibir información, noticias, concursos y nuestras
            promociones. Jamás compartiremos tu correo electrónico con terceros
            y no enviamos spam. ¡Te lo prometemos!
          </p>
        </div>

        <lottie-player
          src={animacionCafe}
          background="transparent"
          speed="1"
          loop
          autoplay
          className="animacion-cafe"
        ></lottie-player>

        <div className="form-registro">
          <form onSubmit={enviarFormulario}>
            <input
              type="email"
              placeholder="Tu correo electrónico"
              value={email}
              onChange={(evento) => setEmail(evento.target.value)}
            />

            <button type="submit">Registrate</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Registro;