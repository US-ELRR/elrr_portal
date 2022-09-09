import Search from "@/components/Search";
import { act, fireEvent, render } from "@testing-library/react";

describe("Search Component", () => {
  it("should render the component", () => {
    const testValue = "testValue"
    const { getByText, getByPlaceholderText } = render(
    <Search searchQuery={"Test Search"} 
        setSearchQuery={(testValue) => {
            console.log(testValue); 
        }}/>);

        expect(getByPlaceholderText('Search...')).toBeInTheDocument();
    expect(getByPlaceholderText('Search...').value).toBe('Test Search');
    
    act(() => {
        fireEvent.input(getByPlaceholderText('Search...'), {
          target: { value: 'testValue' },
        });
    });

  });
});