import Card from "@/components/Card";
import { render } from "@testing-library/react";

describe("Card Component", () => {
  it("should render the component", () => {
    const { getByText } = render(<Card title={"Test title"} children={<div> Child Test</div>}/>);
    expect(getByText(/Test title/i)).toBeInTheDocument();
    expect(getByText(/Child Test/i)).toBeInTheDocument();

  });
});