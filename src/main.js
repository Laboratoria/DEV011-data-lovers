//Código que tenga que ver con mostrar los datos en la pantalla. Interacción del DOM. Llamas a las funciones de dataFunctions.js

import { example } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/ghibli/ghibli.js';


const filmsPosters = data.films.map((film) => film.poster);

// Obtener el contenedor donde se mostrarán las tarjetas
const container = document.getElementById('root');

// Iterar sobre los datos y generar las tarjetas
data.films.forEach((item) => {
  // Crear un elemento li para cada tarjeta
  const card = document.createElement('li');
  card.classList.add('card');

  // Crear un elemento imagen y establecer su src y alt
  const image = document.createElement('img');
  image.src = item.poster;
  image.alt = item.title;

// Crear un elemento título y establecer su contenido
const title = document.createElement('h2');
title.textContent = item.title;

// Crear un elemento año de publicación y establecer su contenido
const year = document.createElement('h3');
year.textContent = item.release_date;


// Añadir la imagen y el título al elemento tarjeta
card.appendChild(image);
card.appendChild(title);
card.appendChild(year)

// Añadir la tarjeta al contenedor
container.appendChild(card);
});



console.log(example, renderItems, data);
