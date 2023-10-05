// estas funciones son de ejemplo

export const example = () => {
  
};

export const anotherExample = () => {
 
};


/*filtrado por tipo */
export const filterData = (data, filterBy, value) => {
  console.log(data.pokemon)
  const filtrado = data.pokemon.filter((element) => {
    console.log(element[filterBy], value)
    return element[filterBy].includes(value)

  })

  console.log(filtrado)
  return filtrado

};

/*filtrado alfabetico*/
export const sortDataByName = (data, sortOrder) => {
  const sortedData = [...data];
  console.log({ data: sortedData })
  return sortedData.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (sortOrder === 'asc') {
      return (
        (nameA < nameB ? -1 : 0) ||
        (nameA > nameB ? 1 : 0)
      );
      //return 0;
    } else if (sortOrder === 'desc') {
      if (nameA > nameB) return -1;
      // if (nameA < nameB) return 1;
      // return 0;
    }
  });

  // return sortedData;
};
//filtrado por calculos
export function calcularPromedio(data, orden) {
  const dataConPromedios = data.map((data) => {
    const ataquepoke = parseInt(data.stats["base-attack"]);
    const defensapoke = parseInt(data.stats["base-defense"]);
    const estaminapoke = parseInt(data.stats["base-stamina"]);

    data["basePromedio"] = (ataquepoke + defensapoke + estaminapoke) / 3;
    return data;
  });

  // Ordena 
  if (orden === "Menor") {
    return dataConPromedios.sort((a, b) => a.basePromedio - b.basePromedio);
  } else if (orden === "Mayor") {
    return dataConPromedios.sort((a, b) => b.basePromedio - a.basePromedio);
  }

  //return dataConPromedios;
}

// TODO: revisar si funciona con parseInt
//filtrado por calculos
export const filtrarPorAtaqueBase = (data, ataqueMinimo) => {
  return data.reduce((acumulador, pokemon) => {
    // Convertimos el base-attack a número para poder compararlo
    const ataqueBase = Number(pokemon.stats['base-attack']); // creo que se puede hacer con parseInt
    console.log(ataqueBase)
    // Verificamos si el ataque base es mayor que el valor mínimo proporcionado
    if (ataqueBase > ataqueMinimo) {
      // Si es así, lo añadimos al acumulador
      acumulador.push(pokemon);
    }
    // Retornamos el acumulador para la siguiente iteración
    return acumulador;
  }, []); // Inicializamos el acumulador como un array vacío
};