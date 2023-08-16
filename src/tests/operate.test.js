import operate from '../logic/operate';

describe('Test the operates', () => {
  test('should subtract the numbers', () => {
    const a = 4;
    const b = 2;
    const operation = '-';

    expect(operate(a, b, operation)).toMatchSnapshot();
  });

  test('should sum the numbers', () => {
    const a = 1;
    const b = 2;
    const operation = '+';

    expect(operate(a, b, operation)).toMatchSnapshot();
  });

  test('should divide the numbers', () => {
    const a = 6;
    const b = 2;
    const operation = '/';

    expect(operate(a, b, operation)).toMatchSnapshot();
  });

  test('should calculate the modulus of the numbers', () => {
    const a = 2;
    const b = 1;
    const operation = '%';

    expect(operate(a, b, operation)).toMatchSnapshot();
  });

  test('should multiply the numbers', () => {
    const a = 2;
    const b = 1;
    const operation = '*';

    expect(operate(a, b, operation)).toMatchSnapshot();
  });
});
