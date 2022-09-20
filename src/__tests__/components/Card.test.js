import { render } from "@testing-library/react";
import Card from "@/components/Card";

describe("Card Component", () => {
  it("should render the component", () => {
    const { getByText } = render(<Card title={"Test title"} children={"Child Test"}/>);
    expect(getByText(/Test title/i)).toBeInTheDocument();
    expect(getByText(/Child Test/i)).toBeInTheDocument();

  });
});