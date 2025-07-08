import { useContext } from "react";
import { Link } from "react-router-dom";
import { UsuarioContext } from "../context/UsuarioContext";

function ListaUsuarios() {
  const {
    usuariosPaginados,
    cargando,
    error,
    busqueda,
    usuarios,
    paginaActual,
    setPaginaActual,
    usuarios_por_pagina,
  } = useContext(UsuarioContext);

  const filtrados = usuarios.filter((usuario) =>
    usuario.name.toLowerCase().includes(busqueda.toLowerCase())
  );
  console.log(filtrados);
  const paginados = filtrados.slice(
    (paginaActual - 1) * usuarios_por_pagina,
    paginaActual * usuarios_por_pagina
  );
  console.log(paginados);

  if (cargando) return <p className="cargando">Cargando usuarios..</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
  if (filtrados.length === 0) return <p>No hay usuarios que coincidan.</p>;

  return (
    <div className="contenedor_lista">
      <ul>
        {paginados.map((usuario) => (
          <li key={usuario.id}>
            <Link to={`/usuario/${usuario.id}`}>{usuario.name}</Link> –{" "}
            {usuario.email}
          </li>
        ))}
      </ul>

      <div>
        <button
          disabled={paginaActual === 1}
          onClick={() => setPaginaActual(paginaActual - 1)}
        >
          Anterior
        </button>
        <span>Página {paginaActual}</span>
        <button
          disabled={paginaActual * usuarios_por_pagina >= filtrados.length}
          onClick={() => setPaginaActual(paginaActual + 1)}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default ListaUsuarios;
