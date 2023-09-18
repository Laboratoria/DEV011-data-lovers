// estas funciones son de ejemplo

//Creo que seria buena idea encapsular toda la llamada de fetch

/*
//obtenemos la ruta del archivo JSON
const rutaArchivoJSON = "../data/pokemon/pokemon.json";

//utilizar fetch para cargar archivo JSON
fetch(rutaArchivoJSON)
  .then((response) => {
    if (!response.ok) {
      throw new Error("No se pudo cargar el archivo JSON.");
    }
    return response.json();
  })
  .then((data) => {
    // Haz algo con los datos JSON, por ejemplo, console.log(data)
    console.log(data);
    console.log(data.pokemon[0].size.height);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
*/
export const example = () => {
  return "example";
};

export const anotherExample = () => {
  return [];
};

export const filterData = (data, filterBy, value) => {
  //trabajar funcionalidad de esto
  //retornar data filtrada
  
  data;
  filterBy;
  value;
  alert("filterData nomas");//prueba para ver si entra

  

};

export const allPokemonChargeScreen(data){
  return data;
}