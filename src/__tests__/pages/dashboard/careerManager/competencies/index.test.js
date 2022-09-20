import useAuthRouter from "@/hooks/useAuthRouter";
import CompetenciesPage from "@/pages/dashboard/careerManager/competencies";
import { act, fireEvent, render } from "@testing-library/react";
import axios from "axios";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

jest.mock('axios');


describe("CompetenciesPage Component", () => {
    const data = [
        {
          "competencyid": 100,
          "competencyframeworktitle": "Skill and Roles: Business Skills and Acumen",
        },
    ]
    it("should render the component", async() => {
        axios.get.mockImplementation(() => Promise.resolve({data}));

        let screen;
        await act(async () => {
            screen = render(
                <MemoryRouterProvider>
                    <CompetenciesPage />
                </MemoryRouterProvider> );
        });
            
        expect(screen.getByText("Competency 1")).toBeInTheDocument();
        let button = screen.getByText('Competency 1');
        act(() => {
            fireEvent.click(button);
        });
        expect(screen.getByText(/Goal Description/i)).toBeInTheDocument();
        expect(screen.getByText(/John Doe/i)).toBeInTheDocument();

        button = screen.getByText('Skill and Roles: Business Skills and Acumen');
        act(() => {
            fireEvent.click(button);
        });
    });
});
