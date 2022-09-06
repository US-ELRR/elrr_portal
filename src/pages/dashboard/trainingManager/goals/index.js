import Accordion from '@/components/Accordion';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import Table from '@/components/common/Table';
import Tabs from '@/components/Tabs';
import useAuthRouter from '@/hooks/useAuthRouter';
import useStore from '@/store/store';
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline';

export default function GoalsPage() {
    const router = useAuthRouter();

    const handleClick = (id) => {
        router.push(`/dashboard/trainingManager/goals/${id}`);
    };
    const userData = useStore((state) => state.userData);
    const keys = ['goalid', 'goalframeworktitle', 'recordstatus'];
    const cols = ['Task ID', 'Task Description', 'Task Status'];

    const aboutContent = [
        {   title: "Goal 1",
            description: "Goal Description",
            owner: "John Doe"
        },
        {   title: "Goal 2",
            description: "Goal Description",
            owner: "John Doe"
        },
        {   title: "Self-Selected Tasks",
            description: "Goal Description",
            owner: "John Doe"
        },
        {   title: "Unassigned Tasks",
            description: "Goal Description",
            owner: "John Doe"
        },
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
                        {goal.title !== "Unassigned Tasks" &&
                            <>
                                <div>
                                    Description: {goal.description}
                                </div>
                                Owner:  {goal.owner}
                            </>
                        }
                        <Table
                            data={userData?.learner?.goals}
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
