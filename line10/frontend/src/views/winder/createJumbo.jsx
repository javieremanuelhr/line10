import React, { useState } from 'react';
import BackButton from './backbutton';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CreateBag = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [shift, setShift] = useState('');
  const [material, setMaterial] = useState('');
  const [provider, setProvider] = useState('');
  const [flexLot, setFlexLot] = useState('');
  const [providerLot, setProviderLot] = useState('');
  const [bagNumber, setBagNumber] = useState('');
  const [weight, setWeight] = useState('');
  const [hopper, setHopper] = useState('');
  const [silo, setSilo] = useState('');
  const [operator, setOperator] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBag = () => {
    const data = {
      date,
      time,
      shift,
      material,
      provider,
      flexLot,
      providerLot,
      bagNumber,
      weight,
      hopper,
      silo,
      operator,
    };

    setLoading(true);
    axios
      .post('http://localhost:5555/bags', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Bag Created successfully', { variant: 'success' });
        navigate('/feeding');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-4 gap-4 font-[montserrat] flex flex-col h-screen'>
        <div className='flex flex-row gap-4'>
            <BackButton />
            <h1 className='font-semibold text-2xl'>Create Jumbo</h1>
        </div>

      <div className='overflow-x-auto flex flex-col border-2 bg-slate-700 rounded-xl w-full h-screen p-4 mx-auto text-white font-bold items-center'>
        <div className='flex flex-row gap-18'>
        <div className='flex flex-col'>
        <div className='my-4'>
          <label className='text-xl mr-4'>Date</label>
          <input
            type='date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full text-white rounded-lg'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 '>Number</label>
          <input
            type='text'
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full rounded-lg'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 '>Shift</label>
          <input
            type='text'
            value={shift}
            onChange={(e) => setShift(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full rounded-lg'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 '>Material</label>
          <input
            type='text'
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full rounded-lg'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 '>Thickness</label>
          <input
            type='text'
            value={provider}
            onChange={(e) => setProvider(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full rounded-lg'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 '>Width</label>
          <input
            type='text'
            value={flexLot}
            onChange={(e) => setFlexLot(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full rounded-lg'
          />
        </div>
        </div>
        <div className='flex flex-col'>
        <div className='my-4'>
          <label className='text-xl mr-4 '>Length</label>
          <input
            type='text'
            value={providerLot}
            onChange={(e) => setProviderLot(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full rounded-lg'
          />
        </div>

        <div className='my-4'>
          <label className='text-xl mr-4 '>Corona</label>
          <input
            type='number'
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full rounded-lg'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 '>Time In</label>
          <input
            type='text'
            value={hopper}
            onChange={(e) => setHopper(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full rounded-lg'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 '>Time Out</label>
          <input
            type='text'
            value={silo}
            onChange={(e) => setSilo(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full rounded-lg'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 '>Status</label>
          <input
            type='text'
            value={operator}
            onChange={(e) => setOperator(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full rounded-lg'
          />
        </div>
        </div>
        </div>
        <button onClick={handleSaveBag} className='p-2 bg-blue-500 m-8 w-1/3 rounded-lg hover:bg-blue-400'>
          Save
        </button>
      </div>
    </div>
  );
}

export default CreateBag;