import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineDelete } from 'react-icons/md';
import { MdOutlineAddBox } from 'react-icons/md';

const Winder = () => {
  const [jumbos, setJumbos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:5555/jumbos')
      .then((response) => {
        setJumbos(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  // Function to delete a jumbo
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this item?');
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5555/jumbos/${id}`);
      // Remove deleted item from state
      setJumbos((prevJumbos) => prevJumbos.filter((jumbo) => jumbo.id !== id));
    } catch (error) {
      console.log('Error deleting item:', error);
    }
  };

  return (
    <div className="bg-[#ffffff] h-screen flex flex-col font-[montserrat]">
      <div className="text-[#0f1214] text-2xl font-bold p-4 flex flex-row items-center w-full justify-between">
        <h1 className='font-semibold'>Winder</h1>
        <Link to='/winder/create'>
          <div className='bg-amber-400 rounded-lg font-semibold text-lg p-1 hover:bg-amber-300'>Add</div>
        </Link>
        
      </div>
      <div className='px-2'>
        <table className='w-full border-collapse border-spacing-2 '>
          <thead>
            <tr className='bg-[#0f1214] text-white'>
              <th className='border rounded-md'>Date</th>
              <th className='border rounded-md'>#</th>
              <th className='border rounded-md max-md:hidden'>Shift</th>
              <th className='border rounded-md max-md:hidden'>Material</th>
              <th className='border rounded-md'>Thickness</th>
              <th className='border rounded-md'>Width</th>
              <th className='border rounded-md'>Length</th>
              <th className='border rounded-md'>Weight</th>
              <th className='border rounded-md'>Corona</th>
              <th className='border rounded-md'>In</th>
              <th className='border rounded-md'>Out</th>
              <th className='border rounded-md'>Status</th>
              <th className='border rounded-md'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {jumbos.slice().reverse().map((jumbo) => {
              const rowColor = jumbo.shift === 'A' ? 'bg-blue-500' :
                jumbo.shift === 'B' ? 'bg-orange-500' :
                jumbo.shift === 'C' ? 'bg-purple-500' :
                'bg-gray-300'; // Default color

              return (
                <tr key={jumbo.id} className={`h-8 font-bold ${rowColor} text-white`}>
                  <td className='border rounded-md text-center'>{jumbo.date}</td>
                  <td className='border rounded-md text-center'>{jumbo.number}</td>
                  <td className='border rounded-md text-center max-md:hidden'>{jumbo.shift}</td>
                  <td className='border rounded-md text-center max-md:hidden'>{jumbo.material}</td>
                  <td className='border rounded-md text-center'>{jumbo.thickness}</td>
                  <td className='border rounded-md text-center'>{jumbo.width}</td>
                  <td className='border rounded-md text-center'>{jumbo.length}</td>
                  <td className='border rounded-md text-center'>{Math.round((jumbo.thickness * jumbo.width * jumbo.length * 1.4) / 1000000)}</td>
                  <td className='border rounded-md text-center'>{jumbo.corona ? 'YES' : 'NO'}</td>
                  <td className='border rounded-md text-center'>{jumbo.in}</td>
                  <td className='border rounded-md text-center'>{jumbo.out}</td>
                  <td className='border rounded-md text-center'>{jumbo.status}</td>
                  <td className='border rounded-md text-center'>
                    <div className='flex justify-center gap-2'>
                      <Link to={`/winder/${jumbo.id}/edit`}>
                        <AiOutlineEdit className='text-green-500 cursor-pointer' />
                      </Link>
                      <MdOutlineDelete 
                        className='text-red-500 cursor-pointer' 
                        onClick={() => handleDelete(jumbo.id)}
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Winder;
