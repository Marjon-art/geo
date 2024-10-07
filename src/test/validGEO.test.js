import validGEO from '../js/validGEO.js';

test.each([
  ['true for valid GEO', '51.50851, −0.12572', true],
  ['true for valid GEO', '51.50851,−0.12572', true],
  ['true for valid GEO', '[51.50851, −0.12572]', true],
  ['false for invalid GEO', '151.35484,−512.84643', false],
])('Validate GEO %s', (_, input, expected) => {
  expect(validGEO(input)).toBe(expected);
});
