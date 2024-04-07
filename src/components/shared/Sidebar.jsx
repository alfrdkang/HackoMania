import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineDashboard, MdOutlineAccountCircle, MdOutlineSettings, MdLogout } from "react-icons/md";

export default function Sidebar() {
  return (
    <div className='flex flex-col w-1/5  p-5 bg-sky-950 text-white font-rubik h-full'>
      <div className='text-4xl px-3 py-7 font-bold'>theSideBar</div>
      <Link to='/'><div className='text-xl flex items-center p-3 hover:bg-gray-200 hover:text-sky-950 hover:translate-y-1 rounded-md'>
        <MdOutlineDashboard className='mx-2'/>
        <p>Dashboard</p>
      </div></Link>
      <Link to='/account'><div className='text-xl flex items-center p-3 hover:bg-gray-200 hover:text-sky-950 hover:translate-y-1 rounded-md'>
        <MdOutlineAccountCircle className='mx-2'/>
        <p>Account</p>
      </div></Link>
      <div className="flex-1"></div>
      <Link to='/settings'><div className='text-xl flex items-center p-3 hover:bg-gray-200 hover:text-sky-950 hover:-translate-y-1 rounded-md'>
        <MdOutlineSettings className='mx-2'/>
        <p>Settings</p>
      </div></Link>
      <Link to='/signout'><div className='text-xl flex items-center p-3 hover:bg-gray-200 hover:text-sky-950 hover:-translate-y-1 rounded-md'>
        <MdLogout className='mx-2'/>
        <p>Sign Out</p>
      </div></Link>
    </div>
  )
}
