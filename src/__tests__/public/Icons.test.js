import DocumentActiveIcon from "@/public/icons/DocumentActiveIcon";
import DocumentInactiveIcon from "@/public/icons/DocumentInactiveIcon";
import EditActiveIcon from "@/public/icons/EditActiveIcon";
import EditInactiveIcon from "@/public/icons/EditInactiveIcon";
import { render } from "@testing-library/react";

describe("Icon Components", () => {
    
    it("should render the DocumentActiveIcon component", () => {
        render(<DocumentActiveIcon props={"test"}/> );
    });

    it("should render the DocumentInactiveIcon component", () => {
        render(<DocumentInactiveIcon props={"test"}/> );
    });

    it("should render the EditActiveIcon component", () => {
        render(<EditActiveIcon props={"test"}/> );
    });

    it("should render the EditInactiveIcon component", () => {
        render(<EditInactiveIcon props={"test"}/> );
    });
});
