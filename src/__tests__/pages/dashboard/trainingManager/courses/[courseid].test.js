import { act, fireEvent, render } from "@testing-library/react";
import axios from "axios";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import courseData from '@/data/courseData.json';
import CoursePage from "@/pages/dashboard/trainingManager/courses/[courseid]";

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
