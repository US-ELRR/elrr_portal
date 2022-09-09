import NavBtn from "@/components/common/Header/NavBtn";
import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';


describe("NavBtn Component", () => {
  it("should render the component", () => {
    const button = {
        path: "/",
        name: "Test button"
    }
    const { getByText } = render(      
    <MemoryRouterProvider>
        <NavBtn btn={button}/>
        </MemoryRouterProvider>
    );
    expect(getByText(/Test button/i)).toBeInTheDocument();

    const btn = getByText('Test button');
    act(() => {
        fireEvent.click(btn);
    });

  });
});
