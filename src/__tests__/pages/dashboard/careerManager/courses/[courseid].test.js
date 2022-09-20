import { act, fireEvent, render } from "@testing-library/react";
import axios from "axios";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import CoursePage from "@/pages/dashboard/careerManager/courses/[courseid]";

jest.mock('axios');

jest.mock('next/router', () => ({
    ...jest.requireActual('next/router'),
    useAuthRouter: () => ({
      query: {
            courseid: 123,
        }
    }),
  }));

describe("CoursePage Component", () => {
    const course = {
        name: "test title"
    }
    it("should render the component", async() => {
        axios.get.mockImplementation(() => Promise.resolve({ data: {course} }));

        const { getByText } = render(
            <MemoryRouterProvider>
                <CoursePage />
            </MemoryRouterProvider> );

        expect(getByText("Course Details")).toBeInTheDocument();
        // expect(screen.getByText("test title")).toBeInTheDocument();

    });
});
