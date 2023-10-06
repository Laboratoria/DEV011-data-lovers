//Hacer pruebas unitarias de las funciones implementadas en el archivo dataFunctions.js
import { computeStats, filterData, sortData } from "../src/dataFunctions.js";
import { data as fakeData } from "./data.js";
describe("filterData", () => {
  it("Filtar los directores por nombre", () => {
    const dataFiltered = filterData(fakeData, "director", "Hayao Miyazaki");
    expect(dataFiltered).toEqual(fakeData, "director", "Hayao Miyazaki");
  });
});

describe("computeStats", () => {
  it("Calcular el % de películas de cada director", () => {
    const dataStats = computeStats("Hayao Miyazaki", fakeData, fakeData);
    expect(dataStats).toEqual(100);
  });

  it("No Calcula si no encuentra el director", () => {
    const dataStats = computeStats("Isao Takahata", fakeData, fakeData);
    expect(dataStats).toEqual(0);
  });

});


describe("sortData", () => {
  it("Ordenar los años de publicación de manera ascendente", () => {
    const dataSorted = sortData(fakeData, "release_date", "asc");
    // Agrega tus expectativas aquí, por ejemplo:
    expect(dataSorted[0].release_date).toBe("1986");
    expect(dataSorted[1].release_date).toBe("1988");
    expect(dataSorted[2].release_date).toBe("1989");
  });
  it("Ordenar los años de publicación de manera descendente", () => {
    const dataSorted = sortData(fakeData, "release_date", "desc");
    // Agrega tus expectativas aquí, por ejemplo:
    expect(dataSorted[0].release_date).toBe("1989");
    expect(dataSorted[1].release_date).toBe("1988");
    expect(dataSorted[2].release_date).toBe("1986");
  });
  
});
