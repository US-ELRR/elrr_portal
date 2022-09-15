import { render } from "@testing-library/react";
import axios from "axios";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import axiosInstance from "@/configurations/axiosInsance";

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
