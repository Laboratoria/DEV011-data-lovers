import {  calcularPromedio, example, filterData, sortDataByName ,filtrarPorAtaqueBase, } from './dataFunctions.js';
import { renderItems } from './view.js';

// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
//import pokemon from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, renderItems, data);
// pagina principal
//const formNombre = document.getElementById('formNombre');
//const contenedorCards = document.querySelector('.contenedor-cards');
//const imagen = document.getElementById('imagen');
//const footer = document.querySelector('footer');
const contenedorTarjetas = document.getElementById("root1");
const prueba = renderItems(data.pokemon);
contenedorTarjetas.replaceWith(prueba);
const root = document.querySelector("#root");
const selectFilter = document.querySelector('#filtro');
const selectSort = document.querySelector('#ordenletra');
const selectData = document.querySelector('#calculoestadistico');
const selectAttack = document.querySelector('#filtro-ataque');

let pruebaarray =[]
//evento con filtrado
selectFilter.addEventListener('change',() =>{
  const resultFilter =filterData(data,'type',selectFilter.value)
  console.log(resultFilter);
  pruebaarray = resultFilter
  root.innerHTML = "";
  root.appendChild(renderItems(resultFilter))
  // resultFilterAttack = [];
  // contenedorTarjetas.innerHTML = "";
  // contenedorTarjetas.replaceWith(renderItems(resultFilter));
})

//evento por alfabetico

selectSort.addEventListener('change', () => {
  const sortOrder = selectSort.value;
  const validate = !pruebaarray.length > 0 ? data.pokemon : pruebaarray 
  console.log({validate})
  const resultOrden = sortDataByName(validate, sortOrder);
  root.innerHTML = "";
  root.appendChild(renderItems(resultOrden));
  // resultFilterAttack = [];
  // contenedorTarjetas.innerHTML = "";
  // contenedorTarjetas.replaceWith(resultOrden);
});

// Evento para cálculos estadísticos

selectData.addEventListener('change', () => {
  const selectedOption = selectData.value;
  if (selectedOption === "") {
    console.log("Por favor, selecciona una opción válida.");
    return;
  }
  const datosPokemon = data.pokemon;
  if (!datosPokemon || datosPokemon.length === 0) {
    console.log("No hay datos de Pokémon disponibles para realizar cálculos.");
    return;
  }
  const datosCalculados = calcularPromedio(datosPokemon, selectedOption);
  console.log("Datos Calculados:", datosCalculados);
  root.innerHTML = "";
  root.appendChild(renderItems(datosCalculados));
  //resultFilterAttack = [];
  // contenedorTarjetas.innerHTML = "";
  // contenedorTarjetas.replaceWith(datosCalculados);
  return;
});



// contenedorTarjetas.style.display = 'none'


//filtro por ataque


let resultFilterAttack = [];
selectAttack.addEventListener('change', () => {
  const attackValue = parseInt(selectAttack.value, 10);
  resultFilterAttack = filtrarPorAtaqueBase(data.pokemon, attackValue);
  root.innerHTML = "";
  root.appendChild(renderItems(resultFilterAttack));
  //resultFilterAttack = [];
  // contenedorTarjetas.innerHTML = "";
  // contenedorTarjetas.replaceWith(resultFilterAttack);
});



const botonLimpiar = document.querySelector('#Limpiar');
botonLimpiar.addEventListener('click', function(e) {
  e.preventDefault()
  selectFilter.value = ""
  selectSort.value = ""
  selectData.value = ""
  selectAttack.value = ""
  resultFilterAttack = [];
  root.innerHTML = "";
  root.replaceWith(prueba);
  //const prueba = renderItems(data.pokemon);

});



/*  ocultar el form imagen y footer*/
// formNombre.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const nombreUsuario = document.getElementById('nombre').value;
//   if (!nombreUsuario) {
//     alert('Please enter your name.');
//     return;
//   }
//   localStorage.setItem('nombreUsuario', nombreUsuario);
//   formNombre.style.display = 'none';
//   contenedorCards.style.display = 'block';
//   imagen.style.display = 'none'; 
//   footer.style.display = 'none'; 
//   contenedorTarjetas.style.display = 'none'
  
//  /* mostrarCards();*/
// });


/*formNombre.addEventListener('submit', handleFormSubmit);*/
    
     

/*  colocar el nombre y sale mensaje de alerta */
    
/*ocultar li , ul,imagen */
/*document.getElementById("inicio").addEventListener("click", function() {
   document.getElementById("root1").style.display = "block";*/
/* imagen.style.display = 'none';
});*/
