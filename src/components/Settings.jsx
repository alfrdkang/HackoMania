import React from 'react'
import { Link } from 'react-router-dom'

export default function Settings() {
  return (
    <div>
        <p>Settings</p>
        <Link to='/' className='underline'>Click to go to Dashboard</Link>
    </div>
  )
}
