import { createContext, useState, useEffect } from "react";

export const UsuarioContext = createContext();

export function UsuarioProvider({ children }) {
  const [usuarios, setUsuarios] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(true);

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
      value={{ usuarios, cargando, obtenerUsuarios, busqueda, setBusqueda }}
    >
      {children}
    </UsuarioContext.Provider>
  );
}
