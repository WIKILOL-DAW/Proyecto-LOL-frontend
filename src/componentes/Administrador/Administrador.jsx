import { Link } from "react-router-dom";
import {ComprobarToken} from '../../servicios/ComprobarToken'

export function Administrador() {

    ComprobarToken();

    return (
        <div className="min-h-screen bg-gradient-to-br from-base-300 via-base-200 to-base-300 text-base-content">

            <div className="p-6 border-b border-base-300 flex justify-center items-center">
                <h1 className="text-3xl font-bold tracking-wide text-center">
                    🧑‍💻 Panel de administradores
                </h1>
            </div>

            <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">

                <div className="card bg-base-100 shadow-xl hover:shadow-2xl hover:scale-[1.03] transition border border-blue-500/20">

                    <div className="card-body">
                        <h2 className="card-title text-blue-400 text-xl">
                            🏆 Gestión de equipos
                        </h2>

                        <p className="opacity-80">
                            Añade, modifica o elimina equipos de la competición.
                        </p>

                        <div className="mt-6 flex flex-col gap-2">
                            <Link to="/insertarEquipo" className="btn bg-blue-500 hover:bg-blue-600 text-white border-none">
                                ➕ Insertar equipo
                            </Link>

                            <Link to="/modificarEquipo" className="btn btn-outline btn-info">
                                ✏️ Modificar equipos
                            </Link>

                            <Link to="/borrarEquipo" className="btn btn-outline btn-error">
                                ❌ Borrar equipos
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl hover:shadow-2xl hover:scale-[1.03] transition border border-blue-500/20">

                    <div className="card-body">
                        <h2 className="card-title text-blue-400 text-xl">
                            ⚔️ Gestión de campeones
                        </h2>

                        <p className="opacity-80">
                            Administra los campeones de Runaterra.
                        </p>

                        <div className="mt-6 flex flex-col gap-2">
                            <Link to="/insertarCampeon" className="btn bg-blue-500 hover:bg-blue-600 text-white border-none">
                                ➕ Insertar campeón
                            </Link>

                            <Link to="/modificarCampeon" className="btn btn-outline btn-info">
                                ✏️ Modificar campeones
                            </Link>

                            <Link to="/borrarCampeon" className="btn btn-outline btn-error">
                                ❌ Borrar campeones
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl hover:shadow-2xl hover:scale-[1.03] transition border border-blue-500/20">

                    <div className="card-body">
                        <h2 className="card-title text-blue-400 text-xl">
                            🎮 Gestión de jugadores
                        </h2>

                        <p className="opacity-80">
                            Controla los jugadores profesionales y nuevos talentos.
                        </p>

                        <div className="mt-6 flex flex-col gap-2">
                            <Link to="/insertarJugador" className="btn bg-blue-500 hover:bg-blue-600 text-white border-none">
                                ➕ Insertar jugador
                            </Link>

                            <Link to="/modificarJugador" className="btn btn-outline btn-info">
                                ✏️ Modificar jugadores
                            </Link>

                            <Link to="/borrarJugador" className="btn btn-outline btn-error">
                                ❌ Borrar jugadores
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}