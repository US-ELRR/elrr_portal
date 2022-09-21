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
        userData={{ 
          role:'career_manager',
          learner:
            {personnel:
              {person:
                { name: 'Test user' } 
              }
            }
        }}
      />
    );
    expect(getByText(/Test user/i)).toBeInTheDocument();
    expect(getByText(/career_manager/i)).toBeInTheDocument();
    expect(getByText(/Logout/i)).toBeInTheDocument();

  });

  it('should render the login nav bar', () => {
    const { getByText } = render(<Navbar userData={null} logout={jest.fn()} />);
    expect(getByText(/login/i)).toBeInTheDocument();
  });
});
