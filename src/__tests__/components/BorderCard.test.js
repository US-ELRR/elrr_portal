import { render } from "@testing-library/react";
import BorderCard from "@/components/BorderCard";

describe("BorderCard Component", () => {
  it("should render the component", () => {
    const { getByText } = render(<BorderCard title={"Test title"} />);
    expect(getByText(/Test title/i)).toBeInTheDocument();

  });
});