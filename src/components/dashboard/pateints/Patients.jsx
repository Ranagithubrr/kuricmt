import React, { useState } from 'react';
import Pataientstable from './Pataientstable';
import { FaPlus } from 'react-icons/fa';
import { LuRefreshCcw } from 'react-icons/lu';
import AddCaptain from '../../add-captain/AddCaptain';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setCaptainsreducer } from '../../../redux/captainReducer/captainReducer';
import { useAuth } from '../../../contexts/AuthContext';

const Patients = () => {
    const dispatch = useDispatch();
    const { userData } = useAuth()
    const [modal, setmodal] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);
    const [oldData, setOldData] = useState({});
    const [searchText, setSearchText] = useState("")

    const FetchData = () => {
        axios.get('https://kuricmt-backend.onrender.com/captains')
            .then((response) => {
                dispatch(setCaptainsreducer(response.data.AllCaptains))

                console.log(response.data.AllCaptains)
            })
            .catch((err) => {
                console.log('an error', err)
            })
    }
    const AddNewCaptainButtonClicked = () => {
        setmodal(true);
        setOldData({});
        setIsUpdating(false);
    }
    return (
        <div className='p-4'>
            <div className="lg:flex items-center justify-between">
                <div className='lg:w-1/3'>
                    <h4 className='font-semibold text-lg pl-2 my-5 dark:text-gray-300'>Class Captains</h4>
                </div>
                <div className='lg:w-1/3'>
                    <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder='Search . . . by: name, roll, email' className='border rounded-sm px-3 py-1 outline-none w-full dark:bg-gray-900 dark:text-gray-300 dark:border-gray-500' />
                </div>
                <div className='flex items-center my-2 lg:my-0 lg:w-1/3 lg:float-right justify-between lg:justify-end'>
                    <span className='block pr-5 cursor-pointer dark:text-gray-200' onClick={FetchData}><LuRefreshCcw /></span>
                    {
                        userData && userData.type && userData.type === "admin" &&
                        <button onClick={() => AddNewCaptainButtonClicked()} className='flex items-center px-6 py-2 text-sm font-semibold text-center text-white uppercase transition-all duration-300 bg-gradient-to-r from-blue-500 to-blue-800 rounded-full shadow-md hover:from-blue-600 hover:to-blue-900 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 active:shadow-inner'><span className='pr-3'><FaPlus /></span> Add New Captain</button>
                    }
                </div>
            </div>
            <Pataientstable searchText={searchText} setIsUpdating={setIsUpdating} setOldData={setOldData} setPropmodal={setmodal} />
            {
                modal &&
                <div onClick={() => setmodal(false)} className='bg-gray-700 opacity-75 fixed top-0 left-0 w-full h-full z-10'></div>
            }
            {
                modal &&
                <AddCaptain setmodal={setmodal} isUpdating={isUpdating} oldData={oldData} />
            }
        </div>
    );
};

export default Patients;