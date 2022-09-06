import { ChevronDownIcon } from '@heroicons/react/outline';
import { Disclosure, Transition } from '@headlessui/react'
import DefaultLayout from '@/components/layouts/DefaultLayout';
import Table from '@/components/common/Table';
import useAuthRouter from '@/hooks/useAuthRouter';
import useStore from '@/store/store';

export default function GoalsPage() {
    const router = useAuthRouter();

    const handleClick = (id) => {
        router.push(`/dashboard/learner/goals/${id}`);
    };
    const userData = useStore((state) => state.userData);
    const keys = ['goalid', 'goalframeworktitle', 'recordstatus'];
    const cols = ['Task', 'Task Description', 'Task Status'];

    const aboutContent = [
        {   title: "Pre-Award: Plan Solicitation",
            description: "DoD Contracting Competency Model 1-2022, Job tasks associated with maintaining regulatory compliance during the Pre-Award, Solicitation Development stage of the DoD contracting process.",
            owner: "DAU",
            goalsData: [
                {'goalid':"2.1.1.1", 'goalframeworktitle':"Shape Internal Customer Requirements", 'recordstatus':"Directed"},
                {'goalid':"2.1.1.2", 'goalframeworktitle':"Conduct Market Research", 'recordstatus':"Directed"},
                {'goalid':"2.1.1.3", 'goalframeworktitle':"Performed Risk Analysis", 'recordstatus':"Directed"},
                {'goalid':"2.1.1.4", 'goalframeworktitle':"Formulating Contracting Strategy", 'recordstatus':"Directed"},
                {'goalid':"2.1.1.5", 'goalframeworktitle':"Finalize Solicitating Plan", 'recordstatus':"Directed"},
            ]
        },
        {   title: "Pre-Award: Request Offers",
            description: "DoD Contracting Competency Model 1-2022, Job tasks associated with maintaining regulatory compliance during the Pre-Award, Solicitation Development stage of the DoD contracting process.",
            owner: "DAU",
            goalsData: [
                {'goalid':"2.1.2.1", 'goalframeworktitle':"Execute Solicitation Plan", 'recordstatus':"Directed"},
                {'goalid':"2.1.2.2", 'goalframeworktitle':"Prepare Solicitations", 'recordstatus':"Directed"},
                {'goalid':"2.1.2.3", 'goalframeworktitle':"Issue Solicitations", 'recordstatus':"Directed"},
                {'goalid':"2.1.1.4", 'goalframeworktitle':"Amend Solicitations", 'recordstatus':"Directed"}
            ]
        },
        {   title: "Self-Directed Tasks",
            description: "Goal Description",
            owner: "John Doe",
            goalsData: [
                {'goalid':"1", 'goalframeworktitle':"Introduction to Robotics", 'recordstatus':"Explored"},
                {'goalid':"2", 'goalframeworktitle':"International Studies: Global Issues & Institutions", 'recordstatus':"Curated"},
                {'goalid':"3", 'goalframeworktitle':"Motivational Interviewing", 'recordstatus':"Recommended"},
            ]
        }
    ]
    const panelCode = (content) =>
        content.map((goal, index) => {
            return(
                <Disclosure key={index}>
                {({ open }) => (
                <div className='p-2 hover:bg-gray-200 hover:rounded-lg'>
                    <Disclosure.Button className="flex items-center rounded-lg justify-between text-left w-full p-5 font-medium border bg-dod-300 text-white border-gray-300 hover:opacity-90 hover:shadow ">
                        {goal.title}
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
                        {goal.title !== "Self-Directed Tasks" &&
                            <>
                                <div>
                                    Description: {goal.description}
                                </div>
                                Owner:  {goal.owner}
                            </>
                        }
                        <Table
                            data={goal.goalsData}
                            cols={cols}
                            keys={keys}
                            primaryKey={'goalid'}
                            onClick={handleClick}
                        />
                    </Disclosure.Panel>
                    </Transition>
                </div> )}
                </Disclosure>
            );
        });
    
    return (
        <DefaultLayout>
            <h1 className='text-3xl font-semibold text-center bg-gray-300 w-full py-2 '>
                Goals Page
            </h1>
            {panelCode(aboutContent)}
        </DefaultLayout>
    );
}
