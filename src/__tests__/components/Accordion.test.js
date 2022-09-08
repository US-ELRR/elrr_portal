import Accordion from "@/components/Accordion";
import { act, fireEvent, render } from "@testing-library/react";

describe("Accordion Component", () => {
  it("should render the component", () => {
    const { getByText } = render(<Accordion />);
    expect(getByText(/Date/i)).toBeInTheDocument();
    expect(getByText(/Total Imports/i)).toBeInTheDocument();
    expect(getByText(/Total Failures/i)).toBeInTheDocument();
    expect(getByText(/Endpoint/i)).toBeInTheDocument();
    expect(getByText(/Skill and Roles: Business Skills and Acumen/i)).toBeInTheDocument();
    act(() => {
        fireEvent.click(getByText('Skill and Roles: Business Skills and Acumen'));
    });
    expect(getByText(/DAU/i)).toBeInTheDocument();

  });
});