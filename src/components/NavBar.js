import { useRef, useState } from 'react';
import "./NavBar.css";

function NavBar() {
    const providerDropdownRef = useRef(null);
    const [isProviderDropdownActive, setIsProviderDropdownActive] = useState(false);
    const onProviderDropdownClick = () => setIsProviderDropdownActive(!isProviderDropdownActive);

    const mobileMenuRef = useRef(null);
    const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
    const onMobileMenuClick = () => setIsMobileMenuActive(!isMobileMenuActive);

    return (
        <nav className="bg-gray-800">
            <div className="mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                            onClick={onMobileMenuClick}
                        >
                            <span className="sr-only">Open main menu</span>
                            <div className={`hamburger hamburger--spring js-hamburger ${isMobileMenuActive ? 'is-active' : ''}`}>
                                <div className="hamburger-box">
                                    <div className="hamburger-inner"/>
                                </div>
                            </div>
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <img className="logo-svg" src="/static/logo.svg" alt="" width="36" height="36" />
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <a href="#"
                                   className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>
                                <a href="#"
                                   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</a>
                                <a href="#"
                                   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>
                                <a href="#"
                                   className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</a>
                            </div>
                        </div>
                    </div>
                    <div
                        className="absolute z-10 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="ml-3 relative">
                            <div>
                                <button
                                    className="text-gray-300 text-sm font-medium bg-gray-800 flex text-sm rounded-full focus:outline-none focus:underline"
                                    id="user-menu"
                                    aria-haspopup="true"
                                    onClick={onProviderDropdownClick}>
                                    Ziņu avots
                                </button>
                            </div>
                            <div
                                ref={providerDropdownRef}
                                className={`${isProviderDropdownActive ? '' : 'hidden'} origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5`}
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="user-menu">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                   role="menuitem">LSM</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                   role="menuitem">Delfi</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`sm:hidden ${isMobileMenuActive ? '' : 'hidden'}`} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <a href="#"
                       className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Visas ziņas</a>
                    <a href="#"
                       className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Popularakas</a>
                    <a href="#"
                       className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Latvija</a>
                    <a href="#"
                       className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Pasaule</a>
                </div>
            </div>
        </nav>
    )
}


export default NavBar;
