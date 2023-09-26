//Código que tenga que ver con mostrar los datos en la pantalla. Interacción del DOM. Llamas a las funciones de dataFunctions.js

import { example } from "./dataFunctions.js";
import { renderItems } from "./view.js";
import data from "./data/ghibli/ghibli.js";


//Mostar películas desordenadas
let peliculas = data.films
renderItems(peliculas)

//Función para ordenar y mostar las películas
      
const btnOrden = document.querySelector("select");
btnOrden.addEventListener("change", function() {
    const selectedValue = btnOrden.value;
    console.log (selectedValue);

  if (selectedValue === "asc") {
    peliculas = data.films.sort((a,b)=>new Date(a.release_date) - new Date(b.release_date));
   }
    else if (selectedValue === "desc") {
    peliculas = data.films.sort((a,b)=>new Date(b.release_date) - new Date(a.release_date));
    }

renderItems(peliculas);
});







console.log(example, renderItems, data);
