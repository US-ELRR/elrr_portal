import { render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import PersonPage from "@/pages/dashboard/trainingManager/personnel/[personid]";

describe("PersonPage Component", () => {
    it("should render the component", () => {
        const { getByText } = render(
            <MemoryRouterProvider>
                <PersonPage />
            </MemoryRouterProvider> );
            
        expect(getByText("Personnel Data")).toBeInTheDocument();
        expect(getByText("Contact Information")).toBeInTheDocument();
        expect(getByText("Organization Data")).toBeInTheDocument();
    });
});
