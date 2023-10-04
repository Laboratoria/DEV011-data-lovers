//Código que tenga que ver con mostrar los datos en la pantalla. Interacción del DOM. Llamas a las funciones de dataFunctions.js

import { sortData, filterData, computeStats } from "./dataFunctions.js";
import { renderItems } from "./view.js";
import data from "./data/ghibli/ghibli.js";

//Mostar películas desordenadas
const root = document.getElementById("root");
const peliculas = data.films;
root.appendChild(renderItems(peliculas));

//Función para ordenar y mostar las películas
const btnOrden = document.querySelector("select[name='release_date']");
btnOrden.addEventListener("change", function () {
  const selectedValueS = btnOrden.value;

  //Obtener el valor seleccionado en el filtro de director
  const selectedValueF = document.querySelector(
    "select[name='director']"
  ).value;

  // Filtrar las películas con el director seleccionado (si hay)
  const filteredByDirector =
    selectedValueF === "inicio"
      ? peliculas
      : filterData(peliculas, "director", selectedValueF);

  const sortedFILMS = sortData(
    filteredByDirector,
    "release_date",
    selectedValueS
  );
  root.innerHTML = "";
  root.appendChild(renderItems(sortedFILMS));
});

//Función para filtar y mostrar las películas
const btnFiltrar = document.querySelector("select[name='director']");
btnFiltrar.addEventListener("change", function () {
  const selectedValueF = btnFiltrar.value;

  // Obtener el valor seleccionado en la función de orden
  const selectedValueS = document.querySelector(
    "select[name='release_date']"
  ).value;

  // Filtrar las películas según el director seleccionado
  const filteredFILMS = filterData(peliculas, "director", selectedValueF);

  // Ordenar las películas si hay un criterio de orden seleccionado
  const sortedFILMS =
    selectedValueS === "inicio"
      ? filteredFILMS
      : sortData(filteredFILMS, "release_date", selectedValueS);

  root.innerHTML = "";
  const tarjetas = root.appendChild(renderItems(sortedFILMS));

  //Función estadística
  const directorBuscado = selectedValueF;
  const frecuenciaDirector = computeStats(
    selectedValueF,
    filteredFILMS,
    peliculas
  );
  console.log(frecuenciaDirector);
  const elementoP = document.createElement("h5");
  elementoP.textContent = ` Los films dirigidos por ⭐ ${directorBuscado} ⭐ representan el ${frecuenciaDirector} % del trabajo total del estudio `;
  root.insertBefore(elementoP, tarjetas);

  console.log(
    `Los films dirigidos por "${directorBuscado}" representan el ${frecuenciaDirector} % del trabajo total del estudio`
  );
});

//Función para limpiar valores
const btnClear = document.querySelector("button");
btnClear.addEventListener("click", function () {
  const filmsOrigin = data.films;
  document.querySelector("select[name='release_date']").value = "inicio";
  document.querySelector("select[name='director']").value = "inicio";
  root.innerHTML = "";
  root.appendChild(renderItems(filmsOrigin));
});

console.log(renderItems, data);
