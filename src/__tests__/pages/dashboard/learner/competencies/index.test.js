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
    it("should render the component", async() => {
        axios.get.mockImplementation(() => Promise.resolve({ data: {competencies} }));
        
        let screen;
        await act(async () => {
            screen = render(
            <MemoryRouterProvider>
                <CompetenciesPage />
            </MemoryRouterProvider> );
        });
            
        expect(screen.getByText("Competencies Page")).toBeInTheDocument();
        expect(screen.getByText("Awarded")).toBeInTheDocument();
        expect(screen.getByText("In Progress")).toBeInTheDocument();
        expect(screen.getByText("Business Skills & Acumen")).toBeInTheDocument();
        
        let button = screen.getByText('Business Skills & Acumen');
        act(() => {
            fireEvent.click(button);
        });

        expect(screen.getByText(/Customer Focus/i)).toBeInTheDocument();
        button = screen.getByText('Customer Focus');
        act(() => {
            fireEvent.click(button);
        });

        axios.get.mockImplementation(() => Promise.resolve({ data: {competencies} }));
        button = screen.getByText('In Progress');
        act(() => {
            fireEvent.click(button);
        });
    });
});
