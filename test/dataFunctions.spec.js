//Hacer pruebas unitarias de las funciones implementadas en el archivo dataFunctions.js
import { filterData } from "../src/dataFunctions.js";
import { dataTrue, data as fakeData } from "./data.js";

describe("filterData", () => {
  it("Filtar los directores por edad", () => {
    const dataFiltered = filterData(fakeData["personas"], "edad", "23");
    expect(dataFiltered).toBe(dataTrue["personas"]);
  });
});
