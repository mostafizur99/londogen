import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const navigation = [
    { name: 'Home', href: '/', },
    { name: 'About', href: '/about', },
    { name: 'Projects', href: '#', },
    { name: 'Calendar', href: '#' },
]
const Header = () => {
    const [open, setOpen] = useState(false)


    return (
        <>
            <div className="container mx-auto">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <div className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="sr-only">Open main menu</span>
                            {open ? (
                                <button onClick={() => setOpen(false)}>XX</button>
                            ) : (

                                <button onClick={() => setOpen(true)}>##</button>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <h3 className='text-cyan-500 font-extrabold text-lg border border-cyan-200 px-2 py-1 shadow-inner'>LondoGen</h3>
                        </div>
                        <div className="hidden sm:ml-6 sm:block my-auto">
                            <div className="flex space-x-4 items-center ">
                                {navigation.map((item) => (
                                    <Link key={item.name} to={item.href}
                                        className={`text-gray-900 font-medium `}
                                    >{item.name}</Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className={` ${open ? 'block' : 'hidden'} sm:hidden`}>
                <div className="space-y-1 px-2 pt-2 pb-3 bg-gray-900">
                    {navigation.map((item) => (
                        <Link key={item.name} to={item.href}
                            className={`text-white font-medium block px-3 py-2  rounded-md`}
                        >{item.name}</Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Header