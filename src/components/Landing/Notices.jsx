import React, { useEffect, useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Notices = ({ Notices }) => {

    const [slicedNotices, setSlicedNotices] = useState([]);

    useEffect(() => {
      // Update slicedNotices whenever notices prop changes
      setSlicedNotices(Notices && Notices.slice(0, 5));
    }, [Notices]);
  

    const formatDateAndTime = (dateTimeString) => {
        const options = { month: 'short', day: '2-digit', year: 'numeric' };
        const dateTime = new Date(dateTimeString);

        const date = dateTime.toLocaleDateString('en-US', options);
        const time = dateTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

        return { date, time };
    }
    return (
        <div>
            <h1 className='font-extrabold text-2xl bg-gradient-to-r from-gray-500 to-red-500 text-transparent bg-clip-text text-center'>
                Notices
            </h1>
            <div className='w-full mx-auto p-4'>
                {
                    slicedNotices && slicedNotices.map((ele) => {
                        return (
                            <div className="border shadow rounded-sm px-4 py-2 lg:flex lg:items-center cursor-pointer w-full lg:w-2/3 mx-auto mt-1">
                                <div className='lg:w-1/6 flex items-center'>
                                    <span className='text-red-500'><FaAngleDoubleRight /></span>
                                    <div className='font-semibold text-sm pl-2 flex lg:block'>
                                        <span className='block'>{formatDateAndTime(ele.createdAt).date}</span>
                                        <span className='block text-xs text-gray-400 pl-2 lg:pl-0'>{formatDateAndTime(ele.createdAt).time}</span>
                                    </div>
                                </div>
                                <div className='w-full lg:w-4/6'>
                                    <span className='font-semibold block lg:pl-4'>{ele.title}</span>
                                    <span className='text-xs block lg:pl-4'>{ele.description}</span>
                                </div>
                                <div className='w-full lg:w-2/6 lg:text-center mt-3 lg:mt-0'>
                                    <Link to={ele.noticeurl} target='_blank' download={ele.noticeurl} className='w-2/4 mx-auto bg-red-500 text-gray-200 font-semibold rounded py-1 px-3'>Download</Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Notices