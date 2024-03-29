import React, { useEffect, useState } from 'react';
import { BiCalendar } from 'react-icons/bi';
import { FaAmbulance, FaUsers } from 'react-icons/fa';
import { MdPictureAsPdf } from 'react-icons/md';
import { GiCheckMark } from 'react-icons/gi';
import { RxScissors } from 'react-icons/rx';
import { IoMdBed, IoLogoUsd } from 'react-icons/io';
import Doctor from '../../../img/docc.png';
import axios from 'axios';

const Maindashboard = () => {
    const [teachers, setTeachers] = useState([])
    const notices = [
        'this is a demo notice',
        'Notice 2',
        'Notice 3',
        // Add more notices as needed
    ];
    const FetchTeachers = async () => {
        axios.get('http://localhost:4000/user')
            .then((res) => {
                setTeachers(res.data.AllUser)
            })
            .catch(err => {
                console.log('fetching error')
            })
    }
    useEffect(() => {
        FetchTeachers()
    }, [])
    console.log(teachers)
    return (
        <div className="flex flex-wrap w-full items-start p-2">
            <div className='w-full md:w-1/2 lg:w-2/3 p-2 flex flex-wrap'>
                <div className="w-full flex flex-wrap py-2">
                    <div className="w-full  lg:w-1/2 lg:pr-1">
                        <div className='border p-2 rounded-sm'>
                            <h5 className='font-semibold pl-2'>Activity Overview</h5>
                            <div className='mt-2 flex'>
                                <div className='w-1/2 flex p-2 border rounded mx-1'>
                                    <div className="bg-gradient-to-b from-blue-800 to-blue-500 text-white
                            rounded py-2 px-3 text-1xl  flex items-center
                            "><BiCalendar /></div>
                                    <div className="pl-2 flex flex-col">
                                        <span className='font-semibold text-base'>500</span>
                                        <span className='text-xs text-gray-500'>Applications</span>
                                    </div>
                                </div>
                                <div className='w-1/2 flex p-2 border rounded mx-1 '>
                                    <div className="bg-gradient-to-b from-yellow-400 to-yellow-500 text-white
                            rounded py-2 px-3 text-1xl  flex items-center
                            "><RxScissors /></div>
                                    <div className="pl-2 flex flex-col">
                                        <span className='font-semibold text-base'>32</span>
                                        <span className='text-xs text-gray-500'>Pending Appli..</span>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-2 flex'>
                                <div className='w-1/2 flex p-2 border rounded mx-1'>
                                    <div className="bg-gradient-to-b from-purple-800 to-purple-500 text-white
                            rounded py-2 px-2 text-2xl  flex items-center
                            "><IoMdBed /></div>
                                    <div className="pl-2 flex flex-col">
                                        <span className='font-semibold text-base'>84</span>
                                        <span className='text-xs text-gray-500'>Resolved Appli..</span>
                                    </div>
                                </div>
                                <div className='w-1/2 flex p-2 border rounded mx-1 '>
                                    <div className="bg-gradient-to-b from-green-400 to-green-500 text-white
                            rounded py-2 px-3 text-1xl  flex items-center
                            "><IoLogoUsd /></div>
                                    <div className="pl-2 flex flex-col">
                                        <span className='font-semibold text-base'>1440</span>
                                        <span className='text-xs text-gray-500'>Notices</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full  lg:w-1/2 lg:pl-1">
                        <div className='border p-2 rounded-sm'>
                            <h5 className='font-semibold pl-2'>Department Survey</h5>
                            <div className='mt-2 flex'>
                                <div className='w-1/2 flex p-2 border rounded mx-1'>
                                    <div className="bg-gradient-to-b from-fuchsia-600 to-fuchsia-400 text-white
                            rounded py-2 px-3 text-1xl  flex items-center
                            "><FaUsers /></div>
                                    <div className="pl-2 flex flex-col">
                                        <span className='font-semibold text-base'>150</span>
                                        <span className='text-xs text-gray-500'>Total Stuff</span>
                                    </div>
                                </div>
                                <div className='w-1/2 flex p-2 border rounded mx-1 '>
                                    <div className="bg-gradient-to-b from-emerald-800 to-emerald-500 text-white
                            rounded py-2 px-2 text-2xl  flex items-center
                            "><IoMdBed /></div>
                                    <div className="pl-2 flex flex-col">
                                        <span className='font-semibold text-base'>220</span>
                                        <span className='text-xs text-gray-500'>Total Computer</span>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-2 flex'>
                                <div className='w-1/2 flex p-2 border rounded mx-1 '>
                                    <div className="bg-gradient-to-b from-purple-800 to-purple-500 text-white
                            rounded py-2 px-3 text-1xl  flex items-center
                            "><GiCheckMark /></div>
                                    <div className="pl-2 flex flex-col">
                                        <span className='font-semibold text-base'>84</span>
                                        <span className='text-xs text-gray-500'><abbr title="Pataients Released" className='no-underline'>Teachers</abbr></span>
                                    </div>
                                </div>
                                <div className='w-1/2 flex p-2 border rounded mx-1 '>
                                    <div className="bg-gradient-to-b from-red-400 to-red-500 text-white
                            rounded py-2 px-3 text-1xl  flex items-center
                            "><FaAmbulance /></div>
                                    <div className="pl-2 flex flex-col">
                                        <span className='font-semibold text-base'>12</span>
                                        <span className='text-xs text-gray-500'>Ambulance</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border rounded-sm p-4 w-full">
                    <h2 className="text-md font-semibold mb-4">Recent Notices</h2>
                    <ol className='list-disc ml-5'>
                        {notices.map((notice, index) => (
                            <li key={index} className="mb-2 flex items-center">* {notice} <span className='text-red-500 pl-5 cursor-pointer text-2xl'><MdPictureAsPdf /></span></li>
                        ))}
                    </ol>
                </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-3">
                <div className='border p-2 rounded-sm '>
                    <h5 className='font-semibold pl-2'>Our Teachers</h5>

                    <ul className='mt-3 sticky top-32'>
                        {
                            teachers && teachers.length !== 0 && teachers.map((ele, index) => {
                                if (ele.isactivate === true && index <= 6) {
                                    return (
                                        <li className='flex my-2 border shadow-sm rounded py-1 px-3'>
                                            <a href="/" className='flex items-center no-underline w-full h-full'>
                                                <img src={ele.image || Doctor} alt="" className="h-8 w-8 bg-gradient-to-r from-blue-600 to-blue-900 rounded-full" />
                                                <div>
                                                    <span className='pl-2 text-sm font-semibold text-gray-700'>{ele.name} {ele.type === "admin" && <span className='ml-10 text-xs font-bold text-green-500'>Admin</span>}</span>
                                                    <span className='block text-xs pl-2 font-semibold text-gray-600'>{ele.title || 'Instructor'}</span>
                                                </div>
                                            </a>
                                        </li>
                                    );
                                } else {
                                    // Return null or any default content if the condition isn't met
                                    return null;
                                }
                            })
                        }

                    </ul>
                </div>
            </div>
        </div>



    );
};

export default Maindashboard;