import { useEffect, useState } from "react";
import { get, peticionDelete } from "../../servicios/Administrador.peticiones.service";

export function BorrarCampeones() {

    const [campeones, setCampeones] = useState([]);
    const [seleccionado, setSeleccionado] = useState(null);

    useEffect(() => {
        get("/api/campeon/verCampeones", (data) => {
            console.log("DATA RECIBIDA:", data);
            setCampeones(data.campeon);
        }, (error) => {
            console.log("Error cargando campeones:", error);
        });
    }, []);

    const borrarCampeon = () => {
        if (!seleccionado) return;

        peticionDelete(`/api/campeon/borrarCampeon/${seleccionado.nombre}`, () => {
            setCampeones(campeones.filter(campeon => campeon.nombre !== seleccionado.nombre));
            setSeleccionado(null);
        }, (error) => {
            console.log("Error borrando campeón:", error);
        });
    };

    return (
        <>
            <h1 className="text-4xl font-extrabold text-[#C23B22] mb-8 text-center drop-shadow-[0_0_10px_rgba(194,59,34,0.4)]">
                Borrar Campeones
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6 
                bg-[#162032]/70 backdrop-blur-md rounded-xl shadow-[0_0_25px_rgba(0,0,0,0.4)]">

                {campeones.map((campeon) => (
                    <div
                        key={campeon.nombre}
                        className="card bg-[#0A1428] shadow-xl border border-[#7A2416] 
                        hover:border-[#C23B22] transition-all duration-300 group rounded-xl"
                    >
                        <figure className="relative overflow-hidden rounded-t-xl">
                            <img
                                src={campeon.imagen || 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'}
                                alt={campeon.nombre}
                                className="w-full h-48 object-cover transition-transform duration-300 
                                group-hover:scale-110 group-hover:brightness-90"
                            />

                            <div className="absolute bottom-0 w-full bg-black/60 py-2 text-center 
                                opacity-0 group-hover:opacity-100 transition">
                                <span className="text-[#E04A2F] font-bold tracking-wide text-lg">
                                    {campeon.nombre}
                                </span>
                            </div>
                        </figure>

                        <div className="card-body text-center">
                            <div className="badge bg-[#C23B22] text-white font-semibold mb-2">
                                {campeon.posicion}
                            </div>

                            <p className="text-gray-300 text-sm leading-relaxed">
                                {campeon.descripcion}
                            </p>

                            <button
                                className="btn mt-3 bg-[#C23B22] border-[#C23B22] text-white 
                                hover:bg-[#E04A2F] hover:border-[#E04A2F] transition-all duration-200"
                                onClick={() => setSeleccionado(campeon)}
                            >
                                Borrar
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {seleccionado && (
                <dialog open className="modal modal-open">
                    <div className="modal-box bg-[#0A1428] border border-[#7A2416] shadow-xl">
                        <h3 className="font-bold text-lg text-[#C23B22]">
                            ¿Seguro que quieres borrar a {seleccionado.nombre}?
                        </h3>

                        <p className="py-4 text-gray-300">
                            Esta acción no se puede deshacer.
                        </p>

                        <div className="modal-action">
                            <button
                                className="btn btn-outline border-[#C23B22] text-[#C23B22] hover:bg-[#C23B22]/20"
                                onClick={() => setSeleccionado(null)}
                            >
                                Cancelar
                            </button>

                            <button
                                className="btn bg-[#C23B22] border-[#C23B22] text-white 
                                hover:bg-[#E04A2F] hover:border-[#E04A2F]"
                                onClick={borrarCampeon}
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
