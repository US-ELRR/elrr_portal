import { act, fireEvent, render } from "@testing-library/react";
import axios from "axios";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import courseData from '@/data/courseData.json';
import GoalsPage from "@/pages/dashboard/trainingManager/goals";

jest.mock('axios');

describe("GoalsPage Component", () => {
    it("should render the component", () => {
        axios.get.mockImplementation(() => Promise.resolve({ data: {courseData} }));
        const { getByText } = render(
            <MemoryRouterProvider>
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
