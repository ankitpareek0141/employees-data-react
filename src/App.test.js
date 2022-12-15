import { render, screen } from '@testing-library/react';
import App from './Components/List';

test('renders learn react link', () => {
  render(<List />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
