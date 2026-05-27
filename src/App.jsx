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
import { Administrador } from "./componentes/Administrador/Administrador";
import { BorrarEquipos } from "./componentes/Equipo/EliminarEquipo"
import { Jugadores } from "./componentes/Jugador/Jugadores";
import { BorrarJugadores } from "./componentes/Jugador/EliminarJugador";
import { BorrarCampeones } from "./componentes/Campeones/EliminarCampeon";
import { ActualizarEquipo } from "./componentes/Equipo/ModifcarEquipo";
import { ModificarJugador } from "./componentes/Jugador/ModificarJugador";
import { ModificarCampeon } from "./componentes/Campeones/ModificarCampeon";
import Noticas from "./componentes/Noticias/Noticias";
import Esports from "./componentes/Esports/Esports";
import Campeonato from "./componentes/Esports/Campeonato";


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
        <Route path="/administradores" element={<Administrador />} />
        <Route path="/borrarEquipo" element={<BorrarEquipos />} />
        <Route path="/verJugadores" element={<Jugadores />} />
        <Route path="/borrarJugador" element={<BorrarJugadores />} />
        <Route path="/borrarCampeon" element={<BorrarCampeones />} />
        <Route path="/modificarEquipo" element={<ActualizarEquipo />} />
        <Route path="/modificarJugador" element={<ModificarJugador />} />
        <Route path="/modificarCampeon" element={<ModificarCampeon/>}/>
        <Route path="/noticias" element={<Noticas />} />
        <Route path="/esports" element={<Esports />} />
        <Route path="/esports/:campeonato" element={<Campeonato />} />
      </Routes>
    </>
  );
}

export default App;
