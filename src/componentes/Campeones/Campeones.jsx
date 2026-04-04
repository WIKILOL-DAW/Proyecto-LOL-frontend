import { NavBar } from "../NavBar/NavBar";
import { get } from "../../servicios/Administrador.peticiones.service";
import { useEffect, useState } from "react";


export function Campeones() {

    const [campeones, setCampeones] = useState([]);

    useEffect(() => {
        get("/api/campeon/verCampeones", (data) => {
            setCampeones(data.campeon);
        }, (error) => {
            console.log("Error cargando campeones:", error);
        }
        );
    }, []);

    return (
        <>
            <h1 className="text-4xl font-bold text-yellow-400 mb-8 text-center drop-shadow-lg">
                Conócelos
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6 bg-gray-900 rounded-xl shadow-xl">
                {campeones.map((campeon) => (
                    <div
                        key={campeon.nombre}
                        className="card bg-base-200 shadow-xl border border-yellow-700 hover:border-yellow-400 transition-all duration-300 group"
                    >
                        <figure className="relative overflow-hidden">
                            <img
                                src={campeon.imagen}
                                alt={campeon.nombre}
                                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110 group-hover:brightness-90"
                            />
                            <div className="absolute bottom-0 w-full bg-black/60 py-2 text-center opacity-0 group-hover:opacity-100 transition">
                                <span className="text-yellow-300 font-bold tracking-wide text-lg">
                                    {campeon.nombre}
                                </span>
                            </div>
                        </figure>
                        <div className="card-body text-center">
                            <div className="badge badge-warning text-black font-semibold mb-2">
                                {campeon.posicion}
                            </div>

                            <p className="text-gray-300 text-sm leading-relaxed">
                                {campeon.descripcion}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}