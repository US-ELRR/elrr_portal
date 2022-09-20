import useAuthRouter from "@/hooks/useAuthRouter";
import GoalsPage from "@/pages/dashboard/careerManager/goals/[goalid]";
import { render } from "@testing-library/react";
import axios from "axios";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

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
