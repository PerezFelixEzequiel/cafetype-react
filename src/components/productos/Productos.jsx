import "./Productos.css";

import ProductoCard from "./ProductoCard";
import { productosCafe } from "../../data/productos";

function Productos({ onVerProducto }) {
  return (
    <section className="section-productos" id="productos">
      {productosCafe.map((producto) => (
        <ProductoCard
          key={producto.id}
          producto={producto}
          onVerMas={onVerProducto}
        />
      ))}
    </section>
  );
}

export default Productos;
