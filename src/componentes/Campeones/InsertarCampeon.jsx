import { post } from "../../servicios/Administrador.peticiones.service";
import { useState } from "react";
import { ComprobarToken } from "../../servicios/ComprobarToken";

export function InsertarCampeon() {

    ComprobarToken();

    const [campeon, setCampeon] = useState({
        nombre: "",
        posicion: ""
    });

    const [errores, setErrorres] = useState();

    const crearCampeon = async () => {

        if (!campeon.nombre || !campeon.posicion) {
            setErrorres("El nombre ni la posicion puede estar en blanco");
        } else {
            const data = await post("/api/campeon/insertarCampeon", campeon);
            console.log("Campeon creado:", data);
            setErrorres("Campeon creado con exito");
        }
    };

    return (
        <>
            <div className="flex items-center justify-center min-h-screen pt-1">
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

                    <input type="text" className="input" placeholder="Nombre del campeon"
                        value={campeon.nombre}
                        onChange={e => {
                            setCampeon({
                                ...campeon,
                                nombre: e.target.value
                            });
                        }} />
                    <select
                        className="select select-neutral"
                        value={campeon.posicion}
                        onChange={e => {
                            setCampeon({
                                ...campeon,
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
                    <button className="btn btn-neutral mt-4" onClick={crearCampeon}>Añadir equipo</button>
                    {errores}
                </fieldset>
            </div>
        </>
    )
}