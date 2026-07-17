# CAFETYPE - Migración a React

CAFETYPE es un proyecto web de cafetería y tienda online desarrollado como migración de un sitio creado originalmente con HTML, CSS y JavaScript hacia React con Vite.

El objetivo del proyecto es mantener la estructura visual original, pero utilizando una arquitectura basada en componentes, manejo de estados, props y navegación con React Router.

## Tecnologías utilizadas

- React
- Vite
- React Router DOM
- Swiper
- CSS
- JavaScript

## Funcionalidades principales

- Página principal con banner interactivo.
- Sección de productos de café.
- Cards reutilizables para productos.
- Modal dinámico para ver el detalle de cada café.
- Test para descubrir un café recomendado.
- Página de tienda.
- Filtros por tipo de producto, origen y tueste.
- Carrito de compras.
- Contador de productos en el carrito.
- Suma, resta y cálculo total del carrito.
- Mensaje de compra finalizada.
- Formulario de registro controlado con estado.
- Navegación entre páginas usando React Router.

## Estructura del proyecto

```txt
src/
├── assets/
├── components/
├── data/
├── pages/
├── styles/
├── App.jsx
└── main.jsx
```

## Cómo ejecutar el proyecto

1. Clonar el repositorio:

```bash
git clone https://github.com/PerezFelixEzequiel/cafetype-react.git
```

2. Entrar a la carpeta del proyecto:

```bash
cd cafetype-react
```

3. Instalar las dependencias:

```bash
npm install
```

4. Ejecutar el proyecto en modo desarrollo:

```bash
npm run dev
```

5. Abrir en el navegador:

```txt
http://localhost:5173/
```

## Build de producción

Para generar una versión optimizada del proyecto:

```bash
npm run build
```

## Autor

Pérez Félix Ezequiel
