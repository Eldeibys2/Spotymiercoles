import {obtenerCanciones} from './servicioGenerarCanciones.js'
import {pintarCaciones} from './pintarCanciones.js'

//llamar a la funcion generarToken

let canciones= await obtenerCanciones()

//llamar a la funcion pintarCaciones

pintarCaciones(canciones.tracks)




