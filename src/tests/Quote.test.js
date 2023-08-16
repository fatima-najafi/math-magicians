import { render, screen } from '@testing-library/react';
import Quote from '../components/Quote';

test('renders loading state', () => {
  render(<Quote />);

  const loadingText = screen.getByText(/Loading the Data/i);
  expect(loadingText).toBeInTheDocument();
});

test('matches snapshot', () => {
  const { container } = render(<Quote />);
  expect(container).toMatchSnapshot();
});
