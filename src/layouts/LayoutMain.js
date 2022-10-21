import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footers/Footer'
import Header from '../components/Headers/Header'

const LayoutMain = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default LayoutMain