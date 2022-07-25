import { render } from '@testing-library/react';
import { useRouter } from 'next/router';
import Navbar from '@/components/common/Header/NavBar';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('LoggedInNavbar Component', () => {
  useRouter.mockImplementation(() => ({
    asPath: '/dashboard',
  }));
  it('should render the component with Career Manager navigation', () => {
    const { getByText } = render(
      <Navbar
        userData={{ user: { name: 'Test user' }, type: 'CareerManager' }}
      />
    );
    expect(getByText(/Test user/i)).toBeInTheDocument();
    expect(getByText(/CareerManager/i)).toBeInTheDocument();
    expect(getByText(/Dashboard/i)).toBeInTheDocument();
    expect(getByText(/Personnel/i)).toBeInTheDocument();
    expect(getByText(/Competencies/i)).toBeInTheDocument();
    expect(getByText(/Search/i)).toBeInTheDocument();
  });
});
