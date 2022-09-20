import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { act, fireEvent, render } from '@testing-library/react';
import EnrolledCourses from '@/components/learner/common/EnrolledCourses';

describe('EnrolledCourses Component', () => {
  it('should render the component', () => {
    const { getByText } = render(
      <EnrolledCourses courses={[{ name: 'Test' }]} />
    );
    expect(getByText(/Enrolled Courses/i)).toBeInTheDocument();
    expect(getByText(/Course Identifier/i)).toBeInTheDocument();
    expect(getByText(/Course Name/i)).toBeInTheDocument();
    expect(getByText(/Start Date/i)).toBeInTheDocument();
  });

  it('should render the component with no courses', () => {
    const { getByText } = render(<EnrolledCourses courses={[]} />);
    expect(getByText(/Enrolled Courses/i)).toBeInTheDocument();
    expect(getByText(/No courses enrolled/i)).toBeInTheDocument();
  });

  it('should render the component with multiple courses', () => {
    const { getByText } = render(
        <MemoryRouterProvider>
        <EnrolledCourses
            courses={[
            { name: 'Bio', courseidentifier: 'id_1', coursestartdate:'2020-01-01' },
            { name: 'Math', courseidentifier: 'id_2', coursestartdate:'2020-01-02' },
            ]}
        />
      </MemoryRouterProvider>

    );
    
    expect(getByText(/Bio/i)).toBeInTheDocument();
    expect(getByText(/id_1/i)).toBeInTheDocument();
    expect(getByText(/2020-01-01/i)).toBeInTheDocument();

    expect(getByText(/Math/i)).toBeInTheDocument();
    expect(getByText(/id_2/i)).toBeInTheDocument();
    expect(getByText(/2020-01-02/i)).toBeInTheDocument();

    const button = getByText('Bio');
    act(() => {
        fireEvent.click(button);
    });
  });
});
