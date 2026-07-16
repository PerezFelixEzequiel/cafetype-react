import "./Explora.css";
import { exploraItems } from "../../data/explora";
import { Link } from 'react-router-dom';

function Explora() {
  return (
    <section className="explora-cafetype" id="explora-cafetype">
      <div className="container-explora">
        <ul className="explora-grid">
          {exploraItems.map((item) => (
            <ExploraCard key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function ExploraCard({ item }) {
  
  if (item.externo) {
    return (
      <li className="explora-card">
        
        <a
          href={item.href}
          className="explora-link"
          data-card={item.id}
          target="_blank"
          rel="noreferrer"
        >
          <img src={item.icono} alt="" className="explora-icon" aria-hidden="true" />
          <div className="explora-texto">
            <h3>{item.titulo}</h3>
            <p>{item.descripcion}</p>
          </div>
          <span className="explora-cta">{item.cta}</span>
        </a>
      </li>
    );
  }

  
  return (
    <li className="explora-card">
      
      <Link
        to={item.to}
        className="explora-link"
        data-card={item.id}
      >
        <img src={item.icono} alt="" className="explora-icon" aria-hidden="true" />
        <div className="explora-texto">
          <h3>{item.titulo}</h3>
          <p>{item.descripcion}</p>
        </div>
        <span className="explora-cta">{item.cta}</span>
      </Link>
    </li>
  );
}

export default Explora;