// tests for the index (login) page
import { render, screen } from '@testing-library/react';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import LoginPage from '@/pages/index';

const renderer = () => {
  return render(
    <MemoryRouterProvider>
        <LoginPage />
      </MemoryRouterProvider>
  );
};
describe('index page', () => {
  it('should render the login page', () => {
    const screen = renderer();
    expect(screen.getByText('Welcome to the Enterprise Learner Record Repository')
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
  });
  it('should display the login form and button', () => {
    const screen = renderer();

    expect(screen.getByPlaceholderText('username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
  });
});
