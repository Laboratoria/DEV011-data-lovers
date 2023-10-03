//Hacer pruebas unitarias de las funciones implementadas en el archivo dataFunctions.js
import { filterData, computeStats } from "../src/dataFunctions.js";
import { data as fakeData } from "./data.js";

describe("filterData", () => {
  it("Filtar los directores por nombre", () => {
    const dataFiltered = filterData(fakeData, "director", "Hayao Miyazaki");
    expect(dataFiltered).toEqual(fakeData, "director", "Hayao Miyazaki");
  });
});

//prueba Estadística
describe("computeStats", () => {
  it("Calcular el % de películas de cada director", () => {
    const dataStats = computeStats(director, fakeData);
    expect(dataStats).toEqual(director, fakeData);
  });
});
