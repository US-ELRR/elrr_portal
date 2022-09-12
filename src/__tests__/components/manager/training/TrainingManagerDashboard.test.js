import TrainingManagerDashboard from "@/components/manager/training/TrainingManagerDashboard";
import { render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

describe("TrainingManagerDashboard Component", () => {
    
    it("should render the component", () => {
        const { getByText, getAllByText } = render(
            <MemoryRouterProvider>
                <TrainingManagerDashboard />
            </MemoryRouterProvider> );

        expect(getByText("Course Snapshot (Last 30 Days)")).toBeInTheDocument();
        expect(getByText(/Course Title/i)).toBeInTheDocument();
        expect(getAllByText(/Course Provider/i).length).toBe(4);
        expect(getByText(/Status/i)).toBeInTheDocument();
        expect(getByText(/Business Essentials/i)).toBeInTheDocument();
        expect(getAllByText(/DAU/i).length).toBe(6);
        expect(getByText(/Registered/i)).toBeInTheDocument();
        expect(getByText(/Course Recommendations/i)).toBeInTheDocument();
        expect(getAllByText(/Title/i).length).toBe(2);
        expect(getByText(/Owner/i)).toBeInTheDocument();
        expect(getAllByText(/Supervisory Contracting/i).length).toBe(2);
        expect(getByText(/Go to ECC/i)).toBeInTheDocument();
    });
});
