export function InsertarEquipo() {
    return (
        <div className="flex items-center justify-center min-h-screen pt-1">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

                <input type="text" className="input" placeholder="Nombre del equipo" />
                <select defaultValue="Seleccionar liga" className="select select-neutral">
                    <option disabled={true}>Liga</option>
                    <option>LEC</option>
                    <option>LCS</option>
                    <option>LCK</option>
                    <option>LPL</option>
                </select>

                <button className="btn btn-neutral mt-4">Añadir equipo</button>
            </fieldset>
        </div>
    )
}