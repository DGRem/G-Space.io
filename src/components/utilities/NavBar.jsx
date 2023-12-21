import { Link } from "react-router-dom";
import React, { useEffect } from 'react';


export default function NavBar () {
    useEffect(() => {
        const handleToggle = () => {
            const menus = document.querySelectorAll('.navbar-menu');
            for (let i = 0; i < menus.length; i++) {
                menus[i].classList.toggle('hidden');
            }
        };

        // open
        const burgers = document.querySelectorAll('.navbar-burger');
        if (burgers.length) {
            burgers.forEach(burger => {
                burger.addEventListener('click', handleToggle);
            });
        }

        // close
        const closes = document.querySelectorAll('.navbar-close');
        const backdrops = document.querySelectorAll('.navbar-backdrop');
        if (closes.length) {
            closes.forEach(close => {
                close.addEventListener('click', handleToggle);
            });
        }

        if (backdrops.length) {
            backdrops.forEach(backdrop => {
                backdrop.addEventListener('click', handleToggle);
            });
        }

        // Cleanup on component unmount
        return () => {
            if (burgers.length) {
                burgers.forEach(burger => {
                    burger.removeEventListener('click', handleToggle);
                });
            }

            if (closes.length) {
                closes.forEach(close => {
                    close.removeEventListener('click', handleToggle);
                });
            }

            if (backdrops.length) {
                backdrops.forEach(backdrop => {
                    backdrop.removeEventListener('click', handleToggle);
                });
            }
        };
    }, []);

    return (
        <>
            <nav className="absolute z-10 px-4 py-4 flex justify-center items-center backdrop-blur-sm bg-transparent border-b-[1px] border-b-slate-300 w-full">
                <div className="container flex justify-between">
                    <a className="text-3xl text-white font-BrunoSC w-10" href="#">
                        GSPACE
                    </a>
                    <div className="lg:hidden">
                        <button className="navbar-burger flex items-center text-blue-600 p-3">
                            <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Mobile menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="lg:flex hidden">
                        <ul className="flex items-center lg:space-x-10 ml-[31rem] text-white">
                            <li className="transition-transform transform hover:scale-110"><a href="">About Us</a></li>
                            <li className="transition-transform transform hover:scale-110"><a href="">Book Now!</a></li>
                            <li className="transition-transform transform hover:scale-110"><a href="">Contact Us</a></li>
                            <li className="transition-transform transform hover:scale-110"><a href="">FAQ&apos;s</a></li>
                        </ul>
                    </div>
                    <Link className="hidden lg:inline-block lg:ml-auto lg:mr-3 w-[90px] text-center bg-green px-4 py-1 rounded-lg drop-shadow-md transition-transform transform hover:scale-110" to="/login">Log In</Link>
                    <Link className="hidden lg:inline-block w-[90px] text-center bg-white text-red px-4 py-1 rounded-lg drop-shadow-md transition-transform transform hover:scale-110" to="/register">Register</Link>
                </div>
            </nav>
            <div className="navbar-menu relative z-50 hidden">
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-gradient-to-br from-violet-800 to-teal-400 border-r overflow-y-auto">
                    <div className="flex items-center mb-8">
                        <a className="mr-auto text-3xl font-bold leading-none" href="#">
                            GSPACE
                        </a>
                        <button className="navbar-close">
                            <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <ul>
                        <li className="transition-transform transform hover:scale-110"><a href="">About Us</a></li>
                        <li className="transition-transform transform hover:scale-110"><a href="">Book Now!</a></li>
                        <li className="transition-transform transform hover:scale-110"><a href="">Reviews</a></li>
                        <li className="transition-transform transform hover:scale-110"><a href="">Contact Us</a></li>
                        <li className="transition-transform transform hover:scale-110"><a href="">FAQ&apos;s</a></li>
                        </ul>
                    </div>
                    <div className="mt-auto">
                        <div className="pt-6">
                            <a className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold bg-gray-50 hover:bg-gray-100 rounded " href="#">Sign in</a>
                            <a className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded" href="#">Sign Up</a>
                        </div>
                        <p className="my-4 text-xs text-center text-white">
                            <span>Copyright © 2021</span>
                        </p>
                    </div>
                </nav>
            </div>
        </>
    )
}