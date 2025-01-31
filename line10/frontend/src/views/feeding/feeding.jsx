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
    <div className="bg-[#ffffff] h-screen screen flex flex-col ">
        <div className="text-[#0f1214] text-2xl font-bold p-4 flex flex-row ">
            <h1>Feeding</h1>
            <Link to='/feeding/create'>
              <MdOutlineAddBox className='text-yellow-500 mx-1' />
            </Link>
        </div>
        <div className='px-2'>
        <table className='w-full border-collapse border-spacing-2 bg-[#0f1214] text-white'>
      <thead>
        <tr>
          <th className='border border-slate-600 rounded-md'>Date</th>
          <th className='border border-slate-600 rounded-md'>Time</th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>Shift</th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>Material</th>
          <th className='border border-slate-600 rounded-md'>Provider</th>
          <th className='border border-slate-600 rounded-md'>Flex Lot</th>
          <th className='border border-slate-600 rounded-md'>Provider Lot</th>
          <th className='border border-slate-600 rounded-md'>Weight</th>
          <th className='border border-slate-600 rounded-md'>Hopper</th>
          <th className='border border-slate-600 rounded-md'>Silo</th>
          <th className='border border-slate-600 rounded-md'>Operator</th>
          <th className='border border-slate-600 rounded-md'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {bags.map((bag, index) => (
          <tr key={bag.id} className='h-8'>
            <td className='border border-slate-700 rounded-md text-center'>{bag.date}</td>
            <td className='border border-slate-700 rounded-md text-center'>{bag.time}</td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>{bag.shift}</td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>{bag.material}</td>
            <td className='border border-slate-700 rounded-md text-center'>{bag.provider}</td>
            <td className='border border-slate-700 rounded-md text-center'>{bag.flexLot}</td>
            <td className='border border-slate-700 rounded-md text-center'>{bag.providerLot}</td>
            <td className='border border-slate-700 rounded-md text-center'>{bag.weight}</td>
            <td className='border border-slate-700 rounded-md text-center'>{bag.hopper}</td>
            <td className='border border-slate-700 rounded-md text-center'>{bag.silo}</td>
            <td className='border border-slate-700 rounded-md text-center'>{bag.operator}</td>
            <td className='border border-slate-700 rounded-md text-center'>
            <div className='flex justify-center gap-0'>
              <Link to={`/feeding/edit/${bag._id}`}>
                <AiOutlineEdit className='text-green-500 mx-1' />
              </Link>
              <Link to={`/feeding/delete/${bag._id}`}>
              <MdOutlineDelete className='text-red-500 mx-1 cursor-pointer'/>
              </Link>
            </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
        </div>
    </div>
  )
}

export default Feeding;