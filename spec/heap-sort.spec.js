const { sort } = require('../src/heap-sorting');
describe('heap sort', () => {
  test('can sort', () => {
    expect(sort([2, 1, 3, 7, 6, 5, 9])).toEqual([1, 2, 3, 5, 6, 7, 9]);
  });

  // it('can sort', () => {
  //   expect(heapSorting([9, 2, 4, 7, 1, 14, 3])).toEqual([14, 7, 9, 2, 1, 4, 3]);
  // });

  // it('can sort', () => {
  //   expect(heapSorting([10, 17, 19, 4, 16, 7, 2])).toEqual([
  //     19,
  //     17,
  //     10,
  //     4,
  //     16,
  //     7,
  //     2
  //   ]);
  // });

  // it('can sort', () => {
  //   expect(heapSorting([2, 18, 5, 3, 11, 8, 17])).toEqual([
  //     18,
  //     11,
  //     17,
  //     3,
  //     2,
  //     8,
  //     5
  //   ]);
  // });
});
