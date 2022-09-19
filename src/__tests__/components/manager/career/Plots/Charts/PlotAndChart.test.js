import { act, render } from "@testing-library/react";
import axios from "axios";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import courseData from '@/data/courseData.json';
import EmploymentCourseScatterPlot from "@/components/manager/career/EmploymentCourseScatterPlot";
import CompetenciesRadarChart from "@/components/manager/career/CompetenciesRadarChart";

jest.mock('axios');

describe("EmploymentCourseScatterPlot Component", () => {
    const employmentData = {
        "history": [
            {
              "employment": "Army",
              "courses": [
                {
                  "status": "ABANDONED"
                },
                {
                  "status": "COMPLETED"
                },
                {
                  "status": "ABANDONED"
                },
                {
                  "status": "COMPLETED"
                },
                {
                  "status": "COMPLETED"
                }
              ]
            },
            {
              "employment": "Navy",
              "courses": [
                {
                  "status": "COMPLETED"
                },
                {
                  "status": "COMPLETED"
                },
                {
                  "status": "COMPLETED"
                }
              ]
            },
            {
              "employment": "Marines",
              "courses": [
                {
                  "status": "COMPLETED"
                },
                {
                  "status": "ABANDONED"
                }
              ]
            },
            {
              "employment": "Air Force",
              "courses": [
                {
                  "status": "REGISTERED"
                },
                {
                  "status": "COMPLETED"
                },
                {
                  "status": "COMPLETED"
                },
                {
                  "status": "COMPLETED"
                }
              ]
            }
          ]
    }
    it("should render the component", () => {
        act(() => {
          axios.get.mockImplementation(() => Promise.resolve({ data: {employmentData} }));
        });
          const { getByText } = render(
            <MemoryRouterProvider>
                <EmploymentCourseScatterPlot userId={"101"} />
            </MemoryRouterProvider> );
            
        // expect(getByText("Goals Page")).toBeInTheDocument();

    });
});

describe("CompetenciesRadarChart Component", () => {
    it("should render the component", () => {
        axios.get.mockImplementation(() => Promise.resolve({ data: {courseData} }));
        const { getByText } = render(
            <MemoryRouterProvider>
                <CompetenciesRadarChart userId={"101"} />
            </MemoryRouterProvider> );
            
        // expect(getByText("Goals Page")).toBeInTheDocument();

    });
});
