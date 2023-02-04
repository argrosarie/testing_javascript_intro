// matchers//

test('test object', () => {
  const data = {
    name: 'Rosario',
  };
  data.lastName = 'Sa';
  expect(data).toEqual({ name: 'Rosario', lastName: 'Sa' });
});

test('null', () => {
  const data = null;
  expect(data).toBeNull();
});

test('booleans', () => {
  expect(false).toEqual(false);
  expect(true).toEqual(true);

  expect('').toBeFalsy();
  expect(0).toBeFalsy();
  expect(false).toBeFalsy();
});

test('string', () => {
  expect('Rosario').toMatch(/osa/);
});

test('arrays', () => {
  const numbers = [1, 5, 8, 45];
  expect(numbers).toContain(8);
});
