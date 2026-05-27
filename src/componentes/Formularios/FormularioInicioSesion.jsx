
import { useState } from "react"
import { login } from "../../servicios/Administrador.service"
import { useNavigate } from "react-router";

export function FormularioInicioSesion() {

    const navigate = useNavigate();
    const [administrador, setUsuario] = useState({

        correo: "",
        passwrd: ""
    })

    const [errores, setErrorres] = useState("");
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
                navigate("/administradores")
            }
        }
    }

    return (
        <>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <fieldset className="fieldset bg-base-100/70 backdrop-blur-md border border-[#1C1C1C]/40 rounded-xl w-full max-w-md shadow-2xl p-6 space-y-4">

                                <legend className="text-3xl font-bold text-#1C1C1C] text-center mb-2">
                                    Inicio sesion
                                </legend>

                                <input type="email" className="input" placeholder="Email"

                                    value={administrador.correo}
                                    onChange={e => {
                                        setUsuario({
                                            ...administrador,
                                            correo: e.target.value
                                        });
                                        setErrorres("");
                                    }}
                                />

                                <input type="password" className="input" placeholder="Contraseña"

                                    value={administrador.passwrd}
                                    onChange={e => {
                                        setUsuario({
                                            ...administrador,
                                            passwrd: e.target.value
                                        });
                                        setErrorres("");
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