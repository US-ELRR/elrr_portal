import { ChevronDownIcon } from '@heroicons/react/solid'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

export default function DropDownButton({ buttonText, items, handleDownloadClick }) {
    return (
        <div className="rounded-md">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className=' inline-flex items-center px-4 py-2 text-sm font-bold leading-5 text-white transition duration-75 ease-in-out bg-dod-500 border border-transparent rounded-md hover:bg-dod-700 focus:outline-none focus:ring-dod-500 focus:ring-2 ring-offset-1 focus:border-dod-500'>
                        {buttonText}
                        <ChevronDownIcon
                            className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                            aria-hidden="true"
                        />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="z-50 absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="p1">
                            {items.map((eachItem) => (
                                <Menu.Item key={eachItem}>
                                    {({ active }) => (
                                        <button
                                            onClick={() => handleDownloadClick(eachItem)}
                                            className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                        >

                                            {eachItem}
                                        </button>
                                    )}
                                </Menu.Item>
                            ))}

                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}