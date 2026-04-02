import { post } from "../../servicios/Administrador.peticiones.service";
import { useState } from "react";
import { ComprobarToken } from "../../servicios/ComprobarToken";

export function InsertarEquipo() {

    ComprobarToken();

    const [equipo, setEquipo] = useState({
        nombre: "",
        nombreLiga: ""
    });

    const [errores, setErrorres] = useState("");

    const crearEquipo = async () => {

        if (!equipo.nombre || !equipo.nombreLiga) {
            setErrorres("Nombre de equipo o liga vacios");
        } else {
            const data = await post("/api/equipo/insertarEquipo", equipo);
            console.log("Equipo creado:", data);
            setErrorres("Equipo creado con exito");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen pt-1">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

                <input type="text" className="input" placeholder="Nombre del equipo"
                    value={equipo.nombre}
                    onChange={e => {
                        setEquipo({
                            ...equipo,
                            nombre: e.target.value
                        });
                        setErrorres("");
                    }} />
                <select
                    className="select select-neutral"
                    value={equipo.nombreLiga}
                    onChange={e => {
                        setEquipo({
                            ...equipo,
                            nombreLiga: e.target.value
                        });
                        setErrorres("");
                    }}
                >
                    <option value="" disabled>Seleccionar liga</option>
                    <option value="LEC">LEC</option>
                    <option value="LCS">LCS</option>
                    <option value="LCK">LCK</option>
                    <option value="LPL">LPL</option>
                </select>
                <button className="btn btn-neutral mt-4" onClick={crearEquipo}>Añadir equipo</button>
                {errores}
            </fieldset>
        </div>
    )
}