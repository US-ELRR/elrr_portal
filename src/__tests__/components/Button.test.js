import Button from "@/components/Button";
import { act, fireEvent, render } from "@testing-library/react";

describe("Button Component", () => {
  it("should render the component", () => {
    const { getByText } = render(<Button btnText={"Test Button"} link={"www.google.com"} newTabLink={"/test"}/>);
    expect(getByText(/Test Button/i)).toBeInTheDocument();
    
    const button = getByText('Test Button');
    act(() => {
        fireEvent.click(button);
    });
  });

  it("should render the component if newTabLink blank", () => {
    const { getByText } = render(<Button btnText={"Test Button"} link={"www.google.com"} newTabLink={""}/>);
    expect(getByText(/Test Button/i)).toBeInTheDocument();

  });
});