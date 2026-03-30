import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import { FormularioRegistro } from './componentes/Formularios/FormularioRegistro.jsx'
import { FormularioInicioSesion } from './componentes/Formularios/FormularioInicioSesion.jsx'
import { Campeones } from './componentes/Campeones/Campeones.jsx'
import Inicio from './componentes/Inicio/Inicio.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>

    <Routes>

      <Route path='/' element={<Inicio />} />
      <Route path='/registro' element={<FormularioRegistro />} />
      <Route path='/login' element={<FormularioInicioSesion />} />
      <Route path='/campeones' element={<Campeones />} />

    </Routes>

  </BrowserRouter>
)
