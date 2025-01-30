import React from 'react'
import { IoIosMenu } from "react-icons/io";

const topbar = () => {
  return (
    <div className="flex items-center bg-[#0f1214] text-white p-4">
      <button className="p-2 rounded-md hover:bg-gray-700 transition">
        <IoIosMenu size={24} />
      </button>
      <span className="ml-4 text-lg font-semibold">Line 10</span>
    </div>
  )
}

export default topbar