import { useContext } from "react";
import { Link } from "react-router-dom";
import { UsuarioContext } from "../context/UsuarioContext";

function ListaUsuarios() {
  const { usuarios, cargando, error, busqueda } = useContext(UsuarioContext);

  const filtrados = usuarios.filter((usuario) =>
    usuario.name.toLowerCase().includes(busqueda.toLowerCase())
  );

  if (cargando) return <p className="cargando">Cargando usuarios..</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
  if (filtrados.length === 0) return <p>No hay usuarios que coincidan.</p>;

  return (
    <div className="contenedor_lista">
      <ul>
        {filtrados.map((user) => (
          <li key={user.id}>
            <Link to={`/usuario/${user.id}`}>{user.name}</Link> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaUsuarios;
