export const filterData = (data, type) => {
  if (type === "all" || type ==="default") {
    return data;
  }
  return data.filter((pokemon) => pokemon.type.includes(type));
};

export const ordenBy = (data, ordenBy) => {
  if (ordenBy === "asc" || ordenBy==="default") {
    data.sort(function (a, b) {
      return parseInt(a.num) - parseInt(b.num); // Orden ascendente
    });
  }
  if (ordenBy === "desc") {
    data.sort(function (a, b) {
      return parseInt(b.num) - parseInt(a.num); // Orden descendente
    });
  }
  if (ordenBy === "A-Z") {
    data.sort(function (a, b) {
      return a.name.localeCompare(b.name); // Orden Alfabetico
    });
  }
  if (ordenBy === "Z-A") {
    data.sort(function (a, b) {
      return b.name.localeCompare(a.name); // Orden Alfabetico inverso
    });
  }
};

export const computeStats = (pokemones) => {
  return pokemones.reduce((cont) => {
    return cont + 1;
  }, 0);
};
