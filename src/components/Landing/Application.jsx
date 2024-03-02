import React from 'react'
import { MdEditDocument } from "react-icons/md";

const Application = () => {
    return (
        <div className='flex bg-gray-200 px-4 py-6 my-3'>
            <div className='w-1/2'>
                <span className='font-bold text-3xl text-gray-600'>Empower Your Voice</span>
                <p className='font-semibold text-gray-700'>Student Application Portal for Direct Dialogue with Chief Instructor</p>
            </div>
            <div className='flex items-center justify-center text-center w-1/2'>
                <button className='outline-none bg-red-500 text-gray-100 font-semibold text-sm px-3 py-2 rounded flex items-center'> <span className='pr-2'><MdEditDocument /></span> Write an Application</button>
            </div>
        </div>
    )
}

export default Application