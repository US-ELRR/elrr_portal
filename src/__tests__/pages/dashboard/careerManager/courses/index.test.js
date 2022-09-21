import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { act, fireEvent, render } from "@testing-library/react";
import CoursesPage from "@/pages/dashboard/careerManager/courses";
import axios from "axios";

jest.mock('axios');

describe("CoursesPage Component", () => {

    it("should render the component", async () => {

        axios.get.mockImplementation(() => Promise.resolve({ 
            data: [
                {
                    "courseid": 100,
                    "name": "Fundamentals of Systems Acquisition Management",
                },
                {
                    "courseid": 101,
                    "name": "Mentoring the Acquisition Workforce",
                }
            ]
        }));

        let screen;
        await act(async () => {
            screen = render(
                <MemoryRouterProvider>
                    <CoursesPage />
                </MemoryRouterProvider> );
            
        });
  
        expect(screen.getByText("Courses Page")).toBeInTheDocument();
        expect(screen.getByText("Fundamentals of Systems Acquisition Management")).toBeInTheDocument();
        act(() => {
            fireEvent.click(screen.getByText("Fundamentals of Systems Acquisition Management"));
          });

    });
});
