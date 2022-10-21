import React from 'react'
import { Link } from 'react-router-dom';

const quickLinks = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "About",
        link: "/about",
    },
    {
        name: "Home",
        link: "/",
    },
    {
        name: "About",
        link: "/about",
    },
];

const pagesLiks = [
    {
        name: "Home page",
        link: "/",
    },
    {
        name: "About page",
        link: "/about",
    },
    {
        name: "Home page",
        link: "/",
    },
    {
        name: "About page",
        link: "/about",
    },
];

const Footer = () => {

    return (
        <footer className="bg-black overflow-hidden">
            <div className="container mx-auto">
                <div className="md:grid gap-8 md:grid-cols-12 py-14">
                    <div className="md:col-span-12 lg:col-span-4  xl:col-span-4 mb-10 xl:mb-0">
                        <Link to={'/'}>
                            <h3 className="text-cyan-500 font-extrabold text-lg shadow-inner mb-8 leading-4">
                                LondoGen
                            </h3>
                        </Link>
                        <p
                            className="text-xxs font-normal leading-6 mb-6 text-slate-400"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique doloremque aspernatur, sed corrupti numquam officiis, ut iure ipsum, natus nam fugiat repellat nulla alias pariatur.
                        </p>
                    </div>
                    <div className="md:col-span-6 lg:col-span-4 xl:col-span-3 mb-10 xl:mb-0 flex justify-center">
                        <div>
                            <h3 className="text-lg text-white font-bold mb-6 leading-4">
                                Quick Link
                            </h3>
                            {quickLinks.map((item, index) => (
                                <Link to={item.link} key={index} className=" py-1.5 mb-1 text-sm text-slate-400 hover:text-cyan-500 font-normal block transition-all duration-300">
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="md:col-span-6 lg:col-span-4 xl:col-span-3 mb-10 xl:mb-0 flex justify-center">
                        <div>
                            <h3 className="text-lg text-white font-bold mb-6 leading-4">
                                Pages
                            </h3>
                            {pagesLiks.map((item, index) => (
                                <Link to={item.link} key={index} className=" py-1.5 mb-1 text-sm text-slate-400 hover:text-cyan-500 font-normal block transition-all duration-300">
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer