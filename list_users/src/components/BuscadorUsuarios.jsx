import { useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";

function BuscadorUsuarios() {
  const { busqueda, setBusqueda } = useContext(UsuarioContext);
  return (
    <div>
      <input
        className="input_buscador"
        type="text"
        placeholder="Buscar usuario por nombre"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
    </div>
  );
}

export default BuscadorUsuarios;
