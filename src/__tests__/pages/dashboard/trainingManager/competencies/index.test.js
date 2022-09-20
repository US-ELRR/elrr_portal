import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { act, fireEvent, render } from "@testing-library/react";
import CompetenciesPage from "@/pages/dashboard/trainingManager/competencies";
import axios from "axios";

jest.mock('axios');


describe("CompetenciesPage Component", () => {
    const competencies = [
        {
          "competencyid": 100,
          "competencyframeworktitle": "Skill and Roles: Business Skills and Acumen",
        },
    ]
    it("should render the component", () => {
        axios.get.mockImplementation(() => Promise.resolve({ data: {competencies} }));
        const { getByText } = render(
            <MemoryRouterProvider>
                <CompetenciesPage />
            </MemoryRouterProvider> );
            
        expect(getByText("Competency 1")).toBeInTheDocument();
        let button = getByText('Competency 1');
        act(() => {
            fireEvent.click(button);
        });
        expect(getByText(/Goal Description/i)).toBeInTheDocument();
        expect(getByText(/John Doe/i)).toBeInTheDocument();

        // button = getByText('Skill and Roles: Business Skills and Acumen');
        // act(() => {
        //     fireEvent.click(button);
        // });
    });
});
