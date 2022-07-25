import { render } from "@testing-library/react";
import Footer from "@/components/common/Footer";

describe("Footer Component", () => {
  it("should render the component", () => {
    const { getByText } = render(<Footer />);
    expect(getByText(/Copyright © 2022/i)).toBeInTheDocument();
  });
});