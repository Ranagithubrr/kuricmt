import React from 'react';
import {FaFileUpload} from 'react-icons/fa';

const AddNotice = () => {
  return (
    <div className='p-4 flex items-center justify-center h-80 flex-col'>
        <h2 className='font-semibold text-md'>Add a New Notice</h2>
        <input type="file" name="pdf" id="pdfup" accept='.pdf' className='hidden'/>
        <label htmlFor='pdfup' className='text-9xl cursor-pointer my-5'><FaFileUpload /></label>
        <span className='text-sm font-semibold'>(Please Select Only PDF File)</span>
        <input type="text" placeholder='Notice Title' className='border outline-none w-1/2 rounded-sm px-2 py-2 my-2'/>
        <button className='bg-blue-600 text-gray-200 font-semibold text-sm rounded px-6 py-2'>Post</button>
    </div>
  )
}

export default AddNotice