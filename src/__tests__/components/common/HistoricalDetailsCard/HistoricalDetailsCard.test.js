import HistoricalDetailsCard from "@/components/common/HistoricalDetailsCard";
import { render } from "@testing-library/react";

describe("HistoricalDetailsCard Component", () => {
  it("should render the component", () => {
    const { getByText, getAllByText } = render(
    <HistoricalDetailsCard title={"Test title"} subtitle={"Test Subtitle"} objArr={[["Test 1", ["t", "t"]], ["", "Test 2"]]} cols={2}/>
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

  it("empty cols parameter ", () => {
    const { getByText, getAllByText } = render(
    <HistoricalDetailsCard title={"Test title"} subtitle={"Test Subtitle"} objArr={[[], ]} />
    );
    expect(getByText(/Test title/i)).toBeInTheDocument();
  });
});