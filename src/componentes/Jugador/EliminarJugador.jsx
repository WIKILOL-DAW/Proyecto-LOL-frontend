import { useEffect, useState } from "react";
import { get, peticionDelete } from "../../servicios/Administrador.peticiones.service";

export function BorrarJugadores() {

    const [jugadores, setJugadores] = useState([]);
    const [seleccionado, setSeleccionado] = useState(null);

    useEffect(() => {
        get("/api/jugador/verJugadores", (data) => {
            setJugadores(data.jugadores);
        }, (error) => {
            console.log("Error cargando jugadores:", error);
        });
    }, []);

    const borrarJugador = () => {
        if (!seleccionado) return;

        peticionDelete(`/api/jugador/borrarJugador/${seleccionado.alias}`, () => {
            setJugadores(jugadores.filter(jugador => jugador.alias !== seleccionado.alias));
            setSeleccionado(null);
        }, (error) => {
            console.log("Error borrando jugador:", error);
        });
    };

    return (
        <>
            <h1 className="text-4xl font-bold text-red-500 mb-8 text-center drop-shadow-lg">
                Borrar Jugadores
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6 bg-gray-900 rounded-xl shadow-xl">
                {jugadores.map((jugador) => (
                    <div
                        key={jugador.alias}
                        className="card bg-base-200 shadow-xl border border-red-700 hover:border-red-400 transition-all duration-300 group"
                    >
                        <figure className="relative overflow-hidden">
                            <img
                                src={jugador.imagen}
                                alt={jugador.alias}
                                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110 group-hover:brightness-90"
                            />
                            <div className="absolute bottom-0 w-full bg-black/60 py-2 text-center opacity-0 group-hover:opacity-100 transition">
                                <span className="text-red-300 font-bold tracking-wide text-lg">
                                    {jugador.alias}
                                </span>
                            </div>
                        </figure>

                        <div className="card-body text-center">
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Nacionalidad: {jugador.nacionalidad}
                            </p>

                            <p className="text-gray-400 text-sm">
                                Equipo: {jugador.nombre_equipo}
                            </p>

                            <div className="badge badge-warning mt-2">
                                Posición: {jugador.posicion}
                            </div>

                            <button
                                className="btn btn-error mt-3"
                                onClick={() => setSeleccionado(jugador)}
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
                            ¿Seguro que quieres borrar al jugador {seleccionado.alias}?
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
                                onClick={borrarJugador}
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
