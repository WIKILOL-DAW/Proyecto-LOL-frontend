const URL_BACKEND = '';

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

export function post(ruta, datos, callback, callbackError) {

    const cabecera = new Headers();
    cabecera.append("Content-Type", "application/json");

    const enviarDatos = {
        method: "POST",
        header: cabecera,
        body: JSON.stringify(datos)
    }


    fetch(URL_BACKEND + ruta, enviarDatos)
        .then(response => {
            if (!response.ok) {
                console.log("FALLO PETICION POST: ", response.status);
                throw new Error(response.status);
            } else {
                return response.json();
            }
        })
        .then(data => callback(data))
        .catch(error => callbackError(error))
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
        header: cabecera,
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