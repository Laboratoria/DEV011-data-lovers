// import { example, anotherExample } from '../src/dataFunctions.js';
import { filterData } from '../src/dataFunctions.js';
import { data as fakeData, resultFilter } from './data.js';

// describe('example', () => {

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });

// describe('anotherExample', () => {

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });

describe('array', ()=>{

  it('verificar array', ()=>{
    console.log(typeof fakeData);
    expect( typeof fakeData).toBe("object")
  })

  it('filtro', ()=>{
    const resultado = filterData(fakeData, 'type', 'water')
    expect(resultado).toEqual(resultFilter)
  })

})