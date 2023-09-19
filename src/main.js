import { renderItems } from "./view.js";
//import { allPokemonChargeScreen } from "./dataFunctions.js";


//toda la data
import data from "./data/pokemon/pokemon.js";
//capturar elemento dom
const ulElement= document.querySelector("#tarjetas");

const prueba= renderItems(data.pokemon);
console.log(prueba);
//console.log(ulElement);
//
ulElement.replaceWith(prueba);

//function LoadAllPokemons(){}



//renderItems(data);





//Manipulacion DOM



//const selectControll = document.getElementById("select-sort");
//const radioButtons = document.querySelectorAll('input[name="sort-order"]');
//const textarea = document.getElementById("textarea");
const buttonSearch = document.getElementById("buttonSearch");


//Manejo de Eventos
buttonSearch.addEventListener("click", () => {

  
});


