import React from 'react'

export default function DashboardScore() {
  return (
    <div className='flex px-3 w-1/2 h-full font-rubik'>
        <div className="bg-white rounded-md p-5 flex-1 border border-gray-200 flex items-center">
            <div className="flex flex-col items-center px-5">
                <div className='text-6xl font-bold'>438</div>
                <div className='text-2xl'>Sustainability Score</div>
            </div>
        </div>
    </div>
  )
}
