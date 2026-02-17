import { Boton } from "../Boton/Boton";

export function FormularioRegistro() {

    return (

        <>

            <h2>Bienvenido, introduzca sus credenciales para crear su nueva cuenta</h2>
            <form action="" method="">
                <input type="text" placeholder="Indique un alias" /> <br /> <br />
                <input type="email" placeholder="Correo electronico" /> <br /> <br />
                <input type="password" placeholder="Contraseña" />  <br /> <br />
                <Boton/>
            </form>

        </>
    )
}

