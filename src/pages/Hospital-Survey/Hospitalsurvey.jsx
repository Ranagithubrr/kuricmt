import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AiFillEdit } from 'react-icons/ai'
import {useAuth} from '../../contexts/AuthContext';
const Hospitalsurvey = () => { 
  const {token} = useAuth();
  const [formData, setFormData] = useState({
    labassistant:  "",
    labonecomputer: "",
    labtwocomputer: "",
    laboneseat:  "",
    labtwoseat: "",
    hlabcomputer: "",
    hlabseat:  "",
  });
  const FetchData = () => {    
    axios.get('http://localhost:4000/content')
      .then((response) => {
        console.log('response is ', response.data[0]);
        setFormData({
          labassistant: response.data[0].labassistant || "",
          labonecomputer: response.data[0].labonecomputer || "",
          labtwocomputer: response.data[0].labtwocomputer || "",
          laboneseat: response.data[0].laboneseat || "",
          labtwoseat: response.data[0].labtwoseat || "",
          hlabcomputer: response.data[0].hlabcomputer || "",
          hlabseat: response.data[0].hlabseat || "",
        });       
      })
      .catch((err) => {
        console.log('an error', err)       
      })
  }

  useEffect(() => {
    FetchData();
  }, [])


  const handleInputChange = (fieldName, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };
  console.log('form data is', formData)


  const UpdateDataClicked = async () => {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    };
    const apiUrl = `http://localhost:4000/content`;
    try {
      const response = await axios.put(apiUrl, formData, { headers });
      console.log('Response:', response.data);
      FetchData()
    } catch (error) {
      console.error('Error:', error);
    }
  }
  return (
    <div className='m-5 p-3 border'>
      <h4>Department Survey</h4>
      <div className='flex gap-4 my-2'>
        <div className='w-1/2 border p-2'>
          <h4 className='font-semibold'>Staff</h4>
          <div className="grid grid-cols-2 gap-2">
            <div className="">
              <span className='text-sm text-gray-400 font-semibold  block z-400 bg-white'>Teachers</span>
              <input type="number" disabled placeholder='3' className='border outline-none p-2 w-full' />
            </div>
            <div className="">
              <span className='text-sm text-gray-400 font-semibold  block z-400 bg-white'>Lab Assistant</span>
              <input onChange={(e) => handleInputChange(e.target.name, e.target.value)} value={formData.labassistant} name='labassistant' type="number" placeholder='3' className='border outline-none p-2 w-full' />
            </div>
            <div>
              <button onClick={() => console.log(formData)} className='bg-green-600 flex items-center text-gray-200 px-4 py-2 rounded-sm'><AiFillEdit />Update</button>
            </div>
          </div>
        </div>
        <div className='w-1/2 border p-2'>
          <h4 className='font-semibold'>Software Lab 1</h4>
          <div className="grid grid-cols-2 gap-2">
            <div className="">
              <span className='text-sm text-gray-400 font-semibold  block z-400 bg-white'>Computer</span>
              <input value={formData.labonecomputer} onChange={(e) => handleInputChange(e.target.name, e.target.value)} name='labonecomputer' type="text" placeholder='30' className='border outline-none p-2 w-full' />
            </div>
            <div className="">
              <span className='text-sm text-gray-400 font-semibold  block z-400 bg-white'>Total Seat</span>
              <input value={formData.laboneseat} onChange={(e) => handleInputChange(e.target.name, e.target.value)} name='laboneseat' type="number" placeholder='50' className='border outline-none p-2 w-full' />
            </div>
          </div>
          <h4 className='font-semibold'>Software Lab 2</h4>
          <div className="grid grid-cols-2 gap-2">
            <div className="">
              <span className='text-sm text-gray-400 font-semibold  block z-400 bg-white'>Computer</span>
              <input value={formData.labtwocomputer} onChange={(e) => handleInputChange(e.target.name, e.target.value)} name='labtwocomputer' type="number" placeholder='30' className='border outline-none p-2 w-full' />
            </div>
            <div className="">
              <span className='text-sm text-gray-400 font-semibold  block z-400 bg-white'>Total Seat</span>
              <input value={formData.labtwoseat} onChange={(e) => handleInputChange(e.target.name, e.target.value)} name='labtwoseat' type="number" placeholder='50' className='border outline-none p-2 w-full' />
            </div>
          </div>
          <h4 className='font-semibold'>Hardware Lab</h4>
          <div className="grid grid-cols-2 gap-2">
            <div className="">
              <span className='text-sm text-gray-400 font-semibold  block z-400 bg-white'>Computer</span>
              <input value={formData.hlabcomputer} onChange={(e) => handleInputChange(e.target.name, e.target.value)} name='hlabcomputer' type="number" placeholder='20' className='border outline-none p-2 w-full' />
            </div>
            <div className="">
              <span className='text-sm text-gray-400 font-semibold  block z-400 bg-white'>Total Seat</span>
              <input value={formData.hlabseat} onChange={(e) => handleInputChange(e.target.name, e.target.value)} name='hlabseat' type="number" placeholder='40' className='border outline-none p-2 w-full' />
            </div>
          </div>
          <div className='my-2'>
            <button onClick={UpdateDataClicked} className='bg-green-600 flex items-center text-gray-200 px-4 py-2 rounded-sm'><AiFillEdit /> Update</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hospitalsurvey