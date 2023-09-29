//Hacer pruebas unitarias de las funciones implementadas en el archivo dataFunctions.js
import { filterData } from "../src/dataFunctions.js";
import { dataTrue, data as fakeData } from "./data.js";

describe("filterData", () => {
  it("Filtar los directores por nombre", () => {
    const dataFiltered = filterData(fakeData["personas"], "director", "Hayao");
    expect(dataFiltered).toEqual(dataTrue["personas"]);
  });
});
