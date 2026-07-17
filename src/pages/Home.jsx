import { useState } from "react";

import Header from "../components/header/Header";
import Banner from "../components/banner/Banner";
import Productos from "../components/productos/Productos";
import DescubreCafe from "../components/descubreCafe/DescubreCafe";
import ModalProducto from "../components/modalProducto/ModalProducto";
import Resenas from "../components/resenas/Resenas";
import Explora from "../components/explora/Explora";
import Registro from "../components/registro/Registro";
import Footer from "../components/footer/Footer";

function Home() {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const abrirModal = (producto) => {
    setProductoSeleccionado(producto);
  };

  const cerrarModal = () => {
    setProductoSeleccionado(null);
  };

  return (
    <>
      <Header />

      <main>
        <Banner />
        <Productos onVerProducto={abrirModal} />
        <DescubreCafe onVerCafe={abrirModal} />
        <Resenas />
        <Explora />
        <Registro />
      </main>

      <Footer />

      {productoSeleccionado && (
        <ModalProducto producto={productoSeleccionado} onCerrar={cerrarModal} />
      )}
    </>
  );
}
export default Home;
