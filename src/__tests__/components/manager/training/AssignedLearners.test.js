import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { act, fireEvent, render } from "@testing-library/react";
import AssignedLearners from "@/components/manager/training/AssignedLearners";

describe("AssignedLearners Component", () => {
    
    it("should render the component", () => {
        const learners=[
            {
                personnel: {
                    person: {
                        personid: "1234",
                        name: "John Doe"
                    }
                }
            },
        ]
        const { getByText } = render(
            <MemoryRouterProvider>
                <AssignedLearners learners={learners}/>
            </MemoryRouterProvider> );
            
        expect(getByText("Assigned Learners")).toBeInTheDocument();
        expect(getByText(/Id/i)).toBeInTheDocument();
        expect(getByText(/Name/i)).toBeInTheDocument();
        expect(getByText(/1234/i)).toBeInTheDocument();
        expect(getByText(/John Doe/i)).toBeInTheDocument();
        
        const button = getByText('1234');
        act(() => {
            fireEvent.click(button);
        });
    });
});
