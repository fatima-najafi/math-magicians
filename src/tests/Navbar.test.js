import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

test('renders learn react link', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>,
  );

  const homeLink = screen.getByText(/Home/i);
  const calculatorLink = screen.getByText(/Calculator/i);
  const quoteLink = screen.getByText(/Quote/i);

  expect(homeLink).toBeInTheDocument();
  expect(calculatorLink).toBeInTheDocument();
  expect(quoteLink).toBeInTheDocument();

  expect(homeLink).toMatchSnapshot();
  expect(calculatorLink).toMatchSnapshot();
  expect(quoteLink).toMatchSnapshot();
});
