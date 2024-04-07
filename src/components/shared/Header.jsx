import React, { Fragment } from 'react'
import { MdSearch, MdNotificationsNone } from "react-icons/md";
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <div className='flex justify-between bg-white h-16 px-6 text-xl items-center font-rubik'>
        <div className="flex w-1/5 h-2/3 items-center">
            <MdSearch size={28} className='p-1 text-neutral-400'/>
            <input
                type="search"
                className="relative m-0 block flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon2" />
        </div>
        
        <div className='flex items-center'>
            <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-gray-900">
                <MdNotificationsNone size={28}/>
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
                <Menu.Items className="absolute right-0 z-10 p-3 mt-2 w-96 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                    <Menu.Item disabled>
                        <span className="text-gray-900 block px-4 py-2 text-md flex items-center"><MdNotificationsNone size={28} className='p-1'/>Notifications</span>
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                        <a
                        className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                        )}
                        >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque suscipit mattis magna. Mauris ut accumsan dolor. Aenean felis justo, dignissim id vulputate id, congue et lectus. Etiam egestas rutrum elit, id hendrerit risus tempor ac.
                        </a>
                    )}
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                        <a
                        className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                        )}
                        >
                        Etiam et enim ac enim lacinia condimentum. Aenean quis porta nibh, eu condimentum justo.
                        </a>
                    )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                        <button
                            type="submit"
                            className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block w-full px-4 py-2 text-left text-sm'
                            )}
                        >
                            Curabitur nec orci eget felis cursus semper et id ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis accumsan erat ac eros tempus pulvinar.
                        </button>
                        )}
                    </Menu.Item>
                </div>
                </Menu.Items>
            </Transition>
            </Menu>
            <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-gray-900">
                <div class="relative inline-flex items-center justify-center w-9 h-9 overflow-hidden bg-indigo-600 rounded-full">
                    <span class="font-medium text-gray-100">AK</span>
                </div>
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
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                    <Menu.Item disabled>
                        <span className="text-gray-900 block px-4 py-2 text-md font-bold">Hi Alfred!</span>
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                        <a
                        href="#"
                        className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                        )}
                        >
                        Profile
                        </a>
                    )}
                    </Menu.Item>
                    <Menu.Item>
                    {({ active }) => (
                        <a
                        href="#"
                        className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                        )}
                        >
                        Settings
                        </a>
                    )}
                    </Menu.Item>
                    <form method="POST" action="#">
                    <Menu.Item>
                        {({ active }) => (
                        <button
                            type="submit"
                            className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block w-full px-4 py-2 text-left text-sm'
                            )}
                        >
                            Sign out
                        </button>
                        )}
                    </Menu.Item>
                    </form>
                </div>
                </Menu.Items>
            </Transition>
            </Menu>
        </div>
    </div>
  )
}
