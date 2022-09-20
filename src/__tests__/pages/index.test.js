// tests for the index (login) page
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { act, fireEvent, render } from '@testing-library/react';
import LoginPage from '@/pages/index';
import axios from 'axios';

jest.mock('axios');

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
    
    axios.post.mockImplementation(() => Promise.resolve({ data: {} }));
    act(() => {
      fireEvent.change(screen.getByPlaceholderText('username'), { target: { value: 'email@test.com' } });
      fireEvent.change(screen.getByPlaceholderText('password'), { target: { value: 'password' } });
      fireEvent.click(screen.getByText("Login"));
    });

  });
});
