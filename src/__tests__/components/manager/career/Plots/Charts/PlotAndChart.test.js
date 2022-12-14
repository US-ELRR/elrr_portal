import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { act, render } from "@testing-library/react";
import CompetenciesRadarChart from "@/components/manager/career/CompetenciesRadarChart";
import EmploymentCourseScatterPlot from "@/components/manager/career/EmploymentCourseScatterPlot";
import axios from "axios";

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
      axios.get.mockImplementation(() => Promise.resolve({ data: { employmentData } }));
    });
    render(
      <MemoryRouterProvider>
        <EmploymentCourseScatterPlot userId={"101"} />
      </MemoryRouterProvider>);
  });
});

describe("CompetenciesRadarChart Component", () => {
  it("should render the component", async () => {
    axios.get.mockImplementation(() => Promise.resolve({
      data:
      {
        buckets: [
          { name: "bucket_name" },
          { name: "bucket2" }
        ]
      }
    }));
    await act(async () => {
      render(
        <MemoryRouterProvider>
          <CompetenciesRadarChart userId={"101"} />
        </MemoryRouterProvider>);
    });
  });

  it("should return an axios error", () => {
    axios.get.mockImplementation(() => Promise.reject(new Error("Throwing an error!")));
    render(
      <MemoryRouterProvider>
        <CompetenciesRadarChart userId={"101"} />
      </MemoryRouterProvider>);
  });
});
