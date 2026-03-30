import { Routes, Route } from "react-router-dom";
import { NavbarSelector } from "./componentes/NavBar/NavBarSelector";
import { FormularioInicioSesion } from "./componentes/Formularios/FormularioInicioSesion";
import { FormularioRegistro } from "./componentes/Formularios/FormularioRegistro";
import Inicio from "./componentes/Inicio/Inicio";

function App() {
  return (
    <>
      <NavbarSelector />

      <Routes>
       
        <Route path="/login" element={<FormularioInicioSesion />} />
        <Route path="/registro" element={<FormularioRegistro />} />
         <Route path="/" element={<Inicio />} />
      </Routes>
    </>
  );
}

export default App;
