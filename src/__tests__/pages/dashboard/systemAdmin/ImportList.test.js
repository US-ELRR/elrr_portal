import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { render } from "@testing-library/react";
import ImportList from "@/pages/dashboard/systemAdmin/ImportList";

describe("ImportList Component", () => {
    it("should render the component", () => {
        const { getByText } = render(
            <MemoryRouterProvider>
                <ImportList />
            </MemoryRouterProvider> );
            
        expect(getByText("Import List")).toBeInTheDocument();
        expect(getByText("Date")).toBeInTheDocument();
        expect(getByText("Total Imports")).toBeInTheDocument();
        expect(getByText("Total Failures")).toBeInTheDocument();
        expect(getByText("Endpoint")).toBeInTheDocument();
    });
});
