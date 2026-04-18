import { useNavigate } from "react-router-dom";
import lec from '../../assets/img/LEC.png'
import lcs from '../../assets/img/LCS.png'
import lpl from '../../assets/img/LPL.png'
import lck from '../../assets/img/LCK.png'

export default function Ligas() {
    const navigate = useNavigate();

    const ligaBuscada = (liga) => {
    navigate(`/equipos/${liga}`); 

    };

    return (
        <div className="grid gap-8 md:grid-cols-2 p-6">


            <div className="card bg-base-200 shadow-xl rounded-xl overflow-hidden hover:scale-[1.015] transition-all duration-300">
                <figure className="h-52 w-full overflow-hidden">
                    <img src={lck} alt="LCK" className="w-full h-full object-cover" />
                </figure>
                <div className="card-body p-4">
                    <h2 className="card-title text-white text-2xl">LCK</h2>
                    <p className="opacity-80">Macro perfecto, disciplina y dinastías.</p>
                    <div className="card-actions justify-end mt-3">
                        <button onClick={() => ligaBuscada("LCK")} className="btn btn-neutral btn-sm">Ver más</button>
                    </div>
                </div>
            </div>

            <div className="card bg-base-200 shadow-xl rounded-xl overflow-hidden hover:scale-[1.015] transition-all duration-300">
                <figure className="h-52 w-full overflow-hidden">
                    <img src={lpl} alt="LPL" className="w-full h-full object-cover" />
                </figure>
                <div className="card-body p-4">
                    <h2 className="card-title text-red-500 text-2xl">LPL</h2>
                    <p className="opacity-80">Caos, peleas constantes y ritmo frenético.</p>
                    <div className="card-actions justify-end mt-3">
                        <button onClick={() => ligaBuscada("LPL")} className="btn btn-error btn-sm">Ver más</button>
                    </div>
                </div>
            </div>


            <div className="card bg-base-200 shadow-xl rounded-xl overflow-hidden hover:scale-[1.015] transition-all duration-300">
                <figure className="h-52 w-full overflow-hidden">
                    <img src={lec} alt="LEC" className="w-full h-full object-cover" />
                </figure>
                <div className="card-body p-4">
                    <h2 className="card-title text-blue-500 text-2xl">LEC</h2>
                    <p className="opacity-80">Creatividad y drafts raros.</p>
                    <div className="card-actions justify-end mt-3">
                        <button onClick={() => ligaBuscada("LEC")} className="btn btn-info btn-sm">Ver más</button>
                    </div>
                </div>
            </div>


            <div className="card bg-base-200 shadow-xl rounded-xl overflow-hidden hover:scale-[1.015] transition-all duration-300">
                <figure className="h-52 w-full overflow-hidden">
                    <img src={lcs} alt="LCS" className="w-full h-full object-cover" />
                </figure>
                <div className="card-body p-4">
                    <h2 className="card-title text-gray-400 text-2xl">LCS</h2>
                    <p className="opacity-80">Memes y alguna sorpresa internacional.</p>
                    <div className="card-actions justify-end mt-3">
                        <button onClick={() => ligaBuscada("LCS")} className="btn btn-neutral btn-sm">Ver más</button>
                    </div>
                </div>
            </div>

        </div>
    );
}
