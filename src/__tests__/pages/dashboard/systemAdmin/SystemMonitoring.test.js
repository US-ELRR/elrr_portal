import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { render } from "@testing-library/react";
import SystemMonitoring from "@/pages/dashboard/systemAdmin/SystemMonitoring";

describe("SystemMonitoring Component", () => {
    it("should render the component", () => {
        const { getByText } = render(
            <MemoryRouterProvider>
                <SystemMonitoring />
            </MemoryRouterProvider> );
            
        expect(getByText("Current ELRR Configuration")).toBeInTheDocument();
        expect(getByText("Import Frequency: 3 days")).toBeInTheDocument();
        expect(getByText("Import Start Time: 00:00 Sunday EST")).toBeInTheDocument();
        expect(getByText("Endpoints in use: Enterprise Course Catalog, TLA CaSS")).toBeInTheDocument();
        expect(getByText("Last Import Called: 09/07/22")).toBeInTheDocument();
        
        expect(getByText("Current Number of Indexed Enterprise Learner Records: 1,865")).toBeInTheDocument();
        expect(getByText("Current Number of Unique Learner Profiles: 25")).toBeInTheDocument();
        expect(getByText("Current Number of Unique Learning Activities Referenced: 2,377")).toBeInTheDocument();
        expect(getByText("Current Number of Competencies Unique Referenced: 12")).toBeInTheDocument();
        expect(getByText("Number of Errors in Last Import: 0")).toBeInTheDocument();
    });
});
