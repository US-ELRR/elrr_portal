import { act, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import PersonPage from "@/pages/dashboard/trainingManager/personnel/[personid]";
import axios from "axios";

jest.mock('axios');

describe("PersonPage Component", () => {
    it("should render the component", () => {
        const data = {
            "person": {
                "personid": 106,
                "name": "Liz May Glass",
                "firstName": "Liz",
                "middleName": "May",
                "lastName": "Glass",
                "namePrefix": "Mrs.",
                "titleAffixcode": null,
                "nameSuffix": null,
                "qualificationAffixcode": null,
                "maidenName": "Richards",
                "preferredName": null,
                "humanResourceIdentifier": "0123456700",
                "personnelIdentificationSystem": null,
                "birthdate": "05/18/1966",
                "sex": "F",
                "primaryLanguage": "English",
                "militaryVeteranindicator": "N",
                "recordStatus": "ACTIVE"
              },
            "organization": {
                "organizationid": 100,
                "organizationname": "NAVY",
                "organizationidentifier": "D0DAF",
                "organizationidentificationcode": "G0V4",
                "organizationidentificationsystem": null,
                "industrytypeidentifier": null,
                "organizationfein": "1234573",
                "organizationdescription": "NAVY",
                "parentorganization": "NAVY",
                "recordstatus": "ACTIVE"
              },
            "contactInformation": {
                "contactinformationid": 106,
                "personid": 106,
                "contactinformation": "Email",
                "telephonenumber": "+1 403-443-5541",
                "isprimaryindicator": "Y",
                "telephonetype": "Business",
                "electronicmailaddress": "glassliz@gmail.com",
                "electronicmailaddresstype": "Business",
                "emergencycontact": "Email",
                "recordstatus": "ACTIVE"
              },
            "employment": [
                {
                  "employmentid": 100,
                  "employerName": "NAVY",
                  "employerdepartment": "",
                  "hiredate": "06/30/2012",
                  "employmentstartdate": "2012-07-07",
                  "employmentenddate": null,
                  "joblevel": "Petty Officer Third Class",
                  "occupation": "Mass Communications Specialist",
                  "employed": "Y",
                  "primarycareercategory": null,
                  "secondcarrercategory": null,
                  "recordstatus": "ACTIVE"
                },
                {
                  "employmentid": 100,
                  "employerName": "NAVY",
                  "employerdepartment": "",
                  "hiredate": "06/30/2012",
                  "employmentstartdate": "2012-07-07",
                  "employmentenddate": null,
                  "joblevel": "Petty Officer Third Class",
                  "occupation": "Mass Communications Specialist",
                  "employed": "Y",
                  "primarycareercategory": null,
                  "secondcarrercategory": null,
                  "recordstatus": "ACTIVE"
                },
                {
                  "employmentid": 100,
                  "employerName": "NAVY",
                  "employerdepartment": "",
                  "hiredate": "06/30/2012",
                  "employmentstartdate": "2012-07-07",
                  "employmentenddate": null,
                  "joblevel": "Petty Officer Third Class",
                  "occupation": "Mass Communications Specialist",
                  "employed": "Y",
                  "primarycareercategory": null,
                  "secondcarrercategory": null,
                  "recordstatus": "ACTIVE"
                },
                {
                  "employmentid": 100,
                  "employerName": "NAVY",
                  "employerdepartment": "",
                  "hiredate": "06/30/2012",
                  "employmentstartdate": "2012-07-07",
                  "employmentenddate": null,
                  "joblevel": "Petty Officer Third Class",
                  "occupation": "Mass Communications Specialist",
                  "employed": "Y",
                  "primarycareercategory": null,
                  "secondcarrercategory": null,
                  "recordstatus": "ACTIVE"
                },
                {
                  "employmentid": 100,
                  "employerName": "NAVY",
                  "employerdepartment": "",
                  "hiredate": "06/30/2012",
                  "employmentstartdate": "2012-07-07",
                  "employmentenddate": null,
                  "joblevel": "Petty Officer Third Class",
                  "occupation": "Mass Communications Specialist",
                  "employed": "Y",
                  "primarycareercategory": null,
                  "secondcarrercategory": null,
                  "recordstatus": "ACTIVE"
                },
                {
                  "employmentid": 100,
                  "employerName": "NAVY",
                  "employerdepartment": "",
                  "hiredate": "06/30/2012",
                  "employmentstartdate": "2012-07-07",
                  "employmentenddate": null,
                  "joblevel": "Petty Officer Third Class",
                  "occupation": "Mass Communications Specialist",
                  "employed": "Y",
                  "primarycareercategory": null,
                  "secondcarrercategory": null,
                  "recordstatus": "ACTIVE"
                }
              ],
            "courses": [
                {
                  "courseid": 100,
                  "name": "Fundamentals of Systems Acquisition Management",
                  "owner": "John Doe",
                  "coursesubjectmatter": null,
                  "coursesubjectabbreviation": null,
                  "courseidentifier": "ACQ 101",
                  "courselevel": null,
                  "coursenumber": "101",
                  "courseinstructionmethod": "Web",
                  "coursestartdate": "12/21/2020",
                  "courseenddate": "01/15/2021",
                  "courseenrollmentdate": "12/01/2020",
                  "courseacademicgrade": null,
                  "courseprovidername": "DAU",
                  "departmentname": "Defense Acquisition University",
                  "coursegradescalecode": null,
                  "coursemetadatarepository": null,
                  "courselrsendpoint": null,
                  "coursedescription": null,
                  "recordstatus": "ACTIVE",
                  "courselink": "https://xds.deloitteopenelrr.com/course/db9392f68d542d207e23b78e82a5d5e75da84c3bd26d4bced26dc8ed584fae630429842cc879ed02a44687b597c959b2392f5e862ae35adc0ba9ea768f6f5519"
                },
                {
                  "courseid": 101,
                  "name": "Mentoring the Acquisition Workforce",
                  "owner": "William Smith",
                  "coursesubjectmatter": null,
                  "coursesubjectabbreviation": null,
                  "courseidentifier": "CLC 067",
                  "courselevel": null,
                  "coursenumber": "67",
                  "courseinstructionmethod": "Web",
                  "coursestartdate": "01/15/2021",
                  "courseenddate": "01/25/2021",
                  "courseenrollmentdate": "01/03/2021",
                  "courseacademicgrade": null,
                  "courseprovidername": "DAU",
                  "departmentname": "Defense Acquisition University",
                  "coursegradescalecode": null,
                  "coursemetadatarepository": null,
                  "courselrsendpoint": null,
                  "coursedescription": null,
                  "recordstatus": "ACTIVE",
                  "courselink": "https://xds.deloitteopenelrr.com/course/e9ab5a26f741e0d77c577d4128c492a87e861a1ea5d97e094e1073844e7e0d44cc3b466387100be7d747c6d44ca537f4d53ad27fbd00ebf33f8a71921e2ee48d"
                },
                {
                  "courseid": 102,
                  "name": "Facilities Capital Cost of Money",
                  "owner": "Victor Brown",
                  "coursesubjectmatter": null,
                  "coursesubjectabbreviation": null,
                  "courseidentifier": "CLC 103",
                  "courselevel": null,
                  "coursenumber": "103",
                  "courseinstructionmethod": "Web",
                  "coursestartdate": "01/15/2021",
                  "courseenddate": "01/25/2021",
                  "courseenrollmentdate": "01/03/2021",
                  "courseacademicgrade": null,
                  "courseprovidername": "DAU",
                  "departmentname": "Defense Acquisition University",
                  "coursegradescalecode": null,
                  "coursemetadatarepository": null,
                  "courselrsendpoint": null,
                  "coursedescription": null,
                  "recordstatus": "ACTIVE",
                  "courselink": "https://xds.deloitteopenelrr.com/course/de47bc41700b7619b3751505ba3be12d3e5bdff06be490b7a73a98f33744eaff252ca4a8beb64b27285a3b470e10d3ea0d26a72e4c0a751c1c66f29d9e341891"
                },
          
                {
                  "courseid": 108,
                  "name": "Requirements Executive Overview Workshop",
                  "owner": "Noah Davis",
                  "coursesubjectmatter": null,
                  "coursesubjectabbreviation": null,
                  "courseidentifier": "RQM 403",
                  "courselevel": null,
                  "coursenumber": "403",
                  "courseinstructionmethod": "Web",
                  "coursestartdate": "03/03/2021",
                  "courseenddate": "03/20/2021",
                  "courseenrollmentdate": "02/27/2021",
                  "courseacademicgrade": null,
                  "courseprovidername": "DAU",
                  "departmentname": "Defense Acquisition University",
                  "coursegradescalecode": null,
                  "coursemetadatarepository": null,
                  "courselrsendpoint": null,
                  "coursedescription": null,
                  "recordstatus": "ACTIVE",
                  "courselink": "https://xds.deloitteopenelrr.com/course/f2457f074196da385cfea0235e8429ebf197b0555b9ce4cd25ecb9279f08dce8ef090b3a1c75e703978b67926a7ced821433302a842e51a2ee1055d06cfaa15c"
                }
              ],
            "competencies": [
                {
                  "competencyid": 100,
                  "competencyframeworktitle": "Skill and Roles: Business Skills and Acumen",
                  "competencyframeworkversion": null,
                  "competencyframeworkidentifier": null,
                  "competencyframeworkdescription": null,
                  "competencyframeworksubject": null,
                  "competencyframeworkvalidstartdate": null,
                  "competencyframeworkvalidenddate": null,
                  "competencydefinitionidentifier": null,
                  "competencydefinitionidentifierurl": null,
                  "competencytaxonomyid": null,
                  "competencydefinitionvalidstartdate": null,
                  "competencydefinitionvalideenddate": null,
                  "competencydefinitionparentidentifier": null,
                  "competencydefinitionparenturl": null,
                  "competencydescriptionparentcode": null,
                  "competencydefinitioncode": null,
                  "competencydefinitionstatement": null,
                  "competencydefinitiontypeurl": null,
                  "competencydefinitiontype": null,
                  "recordstatus": "ACTIVE"
                },
                {
                  "competencyid": 101,
                  "competencyframeworktitle": "Contract Principles: General Contracting Concepts",
                  "competencyframeworkversion": null,
                  "competencyframeworkidentifier": null,
                  "competencyframeworkdescription": null,
                  "competencyframeworksubject": null,
                  "competencyframeworkvalidstartdate": null,
                  "competencyframeworkvalidenddate": null,
                  "competencydefinitionidentifier": null,
                  "competencydefinitionidentifierurl": null,
                  "competencytaxonomyid": null,
                  "competencydefinitionvalidstartdate": null,
                  "competencydefinitionvalideenddate": null,
                  "competencydefinitionparentidentifier": null,
                  "competencydefinitionparenturl": null,
                  "competencydescriptionparentcode": null,
                  "competencydefinitioncode": null,
                  "competencydefinitionstatement": null,
                  "competencydefinitiontypeurl": null,
                  "competencydefinitiontype": null,
                  "recordstatus": "ACTIVE"
                }
              ],
        }

        act(() => {
            axios.get.mockImplementation(() => Promise.resolve({ data: {data} }));
        });

        const { getByText } = render(
            <MemoryRouterProvider>
                <PersonPage />
            </MemoryRouterProvider> );
            
        expect(getByText("Personnel Data")).toBeInTheDocument();
        expect(getByText("Contact Information")).toBeInTheDocument();
        expect(getByText("Organization Data")).toBeInTheDocument();
        expect(getByText("Employments")).toBeInTheDocument();
        expect(getByText("Courses")).toBeInTheDocument();
        expect(getByText("Competencies")).toBeInTheDocument();

    });
});
