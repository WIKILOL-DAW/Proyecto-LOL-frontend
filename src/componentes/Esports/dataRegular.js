import logos from "../../data/logos";

export async function obtenerPartidasTorneo(campeonato) {

    try {

        const response = await fetch(
            "http://localhost:8080/api/partida/obtenerPartidas"
        );

        const data = await response.json();

        const partidas = data.partidas;

        const partidasTorneo = partidas.filter(
            (partida) => partida.torneo === campeonato
        );

        const partidasRegular = partidasTorneo.filter(
            (partida) => partida.fase === "regular"
        );

        const partidasPlayoffs = partidasTorneo.filter(
            (partida) => partida.fase !== "regular"
        );

        const regular = generarRegular(partidasRegular);

        const playoffRounds = generarPlayoffs(partidasPlayoffs);

        return regular;

    } catch (error) {

        console.log(error);

    }
}

function generarRegular(partidas) {

    const equipos = {};

    partidas.forEach((partida) => {

        const rojo = partida.equipoRojo;
        const azul = partida.equipoAzul;
        const ganador = partida.equipoGanador;

        if (!equipos[rojo]) {

            equipos[rojo] = {
                team: rojo,
                wins: 0,
                losses: 0,
                logo: logos[rojo]
            };
        }

        if (!equipos[azul]) {

            equipos[azul] = {
                team: azul,
                wins: 0,
                losses: 0,
                logo: logos[azul]
            };
        }

        if (ganador === rojo) {

            equipos[rojo].wins++;
            equipos[azul].losses++;

        } else {

            equipos[azul].wins++;
            equipos[rojo].losses++;

        }

    });

    return Object.values(equipos)
        .sort((a, b) => b.wins - a.wins)
        .map((equipo, index) => ({

            position: index + 1,

            team: equipo.team,

            wins: equipo.wins,

            losses: equipo.losses,

            percentage:
                Math.round(
                    (equipo.wins /
                        (equipo.wins + equipo.losses)) * 100
                ) + "%",

            logo: equipo.logo

        }));
}

function generarPlayoffs(partidas) {

    const nombresFases = {
        upR1: "CUADRO SUPERIOR: RONDA 1",
        upR2: "CUADRO SUPERIOR: RONDA 2",
        upFinal: "CUADRO SUPERIOR: FINAL",

        downR1: "CUADRO INFERIOR: RONDA 1",
        downR2: "CUADRO INFERIOR: RONDA 2",
        downR3: "CUADRO INFERIOR: RONDA 3",

        downFinal: "CUADRO INFERIOR: FINAL",

        grandFinal: "GRAN FINAL",
    };

    const grouped = {};

    partidas.forEach((partida) => {

        if (!grouped[partida.fase]) {

            grouped[partida.fase] = [];
        }

        grouped[partida.fase].push({

            team1: partida.equipoRojo,
            score1: partida.killsEquipoRojo,
            logo1:
                `/logos/${partida.equipoRojo.toLowerCase()}.png`,

            team2: partida.equipoAzul,
            score2: partida.killsEquipoAzul,
            logo2:
                `/logos/${partida.equipoAzul.toLowerCase()}.png`,
        });

    });

    return Object.keys(grouped).map((fase) => ({

        title: nombresFases[fase],

        fase,

        matches: grouped[fase]

    }));
}

// EJEMPLO
obtenerPartidasTorneo("LEC Spring 2025");

