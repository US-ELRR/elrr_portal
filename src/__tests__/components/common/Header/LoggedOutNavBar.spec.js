import LoggedOutNavbar from '@/components/common/Header/LoggedOutNavBar';
import { render } from '@testing-library/react';

describe('LoggedOutNavbar Component', () => {
  it('should render the component with the correct text', () => {
    const { getByText } = render(<LoggedOutNavbar />);
    expect(getByText(/login/i)).toBeInTheDocument();
  });
});
