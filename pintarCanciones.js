export function pintarCaciones(canciones){
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
    }