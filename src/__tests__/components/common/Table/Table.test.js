import { act, fireEvent, render } from "@testing-library/react";
import Table from "@/components/common/Table";

describe("Table Component", () => {
    
    it("should render the component", () => {
        const data = [
            {
                id: "123",
                title: "test title",
                description: ""
            }
        ]
        const { getByText } = render(
        <Table cols={["col1", "col2", ""]} keys={["id", "title", "description"]} data={data} primaryKey={"id"}/>);
        expect(getByText(/col1/i)).toBeInTheDocument();
        expect(getByText(/col2/i)).toBeInTheDocument();

        expect(getByText(/123/i)).toBeInTheDocument();
        expect(getByText(/test title/i)).toBeInTheDocument();
        expect(getByText(/-/i)).toBeInTheDocument();
        
        const button = getByText('123');
        act(() => {
            fireEvent.click(button);
        });
    });

    it("if no row data", () => {
        const { getByText } = render(
            <Table cols={["col1", "col2", ""]} keys={["id", "title", "description"]} data={[]} primaryKey={"id"}/>);
        expect(getByText(/col1/i)).toBeInTheDocument();
        expect(getByText(/col2/i)).toBeInTheDocument();
        expect(getByText(/No data found/i)).toBeInTheDocument();
    });
});
