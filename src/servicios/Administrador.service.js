//const API = "http://localhost:8080";
const API = 'http://100.24.142.55:8080';
//const API = "http://lol-alb-2138982396.us-east-1.elb.amazonaws.com";
const registro = async (administrador) => {
    try {
        const respuesta = await fetch(API + "/api/admin/registro", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(administrador)
        })
        const data = respuesta.json()
        return data
    } catch (e) {
        console.log(e);
        const error = {
            message: "Error de Servidor",
            token: null
        }
        return error;
    }
}

const login = async (usuario) => {

    const respuesta = await fetch(API + "/api/admin/login", {

        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(usuario)
    })
    const data = respuesta.json();
    return data;
}

export {
    registro,
    login
}
