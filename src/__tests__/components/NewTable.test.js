import NewTable from "@/components/NewTable";
import { render } from "@testing-library/react";

describe("NewTable Component", () => {
    
    it("should render the component", () => {
        const { getByText } = render(
        <NewTable columnTitles={["col1", "col2"]} rowsData={[["test1", "test2"], ["test3", ""]] }/>);
        expect(getByText(/col1/i)).toBeInTheDocument();
        expect(getByText(/col2/i)).toBeInTheDocument();

        expect(getByText(/test1/i)).toBeInTheDocument();
        expect(getByText(/test2/i)).toBeInTheDocument();
        expect(getByText(/test3/i)).toBeInTheDocument();
        expect(getByText(/-/i)).toBeInTheDocument();
    });

    it("if no row data", () => {
        const { getByText } = render(
        <NewTable columnTitles={["col1", "col2"]} rowsData={[]}/>);
        expect(getByText(/col1/i)).toBeInTheDocument();
        expect(getByText(/col2/i)).toBeInTheDocument();
        expect(getByText(/No data found/i)).toBeInTheDocument();
    });
});
