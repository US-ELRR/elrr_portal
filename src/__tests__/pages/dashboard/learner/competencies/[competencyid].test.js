import useAuthRouter from "@/hooks/useAuthRouter";
import CompetencyPage from "@/pages/dashboard/learner/competencies/[competencyid]";
import { render } from "@testing-library/react";
import axios from "axios";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

jest.mock('axios');

jest.mock('next/router', () => ({
    ...jest.requireActual('next/router'),
    useAuthRouter: () => ({
      query: {
            competencyid: '1234',
        }
    }),
  }));

describe("CompetenciesPage Component", () => {
    const competency = {
        competencyframeworktitle: "test title",
    }
    it("should render the component", () => {
        axios.get.mockImplementation(() => Promise.resolve({ data: {competency} }));
        const { getByText, getAllByText } = render(
            <MemoryRouterProvider>
                <CompetencyPage />
            </MemoryRouterProvider> );
            
        expect(getByText("Enterprise Learner Record Repository")).toBeInTheDocument();
        expect(getByText(/U.S. Department of Defense/i)).toBeInTheDocument();
        expect(getByText(/login/i)).toBeInTheDocument();
        expect(getByText(/Copyright © - 2022/i)).toBeInTheDocument();
        expect(getByText(/Disclaimer: The data on this website is for informational purposes/i)).toBeInTheDocument();
        expect(getAllByText(/About/i).length).toBe(2);
        expect(getByText(/DOD Home Page/i)).toBeInTheDocument();
        expect(getByText(/About ADL/i)).toBeInTheDocument();
        expect(getAllByText(/Policy/i).length).toBe(2);
        expect(getByText(/Web Policy/i)).toBeInTheDocument();
        expect(getByText(/Privacy/i)).toBeInTheDocument();
        expect(getAllByText(/Contact/i).length).toBe(2);
        expect(getByText(/Contact Us/i)).toBeInTheDocument();
    });
});
