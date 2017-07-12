const sub = require('../the-functions/sub');

test('subtracts 3 - 2 to equal 1', () => {
  expect(sub(3, 2)).toBe(1);
});
