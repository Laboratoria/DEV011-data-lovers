// Debe contener toda la funcionalidad que corresponda a obtener, procesar y manipular datos (tus funciones)

//sortData = (data, sortBy, sortOrder)
export const sortData = (data, sortBy, sortOrder) => {
  let yearFILMS = [];
  const dataClone = [...data];
  if (sortOrder === "asc") {
    yearFILMS = dataClone.sort(
      (a, b) => new Date(a[sortBy]) - new Date(b[sortBy])
    );
  } else if (sortOrder === "desc") {
    yearFILMS = dataClone.sort(
      (a, b) => new Date(b[sortBy]) - new Date(a[sortBy])
    );
  }

  return yearFILMS;
};

//filterData(data, filterBy, value)

export const filterData = (data, filterBy, value) => {
  let directorFILMS = [];

  value === "Hayao Miyazaki";
  directorFILMS = data.filter((director) => director[filterBy] === value);

  return directorFILMS;
};

//computeStats(data)

export const computeStats = (director, data, arrayTotal) => {
  const frecuencia = data.reduce((contador, pelicula) => {
    if (pelicula.director === director) {
      return contador + 1;
    } else {
      return contador;
    }
  }, 0);

  const numPeliculas = arrayTotal.length
  console.log (numPeliculas)
  const percentage = (frecuencia * 100) / numPeliculas;
  return percentage;
};
