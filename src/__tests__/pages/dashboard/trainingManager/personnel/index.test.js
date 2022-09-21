import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { render } from "@testing-library/react";
import Personnel from "@/pages/dashboard/trainingManager/personnel/index";
import axios from "axios";
import courseData from '@/data/courseData.json';

jest.mock('axios');

// const realUseState = React.useState
// jest
//   .spyOn(React, 'useState')
//   .mockImplementationOnce(() => realUseState(CareerUserData))

describe("Personnel Component", () => {
    it("should render the component", () => {
        axios.get.mockImplementation(() => Promise.resolve({ data: {courseData} }));
        const { getByText, getAllByText } = render(
            <MemoryRouterProvider>
                <Personnel />
            </MemoryRouterProvider> );
            
        expect(getByText("Personnel Page")).toBeInTheDocument();
        expect(getByText("Assigned learners")).toBeInTheDocument();
        expect(getByText("Course Recommendations")).toBeInTheDocument();
        expect(getByText("Title")).toBeInTheDocument();
        expect(getByText("Owner")).toBeInTheDocument();
        expect(getByText("Top Courses")).toBeInTheDocument();
        expect(getAllByText("Course Status").length).toBe(2);
        expect(getByText("Course Name")).toBeInTheDocument();
        expect(getByText("Course Provider")).toBeInTheDocument();
    });
});
