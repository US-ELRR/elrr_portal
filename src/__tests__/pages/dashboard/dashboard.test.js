import Dashboard from "@/pages/dashboard";
import { render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

describe("Dashboard Component", () => {
    
    it("should render the component", () => {
        const { getByText, getAllByText } = render(
            <MemoryRouterProvider>
                <Dashboard />
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