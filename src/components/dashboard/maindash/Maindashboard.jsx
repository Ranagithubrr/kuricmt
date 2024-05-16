import React, { useEffect, useState } from 'react';
import { FaClipboardCheck, FaClipboardList, FaUserTie, FaUsers, FaWpforms, } from 'react-icons/fa';
import { MdOutlineComputer, MdOutlinePendingActions } from 'react-icons/md';
import Doctor from '../../../img/docc.png';
import axios from 'axios';
import Notification from '../../../pages/Notifications/Notification/Notification';
import { Link } from 'react-router-dom';
import { Alert } from "@material-tailwind/react";
import { FaCheckCircle } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { setTeacherreducer } from '../../../redux/teacherReducer/teacherReducer';

const Maindashboard = () => {
    const dispatch = useDispatch();
    const [notices, setNotices] = useState([]);
    const [data, setData] = useState([]);
    const [noticeNumber, setNoticeNumber] = useState(0);
    const teachers = useSelector((state) => state.teacherReducer.teachers);
    const [applications, setApplications] = useState([]);
    const [captains, setCaptains] = useState([]);
    const pendingApplication = applications.filter(item => item.status === "pending");
    const resolvedApplication = applications.filter(item => item.status === "resolved");

    const FetchNotices = async () => {
        try {
            const notices = await axios.get("https://kuricmt-backend.onrender.com/notice");
            setNoticeNumber(notices.data.allNotices.length)
            const limitedNotices = notices.data.allNotices.slice(0, 3);
            setNotices(limitedNotices)
        } catch (err) {
            console.log(err)
        }
    }
    const FetchTeachers = () => {
        axios
            .get("https://kuricmt-backend.onrender.com/user")
            .then((res) => {
                dispatch(setTeacherreducer(res.data.AllUser));
            })
            .catch((err) => {
                console.log("fetching error");
            });
    };
    const FetchApplications = async () => {
        axios.get('https://kuricmt-backend.onrender.com/application/')
            .then((response) => {
                setApplications(response.data.ApplicationsData)
            })
            .catch((err) => {
                console.log('an error', err)
            })
    }
    const FetchCaptainData = () => {
        axios.get('https://kuricmt-backend.onrender.com/captains')
            .then((response) => {
                setCaptains(response.data.AllCaptains)
            })
            .catch((err) => {
                console.log('an error', err)
            })
    }
    const FetchWebsiteData = () => {
        axios.get('https://kuricmt-backend.onrender.com/content/website-data')
            .then((response) => {
                setData(response.data.contents[0])
            })
            .catch((err) => {
                console.log('an error', err)
            })
    }

    useEffect(() => {
        FetchWebsiteData();
        FetchNotices();
        FetchTeachers();
        FetchApplications();
        FetchCaptainData();
        // eslint-disable-next-line
    }, []);
    console.log(data)
    return (
        <div className="flex flex-wrap w-full items-start p-2">
            <div className='w-full md:w-1/2 lg:w-2/3 p-2 flex flex-wrap'>
                <div className="w-full flex flex-wrap py-2">
                    <div className="w-full  lg:w-1/2 lg:pr-1">
                        <div className='border p-2 rounded-sm dark:border-slate-600'>
                            <h5 className='font-semibold pl-2 dark:text-gray-300'>Activity Overview</h5>
                            <div className='mt-2 flex'>
                                <div className='w-1/2 flex p-2 border rounded mx-1 dark:border-slate-600'>
                                    <div className="bg-gradient-to-b from-blue-800 to-blue-500 text-white
                            rounded py-2 px-3 text-1xl  flex items-center
                            "><FaWpforms /></div>
                                    <div className="pl-2 flex flex-col">
                                        <span className='font-semibold text-base dark:text-slate-400'>{applications && applications.length}</span>
                                        <span className='text-xs text-gray-500 dark:text-slate-400'>Applications</span>
                                    </div>
                                </div>
                                <div className='w-1/2 flex p-2 border rounded mx-1 dark:border-slate-600 '>
                                    <div className="bg-gradient-to-b from-yellow-400 to-yellow-500 text-white
                            rounded py-2 px-3 text-1xl  flex items-center
                            "><MdOutlinePendingActions /></div>
                                    <div className="pl-2 flex flex-col">
                                        <span className='font-semibold text-base dark:text-slate-400'>{pendingApplication.length}</span>
                                        <span className='text-xs text-gray-500 dark:text-slate-400'>Pending Appli..</span>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-2 flex'>
                                <div className='w-1/2 flex p-2 border rounded mx-1 dark:border-slate-600'>
                                    <div className="bg-gradient-to-b from-purple-800 to-purple-500 text-white
                            rounded py-2 px-2 text-2xl  flex items-center
                            "><FaClipboardCheck /></div>
                                    <div className="pl-2 flex flex-col">
                                        <span className='font-semibold text-base dark:text-slate-400'>{resolvedApplication.length}</span>
                                        <span className='text-xs text-gray-500 dark:text-slate-400'>Resolved Appli..</span>
                                    </div>
                                </div>
                                <div className='w-1/2 flex p-2 border rounded mx-1 dark:border-slate-600'>
                                    <div className="bg-gradient-to-b from-green-400 to-green-500 text-white
                            rounded py-2 px-3 text-1xl  flex items-center
                            "><FaClipboardList /></div>
                                    <div className="pl-2 flex flex-col">
                                        <span className='font-semibold text-base dark:text-slate-400'>{noticeNumber}</span>
                                        <span className='text-xs text-gray-500 dark:text-slate-400'>Notices</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full  lg:w-1/2 lg:pl-1">
                        <div className='border p-2 rounded-sm dark:border-slate-600'>
                            <h5 className='font-semibold pl-2 dark:text-gray-300'>Department Survey</h5>
                            <div className='mt-2 flex'>
                                <div className='w-1/2 flex p-2 border rounded mx-1 dark:border-slate-600'>
                                    <div className="bg-gradient-to-b from-fuchsia-600 to-fuchsia-400 text-white
                            rounded py-2 px-3 text-1xl  flex items-center
                            "><FaUsers /></div>
                                    <div className="pl-2 flex flex-col">
                                        <span className='font-semibold text-base dark:text-slate-400'>{captains.length}</span>
                                        <span className='text-xs text-gray-500 dark:text-slate-400'>Total Captains</span>
                                    </div>
                                </div>
                                <div className='w-1/2 flex p-2 border rounded mx-1 dark:border-slate-600 '>
                                    <div className="bg-gradient-to-b from-emerald-800 to-emerald-500 text-white
                            rounded py-2 px-2 text-2xl  flex items-center
                            "><MdOutlineComputer /></div>
                                    <div className="pl-2 flex flex-col">
                                        <span className='font-semibold text-base dark:text-slate-400'>{data ? (parseInt(data.hlabcomputer) + parseInt(data.labonecomputer) + parseInt(data.labtwocomputer)) : 0}</span>
                                        <span className='text-xs text-gray-500 dark:text-slate-400'>Total Computer</span>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-2 flex'>
                                <div className='w-1/2 flex p-2 border rounded mx-1 dark:border-slate-600'>
                                    <div className="bg-gradient-to-b from-purple-800 to-purple-500 text-white
                            rounded py-2 px-3 text-1xl  flex items-center
                            "><FaUserTie /></div>
                                    <div className="pl-2 flex flex-col">
                                        <span className='font-semibold text-base dark:text-slate-400'>{teachers.length}</span>
                                        <span className='text-xs text-gray-500 dark:text-slate-400'>Teachers</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {
                   data && data.announcementstatus &&
                    <Alert
                        icon={<FaCheckCircle />}
                        className="my-3 rounded-none border-l-4 border-[#2ec946] bg-[#2ec946]/10 font-medium text-[#2ec946]"
                    >
                        Announcement : {data && data.announcement}
                    </Alert>
                }
                <div className="border rounded-sm p-4 w-full dark:border-slate-600">
                    <h2 className="text-md font-semibold mb-4 dark:text-slate-400">Recent Notices</h2>
                    <ol className='list-disc ml-5'>
                        {notices.length !== 0 && notices.map((notice, index) => (
                            <Notification item={notice} />
                        ))}
                    </ol>
                    {
                        notices.length === 0 && <div>
                            <span className='font-semibold text-gray-700'>No Notice Published Yet, <Link to="/dashboard/add-notice" className='text-blue-800'>Publish One</Link></span>
                        </div>
                    }
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
                        {
                            teachers.length === 0 && <div>
                                <span className='font-semibold text-gray-500 pl-2'>Empty list</span>
                            </div>
                        }
                    </ul>
                </div>
            </div>
        </div>



    );
};

export default Maindashboard;