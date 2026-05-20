import { post } from "../../servicios/Administrador.peticiones.service";
import { useState } from "react";
import { ComprobarToken } from "../../servicios/ComprobarToken";

export function InsertarCampeon() {

    ComprobarToken();

    const [campeon, setCampeon] = useState({
        nombre: "",
        posicion: "",
        descripcion: "",
        imagen: ""
    });

    const [errores, setErrorres] = useState("");

    const crearCampeon = async () => {

        if (!campeon.nombre || !campeon.posicion || !campeon.descripcion || !campeon.imagen) {
            setErrorres("No pueden quedar campos vacios");
        } else {
            const data = await post("/api/campeon/insertarCampeon", campeon);
            console.log("Campeon creado:", data);
            setErrorres("Campeon creado con exito");
        }
    };

    return (
        <>
            <div className="flex items-center justify-center min-h-screen 
                bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">

                <fieldset className="fieldset bg-gray-900/70 backdrop-blur-xl 
                    border border-yellow-600/40 rounded-2xl w-full max-w-xl 
                    shadow-[0_0_25px_rgba(255,200,0,0.25)] p-8 space-y-5">

                    <legend className="text-4xl font-extrabold text-yellow-400 
                        text-center mb-4 drop-shadow-lg tracking-wide">
                        Añadir campeón
                    </legend>

                    <input
                        type="text"
                        className="input input-bordered w-full bg-gray-800 text-gray-200 
                        border-yellow-700 focus:border-yellow-500 focus:ring-yellow-500"
                        placeholder="Nombre del campeón"
                        value={campeon.nombre}
                        onChange={e => {
                            setCampeon({ ...campeon, nombre: e.target.value });
                            setErrorres("");
                        }}
                    />

                    <input
                        type="text"
                        className="input input-bordered w-full bg-gray-800 text-gray-200 
                        border-yellow-700 focus:border-yellow-500 focus:ring-yellow-500"
                        placeholder="Descripción del campeón"
                        value={campeon.descripcion}
                        onChange={e => {
                            setCampeon({ ...campeon, descripcion: e.target.value });
                            setErrorres("");
                        }}
                    />

                    <input
                        type="text"
                        className="input input-bordered w-full bg-gray-800 text-gray-200 
                        border-yellow-700 focus:border-yellow-500 focus:ring-yellow-500"
                        placeholder="Enlace de la imagen"
                        value={campeon.imagen}
                        onChange={e => {
                            setCampeon({ ...campeon, imagen: e.target.value });
                            setErrorres("");
                        }}
                    />

                    <select
                        className="select select-bordered w-full bg-gray-800 text-gray-200 
                        border-yellow-700 focus:border-yellow-500 focus:ring-yellow-500"
                        value={campeon.posicion}
                        onChange={e => {
                            setCampeon({ ...campeon, posicion: e.target.value });
                            setErrorres("");
                        }}
                    >
                        <option value="" disabled>Seleccionar posición</option>
                        <option value="TOP">TOP</option>
                        <option value="JGL">JGL</option>
                        <option value="MID">MID</option>
                        <option value="ADC">ADC</option>
                        <option value="SUP">SUPP</option>
                    </select>

                    <button
                        className="btn btn-warning w-full mt-4 font-bold tracking-wide 
                        shadow-lg hover:shadow-yellow-500/40 transition-all duration-200"
                        onClick={crearCampeon}
                    >
                        Añadir campeón
                    </button>

                    {errores && (
                        <p className="text-center text-red-400 font-semibold mt-2">
                            {errores}
                        </p>
                    )}

                </fieldset>
            </div>
        </>
    );
}
