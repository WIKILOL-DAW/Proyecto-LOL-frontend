import { post } from "../../servicios/Administrador.peticiones.service";
import { useState } from "react";
import { ComprobarToken } from "../../servicios/ComprobarToken";

export function InsertarCampeon() {

    ComprobarToken();

    const [campeon, setCampeon] = useState({
        nombre: "",
        posicion: ""
    });

    const [errores, setErrorres] = useState("");

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
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-base-300 to-base-200 p-6">
                <fieldset className="fieldset bg-base-100/70 backdrop-blur-md border border-[#1C1C1C]/40 rounded-xl w-full max-w-md shadow-2xl p-6 space-y-4">

                    <legend className="text-3xl font-bold text-#1C1C1C] text-center mb-2">
                        Añadir campeon
                    </legend>

                    <input type="text" className="input input-bordered border-[#111111] focus:border-[#111111] w-full" placeholder="Nombre del campeon"
                        value={campeon.nombre}
                        onChange={e => {
                            setCampeon({
                                ...campeon,
                                nombre: e.target.value
                            });
                            setErrorres("");
                        }} />
                    <select
                        className="input input-bordered border-[#111111] focus:border-[#111111] w-full"
                        value={campeon.posicion}
                        onChange={e => {
                            setCampeon({
                                ...campeon,
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
                    <button className="btn btn-neutral mt-4" onClick={crearCampeon}>Añadir equipo</button>
                    {errores}
                </fieldset>
            </div>
        </>
    )
}