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

    const [errores, setErrorres] = useState();

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
            <div className="flex items-center justify-center min-h-screen pt-1">
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

                    <input type="text" className="input" placeholder="Nombre del jugador"
                        value={jugador.alias}
                        onChange={e => {
                            setJugador({
                                ...jugador,
                                alias: e.target.value
                            });
                        }} />
                    <input type="text" className="input" placeholder="Nacionalidad del jugador"
                        value={jugador.nacionalidad}
                        onChange={e => {
                            setJugador({
                                ...jugador,
                                nacionalidad: e.target.value
                            });
                        }} />
                    <input type="text" className="input" placeholder="Nombre del equipo"
                        value={jugador.nombreEquipo}
                        onChange={e => {
                            setJugador({
                                ...jugador,
                                nombreEquipo: e.target.value
                            });
                        }} />
                    <select
                        className="select select-neutral"
                        value={jugador.posicion}
                        onChange={e => {
                            setJugador({
                                ...jugador,
                                posicion: e.target.value
                            });
                        }}
                    >
                        <option value="" disabled>Seleccionar posicion</option>
                        <option value="TOP">TOP</option>
                        <option value="JGL">JGL</option>
                        <option value="MID">MID</option>
                        <option value="ADC">ADC</option>
                        <option value="SUP">SUPP</option>
                    </select>
                    <button className="btn btn-neutral mt-4" onClick={crearJugador}>Añadir equipo</button>
                    {errores}
                </fieldset>
            </div>
        </>
    )
}