import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { render } from "@testing-library/react";
import LearnerDashboard from "@/components/learner/LearnerDashboard";

describe("LearnerDashboard Component", () => {
    
    it("should render the component", () => {
        const { getByText } = render(
            <MemoryRouterProvider>
            <LearnerDashboard />
            </MemoryRouterProvider> );
        expect(getByText(/Welcome/i)).toBeInTheDocument();
        expect(getByText(/to the Enterprise Learner Record Repository/i)).toBeInTheDocument();
        expect(getByText(/(ELRR)/i)).toBeInTheDocument();
        expect(getByText(/Enrolled Courses/i)).toBeInTheDocument();
        expect(getByText(/Course Identifier/i)).toBeInTheDocument();
        expect(getByText(/Course Name/i)).toBeInTheDocument();
        expect(getByText(/Start Date/i)).toBeInTheDocument();
        expect(getByText(/Completed Competencies/i)).toBeInTheDocument();
        expect(getByText(/Title/i)).toBeInTheDocument();
        expect(getByText(/Conferred Date/i)).toBeInTheDocument();
        expect(getByText(/No competencies completed/i)).toBeInTheDocument();

    });
});
