import { filterData, sortData } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

console.log(fakeData);


describe('filterData', () => {

  it('returns `filterData`', () => {
    expect(filterData()).toBe('filterData');
  });
});

describe('sortData', () => {

  it('returns `sortData`', () => {
    expect(sortData()).toBe('OMG');
  });
});
