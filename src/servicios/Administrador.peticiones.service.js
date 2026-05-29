const URL_BACKEND = 'https://ulldm3r0hc.execute-api.us-east-1.amazonaws.com';
//const URL_BACKEND = 'http://localhost:8080'
//const URL_BACKEND = 'http://lol-alb-2138982396.us-east-1.elb.amazonaws.com'


export function get(ruta, callback, callbackError) {

    fetch(URL_BACKEND + ruta)
        .then(response => {
            if (!response.ok) {
                console.log("FALLO PETICION GET: ", response.status);
                throw new Error(response.status)
            } else {
                return response.json();
            }
        })
        .then(data => callback(data))
        .catch(error => callbackError(error));
}

export async function post(ruta, datos) {
    const cabecera = new Headers();
    cabecera.append("Content-Type", "application/json");

    const enviarDatos = {
        method: "POST",
        headers: cabecera,
        body: JSON.stringify(datos)
    };

    try {
        const response = await fetch(URL_BACKEND + ruta, enviarDatos);

        if (!response.ok) {
            console.log("FALLO PETICION POST:", response.status);
            throw new Error(response.status);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Error en POST:", error);
        throw error; 
    }
}

export function peticionDelete(ruta, callback, callbackError) {

    fetch(URL_BACKEND + ruta, { method: "DELETE" })
        .then(response => {
            if (!response.ok) {
                console.log("FALLO PETICION DELETE: ", response.status);
                throw new Error(response.status);
            }
        })
        .then(data => callback(data))
        .catch(error => callbackError(error))
}

export function patch(ruta, datos, callback, callbackError) {

    const cabecera = new Headers();
    cabecera.append("Content-Type", "application/json");

    const enviarDatos = {
        method: "PATCH",
        headers: cabecera,
        body: JSON.stringify(datos)
    }

    fetch(URL_BACKEND + ruta, enviarDatos)
        .then(response => {
            if (!response.ok) {
                console.log("FALLO PETICION PATCH: ", response.status);
                throw new Error(response.status);
            } else {
                return response.json();
            }
        })
        .then(data => callback(data))
        .catch(error => callbackError(error))
}
