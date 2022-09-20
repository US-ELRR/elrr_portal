import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { render } from "@testing-library/react";
import LearnerDashboard from "@/pages/dashboard/learner/LearnerDashboard";

describe("LearnerDashboard Component", () => {
    it("should render the component", () => {
        const { getByText, getAllByText } = render(
            <MemoryRouterProvider>
                <LearnerDashboard />
            </MemoryRouterProvider> );
            
            expect(getByText("Course Snapshot (Last 30 Days)")).toBeInTheDocument();
            expect(getByText(/Course Title/i)).toBeInTheDocument();
            expect(getAllByText(/Course Provider/i).length).toBe(5);
            expect(getByText(/Status/i)).toBeInTheDocument();
            expect(getByText(/Business Essentials/i)).toBeInTheDocument();
            expect(getAllByText(/DAU/i).length).toBe(6);
            expect(getAllByText(/Completed/i).length).toBe(3);
            expect(getByText(/Course Recommendations/i)).toBeInTheDocument();
            expect(getAllByText(/Title/i).length).toBe(2)
            expect(getByText(/Owner/i)).toBeInTheDocument();
            expect(getByText(/Building Trust/i)).toBeInTheDocument();
            expect(getByText(/Go to ECC/i)).toBeInTheDocument();
    
    });
});
