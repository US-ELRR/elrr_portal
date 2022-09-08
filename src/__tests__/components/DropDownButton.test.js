import DropDownButton from "@/components/DropDownButton";
import { act, fireEvent, render } from "@testing-library/react";

describe("DropDownButton Component", () => {
  it("should render the component", () => {
    const { getByText } = render(
    <DropDownButton buttonText={"Test Button"} items={["test1", "test2"]} 
        handleDownloadClick={() => {
            console.log('test'); 
        }}/>);
    expect(getByText(/Test Button/i)).toBeInTheDocument();
    
    const button = getByText('Test Button');
    act(() => {
        fireEvent.click(button);
    });

    expect(getByText(/test1/i)).toBeInTheDocument();
    expect(getByText(/test2/i)).toBeInTheDocument();
    const dropDownButton = getByText('test1');
    act(() => {
        fireEvent.click(dropDownButton);
    });

  });
});