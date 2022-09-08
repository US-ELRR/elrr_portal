import BorderCard from "@/components/BorderCard";
import { render } from "@testing-library/react";

describe("BorderCard Component", () => {
  it("should render the component", () => {
    const { getByText } = render(<BorderCard title={"Test title"} children={<div> Child Test</div>}/>);
    expect(getByText(/Test title/i)).toBeInTheDocument();
    expect(getByText(/Child Test/i)).toBeInTheDocument();

  });
});