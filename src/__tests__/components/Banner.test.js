import Banner from "@/components/Banner";
import { render } from "@testing-library/react";

describe("Banner Component", () => {
  it("should render the component", () => {
    const { getByText } = render(<Banner user={{ 
        role:'career_manager',
        learner:
          {personnel:
            {person:
              { name: 'Test user',
                firstName: 'Test'
              } 
            }
          }
      }}/>);
    expect(getByText(/Welcome/i)).toBeInTheDocument();
    expect(getByText(/Test/i)).toBeInTheDocument();
    expect(getByText(/to the Enterprise/i)).toBeInTheDocument();
    expect(getByText(/Learner Record Repository/i)).toBeInTheDocument();
    expect(getByText(/ELRR/i)).toBeInTheDocument();

  });
});