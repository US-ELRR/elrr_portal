import CoursesPage from "@/pages/dashboard/learner/courses/index";
import { act, fireEvent, render } from "@testing-library/react";
import axios from "axios";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import courseData from '@/data/courseData.json';

jest.mock('axios');

describe("CoursesPage Component", () => {
    it("should render the component", () => {
        axios.get.mockImplementation(() => Promise.resolve({ data: {courseData} }));
        const { getByText } = render(
            <MemoryRouterProvider>
                <CoursesPage />
            </MemoryRouterProvider> );
            
        expect(getByText("Courses Page")).toBeInTheDocument();
        const button = getByText('Download');
        act(() => {
            fireEvent.click(button);
        });
        act(() => {
            fireEvent.click(getByText("PDF"));
        });

        act(() => {
            fireEvent.click(button);
        });
        act(() => {
            fireEvent.click(getByText("CSV"));
        });
    });
});
