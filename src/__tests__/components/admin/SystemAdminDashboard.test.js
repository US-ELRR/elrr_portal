import { render } from "@testing-library/react";
import SystemAdminDashboard from "@/components/admin/SystemAdminDashboard";

describe("SystemAdminDashboard Component", () => {

    it("should render the component", () => {
        const { getByText } = render(
        <SystemAdminDashboard />);
        expect(getByText(/Import List/i)).toBeInTheDocument();
        expect(getByText(/System Monitoring/i)).toBeInTheDocument();
        expect(getByText(/User Profile Management/i)).toBeInTheDocument();

    });
});
