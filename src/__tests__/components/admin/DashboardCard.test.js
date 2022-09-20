import { render } from "@testing-library/react";
import DashboardCard from "@/components/admin/DashboardCard";

describe("DashboardCard Component", () => {
    const card = {
        img: "test img",
        text: "test text"
    }

    it("should render the component", () => {
        const { getByText } = render(
        <DashboardCard cardFront={card}/>);
        expect(getByText(/test img/i)).toBeInTheDocument();
        expect(getByText(/test text/i)).toBeInTheDocument();

    });
});
