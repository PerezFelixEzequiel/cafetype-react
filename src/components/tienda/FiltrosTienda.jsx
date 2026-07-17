function FiltrosTienda({ filtros, onCambiarTipo, onCambiarCheckbox }) {
  return (
    <aside className="filtros-tienda" aria-label="Filtros de productos">
      <form className="form-filtros">
        <fieldset className="filtro-grupo">
          <legend>Mostrar</legend>

          <OpcionRadio
            name="tipo"
            value="todo"
            texto="Todo"
            checked={filtros.tipo === "todo"}
            onChange={onCambiarTipo}
          />

          <OpcionRadio
            name="tipo"
            value="productos"
            texto="Productos"
            checked={filtros.tipo === "productos"}
            onChange={onCambiarTipo}
          />

          <OpcionRadio
            name="tipo"
            value="promociones"
            texto="Promociones"
            checked={filtros.tipo === "promociones"}
            onChange={onCambiarTipo}
          />
        </fieldset>

        <fieldset className="filtro-grupo">
          <legend>Origen</legend>

          <OpcionCheckbox
            name="origen"
            value="brasil"
            texto="Brasil"
            checked={filtros.origen.includes("brasil")}
            onChange={onCambiarCheckbox}
          />

          <OpcionCheckbox
            name="origen"
            value="colombia"
            texto="Colombia"
            checked={filtros.origen.includes("colombia")}
            onChange={onCambiarCheckbox}
          />

          <OpcionCheckbox
            name="origen"
            value="espana"
            texto="España"
            checked={filtros.origen.includes("espana")}
            onChange={onCambiarCheckbox}
          />

          <OpcionCheckbox
            name="origen"
            value="italia"
            texto="Italia"
            checked={filtros.origen.includes("italia")}
            onChange={onCambiarCheckbox}
          />
        </fieldset>

        <fieldset className="filtro-grupo">
          <legend>Tueste</legend>

          <OpcionCheckbox
            name="tueste"
            value="medio-claro"
            texto="Medio Claro"
            checked={filtros.tueste.includes("medio-claro")}
            onChange={onCambiarCheckbox}
          />

          <OpcionCheckbox
            name="tueste"
            value="medio"
            texto="Medio"
            checked={filtros.tueste.includes("medio")}
            onChange={onCambiarCheckbox}
          />

          <OpcionCheckbox
            name="tueste"
            value="medio-oscuro"
            texto="Medio oscuro"
            checked={filtros.tueste.includes("medio-oscuro")}
            onChange={onCambiarCheckbox}
          />

          <OpcionCheckbox
            name="tueste"
            value="oscuro"
            texto="Oscuro"
            checked={filtros.tueste.includes("oscuro")}
            onChange={onCambiarCheckbox}
          />
        </fieldset>
      </form>
    </aside>
  );
}

function OpcionRadio({ name, value, texto, checked, onChange }) {
  return (
    <label className="filtro-opcion">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span>{texto}</span>
    </label>
  );
}

function OpcionCheckbox({ name, value, texto, checked, onChange }) {
  return (
    <label className="filtro-opcion">
      <input
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span>{texto}</span>
    </label>
  );
}

export default FiltrosTienda;
