import lecLogo from "../../assets/img/LEC.png";
import lckLogo from "../../assets/img/LCK.png";
import lplLogo from "../../assets/img/LPL.png";
import lcsLogo from "../../assets/img/LCS.png";
import worldsLogo from "../../assets/img/copa_mundial.png";
import msiLogo from "../../assets/img/msi.png";
import firstStandLogo from "../../assets/img/first_stand.png";
import { useNavigate } from "react-router-dom";

export default function Esports() {

    const navigate = useNavigate();



    const leagues = [
        {
            name: "LEC",
            region: "Europa",
            image: lecLogo,
        },
        {
            name: "LCK",
            region: "Corea",
            image: lckLogo,
        },
        {
            name: "LPL",
            region: "China",
            image: lplLogo,
        },
        {
            name: "LCS",
            region: "Norteamérica",
            image: lcsLogo,
        },
    ];

    const tournaments = [
        {
            name: "MSI",
            description: "Mid-Season International",
            image: msiLogo     
        },
        {
            name: "Worlds",
            description: "Campeonato Mundial de League of Legends",
            image: worldsLogo       
        },
        {
            name: "First Stand",
            description: "Primer Internacional",
            image: firstStandLogo   
        },
    ];

    return (
        <div className="min-h-screen bg-zinc-950 text-white px-6 py-10">
            <div className="mb-12 text-center">
                <h1 className="text-5xl font-extrabold text-yellow-400 mb-4">
                    League of Legends Esports
                </h1>

                <p className="text-zinc-400 max-w-2xl mx-auto">
                    Descubre las principales ligas regionales y los torneos
                    internacionales más importantes del competitivo de League of Legends.
                </p>
            </div>

            <section className="mb-16">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-bold">Ligas Regionales</h2>

                    <span className="text-sm text-zinc-400">
                        Top competiciones del mundo
                    </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                    {leagues.map((league, index) => (
                        <div
                            key={index}
                            className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-lg hover:border-yellow-400"
                        >
                            <div className="relative h-56 overflow-hidden bg-zinc-800">
                                <img
                                    src={league.image}
                                    alt={league.name}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>

                            <div className="p-5">
                                <h3 className="text-2xl font-bold mb-2">{league.name}</h3>

                                <p className="text-zinc-400">{league.region}</p>

                                <button
                                    onClick={() => navigate(`/esports/${league.name}`)}
                                    className="mt-5 w-full bg-yellow-400 text-black font-semibold py-2 rounded-xl hover:bg-yellow-300 transition"
                                >
                                    Ver Liga
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section>

    <div className="flex items-center justify-between mb-8">

        <h2 className="text-3xl font-bold">
            Torneos Internacionales
        </h2>

        <span className="text-sm text-zinc-400">
            Eventos globales
        </span>

    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {tournaments.map((tournament, index) => (

            <div
                key={index}
                className="relative rounded-2xl overflow-hidden group border border-zinc-800"
            >

                <div className="absolute inset-0 bg-black/50 z-10 group-hover:bg-black/30 transition"></div>

                <img
                    src={tournament.image}
                    alt={tournament.name}
                    className="w-full h-80 object-cover bg-zinc-900"
                />

                <div className="absolute bottom-0 left-0 z-20 p-6 w-full">

                    <h3 className="text-3xl font-bold mb-2">
                        {tournament.name}
                    </h3>

                    <p className="text-zinc-300 mb-4">
                        {tournament.description}
                    </p>

                    <button
                        onClick={() =>
                            navigate(`/esports/${tournament.name}`)
                        }
                        className="bg-yellow-400 text-black font-semibold px-5 py-2 rounded-xl hover:bg-yellow-300 transition"
                    >
                        Ver más
                    </button>

                </div>

            </div>

        ))}

    </div>

</section>
        </div>
    );
}