//Código que tenga que ver con mostrar los datos en la pantalla. Interacción del DOM. Llamas a las funciones de dataFunctions.js

import { sortData, filterData } from "./dataFunctions.js";
import { renderItems } from "./view.js";
import data from "./data/ghibli/ghibli.js";

//Mostar películas desordenadas
const peliculas = data.films;
renderItems(peliculas);

//Función para ordenar y mostar las películas

const btnOrden = document.querySelector("select[name='release_date']");
btnOrden.addEventListener("change", function () {
  const selectedValueS = btnOrden.value;

  const sortedFILMS = sortData(peliculas, "release_date", selectedValueS);

  renderItems(sortedFILMS);
});

//Función para filtar y mostrar las películas
const btnFiltrar = document.querySelector("select[name='director']");
btnFiltrar.addEventListener("change", function () {
  const selectedValueF = btnFiltrar.value;

  const filteredFILMS = filterData(peliculas, "director", selectedValueF);

  renderItems(filteredFILMS);
});

//Función para limpiar valores
const btnClear = document.querySelector("button");
btnClear.addEventListener("click", function () {
  const filmsOrigin = data.films;
  document.querySelector("select[name='release_date']").value = "inicio";
  document.querySelector("select[name='director']").value = "inicio";

  renderItems(filmsOrigin);
});

console.log(renderItems, data);
