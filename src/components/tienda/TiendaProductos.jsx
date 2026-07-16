import ProductoTiendaCard from "./ProductoTiendaCard";

function TiendaProductos({ productos, onAgregarCarrito }) {
  return (
    <section className="tienda-productos">
      {productos.map((producto) => (
        <ProductoTiendaCard
          key={producto.id}
          producto={producto}
          onAgregarCarrito={onAgregarCarrito}
        />
      ))}
    </section>
  );
}

export default TiendaProductos;