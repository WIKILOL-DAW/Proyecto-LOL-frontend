import { Boton } from "../Boton/Boton";
import { NavBar } from "../NavBar/NavBar";

export function FormularioRegistro() {

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

                                <input type="email" className="input" placeholder="Nombre de usuario" />

                                <input type="email" className="input" placeholder="Email" />
                                
                                <input type="password" className="input" placeholder="Contraseña" />

                                <button className="btn btn-neutral mt-4">Registrarse</button>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

