import "./Resenas.css";
import { resenasCafe } from "../../data/resenas";

function Resenas() {
  return (
    <section className="resenas">
      <div className="resenas-track">
        <GrupoResenas />

        <GrupoResenas ariaHidden={true} />
      </div>
    </section>
  );
}

function GrupoResenas({ ariaHidden = false }) {
  return (
    <div className="resenas-grupo" aria-hidden={ariaHidden}>
      {resenasCafe.map((resena) => (
        <CardResena key={resena.id} texto={resena.texto} />
      ))}
    </div>
  );
}

function CardResena({ texto }) {
  return (
    <div className="card-resenas">
      <div className="container-stars">
        {[1, 2, 3, 4, 5].map((estrella) => (
          <span key={estrella}>★</span>
        ))}
      </div>

      <p>{texto}</p>
    </div>
  );
}

export default Resenas;
