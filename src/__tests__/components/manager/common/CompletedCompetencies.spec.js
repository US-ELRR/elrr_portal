import { render } from '@testing-library/react';
import CompletedCompetencies from '@/components/manager/common/CompletedCompetencies';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

describe('CompletedCompetencies Component', () => {
  it('should render the component', () => {
    const { getByText } = render(
      <MemoryRouterProvider>
        <CompletedCompetencies
          completedCompetencies={[
            {
              competencyframeworkvalidenddate: '2020-01-01',
              competencyframeworktitle: 'Bio',
            },
          ]}
        />
      </MemoryRouterProvider>
    );
    expect(getByText(/Completed Competencies/i)).toBeInTheDocument();
  });

  it('should render the component with no courses', () => {
    const { getByText } = render(
      <MemoryRouterProvider>
        <CompletedCompetencies completedCompetencies={[]} />
      </MemoryRouterProvider>
    );
    expect(getByText(/No competencies completed/i)).toBeInTheDocument();
  });

  it('should render the component with multiple courses', () => {
    const { getByText } = render(
      <MemoryRouterProvider>
        <CompletedCompetencies
          completedCompetencies={[
            {
              competencyframeworkvalidenddate: '2020-01-01',
              competencyframeworktitle: 'Bio',
            },
            {
              competencyframeworkvalidenddate: '2020-01-02',
              competencyframeworktitle: 'Math',
            },
          ]}
        />
      </MemoryRouterProvider>

    );
    expect(getByText(/Bio/i)).toBeInTheDocument();
    expect(getByText(/2020-01-01/i)).toBeInTheDocument();

    expect(getByText(/Math/i)).toBeInTheDocument();
    expect(getByText(/2020-01-02/i)).toBeInTheDocument();
  });
});
