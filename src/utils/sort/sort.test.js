import sort from './sort';

test('sort to return a sorted alphabetically array by sortKey name', () => {
  const array = [
    {
      name: 'C'
    },
    {
      name: 'B'
    },
    {
      name: 'A',
    }
  ];

  expect(sort('name', array)).toStrictEqual([{ name: 'A'}, { name: 'B'}, { name: 'C'}]);
});

test('sort returns empty if no array', () => {
  expect(sort('name', 'not array')).toStrictEqual([]);
});
