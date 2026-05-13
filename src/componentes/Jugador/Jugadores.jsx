import { NavBar } from "../NavBar/NavBar";
import { get } from "../../servicios/Administrador.peticiones.service";
import { useEffect, useState } from "react";

export function Jugadores() {

    const [jugadores, setJugadores] = useState([]);

    useEffect(() => {
        get("/api/jugador/verJugadores", (data) => {
            setJugadores(data.jugadores);
        }, (error) => {
            console.log("Error cargando jugadores:", error);
        });
    }, []);

    return (
        <>
            <h1 className="text-4xl font-bold text-blue-400 mb-8 text-center drop-shadow-lg">
                Jugadores Profesionales
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6 bg-gray-900 rounded-xl shadow-xl">
                {jugadores.map((jugador) => (
                    <div
                        key={jugador.alias}
                        className="card shadow-xl border border-blue-700 hover:border-blue-400 transition-all duration-300 group bg-transparent"
                    >
                        <figure className="relative overflow-hidden">
                            <img
                                src={jugador.imagen}
                                alt={jugador.alias}
                                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110 group-hover:brightness-90"
                            />
                            <div className="absolute bottom-0 w-full bg-black/60 py-2 text-center opacity-0 group-hover:opacity-100 transition">
                                <span className="text-blue-300 font-bold tracking-wide text-lg">
                                    {jugador.alias}
                                </span>
                            </div>
                        </figure>

                        <div className="card-body text-center">
                            <div className="badge badge-info text-black font-semibold mb-2">
                                {jugador.posicion}
                            </div>

                            <p className="text-gray-300 text-sm leading-relaxed">
                                Nacionalidad: {jugador.nacionalidad}
                            </p>

                            <p className="text-gray-400 text-sm">
                                Equipo: <span className="font-semibold text-blue-300">{jugador.nombre_equipo}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
