import { render, screen } from '@testing-library/react';
import Home from '../components/Home';

test('renders the home', () => {
  render(<Home />);
  const welcomeText = screen.getByText(/Welcome to our page/i);
  expect(welcomeText).toBeInTheDocument();
});

test('matches snapshot', () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});
