//Código que tenga que ver con mostrar los datos en la pantalla. Interacción del DOM. Llamas a las funciones de dataFunctions.js

import { example } from "./dataFunctions.js";
import { renderItems } from "./view.js";
import data from "./data/ghibli/ghibli.js";

console.log (renderItems(data))

console.log(example, renderItems, data);
