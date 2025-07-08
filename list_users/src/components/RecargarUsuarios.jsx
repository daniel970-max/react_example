import { useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";

const RecargarUsuarios = () => {
  const { usuariosContext } = useContext(UsuarioContext);
  return (
    <button className="btn_recargar" onClick={usuariosContext}>
      Recargar Usuarios
    </button>
  );
};

export default RecargarUsuarios;
