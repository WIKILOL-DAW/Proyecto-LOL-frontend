import { post } from "../../servicios/Administrador.peticiones.service";
import { useState } from "react";
import { ComprobarToken } from "../../servicios/ComprobarToken";

export function InsertarEquipo() {

    ComprobarToken();

    const [equipo, setEquipo] = useState({
        nombre: "",
        nombreLiga: "",
        imagen: "",
        descripcion : ""
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
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-base-300 to-base-200 p-6">
            <fieldset className="fieldset bg-base-100/70 backdrop-blur-md border border-[#1C1C1C]/40 rounded-xl w-full max-w-md shadow-2xl p-6 space-y-4">

                <legend className="text-3xl font-bold text-#1C1C1C] text-center mb-2">
                    Añadir equipo
                </legend>

                <input type="text" className="input input-bordered border-[#111111] focus:border-[#111111] w-full" placeholder="Nombre del equipo"
                    value={equipo.nombre}
                    onChange={e => {
                        setEquipo({
                            ...equipo,
                            nombre: e.target.value
                        });
                        setErrorres("");
                    }} />

                      <input type="text" className="input input-bordered border-[#111111] focus:border-[#111111] w-full" placeholder="Direccion de la imagen"
                    value={equipo.imagen}
                    onChange={e => {
                        setEquipo({
                            ...equipo,
                            imagen: e.target.value
                        });
                        setErrorres("");
                    }} />

                      <input type="text" className="input input-bordered border-[#111111] focus:border-[#111111] w-full" placeholder="Descripcion del equipo"
                    value={equipo.descripcion}
                    onChange={e => {
                        setEquipo({
                            ...equipo,
                            descripcion: e.target.value
                        });
                        setErrorres("");
                    }} />
                <select
                    className="input input-bordered border-[#111111] focus:border-[#111111] w-full"
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