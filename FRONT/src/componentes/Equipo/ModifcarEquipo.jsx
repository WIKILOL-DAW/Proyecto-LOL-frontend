import { useEffect, useState } from "react";
import { get, patch } from "../../servicios/Administrador.peticiones.service";

export function ActualizarEquipo() {

    const [equipos, setEquipos] = useState([]);
    const [errores, setErrores] = useState("");

    const [formulario, setFormulario] = useState({
        id: "",
        nombre: "",
        descripcion: "",
        imagen: "",
    });

    useEffect(() => {
        get("/api/equipo/verEquipos", (data) => {
            setEquipos(data.verEquipos);
        }, () => setErrores("Error cargando equipos"));
    }, []);

    const seleccionarEquipo = (equipo) => {
        setFormulario(equipo);
        setErrores("");
    };

    const actualizarEquipo = () => {
        if (!formulario.nombre) {
            setErrores("Selecciona un equipo primero");
            return;
        }

        patch("/api/equipo/modificarEquipo", formulario, () => {
            setErrores("Equipo actualizado correctamente");
        }, () => {
            setErrores("Error al actualizar equipo");
        });
    };

    return (
        <div className="hero min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
            <div className="hero-content flex-col lg:flex-row gap-12">

                <div className="bg-base-100/80 backdrop-blur-md p-8 rounded-xl shadow-2xl border border-yellow-600/20 w-full max-w-xl">
                    <h2 className="text-2xl font-bold text-yellow-400 mb-4 text-center drop-shadow-lg">
                        Selecciona un equipo
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[450px] overflow-y-auto pr-2">
                        {equipos.map((equipo) => (
                            <div
                                key={equipo.nombre}
                                className="card bg-base-200 shadow-lg border border-yellow-700 hover:border-yellow-400 transition cursor-pointer"
                                onClick={() => seleccionarEquipo(equipo)}
                            >
                                <div className="card-body p-4">
                                    <div className="card-body p-4">
                                        <div className="card-body p-4">
                                            <img
                                                src={equipo.imagen}                                           
                                                className="w-full h-32 object-cover rounded-md mb-3 border border-[#2F4A72]"
                                            />

                                            <h3 className="text-[#5A8CCF] font-bold text-lg">
                                                {equipo.nombre}
                                            </h3>
                             
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="card bg-base-100/80 backdrop-blur-md w-full max-w-xl shadow-2xl border border-yellow-600/20">
                    <div className="card-body">

                        <fieldset className="fieldset bg-base-100/60 backdrop-blur-md border border-yellow-600/30 rounded-xl w-full shadow-xl p-8 space-y-4">

                            <legend className="text-3xl font-bold text-yellow-400 text-center mb-2 drop-shadow-lg">
                                Actualizar equipo
                            </legend>

                            <label className="label">
                                <span className="label-text text-gray-300">Nombre</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered w-full bg-gray-800 text-gray-200 border-yellow-700"
                                value={formulario.nombre}
                                onChange={(e) => setFormulario(
                                    { ...formulario, nombre: e.target.value }
                                )}
                            />

                            <label className="label">
                                <span className="label-text text-gray-300">Descripción</span>
                            </label>
                            <textarea
                                className="textarea textarea-bordered w-full bg-gray-800 text-gray-200 border-yellow-700"
                                value={formulario.descripcion}
                                onChange={(e) => setFormulario(
                                    { ...formulario, descripcion: e.target.value }
                                )}
                            />

                            <label className="label">
                                <span className="label-text text-gray-300">URL Imagen</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered w-full bg-gray-800 text-gray-200 border-yellow-700"
                                value={formulario.imagen}
                                onChange={(e) => setFormulario(
                                    { ...formulario, imagen: e.target.value }
                                )}
                            />

                            <button
                                className="btn btn-warning mt-4 w-full font-bold tracking-wide shadow-md hover:shadow-yellow-500/30 transition"
                                onClick={actualizarEquipo}
                            >
                                Guardar cambios
                            </button>

                            {errores && (
                                <span className="text-red-400 font-semibold text-center block mt-2">
                                    {errores}
                                </span>
                            )}

                        </fieldset>
                    </div>
                </div>

            </div>
        </div>
    );
}
