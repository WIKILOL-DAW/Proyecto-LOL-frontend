import { Routes, Route } from "react-router-dom";
import { NavbarSelector } from "./componentes/NavBar/NavBarSelector";
import { FormularioInicioSesion } from "./componentes/Formularios/FormularioInicioSesion";
import { FormularioRegistro } from "./componentes/Formularios/FormularioRegistro";
import Inicio from "./componentes/Inicio/Inicio";
import './index.css'
import Equipo from "./componentes/Equipo/Equipo";
import { InsertarEquipo } from "./componentes/Equipo/InsertarEquipo";
import { InsertarCampeon } from "./componentes/Campeones/InsertarCampeon";
import { InsertarJugador } from "./componentes/Jugador/InsertarJugador";

function App() {
  return (
    <>
      <NavbarSelector />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<FormularioInicioSesion />} />
        <Route path="/registro" element={<FormularioRegistro />} />
        <Route path="/insertarEquipo" element={<InsertarEquipo />} />
        <Route path="/insertarCampeon" element={<InsertarCampeon />} />
        <Route  path= "/insertarJugador" element={<InsertarJugador/>}/>
      </Routes>
    </>
  );
}

export default App;
