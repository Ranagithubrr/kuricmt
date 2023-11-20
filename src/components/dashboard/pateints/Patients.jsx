import React, { useState } from 'react';
import Pataientstable from './Pataientstable';
import { Pagination } from '@mui/material';
import { FaPlus } from 'react-icons/fa';
import AddCaptain from '../../add-captain/AddCaptain';

const Patients = () => {
    const [modal, setmodal] = useState(false);
    return (
        <div>
            <div className="flex items-center justify-between">
                <h4 className='font-semibold text-lg pl-2 my-5'>Class Captains</h4>
                <button onClick={()=>setmodal(true)} className='bg-blue-800 text-gray-200 rounded px-5 py-2 flex items-center'><span className='pr-3'><FaPlus /></span> Add New Captain</button>
            </div>
            <Pataientstable />
            <div className='my-5'>
                <Pagination count={10} variant="outlined" shape="rounded" />
            </div>
            {
                modal &&
                <div onClick={()=>setmodal(false)} className='bg-gray-700 opacity-75 fixed top-0 left-0 w-full h-full z-10'></div>
            }
            {
                modal &&
                <AddCaptain />
            }
        </div>
    );
};

export default Patients;