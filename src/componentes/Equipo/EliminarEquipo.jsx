import { useEffect, useState } from "react";
import { get, peticionDelete } from "../../servicios/Administrador.peticiones.service";

export function BorrarEquipos() {

    const [equipos, setEquipos] = useState([]);
    const [seleccionado, setSeleccionado] = useState(null);

    useEffect(() => {
        get("/api/equipo/verEquipos", (data) => {
            setEquipos(data.verEquipos);
        }, (error) => {
            console.log("Error cargando equipos:", error);
        });
    }, []);

    const borrarEquipo = () => {
        if (!seleccionado) return;

        peticionDelete(`/api/equipo/borrarEquipo/${seleccionado.nombre}`, () => {
            setEquipos(equipos.filter(equipo => equipo.nombre !== seleccionado.nombre));
            setSeleccionado(null);
        }, (error) => {
            console.log("Error borrando equipo:", error);
        });
    };

    return (
        <>
            <h1 className="text-4xl font-bold text-red-500 mb-8 text-center drop-shadow-lg">
                Borrar Equipos
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6 bg-gray-900 rounded-xl shadow-xl">
                {equipos.map((equipo) => (
                    <div
                        key={equipo.nombre}
                        className="card bg-base-200 shadow-xl border border-red-700 hover:border-red-400 transition-all duration-300 group"
                    >
                        <figure className="relative overflow-hidden">
                            <img
                                src={equipo.imagen}
                                alt={equipo.nombre}
                                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110 group-hover:brightness-90"
                            />
                            <div className="absolute bottom-0 w-full bg-black/60 py-2 text-center opacity-0 group-hover:opacity-100 transition">
                                <span className="text-red-300 font-bold tracking-wide text-lg">
                                    {equipo.nombre}
                                </span>
                            </div>
                        </figure>

                        <div className="card-body text-center">
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {equipo.descripcion}
                            </p>

                            <div className="badge badge-warning mt-2">
                                Liga: {equipo.nombre_liga}
                            </div>

                            <button
                                className="btn btn-error mt-3"
                                onClick={() => setSeleccionado(equipo)}
                            >
                                Borrar
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal de confirmación */}
            {seleccionado && (
                <dialog open className="modal modal-open">
                    <div className="modal-box bg-gray-800 border border-red-600">
                        <h3 className="font-bold text-lg text-red-400">
                            ¿Seguro que quieres borrar el equipo {seleccionado.nombre}?
                        </h3>

                        <p className="py-4 text-gray-300">
                            Esta acción no se puede deshacer.
                        </p>

                        <div className="modal-action">
                            <button
                                className="btn btn-outline"
                                onClick={() => setSeleccionado(null)}
                            >
                                Cancelar
                            </button>

                            <button
                                className="btn btn-error"
                                onClick={borrarEquipo}
                            >
                                Sí, borrar
                            </button>
                        </div>
                    </div>
                </dialog>
            )}
        </>
    );
}
