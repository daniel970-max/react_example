import { useParams } from "react-router-dom";
import { useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";
import ButtonPreview from "./ButtonPreview";

function DetalleUsuario() {
  const { id } = useParams();
  const { usuarios } = useContext(UsuarioContext);

  const usuario = usuarios.find((u) => u.id === parseInt(id));

  if (!usuario) return <p className="message">Usuario no encontrado</p>;
  return (
    <>
      <h1 className="texto_nuevo">Usuario: </h1>
      <h2>{usuario.name}</h2>
      <div className="contenido_datos">
        <p>Email: {usuario.email}</p>
        <p>Teléfono: {usuario.phone}</p>
        <p>Website: {usuario.website}</p>
        <p>Ciudad: {usuario.address.city}</p>
      </div>
      <ButtonPreview />
    </>
  );
}

export default DetalleUsuario;
