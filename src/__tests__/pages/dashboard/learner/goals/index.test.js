import { act, fireEvent, render } from "@testing-library/react";
import axios from "axios";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import courseData from '@/data/courseData.json';
import GoalsPage from "@/pages/dashboard/learner/goals";

jest.mock('axios');

describe("GoalsPage Component", () => {
    it("should render the component", () => {
        const { getByText } = render(
            <MemoryRouterProvider>
                <GoalsPage />
            </MemoryRouterProvider> );
            
        expect(getByText("Goals Page")).toBeInTheDocument();

        act(() => {
            fireEvent.click(getByText("Pre-Award: Plan Solicitation"));
        });
        
        expect(getByText("Shape Internal Customer Requirements")).toBeInTheDocument();
        
        act(() => {
            fireEvent.click(getByText("Shape Internal Customer Requirements"));
        });
    });
});
