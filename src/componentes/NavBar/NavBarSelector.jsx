import { useLocation } from "react-router-dom"
import { NavBarAdministradores } from "../Formularios/NavBarAdimistradores"
import { NavBar } from "../NavBar/NavBar"

export function NavbarSelector() {
    
  const location = useLocation()

  const rutasAdministradores = ["/login", "/registro", "/insertarEquipo" , "/insertarJugador"]
  const rutaAdministrador = rutasAdministradores.includes(location.pathname)

  return (
    <>
      {rutaAdministrador ? <NavBarAdministradores /> : <NavBar />}
    </>
  )
}
