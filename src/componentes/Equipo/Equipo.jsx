import { get } from "../../servicios/Administrador.peticiones.service";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Equipo() {

    const [equipos, setEquipos] = useState([]);
    const [errores] = useState("");
    const [abrirDescripcion, setAbrirDescripcion] = useState(null);
    const { liga } = useParams();

    useEffect(() => {
        get(
            `/api/equipo/verEquipos/${liga}`,
            (data) => setEquipos(data.verEquipos),
            (error) => console.log("Error cargando equipos:", error)
        );
    }, [liga]);

    return (
        <div className="p-5">
            <h1 className="text-2xl font-bold mb-5">{liga}</h1>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {equipos.map((equipo) => {

                    const estaAbierto = abrirDescripcion === equipo.nombre;

                    let textoBoton = "Ver descripción";
                    let descripcion = null;

                    if (estaAbierto) {
                        textoBoton = "Ocultar descripción";
                        descripcion = equipo.descripcion;
                    }

                    return (
                        <div key={equipo.nombre} className="card bg-base-200 shadow-md rounded-xl overflow-hidden">

                            <figure className="aspect-[4/3] w-full overflow-hidden">
                                <img
                                    src={equipo.imagen}
                                    alt={equipo.nombre}
                                    className="w-full h-full object-cover"
                                />
                            </figure>

                            <div className="card-body p-3">
                                <h2 className="card-title text-base">
                                    {equipo.nombre}
                                </h2>

                                <button
                                    onClick={() => {
                                        if (estaAbierto) {
                                            setAbrirDescripcion(null);
                                        } else {
                                            setAbrirDescripcion(equipo.nombre);
                                        }
                                    }}
                                    className="btn btn-sm btn-outline mt-2"
                                >
                                    {textoBoton}
                                </button>

                                {descripcion && (
                                    <p className="text-sm opacity-80 mt-2">
                                        {descripcion}
                                    </p>
                                )}

                                {errores}
                            </div>

                        </div>
                    );
                })}
            </div>
        </div>
    );
}