import calculate from '../logic/calculate';

describe('Test the operates', () => {
  test('should return the sum of numbers', () => {
    const obj = {
      total: 3,
      next: 3,
      operation: '+',
    };
    const btn = '=';

    expect(calculate(obj, btn)).toMatchSnapshot();
  });

  test('should return the subtraction of numbers', () => {
    const obj = {
      total: 3,
      next: 3,
      operation: '-',
    };
    const btn = '=';

    expect(calculate(obj, btn)).toMatchSnapshot();
  });

  test('should return the multiplication of numbers', () => {
    const obj = {
      total: 3,
      next: 3,
      operation: '*',
    };
    const btn = '=';

    expect(calculate(obj, btn)).toMatchSnapshot();
  });

  test('should return the division of numbers', () => {
    const obj = {
      total: 3,
      next: 3,
      operation: '/',
    };
    const btn = '=';

    expect(calculate(obj, btn)).toMatchSnapshot();
  });

  test('should return the modulus of numbers', () => {
    const obj = {
      total: 3,
      next: 3,
      operation: '%',
    };
    const btn = '=';

    expect(calculate(obj, btn)).toMatchSnapshot();
  });
});
