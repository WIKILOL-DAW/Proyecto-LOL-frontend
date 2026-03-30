import { BrowserRouter, Routes, Route } from "react-router-dom"
import { NavbarSelector } from "./componentes/NavBar/NavBarSelector"
import { FormularioInicioSesion } from "./componentes/Formularios/FormularioInicioSesion"
import { FormularioRegistro } from "./componentes/Formularios/FormularioRegistro"
import Inicio from "./componentes/Inicio/Inicio"

function App() {
  return (
    <BrowserRouter>
      <NavbarSelector />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<FormularioInicioSesion />} />
        <Route path="/registro" element={<FormularioRegistro />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
