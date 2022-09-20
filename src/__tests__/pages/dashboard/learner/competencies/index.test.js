import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { act, fireEvent, render } from "@testing-library/react";
import CompetenciesPage from "@/pages/dashboard/learner/competencies/index";
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
        const { getByText, getAllByText } = render(
            <MemoryRouterProvider>
                <CompetenciesPage />
            </MemoryRouterProvider> );
            
        expect(getByText("Competencies Page")).toBeInTheDocument();
        expect(getByText("Awarded")).toBeInTheDocument();
        expect(getByText("In Progress")).toBeInTheDocument();
        expect(getByText("Business Skills & Acumen")).toBeInTheDocument();

        axios.get.mockImplementation(() => Promise.resolve({ data: {competencies} }));
        let button = getByText('In Progress');
        act(() => {
            fireEvent.click(button);
        });
        expect(getByText(/General Contacting Concepts/i)).toBeInTheDocument();

        button = getByText('General Contacting Concepts');
        act(() => {
            fireEvent.click(button);
        });
    });
});
