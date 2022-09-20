import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { render } from "@testing-library/react";
import GoalsPage from "@/pages/dashboard/careerManager/goals/[goalid]";
import axios from "axios";

jest.mock('axios');

jest.mock('next/router', () => ({
    ...jest.requireActual('next/router'),
    useAuthRouter: () => ({
      query: {
            goalid: 1234,
        }
    }),
  }));

describe("GoalPage Component", () => {
    const goal = {
        goalframeworktitle: "test title"
    }
    it("should render the component", () => {
        axios.get.mockImplementation(() => Promise.resolve({ data: {goal} }));
        const { getByText, getAllByText } = render(
            <MemoryRouterProvider>
                <GoalsPage />
            </MemoryRouterProvider> );
            
        expect(getByText("Goal")).toBeInTheDocument();});
});
