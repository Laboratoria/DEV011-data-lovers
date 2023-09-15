//Código que tenga que ver con mostrar los datos en la pantalla. Interacción del DOM. Llamas a las funciones de dataFunctions.js

import { example } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/ghibli/ghibli.js';


const filmsPosters = data.films.map((film) => film.poster);
console.log(filmsPosters)


// Función para mostrar la imagen en la pantalla
function mostrarImagen(url) {
    const img = new Image();
    img.src = url;
    document.body.appendChild(img);
  
  const listItem = document.createElement('li');
  listItem.appendChild(img);
  document.getElementById('lista-imagenes').appendChild(listItem);
}
  
  // Iterar sobre cada URL y mostrar la imagen en la pantalla
  filmsPosters.forEach(url => {
    mostrarImagen(url);
  });

console.log(example, renderItems, data);
