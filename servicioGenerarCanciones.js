import {generarToken} from './servicio.Generar.Token.js'

//llamar a la funcion generarToken

let tokenRespuesta = await generarToken()
let token=`${tokenRespuesta.token_type} ${tokenRespuesta.access_token}`
//URI DEL SERVICIO
const URI = "https://api.spotify.com/v1/artists/70OAdYggwWl6EApsgp1jNX/top-tracks?market=US"

//CONFIGURO LA PETICION

const PETICION={
    method:"GET",
    headers:{Authorization:token}
}

//CONSUMO EL SERVICIO

 export async function obtenerCanciones(){
    let respuesta= await fetch(URI,PETICION)
    return respuesta.json()

}