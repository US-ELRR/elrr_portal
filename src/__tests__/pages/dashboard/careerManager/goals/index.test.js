import { act, fireEvent, render } from "@testing-library/react";
import axios from "axios";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import GoalsPage from "@/pages/dashboard/careerManager/goals";

jest.mock('axios');


describe("GoalsPage Component", () => {
    it("should render the component", () => {
        const { getByText } = render(
            <MemoryRouterProvider initialEntries={["/goals"]}>
                <GoalsPage />
            </MemoryRouterProvider> );
            
        expect(getByText("Goals Page")).toBeInTheDocument();

        act(() => {
            fireEvent.click(getByText("Goal 1"));
        });
        
        expect(getByText("Complete Profile")).toBeInTheDocument();
        
        act(() => {
            fireEvent.click(getByText("Complete Profile"));
        });

    });
});
