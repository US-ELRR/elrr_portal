import { render } from "@testing-library/react";
import Footer from "@/components/common/Footer";

describe("Footer Component", () => {
  it("should render the component", () => {
    const { getByText } = render(<Footer />);
    expect(getByText(/Copyright © - 2022/i)).toBeInTheDocument();
    expect(getByText(/Disclaimer: The data on this website is for informational purposes/i)).toBeInTheDocument();
    expect(getByText(/DOD Home Page/i)).toBeInTheDocument();
    expect(getByText(/About ADL/i)).toBeInTheDocument();
    expect(getByText(/Web Policy/i)).toBeInTheDocument();
    expect(getByText(/Privacy/i)).toBeInTheDocument();
    expect(getByText(/Contact Us/i)).toBeInTheDocument();

  });
});