import logos from "../../data/logos";

export async function generarPlayoffs(competicion) {

    const response = await fetch(
        "http://localhost:8080/api/partida/obtenerPartidas"
    );

    const data = await response.json();

    const partidas = data.partidas;

    const partidasCompeticion = partidas.filter(
        (partida) =>
            partida.torneo === competicion &&
            partida.fase !== "regular"
    );

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

    const groupedSeries = {};

    partidasCompeticion.forEach((partida) => {

        const equiposOrdenados = [
            partida.equipoRojo,
            partida.equipoAzul
        ].sort();

        const key =
            `${partida.fase}-${equiposOrdenados[0]}-${equiposOrdenados[1]}`;

        if (!groupedSeries[key]) {

            groupedSeries[key] = {

                fase: partida.fase,

                team1: partida.equipoRojo,

                team2: partida.equipoAzul,

                logo1: logos[partida.equipoRojo],

                logo2: logos[partida.equipoAzul],

                score1: 0,

                score2: 0
            };
        }

        if (
            partida.equipoGanador === partida.equipoRojo
        ) {

            groupedSeries[key].score1++;

        } else {

            groupedSeries[key].score2++;
        }

    });

    const fases = {

        upR1: [],

        upR2: [],

        upFinal: [],

        downR1: [],

        downR2: [],

        downR3: [],

        downFinal: [],

        grandFinal: []
    };

    Object.values(groupedSeries).forEach((serie) => {

        fases[serie.fase].push({

            team1: serie.team1,

            score1: serie.score1,

            logo1: serie.logo1,

            team2: serie.team2,

            score2: serie.score2,

            logo2: serie.logo2
        });

    });

    Object.keys(fases).forEach((fase) => {

        if (fases[fase].length === 0) {

            fases[fase].push({

                team1: null,

                score1: null,

                logo1: null,

                team2: null,

                score2: null,

                logo2: null
            });
        }
    });

    return Object.keys(fases).map((fase) => ({

        title: nombresFases[fase],

        fase,

        matches: fases[fase]

    }));
}