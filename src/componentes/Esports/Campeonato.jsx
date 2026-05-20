import { useState } from "react";
import TemporadaRegular from "./TemporadaRegular";
import Playoffs from "./PlayOffs";
import { obtenerPartidasTorneo } from "./dataRegular";
import { useEffect } from "react";
import { generarPlayoffs } from "./dataPlayOffs";
import { useParams } from "react-router-dom";

export default function Campeonato() {
    const [activeSection, setActiveSection] = useState("regular");

    const { campeonato } = useParams();

    const [regular, setRegular] = useState([]);
    const [playOffs, setPlayOffs] = useState([]);

    useEffect(() => {
        cargarDatos();
    }, []);

    async function cargarDatos() {
        const regular = await obtenerPartidasTorneo(campeonato);
        const playOffs = await generarPlayoffs(campeonato);
        setRegular(regular);
        setPlayOffs(playOffs);
    }


    return (
        <div className="min-h-screen bg-black text-white p-8">

            <div className="mb-10">

                <h1 className="text-5xl font-extrabold text-yellow-400 mb-3">
                    {campeonato}
                </h1>

                <p className="text-zinc-400 text-lg">
                    Toda la información del campeonato,
                    clasificación y playoffs.
                </p>

            </div>

            <div className="flex gap-4 mb-10">

                <button
                    onClick={() => setActiveSection("regular")}
                    className={`
                        px-6 py-3 rounded-xl font-semibold transition-all
                        ${activeSection === "regular"
                            ? "bg-yellow-400 text-black"
                            : "bg-zinc-900 text-white hover:bg-zinc-800"
                        }
                    `}
                >
                    Regular
                </button>

                <button
                    onClick={() => setActiveSection("playoff")}
                    className={`
                        px-6 py-3 rounded-xl font-semibold transition-all
                        ${activeSection === "playoff"
                            ? "bg-yellow-400 text-black"
                            : "bg-zinc-900 text-white hover:bg-zinc-800"
                        }
                    `}
                >
                    Playoffs
                </button>

            </div>

            {activeSection === "regular" && (
                <TemporadaRegular regular={regular} />
            )}

            {activeSection === "playoff" && (
                <Playoffs playOffs={playOffs} />
            )}

        </div>
    );
}
