//Pasos para consumir un API CON JS PURO    

//1.Declaro uri

const URI = "https://api.spotify.com/v1/artists/70OAdYggwWl6EApsgp1jNX/top-tracks?market=US"

//2.Declaro los parametros de la peticion (que voy a hacer)
const TOKEN="Bearer BQDaJ80knpz2Zu5Gh1AXUPtQS8j875vYHAU0Cs1nJO1zKfTNsarrSOlkY1DlHPSVQMwbVtvgh_-AaqraHmx36hkFyWjCw0YdjxxZEDgy4VF2rVqAp-L2cX6dkA0eflPNI3LZzptsrQ0JQacTp3BeOlkyRjyu5YcGl70"
const PETICION={
    method:"GET",
    headers:{Authorization:TOKEN}
}
//rutina para consumir api por metodo post
//1.Para donde voy
const URIPOST='https://accounts.spotify.com/api/token'

//2.ALMACENO LOS DATOS QUE VOY A ENVIAR
let dato1='client_id=5debabca8e6e4d0fb67f0b4774fbed65'

let dato2='client_secret=d829ed4149b64aeebb629269a774994b'

let dato3='grant_type=client_credentials'

//3.configuro la peticion

const PETICIONPOST={
    method:"POST",
    headers:{
        "Content-type":"application/x-www-form-urlencoded"
    },
    body:dato1+'&'+dato2+'&'+dato3
}



//4.Voy al servidor a consumir el servicio

fetch(URIPOST,PETICIONPOST)

.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){
    console.log(respuesta)
    let token=respuesta.token_type+' '+respuesta.access_token
    console.log(token)
})
.catch(function(respuesta){
    console.log(respuesta)
})




3//.Declaro el fecth (Voy al servidor ome)

/*fetch(URI,PETICION)
.then(function(respuesta) {
    return(respuesta.json())
})
.then(function(respuesta){
    console.log(respuesta)//repuesta es un objeto
    console.log(respuesta.tracks)//arreglo de las 10 canciones
   
    pintarCaciones(respuesta.tracks)
   

    
})
.catch(function (respuesta) {
    console.log(respuesta)
})

//Funcion para recorrer un arreglo
function pintarCaciones(canciones){
let fila =document.getElementById("fila")
canciones.forEach(function(cancion){
    //console.log(cancion)
    console.log(cancion.name)
    console.log(cancion.preview_url)
    console.log(cancion.album.images[0].url)

    //rutina para llenado 
    let columna=document.createElement("div")
    columna.classList.add("col")

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100","shadow")

    let audio=document.createElement("audio")
    audio.classList.add("w-100")
    audio.setAttribute("controls","controls")
    audio.src=cancion.preview_url

    let imagen = document.createElement("img")
    imagen.classList.add("w-100","img-fluid")
    imagen.src= cancion.album.images[0].url

    let nombre =document.createElement("h4")
    nombre.classList.add("text-center")
    nombre.textContent=cancion.name


    //padres e hijos
    tarjeta.appendChild(imagen)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(audio)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
});
}*/