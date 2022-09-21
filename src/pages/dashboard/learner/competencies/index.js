import { ChevronDownIcon } from '@heroicons/react/outline';
import { Disclosure, Transition } from '@headlessui/react'
import DefaultLayout from '@/components/layouts/DefaultLayout';
import Table from '@/components/common/Table';
import Tabs from '@/components/Tabs';
import useAuthRouter from '@/hooks/useAuthRouter';

export default function CompetenciesPage() {
  const keys = ['competencyframeworktitle','competencyid','provider','recordstatus'];
  const cols = ['Course Title', 'Course ID', "Coures ID",'Status'];
  const router = useAuthRouter();

  const handleClick = (id) => {
    router.push(`/dashboard/learner/competencies/${id}`);
  };

  const panelCode = (content) =>
    content.map((competency, index) => {
        return(
          <Disclosure key={index}>
            {({ open }) => (
            <div className='p-2 hover:bg-gray-200 hover:rounded-lg'>
              <Disclosure.Button className="flex items-center rounded-lg justify-between text-left w-full p-5 font-medium border bg-dod-300 text-white border-gray-300 hover:opacity-90 hover:shadow ">
                  {competency.title}
                  <ChevronDownIcon className={`w-6 h-6 ${open ? "transform rotate-180" : ""} `} />
              </Disclosure.Button>

              <Transition
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
              >
              <Disclosure.Panel className="p-5 rounded-lg border border-t-0 ml-2 border-gray-300 focus:ring-4 focus:ring-gray-200 focus:bg-gray-50">
                  {competency.title !== "Unassigned Tasks" &&
                      <div className='flex flex-col'>
                          <div>
                            <b>Description:  </b>{competency.description}
                          </div>
                          <div>
                            <b>Owner: </b>{competency.owner}
                          </div>
                      </div>
                  }
                  <Table
                    data={competency.compData}
                    cols={cols}
                    keys={keys}
                    primaryKey={'competencyid'}
                    onClick={handleClick}
                  />
              </Disclosure.Panel>
              </Transition>
            </div> )}
          </Disclosure>
        );
    });

    const awardedContent = [
      {   title: "Business Skills & Acumen",
          description: "DoD Contracting Competency Model 1-2022, Managing contracts throughout the contract life cycle while ensuring customer satisfaction",
          owner: "DAU",
          compData: [{'competencyframeworktitle':"Customer Focus", 'competencyid': "HBS 408", 'provider':"DAU",'recordstatus':"Inferred"},
            {'competencyframeworktitle':"Applied Business Analysis Techniques", 'competencyid': "BCF 275V", 'provider':"DAU",'recordstatus':"Inferred"},
            {'competencyframeworktitle':"Problem Solving for Defense Leaders", 'competencyid': "EXE 4000V", 'provider':"DAU",'recordstatus':"Inferred"},
            {'competencyframeworktitle':"Stakeholder Management", 'competencyid': "WSM 007", 'provider':"DoD Course Provider",'recordstatus':"Inferred"}]
      },
      {   title: "General Computer Science Concepts",
          description: "Version 1.2, Understanding of principles of software engineering and development; part of computer science curriculum.",
          owner: "Division of IT",
          compData: [{'competencyframeworktitle':"Introduction to Computer Science: Programming Abstractions", 'competencyid': "DODCP-CS03", 'provider':"DoD Course Provider",'recordstatus':"Inferred"},
            {'competencyframeworktitle':"Introduction to Computer Science: Programming Paradigms", 'competencyid': "DODCP-CS05", 'provider':"DoD Course Provider",'recordstatus':"Asserted"},
            {'competencyframeworktitle':"Ethics and Information Technology", 'competencyid': "DODCP-IT02", 'provider':"DoD Course Provider",'recordstatus':"Asserted"},
            {'competencyframeworktitle':"Information Technology and Global Deployment", 'competencyid': "DODCP-IT04", 'provider':"DoD Course Provider",'recordstatus':"Inferred"}]

      },
  ]
  
  const progressContent = [
    {   title: "General Contacting Concepts",
        description: "DoD Contracting Competency Model 1-2022, Fundamentals of contracting that all contract managers must understand and apply ",
        owner: "DAU",
        compData: [{'competencyframeworktitle':"Business Essentials", 'competencyid': "BUS 1100", 'provider':"DAU",'recordstatus':"Inferred"},
            {'competencyframeworktitle':"Supervisory Contracting", 'competencyid': "WSC 109", 'provider':"DAU",'recordstatus':"Inferred"}]
    },
    {   title: "Credential: Basic Military Planning",
        description: "Version 2021-2, Providing learners with an introductory overview of great topics related to military planning.",
        owner: "Open Military Institute",
        compData: [{'competencyframeworktitle':"Innovation in Military Organizations", 'competencyid': "DODCP-MS02", 'provider':"DoD Course Provider",'recordstatus':"Asserted"},
            {'competencyframeworktitle':"Understanding Military Operations", 'competencyid': "DODCP-MS04", 'provider':"DoD Course Provider",'recordstatus':"Inferred"}]
    },
  ]

  const tabNames = ['Awarded', 'In Progress']
  const components = [<div>
    {panelCode(awardedContent)}
  </div>, <div>
    {panelCode(progressContent)}
  </div>]



  return (
    <DefaultLayout>
      <h1 className='text-3xl font-semibold text-center bg-gray-300 w-full py-2 '>
        Competencies Page
      </h1>
      <Tabs tabNames={tabNames} components={components} />
    </DefaultLayout>
  );
}
