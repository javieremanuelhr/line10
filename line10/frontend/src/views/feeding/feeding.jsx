import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai';

import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import { useState, useEffect } from 'react';




const Feeding = () => {
    const [bags, setBags] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:5555/bags')
            .then((response) => {
                setBags(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
}, []);

  return (
    <div className="bg-[#ffffff] h-screen screen flex flex-col font-[montserrat]">
        <div className="text-[#0f1214] text-2xl font-bold p-4 flex flex-row items-center justify-between">
            <h1 className='font-semibold'>Feeding</h1>
            <Link to='/feeding/create'>
              <div className='bg-amber-400 rounded-lg font-semibold text-lg p-1 hover:bg-amber-300'>Add</div>
            </Link>
        </div>
        <div className='px-2'>
        <table className='w-full border-collapse border-spacing-2 bg-[#0f1214] text-white'>
      <thead>
        <tr>
          <th className='border  rounded-md'>Date</th>
          <th className='border  rounded-md'>Time</th>
          <th className='border  rounded-md max-md:hidden'>Shift</th>
          <th className='border  rounded-md max-md:hidden'>Material</th>
          <th className='border  rounded-md'>Provider</th>
          <th className='border  rounded-md'>Flex Lot</th>
          <th className='border  rounded-md'>Provider Lot</th>
          <th className='border  rounded-md'>Weight</th>
          <th className='border  rounded-md'>Hopper</th>
          <th className='border  rounded-md'>Silo</th>
          <th className='border  rounded-md'>Operator</th>
          <th className='border  rounded-md'>Actions</th>
        </tr>
      </thead>
      <tbody>
  {[...bags].reverse().map((bag, index) => {
    const rowColor =
      bag.shift === 'A' ? 'bg-blue-600' :
      bag.shift === 'B' ? 'bg-amber-600' :
      bag.shift === 'C' ? 'bg-purple-600' :
      'bg-gray-300'; // Default color

    return (
      <tr key={bag.id} className={`h-8 font-bold ${rowColor} text-white`}>
        <td className='border rounded-md text-center'>{bag.date}</td>
        <td className='border rounded-md text-center'>{bag.time}</td>
        <td className='border rounded-md text-center max-md:hidden'>{bag.shift}</td>
        <td className='border rounded-md text-center max-md:hidden'>{bag.material}</td>
        <td className='border rounded-md text-center'>{bag.provider}</td>
        <td className='border rounded-md text-center'>{bag.flexLot}</td>
        <td className='border rounded-md text-center'>{bag.providerLot}</td>
        <td className='border rounded-md text-center'>{bag.weight}</td>
        <td className='border rounded-md text-center'>{bag.hopper}</td>
        <td className='border rounded-md text-center'>{bag.silo}</td>
        <td className='border rounded-md text-center'>{bag.operator}</td>
        <td className='border rounded-md text-center'>
          <div className='flex justify-center gap-0'>
            <Link to={`/feeding/edit/${bag._id}`}>
              <AiOutlineEdit className='text-black mx-1' />
            </Link>
            <Link to={`/feeding/delete/${bag._id}`}>
              <MdOutlineDelete className='text-black mx-1 cursor-pointer' />
            </Link>
          </div>
        </td>
      </tr>
    );
  })}
</tbody>

    </table>
        </div>
    </div>
  )
}

export default Feeding;