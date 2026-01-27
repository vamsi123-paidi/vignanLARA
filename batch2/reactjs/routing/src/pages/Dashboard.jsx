import React from 'react'
import {useNavigate,Outlet} from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate()
  return (
    <div>
        <button className='btn btn-primary' onClick={()=>{navigate('profile')}}>Profile</button>
        <button className='btn btn-primary' onClick={()=>{navigate('settings')}}>Settings</button>
        <Outlet/>
    </div>
  )
}

export default Dashboard