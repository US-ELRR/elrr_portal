import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { render } from "@testing-library/react";
import GoalsPage from "@/pages/dashboard/trainingManager/goals/[goalid]";
import axios from "axios";
import courseData from '@/data/courseData.json';

jest.mock('axios');

describe("GoalsPage Component", () => {
    it("should render the component", () => {
        axios.get.mockImplementation(() => Promise.resolve({ data: {courseData} }));
        const { getByText } = render(
            <MemoryRouterProvider>
                <GoalsPage />
            </MemoryRouterProvider> );
            
        expect(getByText("Goal")).toBeInTheDocument();

    });
});
