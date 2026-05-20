import { useEffect, useState } from "react";
import { get, patch } from "../../servicios/Administrador.peticiones.service";

export function ModificarCampeon() {

    const [campeones, setCampeones] = useState([]);
    const [errores, setErrores] = useState("");

    const [formulario, setFormulario] = useState({
        id: "",
        nombre: "",
        descripcion: "",
        imagen: ""
    });

    useEffect(() => {
        get("/api/campeon/verCampeones", (data) => {
            setCampeones(data.campeon);
        }, () => setErrores("Error cargando campeones"));
    }, []);

    const seleccionarCampeon = (campeon) => {
        setFormulario({
            id: campeon.id,
            nombre: campeon.nombre,
            descripcion: campeon.descripcion,
            imagen: campeon.imagen
        });
        setErrores("");
    };

    const actualizarCampeon = () => {
        if (!formulario.nombre) {
            setErrores("Selecciona un campeón primero");
            return;
        }

        patch("/api/campeon/modificarCampeon", formulario, () => {
            setErrores("Campeón actualizado correctamente");
        }, () => {
            setErrores("Error al actualizar campeón");
        });
    };

    return (

        <div className="hero min-h-screen bg-[#0A1428] p-10">
            <div className="hero-content flex-col lg:flex-row gap-10">
                <div className="bg-[#162032] p-6 rounded-xl shadow-xl border border-[#2F4A72]/50 w-full max-w-xl backdrop-blur-md">
                    <h2 className="text-2xl font-bold text-[#3C6EAF] mb-4 text-center">
                        Selecciona un campeón
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[450px] overflow-y-auto pr-2">
                        {campeones.map((campeon) => (
                            <div
                                key={campeon.id}
                                className="card bg-[#0A1428] shadow-md border border-[#2F4A72] hover:border-[#3C6EAF] transition cursor-pointer"
                                onClick={() => seleccionarCampeon(campeon)}
                            >
                                <div className="card-body p-4">
                                    <div className="card-body p-4">
                                        <img
                                            src={campeon.imagen}
                                            className="w-full h-32 object-cover rounded-md mb-3 border border-[#2F4A72]"
                                        />

                                        <h3 className="text-[#5A8CCF] font-bold text-lg">
                                            {campeon.nombre}
                                        </h3>

                                        <p className="text-gray-300 text-sm">
                                            Posición: {campeon.posicion}
                                        </p>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="card bg-[#162032] w-full shadow-xl border border-[#2F4A72]/50 backdrop-blur-md">
                    <div className="card-body">

                        <fieldset className="fieldset bg-[#162032] border border-[#2F4A72]/50 rounded-xl w-full shadow-xl p-6 space-y-4">

                            <legend className="text-3xl font-bold text-[#3C6EAF] text-center mb-2">
                                Modificar campeón
                            </legend>

                            <label className="label">
                                <span className="label-text text-gray-300">Nombre</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered w-full bg-[#0A1428] text-gray-200 border-[#2F4A72]"
                                value={formulario.nombre}
                                onChange={(e) => setFormulario({ ...formulario, nombre: e.target.value })}
                            />

                            <label className="label">
                                <span className="label-text text-gray-300">Descripción</span>
                            </label>
                            <textarea
                                className="textarea textarea-bordered w-full bg-[#0A1428] text-gray-200 border-[#2F4A72]"
                                rows={4}
                                value={formulario.descripcion}
                                onChange={(e) => setFormulario({ ...formulario, descripcion: e.target.value })}
                            />

                            <label className="label">
                                <span className="label-text text-gray-300">URL Imagen</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered w-full bg-[#0A1428] text-gray-200 border-[#2F4A72]"
                                value={formulario.imagen}
                                onChange={(e) => setFormulario({ ...formulario, imagen: e.target.value })}
                            />

                            <button
                                className="btn bg-[#3C6EAF] border-[#3C6EAF] text-white w-full mt-4 hover:bg-[#5A8CCF]"
                                onClick={actualizarCampeon}
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
