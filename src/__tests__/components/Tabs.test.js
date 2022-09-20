import { act, fireEvent, render } from "@testing-library/react";
import Tabs from "@/components/Tabs";

describe("Tabs Component", () => {
    
    it("should render the component", () => {
        const { getByText } = render(
        <Tabs tabNames={["com1", "com2"]} components={[<div>Component1</div>, <div>Component2</div>] }/>);
        expect(getByText(/com1/i)).toBeInTheDocument();
        expect(getByText(/com2/i)).toBeInTheDocument();

        expect(getByText(/Component1/i)).toBeInTheDocument();
        const button = getByText('com2');
        act(() => {
            fireEvent.click(button);
        });
        expect(getByText(/Component2/i)).toBeInTheDocument();
    });
    
    it("should render the component with empty parameters", () => {
        render(<Tabs />);
    });

});
