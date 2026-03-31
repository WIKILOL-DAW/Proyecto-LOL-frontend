import { NavBar } from "../NavBar/NavBar";
import yunnara from '../../assets/img_campeones/yunnara.webp';


const campeones = [
    { id: 1, imagen: yunnara }
];

export function Campeones() {

    return (
        <>
            <h1>Conocelos</h1>
            <div className="flex gap-4">
                {campeones.map((campeon) => (
                    <div key={campeon.id} className="avatar">
                        <div className="w-24 rounded">
                            <img
                                src={campeon.imagen}
                            />
                        </div>
                    </div>
                ))}
            </div>

        </>
    );
}