//const API = "http://localhost:8080"
const API = 'http://192.168.11.239:8080';

const registro = async (usuario) => {
    console.log(usuario);
    
    const respuesta = await fetch(API + "/api/admin/registro", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario)
    })
    const data = respuesta.json()
    return data
}

export {
    registro
}