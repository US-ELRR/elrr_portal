import { render } from '@testing-library/react';
import Banner from '@/components/manager/common/Banner';

describe('Banner Component', () => {
  it('should render the component', () => {
    const { getByText } = render(<Banner user={{ name: 'Banner' }} />);
    expect(getByText(/Banner/i)).toBeInTheDocument();
  });
});
