//Código que tenga que ver con mostrar los datos en la pantalla. Interacción del DOM. Llamas a las funciones de dataFunctions.js

import { ordenar } from "./dataFunctions.js";
import { renderItems } from "./view.js";
import data from "./data/ghibli/ghibli.js";

//Creación original de tarjetas
renderItems(data)

//Función para ordenar
const dataReleaseDate = data.films.map((film) => film.release_date);

console.log(dataReleaseDate)
ordenar(dataReleaseDate)



console.log(example, renderItems, data);
