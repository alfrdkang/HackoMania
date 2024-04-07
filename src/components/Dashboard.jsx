import React from 'react'
import { Link } from 'react-router-dom'
import DashboardStats from './DashboardStats'
import DashboardChart from './DashboardChart'
import DashboardScore from './DashboardScore'

export default function Dashboard() {
  return (
    <div className='h-full w-full'>
      <DashboardStats />
      <div className='flex flex-row'>
        <DashboardChart />
        <DashboardScore />
      </div>
    </div>
  )
}
