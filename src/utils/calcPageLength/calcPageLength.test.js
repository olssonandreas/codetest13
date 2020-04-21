import calcPageLength from './calcPageLength';
const PAGE_SIZE = 20;
test('calcPageLength should return one page if less than 9', () => {
  expect(calcPageLength(9, PAGE_SIZE)).toBe(1);
});

test('calcPageLength should return 2 pages if 22 items', () => {
  expect(calcPageLength(22, PAGE_SIZE)).toBe(2);
});

test('calcPageLength should return 2 if 39 items', () => {
  expect(calcPageLength(39, PAGE_SIZE)).toBe(2);
});

test('calcPageLength should return 3 if 49 items', () => {
  expect(calcPageLength(49, PAGE_SIZE)).toBe(3);
});

test('calcPageLength should return 2 40 items', () => {
  expect(calcPageLength(40, PAGE_SIZE)).toBe(2);
});

test('calcPageLength should return 0 if no items', () => {
  expect(calcPageLength(0, PAGE_SIZE)).toBe(0);
});
