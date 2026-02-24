
import { useState } from "react"
import { NavBar } from "../NavBar/NavBar"
import { login } from "../../servicios/usuarios.service"

export function FormularioInicioSesion() {

    const [usuario, setUsuario] = useState({

        correo: "",
        passwrd: ""
    })

    const doInicioSesion = async () => {
        const data = await login(usuario);
        console.log(data);
    }

    return (

        <>
            <NavBar />
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <fieldset className="fieldset">

                                <input type="email" className="input" placeholder="Email"

                                    value={usuario.correo}
                                    onChange={e => {
                                        setUsuario({
                                            ...usuario,
                                            correo: e.target.value
                                        })
                                    }}
                                />

                                <input type="password" className="input" placeholder="Contraseña"

                                    value={usuario.passwrd}
                                    onChange={e => {
                                        setUsuario({
                                            ...usuario,
                                            passwrd: e.target.value
                                        })
                                    }}
                                />
                                <button className="btn btn-neutral mt-4" onClick={doInicioSesion}>Iniciar sesion</button>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}