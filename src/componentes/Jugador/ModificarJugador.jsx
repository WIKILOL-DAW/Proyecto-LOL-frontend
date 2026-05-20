import { useEffect, useState } from "react";
import { get, patch } from "../../servicios/Administrador.peticiones.service";

export function ModificarJugador() {

    const [jugadores, setJugadores] = useState([]);
    const [errores, setErrores] = useState("");

    const [formulario, setFormulario] = useState({
        id: "",
        alias: "",
        posicion: "",
        nombreEquipo: "",
        imagen: ""
    });

    useEffect(() => {
        get("/api/jugador/verJugadores", (data) => {
            setJugadores(data.jugadores);
        }, () => setErrores("Error cargando jugadores"));
    }, []);

    const seleccionarJugador = (jugador) => {
        setFormulario({
            id: jugador.id,
            alias: jugador.alias,
            posicion: jugador.posicion,
            nombreEquipo: jugador.nombre_equipo,
            imagen: jugador.imagen
        });
        setErrores("");
    };

    const actualizarJugador = () => {
        if (!formulario.alias) {
            setErrores("Selecciona un jugador primero");
            return;
        }

        patch("/api/jugador/modificarJugador", formulario, () => {
            setErrores("Jugador actualizado correctamente");
        }, () => {
            setErrores("Error al actualizar jugador");
        });
    };

    return (
        <div className="hero min-h-screen bg-[#0A1428] p-10">

            <div className="hero-content flex-col lg:flex-row gap-10">

                <div className="bg-[#162032] p-6 rounded-xl shadow-xl border border-[#2F4A72]/40 w-full max-w-xl">
                    <h2 className="text-2xl font-bold text-[#3C6EAF] mb-4 text-center">
                        Selecciona un jugador
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[450px] overflow-y-auto pr-2">
                        {jugadores.map((jugador) => (
                            <div
                                key={jugador.id}
                                className="card bg-[#0A1428] shadow-md border border-[#2F4A72] hover:border-[#3C6EAF] transition cursor-pointer"
                                onClick={() => seleccionarJugador(jugador)}
                            >
                                <div className="card-body p-4">
                                    <div className="card-body p-4">
                                        <div className="card-body p-4">
                                            <img
                                                src={jugador.imagen}                                           
                                                className="w-full h-32 object-cover rounded-md mb-3 border border-[#2F4A72]"
                                            />

                                            <h3 className="text-[#5A8CCF] font-bold text-lg">
                                                {jugador.alias}
                                            </h3>

                                            <p className="text-gray-300 text-sm">
                                                Posición: {jugador.posicion}
                                            </p>

                                            <p className="text-gray-300 text-sm">
                                                Equipo: {jugador.nombre_equipo}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="card bg-[#162032] w-full shadow-xl border border-[#2F4A72]/40">
                    <div className="card-body">

                        <fieldset className="fieldset bg-[#162032] border border-[#2F4A72]/40 rounded-xl w-full shadow-xl p-6 space-y-4">

                            <legend className="text-3xl font-bold text-[#3C6EAF] text-center mb-2">
                                Modificar jugador
                            </legend>

                            <label className="label">
                                <span className="label-text text-gray-300">Alias</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered w-full bg-[#0A1428] text-gray-200 border-[#2F4A72]"
                                value={formulario.alias}
                                onChange={(e) => setFormulario({ ...formulario, alias: e.target.value })}
                            />

                            <label className="label">
                                <span className="label-text text-gray-300">Posición</span>
                            </label>
                            <select
                                className="select select-bordered w-full bg-[#0A1428] text-gray-200 border-[#2F4A72]"
                                value={formulario.posicion}
                                onChange={(e) => setFormulario({ ...formulario, posicion: e.target.value })}
                            >
                                <option value="">Seleccionar posición</option>
                                <option value="TOP">TOP</option>
                                <option value="JGL">JGL</option>
                                <option value="MID">MID</option>
                                <option value="ADC">ADC</option>
                                <option value="SUP">SUPP</option>
                            </select>

                            <label className="label">
                                <span className="label-text text-gray-300">Equipo</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered w-full bg-[#0A1428] text-gray-200 border-[#2F4A72]"
                                value={formulario.nombreEquipo}
                                onChange={(e) => setFormulario({ ...formulario, nombreEquipo: e.target.value })}
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
                                onClick={actualizarJugador}
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
