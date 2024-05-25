import React from 'react'
import { CiMenuKebab } from "react-icons/ci";
import { FaFilePdf } from "react-icons/fa";

const Notification = ({ item }) => {
    const dateString = item.createdAt;
    const date = new Date(dateString);

    const formattedDate = `${date.toLocaleDateString()} at ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    return (
        <div className='bg-gray-100 dark:bg-gray-800 shadow p-4 rounded my-2'>
            <div className='flex justify-between'>
                <h4 className='font-semibold dark:text-gray-200'>{item.title}</h4>
                <div className='flex items-center'>
                    <a href={item.noticeurl} download={item.noticeurl} target='_blank' rel="noreferrer">
                    <FaFilePdf className='text-red-500 text-3xl cursor-pointer mr-3'/>
                    </a>                   
                    <CiMenuKebab className='text-black text-md cursor-pointer dark:text-gray-200' />
                </div>
            </div>
            <div className='lg:flex justify-between'>
                <p className='text-sm text-gray-700 dark:text-gray-300 text-justify pr-4'>{item.description}</p>
                <span className='text-sm font-semibold dark:text-gray-300'>{formattedDate}</span>
            </div>           
        </div>
    )
}

export default Notification