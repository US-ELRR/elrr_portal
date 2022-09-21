import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { render } from "@testing-library/react";
import UserProfileManagement from "@/pages/dashboard/systemAdmin/UserProfileManagement";

describe("UserProfileManagement Component", () => {
    it("should render the component", () => {
        const { getByText, getAllByText } = render(
            <MemoryRouterProvider>
                <UserProfileManagement />
            </MemoryRouterProvider> );
            
        expect(getByText("Brinleigh Blanchard")).toBeInTheDocument();
        expect(getAllByText("Learner").length).toBe(5);
        expect(getAllByText("Active").length).toBe(8);
    });
});
