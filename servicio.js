//Pasos para consumir un API CON JS PURO    

//1.Declaro uri

const URI = "https://api.spotify.com/v1/artists/70OAdYggwWl6EApsgp1jNX/top-tracks?market=US"

//2.Declaro los parametros de la peticion (que voy a hacer)
const TOKEN="Bearer BQBtOYNkblOlUUzLypZBgGeZn6sP3ONLI_NQ2a33vHD62HjHTpKwD-exeqV1lgkChRXekKTTpD7DH1zVVPy316GkFnPwkDOS8QU-MXhGRwzwXAzZjN7P2ySHiGf4Z_wyQ-bBPlEo2V6gX7-QDUbSLp29VYiEAKmVab4"
const PETICION={
    method:"GET",
    headers:{Authorization:TOKEN}
}
3//.Declaro el fecth (Voy al servidor ome)

fetch(URI,PETICION)
.then(function(respuesta) {
    return(respuesta.json())
})
.then(function(respuesta){
    console.log(respuesta)//repuesta es un objeto
    console.log(respuesta.tracks)
    forEach(element => {
        
    });

    console.log(respuesta.tracks[0])
    console.log(respuesta.tracks[0].preview_url)
})
.catch(function (respuesta) {
    console.log(respuesta)
})
