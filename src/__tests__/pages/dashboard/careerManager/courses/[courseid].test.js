import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { render } from "@testing-library/react";
import CoursePage from "@/pages/dashboard/careerManager/courses/[courseid]";
import axios from "axios";

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
