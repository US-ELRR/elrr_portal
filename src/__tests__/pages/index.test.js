// tests for the index (login) page
import { render, screen } from '@testing-library/react';
import LoginPage from '@/pages/index';

describe('index page', () => {
  it('should render the login page', () => {
    render(<LoginPage />);

    expect(
      screen.getByText('Welcome to the Enterprise Learner Record Repository')
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
  });
  it('should display the login form', () => {
    render(<LoginPage />);
    expect(screen.getByPlaceholderText('username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('password')).toBeInTheDocument();
  });
  it('should display the login button', () => {
    render(<LoginPage />);
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
  });
});
