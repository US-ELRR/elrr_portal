import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { render } from "@testing-library/react";
import Personnel from "@/pages/dashboard/careerManager/units";
import axios from "axios";
import courseData from '@/data/courseData.json';

jest.mock('axios');

describe("Personnel Component", () => {
    it("should render the component", () => {
        axios.get.mockImplementation(() => Promise.resolve({ data: {courseData} }));
        const { getByText, getAllByText } = render(
            <MemoryRouterProvider>
                <Personnel />
            </MemoryRouterProvider> );
            
        expect(getByText("Units Page")).toBeInTheDocument();
        expect(getByText("Work Units")).toBeInTheDocument();
        expect(getByText("Units Snapshot")).toBeInTheDocument();
        expect(getByText("Recommended Competencies and Skills")).toBeInTheDocument();
        expect(getByText("Competency Title")).toBeInTheDocument();
        expect(getByText("Competency Owner")).toBeInTheDocument();
        expect(getAllByText("Course Status").length).toBe(2);
        expect(getByText("Recommended Experiences")).toBeInTheDocument();
        expect(getByText("Course Name")).toBeInTheDocument();
        expect(getByText("Course Provider")).toBeInTheDocument();

    });
});
