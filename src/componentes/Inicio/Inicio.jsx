import competitivo from '../../assets/img/lol_competitivo.png'
import parcheLol from '../../assets/img/parche_lol_13.10.png'
import fondo from '../../assets/img/copa_mundial.png'
import campeones from '../../assets/img_campeones/campeones.png'
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
                        <p>Conoce los campeones y su habilidades</p>
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
                        <h2 className="card-title">Noticas</h2>
                        <p>Consulta las ultimas noticas</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Ver mas</button>
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
        </div>
    );
}