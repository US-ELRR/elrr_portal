import CardData from "@/components/learner/CardData";
import { render } from "@testing-library/react";

describe("CardData Component", () => {

  it("should render the component", () => {
    const { getByText, getAllByText } = render(<CardData objArr={[["comp1", "comp2", "comp3"],[],[]]} subtitle='Employment' cols={3}/>);
    expect(getAllByText(/Employment/i).length).toBe(3);
    expect(getByText(/comp1/i)).toBeInTheDocument();
    expect(getByText(/comp2/i)).toBeInTheDocument();
    expect(getByText(/comp3/i)).toBeInTheDocument();
  });

  it("should render the component if no data", () => {
    const { getByText } = render(<CardData objArr={[]} title='Competency' cols={3}/>);
    expect(getByText(/No data to display/i)).toBeInTheDocument();
  });
});