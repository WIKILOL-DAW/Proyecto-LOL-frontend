import { post } from "../../servicios/Administrador.peticiones.service";
import { useState } from "react";
import { ComprobarToken } from "../../servicios/ComprobarToken";

export function InsertarJugador() {

    ComprobarToken();

    const [jugador, setJugador] = useState({
        alias: "",
        nacionalidad: "",
        posicion: "",
        nombreEquipo: ""
    });

    const [errores, setErrorres] = useState("");

    const crearJugador = async () => {

        if (!jugador.alias || !jugador.nacionalidad || !jugador.posicion || !jugador.nombreEquipo) {
            setErrorres("No puede haber campos vacíos en jugador");
        } else {
            const data = await post("/api/jugador/insertarJugador", jugador);
            console.log("Jugador creado:", data);
            setErrorres("Jugador creado con éxito");
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
                    Añadir jugador
                </legend>

                <input
                    type="text"
                    className="input input-bordered w-full bg-[#0A1428] text-gray-200 
                    border-[#2F4A72] focus:border-[#3C6EAF] focus:ring-[#3C6EAF]"
                    placeholder="Alias del jugador"
                    value={jugador.alias}
                    onChange={e => {
                        setJugador({ ...jugador, alias: e.target.value });
                        setErrorres("");
                    }}
                />

                <input
                    type="text"
                    className="input input-bordered w-full bg-[#0A1428] text-gray-200 
                    border-[#2F4A72] focus:border-[#3C6EAF] focus:ring-[#3C6EAF]"
                    placeholder="Nacionalidad del jugador"
                    value={jugador.nacionalidad}
                    onChange={e => {
                        setJugador({ ...jugador, nacionalidad: e.target.value });
                        setErrorres("");
                    }}
                />

                <input
                    type="text"
                    className="input input-bordered w-full bg-[#0A1428] text-gray-200 
                    border-[#2F4A72] focus:border-[#3C6EAF] focus:ring-[#3C6EAF]"
                    placeholder="Nombre del equipo"
                    value={jugador.nombreEquipo}
                    onChange={e => {
                        setJugador({ ...jugador, nombreEquipo: e.target.value });
                        setErrorres("");
                    }}
                />

                <select
                    className="select select-bordered w-full bg-[#0A1428] text-gray-200 
                    border-[#2F4A72] focus:border-[#3C6EAF] focus:ring-[#3C6EAF]"
                    value={jugador.posicion}
                    onChange={e => {
                        setJugador({ ...jugador, posicion: e.target.value });
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
                    className="btn w-full mt-4 font-bold tracking-wide 
                    bg-[#3C6EAF] border-[#3C6EAF] text-white 
                    hover:bg-[#5A8CCF] hover:border-[#5A8CCF] 
                    shadow-lg hover:shadow-[0_0_20px_rgba(60,110,175,0.4)] 
                    transition-all duration-200"
                    onClick={crearJugador}
                >
                    Añadir jugador
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
