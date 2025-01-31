import React, { useState, useEffect } from 'react';
import BackButton from './backbutton';

import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditBag = () => {
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
  const {id} = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/bags/${id}`)
    .then((response) => {
        setDate(response.data.date);
        setTime(response.data.time)
        setShift(response.data.shift)
        setMaterial(response.data.material)
        setProvider(response.data.provider)
        setFlexLot(response.data.flexLot)
        setProviderLot(response.data.providerLot)
        setBagNumber(response.data.bagNumber)
        setWeight(response.data.weight)
        setHopper(response.data.hopper)
        setSilo(response.data.silo)
        setOperator(response.data.operator)
        setLoading(false);
      }).catch((error) => {
        setLoading(false);
        alert('An error happened. Please Chack console');
        console.log(error);
      });
  }, [])
  
  const handleEditBag = () => {
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
      .put(`http://localhost:5555/bags/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Bag Edited successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Edit Book</h1>

      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Date</label>
          <input
            type='date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Time</label>
          <input
            type='text'
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Shift</label>
          <input
            type='text'
            value={shift}
            onChange={(e) => setShift(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Material</label>
          <input
            type='text'
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Provider</label>
          <input
            type='text'
            value={provider}
            onChange={(e) => setProvider(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>flexLot</label>
          <input
            type='text'
            value={flexLot}
            onChange={(e) => setFlexLot(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Provider Lot</label>
          <input
            type='text'
            value={providerLot}
            onChange={(e) => setProviderLot(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Bag Number</label>
          <input
            type='text'
            value={bagNumber}
            onChange={(e) => setBagNumber(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Weight</label>
          <input
            type='number'
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Hopper</label>
          <input
            type='text'
            value={hopper}
            onChange={(e) => setHopper(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Silo</label>
          <input
            type='text'
            value={silo}
            onChange={(e) => setSilo(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Operator</label>
          <input
            type='text'
            value={operator}
            onChange={(e) => setOperator(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <button onClick={handleEditBag} className='p-2 bg-sky-300 m-8'>
          Save
        </button>
      </div>
    </div>
  )
};

export default EditBag;