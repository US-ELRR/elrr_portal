import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { render } from "@testing-library/react";
import axios from "axios";

jest.mock('axios');

describe("axiosInstance ", () => {
    it("should mock axiosInstance", () => {
        axios.create.mockImplementation(() => Promise.resolve(
            { 
            baseURL: config.service,
            headers: {
              'Content-Type': 'application/json',
            },  
        }));
        render(
            <MemoryRouterProvider>
                <axiosInstance />
            </MemoryRouterProvider> );
            

    });
});
