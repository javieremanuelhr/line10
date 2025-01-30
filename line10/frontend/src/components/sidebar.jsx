import React from 'react';
import { NavLink } from 'react-router-dom';

import '../index.css';

const Sidebar = () => {
    return (
        <div className="flex flex-col bg-[#0f1214] h-screen  ">
            {/* Logo Section */}
            <div className="flex items-center justify-start px-6 h-16">
                <h1 className="text-white text-2xl font-bold">LINE 10</h1>
            </div>

            {/* Menu Items */}
            <div className="mt-4 space-y-6 px-4">
                {/* Home Section */}
                <div>
                    <p className="text-gray-500 text-sm uppercase font-semibold mb-2">Home</p>
                    <NavLink
                        to="/"
                        className="flex items-center text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md transition"
                        activeClassName="bg-gray-700 text-white"
                    >
                        
                        Analytics
                    </NavLink>
                </div>

                {/* Utilities Section */}
                <div>
                    <p className="text-gray-500 text-sm uppercase font-semibold mb-2">Roles</p>
                    <NavLink
                        to="/supervisor"
                        className="flex items-center text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md transition"
                        activeClassName="bg-gray-700 text-white"
                    >
                        
                        Supervisor
                    </NavLink>
                    <NavLink
                        to="/operator"
                        className="flex items-center text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md transition"
                        activeClassName="bg-gray-700 text-white"
                    >
                        
                        Operator
                    </NavLink>
                    <NavLink
                        to="/feeding"
                        className="flex items-center text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md transition"
                        activeClassName="bg-gray-700 text-white"
                    >
                        
                        Feeding
                    </NavLink>
                    <NavLink
                        to="/winder"
                        className="flex items-center text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md transition"
                        activeClassName="bg-gray-700 text-white"
                    >
                        
                        Winder
                    </NavLink>
                </div>

                {/* Auth Section */}
                <div>
                    <p className="text-gray-500 text-sm uppercase font-semibold mb-2">Auth</p>
                    <NavLink
                        to="/login"
                        className="flex items-center text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md transition"
                        activeClassName="bg-gray-700 text-white"
                    >
                       
                        Login
                    </NavLink>
                    <NavLink
                        to="/register"
                        className="flex items-center text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md transition"
                        activeClassName="bg-gray-700 text-white"
                    >
                        
                        Register
                    </NavLink>
                </div>

                {/* Extra Section */}
                <div>
                    <p className="text-gray-500 text-sm uppercase font-semibold mb-2">Extra</p>
                    <NavLink
                        to="/icons"
                        className="flex items-center text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md transition"
                        activeClassName="bg-gray-700 text-white"
                    >
                        
                        Icons
                    </NavLink>
                    <NavLink
                        to="/sample"
                        className="flex items-center hover:text-white hover:bg-blue-500 px-3 py-2 rounded-md bg-blue-600 text-white transition"
                    >
                        
                        Sample Page
                    </NavLink>
                </div>
                <div>
                <p className="text-gray-500 text-sm uppercase font-semibold mb-2">Logout</p>
                <NavLink
                    to="/logout"
                    className="flex items-center text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md transition"
                    activeClassName="bg-gray-700 text-white"
                >
                    
                    <p class name="text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md transition">Account</p>
                </NavLink>
            </div>
            </div>
        </div>
    );
};

export default Sidebar;
