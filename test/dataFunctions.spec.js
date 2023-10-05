import { calcularPromedio, filterData, sortDataByName, filtrarPorAtaqueBase, } from '../src/dataFunctions.js';
import {  data as fakeData } from './data.js';
import { dataType} from "./data.js";
import{ resultadoEsperadoMenor, resultadoEsperadoMayor} from './data.js';
import{ resultadoEsperadoIntermedio} from './data.js';
import{ ascendente} from './data.js';
import{ descendente} from './data.js';



describe('filterData', () => {
  it('debería filtrar por tipo "grass" y devolver solo los Pokémon del tipo correspondiente', () => {
    const filterBy = 'type';
    const value = 'grass';

    const resultado = filterData(dataType, filterBy, value); // Usa dataType en lugar de fakeData
    const todosSonDeTipoGrass = resultado.every(pokemon => pokemon.type.includes('grass'));
    expect(todosSonDeTipoGrass).toBe(true);
  });
});




//p.u alfabetico
describe('sortDataByName', () => {
  it('debería ordenar de la A a la Z', () => {
    const sortOrder = 'asc';

    const resultado = sortDataByName(fakeData, sortOrder).map(pokemon => pokemon.name);

    expect(resultado).toEqual(ascendente.name);
  });
});

describe('sortDataByName', () => {
  it('debería ser una función y ordenar de la Z a la A', () => {
    const sortOrder = 'desc';

    // Verificar si sortDataByName es una función
    if (typeof sortDataByName !== 'function') {
      console.error('El test ha fallado: sortDataByName no es una función.');
      return; // Salir del test si no es una función
    }

    // Ejecutar la prueba
    const resultado = sortDataByName(fakeData, sortOrder).map(pokemon => pokemon.name);

    // Verificar el resultado
    expect(resultado).toEqual(descendente.name);
  });
});
//p.u calculos


describe('calcularPromedio', () => {
  it('debería ser una función', () => {
    expect(typeof calcularPromedio).toBe('function');
  });

  it('debería calcular el promedio de menor correctamente', () => {
    const orden = 'Menor';

    const resultadoMenor = calcularPromedio(fakeData, orden);

    expect(resultadoMenor).toEqual(resultadoEsperadoMenor);
  });
});

describe('calcularPromedio', () => {
  it('debería calcular el promedio de mayor correctamente', () => {
    const orden = 'Mayor';

    const resultadoMayor = calcularPromedio(fakeData, orden);

    expect(resultadoMayor).toEqual(resultadoEsperadoMayor);
  });
});


//P.U base de ataque

describe('filtrarPorAtaqueBase', () => {
  it('debería filtrar Pokémon con ataque base mayor que 100', () => {
    const resultado = filtrarPorAtaqueBase(fakeData, 100);
    expect(resultado).toEqual(resultadoEsperadoMenor);
  });

  it('debería filtrar Pokémon con ataque base mayor que 150', () => {
    const resultado = filtrarPorAtaqueBase(fakeData, 150);
    expect(resultado).toEqual(resultadoEsperadoIntermedio);
  });
  it('debería filtrar Pokémon con ataque base mayor que 200', () => {
    const resultado = filtrarPorAtaqueBase(fakeData, 200);
    expect(resultado).toEqual([]);
  });

});

//trabajo final 2