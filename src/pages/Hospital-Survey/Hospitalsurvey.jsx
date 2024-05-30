import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { useAuth } from '../../contexts/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
const Hospitalsurvey = () => {
  const { token } = useAuth();
  const [formData, setFormData] = useState({
    labassistant: "",
    labonecomputer: "",
    labtwocomputer: "",
    laboneseat: "",
    labtwoseat: "",
    hlabcomputer: "",
    hlabseat: "",
  });
  const FetchData = () => {
    axios.get('https://kuricmt-backend.onrender.com/content')
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
    const apiUrl = `https://kuricmt-backend.onrender.com/content`;
    const UpdatePromise = axios.put(apiUrl, formData, { headers });
    const promiseToast = toast.promise(
      UpdatePromise,
      {
        pending: 'Updating, please wait...',
        success: 'Data Updated successfully',
        error: 'Failed to Update Data',
      }
    );
    try {
      // Wait for the deletion promise to resolve or reject
      const response = await UpdatePromise;
      console.log(response.status)

      // Manually close the toast after success
      toast.dismiss(promiseToast);
      FetchData()
    } catch (error) {
      console.error('Error:', error);
    }
  }
  return (
    <div className='m-5 p-3 border dark:border-gray-600'>
      <ToastContainer
                autoClose={1500}
            />
      <h4 className='dark:text-gray-300'>Department Survey</h4>
      <div className='md:flex gap-4 my-2'>
        <div className='md:w-1/2 border p-2 dark:border-gray-600'>
          <h4 className='font-semibold dark:text-gray-300'>Staff</h4>
          <div className="grid grid-cols-2 gap-2">
            <div className="">
              <span className='text-sm text-gray-400 font-semibold  block z-400 bg-white dark:bg-transparent dark:text-gray-300'>Teachers</span>
              <input type="number" disabled placeholder='3' className='border dark:border-gray-600 outline-none px-3 py-2 text-lg bg-white dark:bg-gray-800 dark:text-gray-200 w-full' />
            </div>
            <div className="">
              <span className='text-sm text-gray-400 font-semibold  block z-400 bg-white dark:bg-transparent dark:text-gray-300'>Lab Assistant</span>
              <input onChange={(e) => handleInputChange(e.target.name, e.target.value)} value={formData.labassistant} name='labassistant' type="number" placeholder='3' className='border dark:border-gray-600 outline-none px-3 py-2 text-lg bg-white dark:bg-gray-800 dark:text-gray-200 w-full' />
            </div>
          </div>
        </div>
        <div className='md:w-1/2 border p-2 dark:border-gray-600'>
          <h4 className='font-semibold dark:text-gray-200'>Software Lab 1</h4>
          <div className="grid grid-cols-2 gap-2">
            <div className="">
              <span className='text-sm text-gray-400 font-semibold  block z-400 bg-white dark:bg-transparent dark:text-gray-300'>Computer</span>
              <input value={formData.labonecomputer} onChange={(e) => handleInputChange(e.target.name, e.target.value)} name='labonecomputer' type="text" placeholder='30' className='border dark:border-gray-600 outline-none px-3 py-2 text-lg bg-white dark:bg-gray-800 dark:text-gray-200 w-full' />
            </div>
            <div className="">
              <span className='text-sm text-gray-400 font-semibold  block z-400 bg-white dark:bg-transparent dark:text-gray-300'>Total Seat</span>
              <input value={formData.laboneseat} onChange={(e) => handleInputChange(e.target.name, e.target.value)} name='laboneseat' type="number" placeholder='50' className='border dark:border-gray-600 outline-none px-3 py-2 text-lg bg-white dark:bg-gray-800 dark:text-gray-200 w-full' />
            </div>
          </div>
          <h4 className='font-semibold dark:text-gray-200 mt-2 md:mt-0'>Software Lab 2</h4>
          <div className="grid grid-cols-2 gap-2">
            <div className="">
              <span className='text-sm text-gray-400 font-semibold  block z-400 bg-white dark:bg-transparent dark:text-gray-300'>Computer</span>
              <input value={formData.labtwocomputer} onChange={(e) => handleInputChange(e.target.name, e.target.value)} name='labtwocomputer' type="number" placeholder='30' className='border dark:border-gray-600 outline-none px-3 py-2 text-lg bg-white dark:bg-gray-800 dark:text-gray-200 w-full' />
            </div>
            <div className="">
              <span className='text-sm text-gray-400 font-semibold  block z-400 bg-white dark:bg-transparent dark:text-gray-300'>Total Seat</span>
              <input value={formData.labtwoseat} onChange={(e) => handleInputChange(e.target.name, e.target.value)} name='labtwoseat' type="number" placeholder='50' className='border dark:border-gray-600 outline-none px-3 py-2 text-lg bg-white dark:bg-gray-800 dark:text-gray-200 w-full' />
            </div>
          </div>
          <h4 className='font-semibold dark:text-gray-200'>Hardware Lab</h4>
          <div className="grid grid-cols-2 gap-2">
            <div className="">
              <span className='text-sm text-gray-400 font-semibold  block z-400 bg-white dark:bg-transparent dark:text-gray-300'>Computer</span>
              <input value={formData.hlabcomputer} onChange={(e) => handleInputChange(e.target.name, e.target.value)} name='hlabcomputer' type="number" placeholder='20' className='border dark:border-gray-600 outline-none px-3 py-2 text-lg bg-white dark:bg-gray-800 dark:text-gray-200 w-full' />
            </div>
            <div className="">
              <span className='text-sm text-gray-400 font-semibold  block z-400 bg-white dark:bg-transparent dark:text-gray-300'>Total Seat</span>
              <input value={formData.hlabseat} onChange={(e) => handleInputChange(e.target.name, e.target.value)} name='hlabseat' type="number" placeholder='40' className='border dark:border-gray-600 outline-none px-3 py-2 text-lg bg-white dark:bg-gray-800 dark:text-gray-200 w-full' />
            </div>
          </div>
        </div>
      </div>
      <div className='my-2'>
        <button onClick={UpdateDataClicked} className='flex items-center mt-4 px-6 py-2 text-sm font-semibold text-center text-white uppercase transition-all duration-300 bg-gradient-to-r from-blue-500 to-blue-800 rounded-full shadow-md hover:from-blue-600 hover:to-blue-900 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 active:shadow-inner'><span className='mr-3'><AiFillEdit /></span> Update</button>
      </div>
    </div>
  )
}

export default Hospitalsurvey