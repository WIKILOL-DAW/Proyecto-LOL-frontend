import competitivo from '../../assets/img/lol_competitivo.png'
import parcheLol from '../../assets/img/parche_lol.png'
import fondo from '../../assets/img/copa_mundial.png'
import campeones from '../../assets/img/campeones.png'
import { useNavigate } from 'react-router'

export default function Inicio() {

    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-base-200 text-base-content">
            <div
                className="hero min-h-[70vh] bg-cover bg-center"
                style={{
                    backgroundImage: `url(${fondo})`
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Bienvenido invocador</h1>
                    </div>
                </div>
            </div>

            <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <img src={campeones} alt="Yuanara" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Campeones</h2>
                        <p>Conoce a todos los campeones de runnaterra</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary" onClick={() => navigate("/verCampeones")}>Ver más</button>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <img src={parcheLol} alt="Noticas" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Noticias</h2>
                        <p>Consulta las últimas noticias y cambios de la grieta</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary" onClick={() => navigate("/noticias")}>Ver mas</button>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <img src={competitivo} alt="Esports" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Esports</h2>
                        <p>Sigue los mejores torneos del mundo</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Ver torneos</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col items-center mt-10 mb-10">
                <h2 className="text-2xl font-bold mb-4">Si quieres apoyarnos directamente 🫡</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    <a
                        href="https://ko-fi.com"
                        target="_blank"
                        className="flex items-center gap-3 px-6 py-3 rounded-xl bg-[#29ABE0] text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200"
                    >
                        <img
                            src="https://storage.ko-fi.com/cdn/cup-border.png"
                            alt="Ko-fi"
                            className="w-6 h-6"
                        />
                        Ko‑fi
                    </a>

                    <a
                        href="https://paypal.me"
                        target="_blank"
                        className="flex items-center gap-3 px-6 py-3 rounded-xl bg-[#003087] text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200"
                    >
                        <img
                            src="https://www.paypalobjects.com/webstatic/icon/pp258.png"
                            alt="PayPal"
                            className="w-6 h-6"
                        />
                        PayPal
                    </a>

                    <a
                        href="https://patreon.com"
                        target="_blank"
                        className="flex items-center gap-3 px-6 py-3 rounded-xl bg-[#FF424D] text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200"
                    >
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/9/94/Patreon_logo.svg"
                            alt="Patreon"
                            className="w-6 h-6"
                        />
                        Patreon
                    </a>
                </div>
            </div>
        </div>
    );
}
