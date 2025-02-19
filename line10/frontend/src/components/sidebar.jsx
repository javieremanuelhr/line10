import React from 'react';
import { NavLink } from 'react-router-dom';

import '../index.css';

const Sidebar = () => {
    return (
        <div className="flex flex-col bg-[#0f1214] h-screen font-[montserrat] justify-between">
            <div>
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
                            to="/analytics"
                            className={({ isActive }) =>
                                isActive
                                    ? "flex items-center text-white bg-blue-600 px-3 py-2 rounded-md transition"
                                    : "flex items-center text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md transition"
                            }
                        >
                            Analytics
                        </NavLink>
                    </div>

                    {/* Utilities Section */}
                    <div>
                        <p className="text-gray-500 text-sm uppercase font-semibold mb-2">Roles</p>
                        <NavLink
                            to="/supervisor"
                            className={({ isActive }) =>
                                isActive
                                    ? "flex items-center text-white bg-blue-600 px-3 py-2 rounded-md transition"
                                    : "flex items-center text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md transition"
                            }
                        >
                            Supervisor
                        </NavLink>
                        <NavLink
                            to="/operator"
                            className={({ isActive }) =>
                                isActive
                                    ? "flex items-center text-white bg-blue-600 px-3 py-2 rounded-md transition"
                                    : "flex items-center text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md transition"
                            }
                        >
                            Operator
                        </NavLink>
                        <NavLink
                            to="/feeding"
                            className={({ isActive }) =>
                                isActive
                                    ? "flex items-center text-white bg-blue-600 px-3 py-2 rounded-md transition"
                                    : "flex items-center text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md transition"
                            }
                        >
                            Feeding
                        </NavLink>
                        <NavLink
                            to="/winder"
                            className={({ isActive }) =>
                                isActive
                                    ? "flex items-center text-white bg-blue-600 px-3 py-2 rounded-md transition"
                                    : "flex items-center text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md transition"
                            }
                        >
                            Winder
                        </NavLink>
                        <NavLink
                            to="/lab"
                            className={({ isActive }) =>
                                isActive
                                    ? "flex items-center text-white bg-blue-600 px-3 py-2 rounded-md transition"
                                    : "flex items-center text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md transition"
                            }
                        >
                            Laboratory
                        </NavLink>
                        <NavLink
                            to="/slitter"
                            className={({ isActive }) =>
                                isActive
                                    ? "flex items-center text-white bg-blue-600 px-3 py-2 rounded-md transition"
                                    : "flex items-center text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md transition"
                            }
                        >
                            Slitter
                        </NavLink>
                    </div>
                </div>
            </div>

            {/* Logout Section */}
            <div className="px-4 mb-4">
                <p className="text-gray-500 text-sm uppercase font-semibold mb-2">Logout</p>
                <NavLink
                    to="/logout"
                    className={({ isActive }) =>
                        isActive
                            ? "flex items-center text-white bg-blue-600 px-3 py-2 rounded-md transition"
                            : "flex items-center text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md transition"
                    }
                >
                    Account
                </NavLink>
            </div>
        </div>
    );
};

export default Sidebar;
