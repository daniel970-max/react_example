import { createContext, useState, useEffect } from "react";

export const UsuarioContext = createContext();

export function UsuarioProvider({ children }) {
  const [usuarios, setUsuarios] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(true);

  //paginacion
  const [paginaActual, setPaginaActual] = useState(1);
  const usuarios_por_pagina = 5;

  const indiceInicio = (paginaActual - 1) * usuarios_por_pagina;
  const indiceFinal = paginaActual + usuarios_por_pagina;

  const usuariosPaginados = usuarios.slice(indiceInicio, indiceFinal);

  const obtenerUsuarios = async () => {
    setCargando(true);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) throw new Error("Error al obtener los datos");
      const data = await res.json();
      setUsuarios(data);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  return (
    <UsuarioContext.Provider
      value={{
        usuarios,
        cargando,
        obtenerUsuarios,
        busqueda,
        setBusqueda,
        usuariosPaginados,
        paginaActual,
        setPaginaActual,
        usuarios_por_pagina,
      }}
    >
      {children}
    </UsuarioContext.Provider>
  );
}
