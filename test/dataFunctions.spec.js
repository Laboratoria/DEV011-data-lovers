//Hacer pruebas unitarias de las funciones implementadas en el archivo dataFunctions.js
import { computeStats, filterData } from "../src/dataFunctions.js";
import { data as fakeData } from "./data.js";

describe("filterData", () => {
  it("Filtar los directores por nombre", () => {
    const dataFiltered = filterData(fakeData, "director", "Hayao Miyazaki");
    expect(dataFiltered).toEqual(fakeData, "director", "Hayao Miyazaki");
  });
});

describe("computeStats", () => {
  it("Calcular el % de películas de cada direcor", () => {
    const dataStats = computeStats("Hayao Miyazaki", fakeData, fakeData);
    expect(dataStats).toEqual(100);
  });
});
