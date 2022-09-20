import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { render } from "@testing-library/react";
import CareerManagerDashboard from "@/components/manager/career/CareerManagerDashboard";

describe("CareerManagerDashboard Component", () => {
    
    it("should render the component", () => {
        const { getByText } = render(
            <MemoryRouterProvider>
                <CareerManagerDashboard />
            </MemoryRouterProvider> );
            
        expect(getByText("Course Snapshot (Last 30 Days)")).toBeInTheDocument();
        expect(getByText(/Course Identifier/i)).toBeInTheDocument();
        expect(getByText(/Course Name/i)).toBeInTheDocument();
        expect(getByText(/Status/i)).toBeInTheDocument();
        expect(getByText(/CLC 103/i)).toBeInTheDocument();
        expect(getByText(/Facilities Capital Cost of Money/i)).toBeInTheDocument();
        expect(getByText(/In Progress/i)).toBeInTheDocument();
        expect(getByText(/Course Recommendations/i)).toBeInTheDocument();
        expect(getByText(/Title/i)).toBeInTheDocument();
        expect(getByText(/Owner/i)).toBeInTheDocument();
        expect(getByText(/Skill and Roles: Business Skills and Acumen/i)).toBeInTheDocument();
        expect(getByText(/Heisenburg/i)).toBeInTheDocument();
        expect(getByText(/Go to ECC/i)).toBeInTheDocument();
    });
});
