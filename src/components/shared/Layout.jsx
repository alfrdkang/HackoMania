import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

export default function Layout() {
  return (
    <div className='flex flex-row bg-gray-100 h-screen w-screen overflow-hidden'>
        <Sidebar />
        <div className='w-full h-screen'>
            <Header />
            <Outlet/>
        </div>
    </div>
  )
}
