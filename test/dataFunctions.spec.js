import { computeStats, ordenBy, filterData } from "../src/dataFunctions.js";
import { data as fakeData } from "./data.js";

test("computeStats cuenta correctamente la cantidad de Pokémon o sea 10", () => {
  const resultado = computeStats(fakeData.pokemon);
  expect(resultado).toBe(10);
});

test("Ordenar alfabéticamente A-Z", () => {
  ordenBy(fakeData.pokemon, "A-Z");
  expect(fakeData.pokemon[0].name).toEqual("blastoise");
  expect(fakeData.pokemon[1].name).toEqual("bulbasaur");
  expect(fakeData.pokemon[2].name).toEqual("caterpie");
  expect(fakeData.pokemon[3].name).toEqual("charizard");
  expect(fakeData.pokemon[4].name).toEqual("charmander");
  expect(fakeData.pokemon[5].name).toEqual("charmeleon");
  expect(fakeData.pokemon[6].name).toEqual("ivysaur");
  expect(fakeData.pokemon[7].name).toEqual("squirtle");
  expect(fakeData.pokemon[8].name).toEqual("venusaur");
  expect(fakeData.pokemon[9].name).toEqual("wartortle");
});

test("Ordenar alfabéticamente Z-A", () => {
  ordenBy(fakeData.pokemon, "Z-A");
  expect(fakeData.pokemon[9].name).toEqual("blastoise");
  expect(fakeData.pokemon[8].name).toEqual("bulbasaur");
  expect(fakeData.pokemon[7].name).toEqual("caterpie");
  expect(fakeData.pokemon[6].name).toEqual("charizard");
  expect(fakeData.pokemon[5].name).toEqual("charmander");
  expect(fakeData.pokemon[4].name).toEqual("charmeleon");
  expect(fakeData.pokemon[3].name).toEqual("ivysaur");
  expect(fakeData.pokemon[2].name).toEqual("squirtle");
  expect(fakeData.pokemon[1].name).toEqual("venusaur");
  expect(fakeData.pokemon[0].name).toEqual("wartortle");
});

test("Ordenar numericamente Ascendene", () => {
  ordenBy(fakeData.pokemon, "asc");
  expect(fakeData.pokemon[0].num).toEqual("001");
  expect(fakeData.pokemon[1].num).toEqual("002");
  expect(fakeData.pokemon[2].num).toEqual("003");
  expect(fakeData.pokemon[3].num).toEqual("004");
  expect(fakeData.pokemon[4].num).toEqual("005");
  expect(fakeData.pokemon[5].num).toEqual("006");
  expect(fakeData.pokemon[6].num).toEqual("007");
  expect(fakeData.pokemon[7].num).toEqual("008");
  expect(fakeData.pokemon[8].num).toEqual("009");
  expect(fakeData.pokemon[9].num).toEqual("010");
});

test("Ordenar numericamente Descendente", () => {
  ordenBy(fakeData.pokemon, "desc");
  expect(fakeData.pokemon[0].num).toEqual("010");
  expect(fakeData.pokemon[1].num).toEqual("009");
  expect(fakeData.pokemon[2].num).toEqual("008");
  expect(fakeData.pokemon[3].num).toEqual("007");
  expect(fakeData.pokemon[4].num).toEqual("006");
  expect(fakeData.pokemon[5].num).toEqual("005");
  expect(fakeData.pokemon[6].num).toEqual("004");
  expect(fakeData.pokemon[7].num).toEqual("003");
  expect(fakeData.pokemon[8].num).toEqual("002");
  expect(fakeData.pokemon[9].num).toEqual("001");
});

test("Verifica los tipo fuego que sean los 3 que corresponden", () => {
  const pokemonesFiltrados = filterData(fakeData.pokemon, "fire"); 
  pokemonesFiltrados.forEach(pokemon => {
    expect(pokemon.type).toContain("fire");
  });
});

test("Comprueba que los tipo fuego son 3", () => {
  const resultado = filterData(fakeData.pokemon, 'fire');
  expect(resultado.length).toBe(3);
});

test("Comprueba que devuelve todos los pokemons", () => {
  const resultado = filterData(fakeData.pokemon, 'all');
  expect(resultado.length).toBe(10);
});