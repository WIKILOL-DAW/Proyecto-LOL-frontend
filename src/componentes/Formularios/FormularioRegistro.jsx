
import { useState } from "react";
import { NavBar } from "../NavBar/NavBar";
import { registro } from "../../servicios/Administrador.service.js";
import { useNavigate } from "react-router";


export function FormularioRegistro() {

    const navigate = useNavigate();
    const [administrador, setAdmin] = useState({
        alias: "",
        correo: "",
        passwrd: ""
    });

    const [errores, setErrorres] = useState("");

    const doRegistro = async () => {

        if (!administrador.alias || !administrador.correo || !administrador.passwrd) {
            console.log("Admin jodido");
            setErrorres("No puede haber campos vacios");
        } else {
            const { message, token } = await registro(administrador);
            setErrorres(message);

            if (token !== null) {

                sessionStorage.setItem("token", JSON.stringify(token));
                navigate("/");
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
                                    Registro
                                </legend>
                                <input type="text" className="input" placeholder="Nombre de usuario"
                                    value={administrador.alias}
                                    onChange={e => {
                                        setAdmin({
                                            ...administrador,
                                            alias: e.target.value
                                        });
                                        setErrorres("");
                                    }} />

                                <input type="email" className="input" placeholder="Email"
                                    value={administrador.correo}
                                    onChange={e => {


                                        setAdmin({
                                            ...administrador,
                                            correo: e.target.value
                                        });
                                        setErrorres("");
                                    }}
                                />

                                <input type="password" className="input" placeholder="Contraseña"
                                    value={administrador.passwrd}
                                    onChange={e => {

                                        setAdmin({
                                            ...administrador,
                                            passwrd: e.target.value
                                        });
                                        setErrorres("");
                                    }}
                                />
                                <button className="btn btn-neutral mt-4" onClick={doRegistro}>Registrarse</button>
                                <span>{errores}</span>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

