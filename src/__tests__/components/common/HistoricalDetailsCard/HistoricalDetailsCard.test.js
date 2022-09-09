import HistoricalDetailsCard from "@/components/common/HistoricalDetailsCard";
import { render } from "@testing-library/react";

describe("HistoricalDetailsCard Component", () => {
  it("should render the component", () => {
    const { getByText, getAllByText } = render(
    <HistoricalDetailsCard title={"Test title"} subtitle={"Test Subtitle"} objArr={[["Test 1", "Test 2"], ["Test 1", "Test 2"]]} cols={2}/>
    );
    expect(getByText(/Test title/i)).toBeInTheDocument();
    expect(getAllByText(/Test Subtitle/i).length).toBe(2);

  });

  it("empty objArray ", () => {
    const { getByText, getAllByText } = render(
    <HistoricalDetailsCard title={"Test title"} subtitle={"Test Subtitle"} objArr={[ ]} cols={2}/>
    );
    expect(getByText(/Test title/i)).toBeInTheDocument();
    expect(getByText(/No data to display/i)).toBeInTheDocument();

  });
});