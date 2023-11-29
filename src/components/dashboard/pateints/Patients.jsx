import React, { useState } from 'react';
import Pataientstable from './Pataientstable';
import { FaPlus } from 'react-icons/fa';
import { LuRefreshCcw } from 'react-icons/lu';
import AddCaptain from '../../add-captain/AddCaptain';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setCaptainsreducer } from '../../../redux/captainReducer/captainReducer';

const Patients = () => {
    const dispatch = useDispatch();
    const [modal, setmodal] = useState(false);
    const FetchData = () => {
        axios.get('https://kuricmt.onrender.com/captains')
            .then((response) => {
                dispatch(setCaptainsreducer(response.data.AllCaptains))
                
                console.log(response.data.AllCaptains)
            })
            .catch((err) => {
                console.log('an error', err)
            })
    }
    return (
        <div className='p-4'>
            <div className="flex items-center justify-between">
                <div>
                    <h4 className='font-semibold text-lg pl-2 my-5'>Class Captains</h4>
                </div>
                <div className='flex items-center'>
                    <span className='block pr-5 cursor-pointer' onClick={FetchData}><LuRefreshCcw /></span>
                    <button onClick={() => setmodal(true)} className='bg-blue-800 text-gray-200 rounded px-5 py-2 flex items-center'><span className='pr-3'><FaPlus /></span> Add New Captain</button>
                </div>
            </div>
            <Pataientstable />
            {
                modal &&
                <div onClick={() => setmodal(false)} className='bg-gray-700 opacity-75 fixed top-0 left-0 w-full h-full z-10'></div>
            }
            {
                modal &&
                <AddCaptain setmodal={setmodal}/>
            }
        </div>
    );
};

export default Patients;