import { act, fireEvent, render } from "@testing-library/react";
import Search from "@/components/Search";

describe("Search Component", () => {
  it("should render the component", () => {
    const { getByPlaceholderText } = render(
    <Search searchQuery={"Test Search"} 
        setSearchQuery={() => {
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