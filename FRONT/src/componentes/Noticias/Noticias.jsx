import { useEffect, useState } from "react";
import { get } from "../../servicios/Administrador.peticiones.service";

//Falta modificar la vista ya que al final no se utiliza una S3 para almacenar las imagenes.
//Hay que eliminar las imagenes de las noticias de cara al 2.

export default function Noticias() {

    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        get(
            "/api/noticia/verNoticias",
            (data) => {
                setNoticias(data.noticias);
            },
            (error) => {
                console.log("Error cargando noticias:", error);
            }
        );

    }, []);

    return (
        <>
            <h1 className="text-4xl font-bold text-yellow-400 mb-8 text-center drop-shadow-lg">
                Últimas Noticias
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 bg-gray-900 rounded-xl shadow-xl">
                {noticias.map((noticia) => (
                    <div key={noticia.id} className="card bg-base-200 shadow-xl border border-yellow-700 hover:border-yellow-400 transition-all duration-300 group">
                        <figure className="relative overflow-hidden">
                            <img
                                src={noticia.imagen || "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg" /*TEMPORAL*/}
                                alt={noticia.titular}
                                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110 group-hover:brightness-90"
                            />
                            <div className="absolute top-0 w-full bg-black/70 py-3 text-center">
                                <span className="text-yellow-300 hover:text-green-400 font-bold tracking-wide text-lg px-3 transition-colors duration-300">
                                    {noticia.titular}
                                </span>
                            </div>
                        </figure>
                        <div className="card-body">
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {noticia.contenido}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}