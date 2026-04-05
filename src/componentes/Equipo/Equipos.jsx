import { get } from "../../servicios/Administrador.peticiones.service";
import { useEffect, useState } from "react";

export default function Equipo() {

    const [equipos, setEquipos] = useState([]);

    useEffect(() => {

        get("/api/equipo/verEquipos", (data) => {
            setEquipos(data.equipo);
        }, (error) => {
            console.log("Error cargando equipos:", error);
        }
        );
    }, []);

    return (
        <>

            <h1>Aqui va la informacion del Equipo</h1>


        </>
    )
}