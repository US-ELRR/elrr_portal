import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { render } from "@testing-library/react";
import CoursePage from "@/pages/dashboard/learner/courses/[courseid]";
import axios from "axios";
import courseData from '@/data/courseData.json';

jest.mock('axios');

describe("CoursePage Component", () => {
    it("should render the component", () => {
        axios.get.mockImplementation(() => Promise.resolve({ data: {courseData} }));
        const { getByText } = render(
            <MemoryRouterProvider>
                <CoursePage />
            </MemoryRouterProvider> );
            
        expect(getByText("Course Details")).toBeInTheDocument();

    });
});
