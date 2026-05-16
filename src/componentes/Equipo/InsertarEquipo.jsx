import { post } from "../../servicios/Administrador.peticiones.service";
import { useState } from "react";
import { ComprobarToken } from "../../servicios/ComprobarToken";

export function InsertarEquipo() {

    ComprobarToken();

    const [equipo, setEquipo] = useState({
        nombre: "",
        nombreLiga: "",
        imagen: "",
        descripcion: ""
    });

    const [errores, setErrorres] = useState("");

    const crearEquipo = async () => {

        if (!equipo.nombre || !equipo.nombreLiga) {
            setErrorres("Nombre de equipo o liga vacíos");
        } else {
            const data = await post("/api/equipo/insertarEquipo", equipo);
            console.log("Equipo creado:", data);
            setErrorres("Equipo creado con éxito");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen 
            bg-[#0A1428] p-6">

            <fieldset className="fieldset bg-[#162032]/80 backdrop-blur-xl 
                border border-[#2F4A72]/50 rounded-2xl w-full max-w-xl 
                shadow-[0_0_25px_rgba(47,74,114,0.25)] p-8 space-y-5">

                <legend className="text-4xl font-extrabold text-[#3C6EAF] 
                    text-center mb-4 drop-shadow-lg tracking-wide">
                    Añadir equipo
                </legend>

                <input
                    type="text"
                    className="input input-bordered w-full bg-[#0A1428] text-gray-200 
                    border-[#2F4A72] focus:border-[#3C6EAF] focus:ring-[#3C6EAF]"
                    placeholder="Nombre del equipo"
                    value={equipo.nombre}
                    onChange={e => {
                        setEquipo({ ...equipo, nombre: e.target.value });
                        setErrorres("");
                    }}
                />

                <input
                    type="text"
                    className="input input-bordered w-full bg-[#0A1428] text-gray-200 
                    border-[#2F4A72] focus:border-[#3C6EAF] focus:ring-[#3C6EAF]"
                    placeholder="Dirección de la imagen"
                    value={equipo.imagen}
                    onChange={e => {
                        setEquipo({ ...equipo, imagen: e.target.value });
                        setErrorres("");
                    }}
                />

                <input
                    type="text"
                    className="input input-bordered w-full bg-[#0A1428] text-gray-200 
                    border-[#2F4A72] focus:border-[#3C6EAF] focus:ring-[#3C6EAF]"
                    placeholder="Descripción del equipo"
                    value={equipo.descripcion}
                    onChange={e => {
                        setEquipo({ ...equipo, descripcion: e.target.value });
                        setErrorres("");
                    }}
                />

                <select
                    className="select select-bordered w-full bg-[#0A1428] text-gray-200 
                    border-[#2F4A72] focus:border-[#3C6EAF] focus:ring-[#3C6EAF]"
                    value={equipo.nombreLiga}
                    onChange={e => {
                        setEquipo({ ...equipo, nombreLiga: e.target.value });
                        setErrorres("");
                    }}
                >
                    <option value="" disabled>Seleccionar liga</option>
                    <option value="LEC">LEC</option>
                    <option value="LCS">LCS</option>
                    <option value="LCK">LCK</option>
                    <option value="LPL">LPL</option>
                </select>

                <button
                    className="btn w-full mt-4 font-bold tracking-wide 
                    bg-[#3C6EAF] border-[#3C6EAF] text-white 
                    hover:bg-[#5A8CCF] hover:border-[#5A8CCF] 
                    shadow-lg hover:shadow-[0_0_20px_rgba(60,110,175,0.4)] 
                    transition-all duration-200"
                    onClick={crearEquipo}
                >
                    Añadir equipo
                </button>

                {errores && (
                    <p className="text-center text-red-400 font-semibold mt-2">
                        {errores}
                    </p>
                )}

            </fieldset>
        </div>
    );
}
