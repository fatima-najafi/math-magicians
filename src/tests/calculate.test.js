import calculate from '../logic/calculate';

describe('Test the operates', () => {
  test('it should return the sum of numbers', () => {
    const obj = {
      total: 3,
      next: 3,
      operation: '+',
    };
    const btn = '=';

    expect(calculate(obj, btn)).toMatchSnapshot();
  });

  test('it should return the subtraction of numbers', () => {
    const obj = {
      total: 3,
      next: 3,
      operation: '-',
    };
    const btn = '=';

    expect(calculate(obj, btn)).toMatchSnapshot();
  });

  test('it should return the multiplication of numbers', () => {
    const obj = {
      total: 3,
      next: 3,
      operation: '*',
    };
    const btn = '=';

    expect(calculate(obj, btn)).toMatchSnapshot();
  });

  test('it return the division of numbers', () => {
    const obj = {
      total: 3,
      next: 3,
      operation: '/',
    };
    const btn = '=';

    expect(calculate(obj, btn)).toMatchSnapshot();
  });

  test('it should return the modulus of numbers', () => {
    const obj = {
      total: 3,
      next: 3,
      operation: '%',
    };
    const btn = '=';

    expect(calculate(obj, btn)).toMatchSnapshot();
  });
});
