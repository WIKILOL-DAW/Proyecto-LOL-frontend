
import { useState } from "react"
import { NavBar } from "../NavBar/NavBar"
import { login } from "../../servicios/Administrador.service"
import Link from "daisyui/components/link";

export function FormularioInicioSesion() {

    const [administrador, setUsuario] = useState({

        correo: "",
        passwrd: ""
    })

    const [errores, setErrorres] = useState();

    const doInicioSesion = async () => {


        if (!administrador.correo || !administrador.passwrd) {
            console.log("Correo o contraseña vacios");
            setErrorres("Correo o contraseña vacios");
        } else {
            const { message, token } = await login(administrador);
            console.log(message);
            setErrorres(message);

            if (token !== null) {

                sessionStorage.setItem("token", JSON.stringify(token));
                window.location.href = "/"
            }
        }
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

                                    value={administrador.correo}
                                    onChange={e => {
                                        setUsuario({
                                            ...administrador,
                                            correo: e.target.value
                                        })
                                    }}
                                />

                                <input type="password" className="input" placeholder="Contraseña"

                                    value={administrador.passwrd}
                                    onChange={e => {
                                        setUsuario({
                                            ...administrador,
                                            passwrd: e.target.value
                                        })
                                    }}
                                />
                                <button className="btn btn-neutral mt-4" onClick={doInicioSesion}>Iniciar sesion</button>
                                <span>{errores}</span>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}