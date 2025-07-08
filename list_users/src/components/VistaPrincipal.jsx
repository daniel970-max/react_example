import RecargarUsuarios from "./RecargarUsuarios";
import BuscadorUsuarios from "./BuscadorUsuarios";
import ListaUsuarios from "./ListaUsuarios";

function VistaPrincipal() {
  return (
    <>
      <h1 className="texto_nuevo">Lista de usuarios</h1>
      <RecargarUsuarios />
      <BuscadorUsuarios />
      <ListaUsuarios />
    </>
  );
}

export default VistaPrincipal;
