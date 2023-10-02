//Código que tenga que ver con mostrar los datos en la pantalla. Interacción del DOM. Llamas a las funciones de dataFunctions.js

import { sortData, filterData } from "./dataFunctions.js";
import { renderItems } from "./view.js";
import data from "./data/ghibli/ghibli.js";

//Mostar películas desordenadas
const root = document.getElementById("root")
const peliculas = data.films;
root.appendChild(renderItems(peliculas));


//Función para ordenar y mostar las películas

const btnOrden = document.querySelector("select[name='release_date']");
btnOrden.addEventListener("change", function () {
  const selectedValueS = btnOrden.value;

  const sortedFILMS = sortData(peliculas, "release_date", selectedValueS);
  root.innerHTML="";
  root.appendChild(renderItems(sortedFILMS));
});

//Función para filtar y mostrar las películas
const btnFiltrar = document.querySelector("select[name='director']");
btnFiltrar.addEventListener("change", function () {
  const selectedValueF = btnFiltrar.value;

  const filteredFILMS = filterData(peliculas, "director", selectedValueF);
  root.innerHTML="";
  root.appendChild(renderItems(filteredFILMS));
});

//Función para limpiar valores
const btnClear = document.querySelector("button");
btnClear.addEventListener("click", function () {
  const filmsOrigin = data.films;
  document.querySelector("select[name='release_date']").value = "inicio";
  document.querySelector("select[name='director']").value = "inicio";
  root.innerHTML="";
  root.appendChild(renderItems(filmsOrigin));
});

console.log(renderItems, data);
