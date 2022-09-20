import { render } from "@testing-library/react";
import DetailsCard from "@/components/common/DetailsCard";

describe("DetailsCard Component", () => {
    
  it("should render the component", () => {
    const { getByText } = render(<DetailsCard obj={["comp1", "comp2", "comp3"]} title='Competency' cols={3}/>);
    expect(getByText(/Competency/i)).toBeInTheDocument();
    expect(getByText(/comp1/i)).toBeInTheDocument();
    expect(getByText(/comp2/i)).toBeInTheDocument();
    expect(getByText(/comp3/i)).toBeInTheDocument();
  });

  it("should render the component if no data", () => {
    const { getByText } = render(<DetailsCard title='Competency' cols={3}/>);
    expect(getByText(/Competency/i)).toBeInTheDocument();
    expect(getByText(/No data to display/i)).toBeInTheDocument();
  });

  it("should render the component if no cols defined", () => {
    const { getByText } = render(<DetailsCard title='Competency' />);
    expect(getByText(/Competency/i)).toBeInTheDocument();
  });
});