import React from 'react'
import { FaRecycle } from "react-icons/fa";
import { FaBoltLightning } from "react-icons/fa6";
import { MdCo2 } from "react-icons/md";
import { IoIosWater } from "react-icons/io";


export default function DashboardStats() {
  return (
    <div className='flex gap-4 p-3 w-full font-rubik'>
        <div className="bg-white rounded-md p-5 flex-1 border border-gray-200 flex items-center">
            <div class="relative inline-flex items-center justify-center w-16 h-16 overflow-hidden bg-green-200 border border-green-500 rounded-full">
                <FaRecycle size={28}/>
            </div>
            <div className="flex flex-col px-5">
                <div className='text-4xl font-bold'>5,670</div>
                <div className='text-sm'>Single Use Plastic Avoided</div>
            </div>
        </div>
        <div className="bg-white rounded-md p-5 flex-1 border border-gray-200 flex items-center">
            <div class="relative inline-flex items-center justify-center w-16 h-16 overflow-hidden bg-yellow-200 border border-yellow-500 rounded-full">
                <FaBoltLightning size={28}/>
            </div>
            <div className="flex flex-col px-5">
                <div className='text-4xl font-bold'>4,765</div>
                <div className='text-sm'>Kwh of Electricity Saved</div>
            </div>
        </div>
        <div className="bg-white rounded-md p-5 flex-1 border border-gray-200 flex items-center">
            <div class="relative inline-flex items-center justify-center w-16 h-16 overflow-hidden bg-red-200 border border-red-500 rounded-full">
                <MdCo2 size={40}/>
            </div>
            <div className="flex flex-col px-5">
                <div className='text-4xl font-bold'>56</div>
                <div className='text-sm'>Metric Tons of Co2 Avoided</div>
            </div>
        </div>
        <div className="bg-white rounded-md p-5 flex-1 border border-gray-200 flex items-center">
            <div class="relative inline-flex items-center justify-center w-16 h-16 overflow-hidden bg-blue-200 border border-blue-500 rounded-full">
                <IoIosWater size={28}/>
            </div>
            <div className="flex flex-col px-5">
                <div className='text-4xl font-bold'>7,190</div>
                <div className='text-sm'>Galluns of Water Saved</div>
            </div>
        </div>
    </div>
  )
}
