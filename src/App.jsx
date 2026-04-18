import { Routes, Route } from "react-router-dom";
import { NavbarSelector } from "./componentes/NavBar/NavBarSelector";
import { FormularioInicioSesion } from "./componentes/Formularios/FormularioInicioSesion";
import { FormularioRegistro } from "./componentes/Formularios/FormularioRegistro";
import Inicio from "./componentes/Inicio/Inicio";
import './index.css'
import Ligas from "./componentes/Liga/Ligas";
import { InsertarEquipo } from "./componentes/Equipo/InsertarEquipo";
import { InsertarCampeon } from "./componentes/Campeones/InsertarCampeon";
import { InsertarJugador } from "./componentes/Jugador/InsertarJugador";
import { Campeones } from "./componentes/Campeones/Campeones";
import Equipo from "./componentes/Equipo/Equipo";

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
        <Route path="/insertarJugador" element={<InsertarJugador />} />
        <Route path="/verCampeones" element={<Campeones />} />
        <Route path="/verLigas" element={<Ligas />} />
        <Route path="/equipos/:liga" element={<Equipo />} />
      </Routes>
    </>
  );
}

export default App;
