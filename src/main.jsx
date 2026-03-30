

import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";


import './index.css'

import { FormularioRegistro } from './componentes/Formularios/FormularioRegistro.jsx'
import { FormularioInicioSesion } from './componentes/Formularios/FormularioInicioSesion.jsx'
import { Campeones } from './componentes/Campeones/Campeones.jsx'
import Inicio from './componentes/Inicio/Inicio.jsx'


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>

    <App />


    <Routes>

      <Route path='/' element={<Inicio />} />
      <Route path='/registro' element={<FormularioRegistro />} />
      <Route path='/login' element={<FormularioInicioSesion />} />
      <Route path='/campeones' element={<Campeones />} />

    </Routes>

  </BrowserRouter>
);
