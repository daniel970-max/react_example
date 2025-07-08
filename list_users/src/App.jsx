import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UsuarioProvider } from "./context/UsuarioContext";
import VistaPrincipal from "./components/VistaPrincipal";
import DetalleUsuario from "./components/DetalleUsuario";
import BuscadorUsuarios from "./components/BuscadorUsuarios";
import "./App.css";

function App() {
  return (
    <UsuarioProvider>
      <Router>
        <Routes>
          <Route path="/" element={<VistaPrincipal />}></Route>
          <Route path="/usuario/:id" element={<DetalleUsuario />}></Route>
        </Routes>
      </Router>
    </UsuarioProvider>
  );
}

export default App;
