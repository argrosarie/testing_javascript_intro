const {sum, multiply, divide} = require('./02-math');

test(' should be 4', () => {
  const rta = sum(1,3);
  expect(rta).toBe(4)
 });

 test('should be 20', () => {
  const rta = multiply(4,5);
  expect(rta).toBe(20)
 })

test('should be 2', () => {
  const rta = divide(4,2);
  expect(rta).toBe(2)
});
