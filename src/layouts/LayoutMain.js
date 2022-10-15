import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Headers/Header'

const LayoutMain = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

export default LayoutMain