import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dahboard
    = () => {
        return (
            <div>Dahboard
                <Link to='profile'>Profile</Link>
                <Link to='settings'>Settings</Link>
                <Outlet/>
            </div>
        )
    }

export default Dahboard
