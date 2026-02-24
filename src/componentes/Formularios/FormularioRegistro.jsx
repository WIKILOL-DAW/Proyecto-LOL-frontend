import { useState } from "react";
import { NavBar } from "../NavBar/NavBar";
import { registro } from "../../servicios/usuarios.service";

export function FormularioRegistro() {

    const [usuario, setUsuario] = useState({
        alias: "",
        correo: "",
        passwrd: ""
    })

    const doRegistro = async () => {
        const data = await registro(usuario)
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

                                <input type="text" className="input" placeholder="Nombre de usuario"
                                    value={usuario.alias}
                                    onChange={e => {
                                        setUsuario({
                                            ...usuario,
                                            alias: e.target.value
                                        })
                                    }} />

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

                                <button className="btn btn-neutral mt-4" onClick={doRegistro}>Registrarse</button>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

