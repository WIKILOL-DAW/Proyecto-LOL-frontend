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
            setErrorres("No puede haber campos vacion en jugador");
        } else {
            const data = await post("/api/jugador/insertarJugador", jugador);
            console.log("Jugador creado:", data);
            setErrorres("Jugador creado con exito");
        }
    };

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-base-300 to-base-200 p-6">
                <fieldset className="fieldset bg-base-100/70 backdrop-blur-md border border-[#1C1C1C]/40 rounded-xl w-full max-w-md shadow-2xl p-6 space-y-4">

                    <legend className="text-3xl font-bold text-#1C1C1C] text-center mb-2">
                        Añadir jugador
                    </legend>

                    <input type="text" className="input input-bordered border-[#111111] focus:border-[#111111] w-full" placeholder="Nombre del jugador"
                        value={jugador.alias}
                        onChange={e => {
                            setJugador({
                                ...jugador,
                                alias: e.target.value
                            });
                            setErrorres("");
                        }} />
                    <input type="text" className="input input-bordered border-[#111111] focus:border-[#111111] w-full" placeholder="Nacionalidad del jugador"
                        value={jugador.nacionalidad}
                        onChange={e => {
                            setJugador({
                                ...jugador,
                                nacionalidad: e.target.value
                            });
                            setErrorres("");
                        }} />
                    <input type="text" className="input input-bordered border-[#111111] focus:border-[#111111] w-full" placeholder="Nombre del equipo"
                        value={jugador.nombreEquipo}
                        onChange={e => {
                            setJugador({
                                ...jugador,
                                nombreEquipo: e.target.value
                            });
                            setErrorres("");
                        }} />
                    <select
                        className="input input-bordered border-[#111111] focus:border-[#111111] w-full"
                        value={jugador.posicion}
                        onChange={e => {
                            setJugador({
                                ...jugador,
                                posicion: e.target.value
                            });
                            setErrorres("");
                        }}
                    >
                        <option value="" disabled>Seleccionar posicion</option>
                        <option value="TOP">TOP</option>
                        <option value="JGL">JGL</option>
                        <option value="MID">MID</option>
                        <option value="ADC">ADC</option>
                        <option value="SUP">SUPP</option>
                    </select>
                    <button className="btn w-full mt-2 bg-[#111111] border-[#111111] text-white hover:bg-[#2a2a2a]" onClick={crearJugador}>Añadir equipo</button>
                    {errores}
                </fieldset>
            </div>
        </>
    )
}