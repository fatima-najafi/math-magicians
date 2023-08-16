import { render, screen } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('render the calculator', () => {
  test('displays the calculator text', () => {
    const { container } = render(<Calculator />);
    const textCalculator = screen.getByText(/Lets do some math!/i);
    expect(textCalculator).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
