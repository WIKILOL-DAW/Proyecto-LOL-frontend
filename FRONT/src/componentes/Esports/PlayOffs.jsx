export default function Playoffs({ playOffs }) {

    const upperRounds = playOffs.filter((round) =>
        round.fase.startsWith("up")
    );

    const lowerRounds = playOffs.filter((round) =>
        round.fase.startsWith("down") &&
        round.fase !== "grandFinal"
    );

    const grandFinal = playOffs.find(
        (round) => round.fase === "grandFinal"
    );

    const renderMatch = (match) => {

        const hasTeams =
            match.team1 &&
            match.team2;

        if (!hasTeams) {

            return (

                <div className="bg-zinc-900 border border-zinc-800 rounded-md w-72 overflow-hidden">

                    <div className="flex justify-between items-center px-4 py-3 border-b border-zinc-800">

                        <div className="flex items-center gap-3">

                            <div className="w-1 h-8 bg-zinc-600 rounded-full"></div>

                            <span className="font-medium text-zinc-500">
                                TBD
                            </span>

                        </div>

                        <span className="font-bold text-lg text-zinc-500">
                            -
                        </span>

                    </div>

                    <div className="flex justify-between items-center px-4 py-3">

                        <div className="flex items-center gap-3">

                            <div className="w-1 h-8 bg-zinc-600 rounded-full"></div>

                            <span className="font-medium text-zinc-500">
                                TBD
                            </span>

                        </div>

                        <span className="font-bold text-lg text-zinc-500">
                            -
                        </span>

                    </div>

                </div>
            );
        }

        const team1Winner = match.score1 > match.score2;

        const orderedMatch = team1Winner
            ? match
            : {

                ...match,

                team1: match.team2,
                score1: match.score2,
                logo1: match.logo2,

                team2: match.team1,
                score2: match.score1,
                logo2: match.logo1,
            };

        return (

            <div className="bg-zinc-900 border border-zinc-800 rounded-md w-72 overflow-hidden">

                <div className="flex justify-between items-center px-4 py-3 border-b border-zinc-800">

                    <div className="flex items-center gap-3">

                        <div className="w-1 h-8 bg-yellow-400 rounded-full"></div>

                        {orderedMatch.logo1 && (
                            <img
                                src={orderedMatch.logo1}
                                alt={orderedMatch.team1}
                                className="w-7 h-7 object-contain"
                            />
                        )}

                        <span className="font-medium">
                            {orderedMatch.team1}
                        </span>

                    </div>

                    <span className="font-bold text-lg">
                        {orderedMatch.score1}
                    </span>

                </div>

                <div className="flex justify-between items-center px-4 py-3">

                    <div className="flex items-center gap-3">

                        <div className="w-1 h-8 bg-zinc-600 rounded-full"></div>

                        {orderedMatch.logo2 && (
                            <img
                                src={orderedMatch.logo2}
                                alt={orderedMatch.team2}
                                className="w-7 h-7 object-contain"
                            />
                        )}

                        <span className="font-medium">
                            {orderedMatch.team2}
                        </span>

                    </div>

                    <span className="font-bold text-lg">
                        {orderedMatch.score2}
                    </span>

                </div>

            </div>
        );
    };

    return (

        <div className="overflow-x-auto pb-20">

            <div className="min-w-1050 flex items-start gap-32">

                <div className="flex flex-col gap-40">

                    <div className="flex gap-20 items-start">

                        {upperRounds.map((round, index) => (

                            <div
                                key={index}
                                className="flex flex-col gap-8"
                            >

                                <div className="bg-zinc-200 text-black px-5 py-2 rounded-md font-bold text-sm w-fit">
                                    {round.title}
                                </div>

                                <div className="flex flex-col gap-8">

                                    {round.matches.map((match, matchIndex) => (

                                        <div
                                            key={matchIndex}
                                            className="relative"
                                        >

                                            {renderMatch(match)}

                                            <div className="absolute top-1/2 -right-10 w-10 h-px bg-zinc-700"></div>

                                        </div>

                                    ))}

                                </div>

                            </div>

                        ))}

                    </div>

                    <div className="flex gap-20 items-start ">

                        {lowerRounds.map((round, index) => (

                            <div
                                key={index}
                                className="flex flex-col gap-8"
                            >

                                <div className="bg-zinc-200 text-black px-5 py-2 rounded-md font-bold text-sm w-fit">
                                    {round.title}
                                </div>

                                <div className="flex flex-col gap-8">

                                    {round.matches.map((match, matchIndex) => (

                                        <div
                                            key={matchIndex}
                                            className="relative"
                                        >

                                            {renderMatch(match)}

                                            <div className="absolute top-1/2 -right-10 w-10 h-px bg-zinc-700"></div>

                                        </div>

                                    ))}

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

                <div className="flex flex-col gap-8 ">

                    <div className="bg-yellow-400 text-black px-5 py-2 rounded-md font-bold text-sm w-fit">
                        GRAN FINAL
                    </div>

                    {grandFinal?.matches.map((match, index) => (

                        <div
                            key={index}
                            className="border-2 border-yellow-400 rounded-md overflow-hidden shadow-2xl"
                        >

                            {renderMatch(match)}

                        </div>

                    ))}

                </div>

            </div>

        </div>
    );
}