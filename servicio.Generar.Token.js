//1.Declaro uri

const URI = "https://accounts.spotify.com/api/token"

//2.ALMACENO LOS DATOS QUE VOY A ENVIAR
let dato1='client_id=5debabca8e6e4d0fb67f0b4774fbed65'

let dato2='client_secret=d829ed4149b64aeebb629269a774994b'

let dato3='grant_type=client_credentials'

//3.configuro la peticion

const PETICION={
    method:"POST",
    headers:{
        "Content-type":"application/x-www-form-urlencoded"
    },
    body:dato1+'&'+dato2+'&'+dato3
}

//Consumir el servicio 

export async function generarToken(){

    let respuesta= await fetch(URI,PETICION)
    return (respuesta.json())

}