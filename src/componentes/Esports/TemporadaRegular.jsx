export default function TemporadaRegular({ regular }) {

  return (
    <div className="bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden">

      <div className="grid grid-cols-3 bg-zinc-900 text-zinc-300 font-bold p-5">
        <div>Clasificación</div>

        <div className="text-center">
          Series
        </div>

        <div className="text-center">
          % Winrate
        </div>
      </div>

      {regular.map((team, index) => (

        <div key={index} className="grid grid-cols-3 items-center p-5 border-t border-zinc-800 hover:bg-zinc-900 transition">
          <div className="flex items-center gap-4">

            <span className="text-lg font-bold w-5">
              {team.position}
            </span>

            <img
              src={team.logo}
              alt={team.team}
              className="w-10 h-10 object-contain"
            />

            <span className="font-semibold text-lg">
              {team.team}
            </span>
          </div>

          <div className="text-center text-lg font-semibold">
            {team.wins} V - {team.losses} D
          </div>

          <div className="text-center text-lg font-bold text-yellow-400">
            {team.percentage}
          </div>

        </div>

      ))}
    </div>
  );
}