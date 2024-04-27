import React from 'react'
import { GrAnnounce } from 'react-icons/gr'

const Announcement = () => {
    return (
        <div className='p-4 flex items-center justify-center h-80 flex-col mt-10'>
            <h2 className='font-semibold text-md'>Add a New Announcement</h2>
            <span className='text-9xl cursor-pointer my-5'><GrAnnounce /></span>
            <input type="text" placeholder='Text' className='border outline-none w-1/2 rounded-sm px-2 py-2 my-2'

            />                      
            <button className='bg-blue-600 text-gray-200 font-semibold text-sm rounded px-6 py-2' >Post</button>
        </div>
    )
}

export default Announcement