import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { MdDashboardCustomize, MdOutlineLogout } from 'react-icons/md';
import { HiUserAdd } from 'react-icons/hi';
import { BsCalendarDate, BsChatLeftQuoteFill, BsFillChatDotsFill, BsHospitalFill } from 'react-icons/bs';
import { FaUsers, FaPlus, FaBullhorn, FaTimes } from 'react-icons/fa';
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { MdArrowDropDown, MdManageAccounts } from 'react-icons/md';
import { Link } from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext';

const Sidebar = ({ sidebar, setSidebar }) => {
    const { userData, logout } = useAuth()
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const toggleSubmenu = () => {
        isSubMenuOpen ? setIsSubMenuOpen(false) : setIsSubMenuOpen(true);
    }
    const LogOutUser = () => {
        logout()
    }
    return (
        <>
            <div className={`${!sidebar ? 'w-8/12 lg:w-3/12' : 'w-[6rem] -left-full lg:left-0'} md:z-auto fixed top-20 lg:sticky transition-all duration-300 ease-in-out overflow-y-scroll pb-10 dark:border-gray-700 border-r shadow-lg dark:shadow-transparent bg-white dark:bg-slate-800 h-full lg:h-[85vh] z-50`}>
                <div className='w-full text-center flex justify-end pr-7 pt-4 dark:text-gray-200 font-bold text-2xl cursor-pointer'>
                    <span className='hidden lg:block' onClick={() => setSidebar((prev) => !prev)}><HiOutlineBars3BottomRight /> </span>
                    <span className='lg:hidden' onClick={() => setSidebar(true)}><FaTimes /> </span>
                </div>
                <ul className='pl-2 pt-2 top-0'>
                    <li className='flex  hover:bg-slate-200 rounded dark:hover:bg-gray-900'
                        onClick={() => {
                            if (window.innerWidth <= 768) {
                                setSidebar(true);
                            }
                        }}
                    >
                        <Link to='/dashboard' className='h-full w-full py-4 px-2 block'>
                            <span className='flex items-center text-base dark:text-gray-200 ml-4'><MdDashboardCustomize className='text-xl' />  <span className={`pl-3 h-full text-sm font-semibold ${sidebar && 'hidden'}`}>Dashboard</span></span>
                        </Link>
                    </li>
                    <li className='flex  hover:bg-slate-200 rounded dark:hover:bg-gray-900'
                        onClick={() => {
                            if (window.innerWidth <= 768) {
                                setSidebar(true);
                            }
                        }}
                    >
                        <Link to='/dashboard/applications' className='h-full w-full  py-4 px-2 block'>
                            <span className='flex items-center text-base dark:text-gray-200 ml-4'><BsCalendarDate className='text-xl' />  <span className={`pl-3 h-full text-sm font-semibold ${sidebar && 'hidden'}`}>Applications</span></span>
                        </Link>
                    </li>
                    {
                        userData && userData.type && userData.type === "admin" &&

                        <li className='rounded dark:hover:bg-gray-900 relative pb-2'
                        onClick={() => {
                            if (window.innerWidth <= 768) {
                                setSidebar(true);
                            }
                        }}
                        >
                            <span className='h-full w-full  py-4 px-2 block cursor-pointer' onClick={() => toggleSubmenu()}>
                                <span className='flex items-center text-base dark:text-gray-200 ml-4'><MdArrowDropDown className='text-xl' />  <span className={`pl-3 h-full text-sm font-semibold ${sidebar && 'hidden'}`}><span className='flex items-center'>Dep. Instruments </span></span></span>
                            </span>
                            <div className={`border-l-2 border-gray-800 transition duration-500 ${isSubMenuOpen ? 'pointer-events-auto ml-3 ' : 'pointer-events-none h-0 overflow-hidden'
                                }`}>
                                <Link to="/dashboard/department-survey" className='pl-3 ml-2 flex items-center hover:bg-slate-200 dark:hover:bg-gray-800 rounded text-sm font-semibold py-1 dark:text-gray-400'><span className='pr-2 text-sm'><BsHospitalFill /> </span>- Instruments</Link>
                                <Link to="/dashboard/website-contents" className='pl-3 ml-2 flex items-center hover:bg-slate-200 dark:hover:bg-gray-800 rounded text-sm font-semibold py-1 dark:text-gray-400'><span className='pr-2 text-sm'><BsHospitalFill /> </span>- Website Contents</Link>
                            </div>
                        </li>
                    }
                    <li className='flex  hover:bg-slate-200 rounded dark:hover:bg-gray-900'
                     onClick={() => {
                        if (window.innerWidth <= 768) {
                            setSidebar(true);
                        }
                    }}
                    >
                        <Link to='/dashboard/teachers' className='h-full w-full  py-4 px-2 block'>
                            <span className='flex items-center text-base dark:text-gray-200 ml-4'><FaUsers className='text-xl' />  <span className={`pl-3 h-full text-sm font-semibold ${sidebar && 'hidden'}`}>Teachers Profile</span></span>
                        </Link>
                    </li>
                    <li className='flex  hover:bg-slate-200 rounded dark:hover:bg-gray-900'
                     onClick={() => {
                        if (window.innerWidth <= 768) {
                            setSidebar(true);
                        }
                    }}
                    >
                        <Link to='/dashboard/captains' className='h-full w-full  py-4 px-2 block'>
                            <span className='flex items-center text-base dark:text-gray-200 ml-4'><HiUserAdd className='text-xl' />  <span className={`pl-3 h-full text-sm font-semibold ${sidebar && 'hidden'}`}>Class Captains</span></span>
                        </Link>
                    </li>
                    {
                        userData && userData.type && userData.type === "admin" &&
                        <li className='flex  hover:bg-slate-200 rounded dark:hover:bg-gray-900'
                        onClick={() => {
                            if (window.innerWidth <= 768) {
                                setSidebar(true);
                            }
                        }}
                        >
                            <Link to='/dashboard/add-notice' className='h-full w-full  py-4 px-2 block'>
                                <span className='flex items-center text-base dark:text-gray-200 ml-4'><FaPlus className='text-xl' />  <span className={`pl-3 h-full text-sm font-semibold ${sidebar && 'hidden'}`}>Add Notice</span></span>
                            </Link>
                        </li>
                    }
                    {
                        userData && userData.type && userData.type === "admin" &&
                        <li className='flex  hover:bg-slate-200 rounded dark:hover:bg-gray-900'
                        onClick={() => {
                            if (window.innerWidth <= 768) {
                                setSidebar(true);
                            }
                        }}
                        >
                            <Link to='/dashboard/add-announcement' className='h-full w-full  py-4 px-2 block dark:text-gray-200'>
                                <span className='flex items-center text-base dark:text-gray-200 ml-4'><FaBullhorn className='text-xl dark:text-gray-200' />  <span className={`pl-3 h-full text-sm font-semibold ${sidebar && 'hidden'}`}>Announcement</span></span>
                            </Link>
                        </li>
                    }

                    <li className='flex  hover:bg-slate-200 rounded dark:hover:bg-gray-900'
                     onClick={() => {
                        if (window.innerWidth <= 768) {
                            setSidebar(true);
                        }
                    }}
                    >
                        <Link to='/dashboard/notes' className='h-full w-full  py-4 px-2 block'>
                            <span className='flex items-center text-base dark:text-gray-200 ml-4'><FaPlus className='text-xl' />  <span className={`pl-3 h-full text-sm font-semibold ${sidebar && 'hidden'}`}>My Notes</span></span>
                        </Link>
                    </li>
                    {
                        userData && userData.type && userData.type === "admin" &&
                        <li className='flex  hover:bg-slate-200 rounded dark:hover:bg-gray-900'
                        onClick={() => {
                            if (window.innerWidth <= 768) {
                                setSidebar(true);
                            }
                        }}
                        >
                            <Link to='/dashboard/accounts-review' className='h-full w-full  py-4 px-2 block'>
                                <span className='flex items-center text-base dark:text-gray-200 ml-4'><MdManageAccounts className='text-xl' />  <span className={`pl-3 h-full text-sm font-semibold ${sidebar && 'hidden'}`}>Accounts Review</span></span>
                            </Link>
                        </li>

                    }
                    {
                        userData && userData.type && userData.type === "admin" &&
                        <li className='flex  hover:bg-slate-200 rounded dark:hover:bg-gray-900'
                        onClick={() => {
                            if (window.innerWidth <= 768) {
                                setSidebar(true);
                            }
                        }}
                        >
                            <Link to='/dashboard/quote-review' className='h-full w-full  py-4 px-2 block'>
                                <span className='flex items-center text-base dark:text-gray-200 ml-4'><BsChatLeftQuoteFill className='text-xl' />  <span className={`pl-3 h-full text-sm font-semibold ${sidebar && 'hidden'}`}>Quotes Review</span></span>
                            </Link>
                        </li>
                    }
                    <li className='flex  hover:bg-slate-200 rounded dark:hover:bg-gray-900'
                     onClick={() => {
                        if (window.innerWidth <= 768) {
                            setSidebar(true);
                        }
                    }}
                    >
                        <Link to='/dashboard/review' className='h-full w-full  py-4 px-2 block'>
                            <span className='flex items-center text-base dark:text-gray-200 ml-4'><AiFillStar className='text-xl' />  <span className={`pl-3 h-full text-sm font-semibold ${sidebar && 'hidden'}`}>Reviews</span></span>
                        </Link>
                    </li>
                    <li className='flex  hover:bg-slate-200 rounded dark:hover:bg-gray-900' 
                     onClick={() => {
                        if (window.innerWidth <= 768) {
                            setSidebar(true);
                        }
                    }}
                    >
                        <Link to='/dashboard/chat' className='h-full w-full  py-4 px-2 flex'>
                            <span className='flex items-center text-base dark:text-gray-200 ml-4'><BsFillChatDotsFill className='text-xl' />  <span className={`pl-3 h-full text-sm font-semibold ${sidebar && 'hidden'}`}>Chat</span></span>
                            <div className={`h-3 w-3 bg-blue-700 rounded-full ml-auto mr-5 flex items-center justify-center ${sidebar && 'hidden'}`}>

                            </div>
                        </Link>
                    </li>
                    <li className='flex  hover:bg-slate-200 rounded dark:hover:bg-gray-900'>
                        <button onClick={LogOutUser} className='h-full w-full  py-4 px-2 block'>
                            <span className='flex items-center text-base dark:text-gray-200 ml-4'><MdOutlineLogout className='text-xl' />  <span className={`pl-3 h-full text-sm font-semibold ${sidebar && 'hidden'}`}>Log Out</span></span>
                        </button>
                    </li>
                </ul>
            </div>
            {
                !sidebar &&
                <div className='fixed lg:hidden w-full h-full bg-gray-400 z-10 opacity-50' onClick={() => setSidebar(true)}>

                </div>
            }
        </>
    );
};

export default Sidebar;