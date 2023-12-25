import React from 'react';
import {FaAngleDoubleRight} from 'react-icons/fa'

const Notices = () => {
    return (
        <div>
            <h1 className='font-extrabold text-2xl bg-gradient-to-r from-gray-500 to-red-500 text-transparent bg-clip-text text-center'>
                Notices
            </h1>
            <div className='w-2/3 mx-auto shadow p-4'>               
                    <div className="border shadow rounded-sm px-4 py-2 flex items-center cursor-pointer">
                        <div className='w-1/6 flex items-center'>
                            <span className='text-red-500'><FaAngleDoubleRight /></span><span className='font-semibold text-sm pl-2'>24 Dec, 2023</span>
                        </div>
                        <div className='w-4/6'>
                        <span className='font-semibold pl-4'>Demo notice title uploaded</span>
                        </div>
                        <div className='w-2/6 text-center'>
                            <button className='w-2/4 mx-auto bg-red-500 text-gray-200 font-semibold rounded py-1'>Download</button>
                        </div>
                    </div>
                    <div className="border shadow rounded-sm px-4 py-2 flex items-center cursor-pointer">
                        <div className='w-1/6 flex items-center'>
                            <span className='text-red-500'><FaAngleDoubleRight /></span><span className='font-semibold text-sm pl-2'>24 Dec, 2023</span>
                        </div>
                        <div className='w-4/6'>
                        <span className='font-semibold pl-4'>Demo notice title uploaded</span>
                        </div>
                        <div className='w-2/6 text-center'>
                            <button className='w-2/4 mx-auto bg-red-500 text-gray-200 font-semibold rounded py-1'>Download</button>
                        </div>
                    </div>
                    <div className="border shadow rounded-sm px-4 py-2 flex items-center cursor-pointer">
                        <div className='w-1/6 flex items-center'>
                            <span className='text-red-500'><FaAngleDoubleRight /></span><span className='font-semibold text-sm pl-2'>24 Dec, 2023</span>
                        </div>
                        <div className='w-4/6'>
                        <span className='font-semibold pl-4'>Demo notice title uploaded</span>
                        </div>
                        <div className='w-2/6 text-center'>
                            <button className='w-2/4 mx-auto bg-red-500 text-gray-200 font-semibold rounded py-1'>Download</button>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Notices