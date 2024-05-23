import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { MdDashboardCustomize, MdOutlineLogout } from 'react-icons/md';
import { HiUserAdd } from 'react-icons/hi';
import { BsCalendarDate, BsChatLeftQuoteFill, BsFillChatDotsFill, BsHospitalFill } from 'react-icons/bs';
import { GrAnnounce } from "react-icons/gr";
import { FaUsers, FaPlus, FaBullhorn } from 'react-icons/fa';
import { MdArrowDropDown, MdManageAccounts } from 'react-icons/md';
import { Link } from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext';

const Sidebar = () => {
    const { userData, logout } = useAuth()
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const toggleSubmenu = () => {
        isSubMenuOpen ? setIsSubMenuOpen(false) : setIsSubMenuOpen(true);
    }
    const LogOutUser = () => {
        logout()
    }
    return (
        <div className='w-1/5 overflow-y-scroll sticky pb-10 dark:border-gray-700 border-r shadow-lg dark:shadow-transparent dark:bg-slate-800' style={{ height: '85vh', position: 'relative', top: '0' }}>
            {/* <span className='
                text-sm
                font-semibold
            '>Dashboard</span> */}
            <ul className='pl-2 pt-2 top-20'>
                <li className='flex  hover:bg-slate-200 rounded dark:hover:bg-gray-900'>
                    <Link to='/dashboard' className='h-full w-full py-4 px-2 block'>
                        <span className='flex items-center text-base dark:text-gray-200'><MdDashboardCustomize className='text-xl' />  <span className='pl-3 h-full text-sm font-semibold'>Dashboard</span></span>
                    </Link>
                </li>
                <li className='flex  hover:bg-slate-200 rounded dark:hover:bg-gray-900'>
                    <Link to='/dashboard/applications' className='h-full w-full  py-4 px-2 block'>
                        <span className='flex items-center text-base dark:text-gray-200'><BsCalendarDate className='text-xl' />  <span className='pl-3 h-full text-sm font-semibold'>Applications</span></span>
                    </Link>
                </li>
                {
                    userData && userData.type && userData.type === "admin" &&

                    <li className='rounded dark:hover:bg-gray-900 relative pb-2'>
                        <span className='h-full w-full  py-4 px-2 block cursor-pointer' onClick={() => toggleSubmenu()}>
                            <span className='flex items-center text-base dark:text-gray-200'><MdArrowDropDown className='text-xl' />  <span className='pl-3 h-full text-sm font-semibold'><span className='flex items-center'>Dep. Instruments </span></span></span>
                        </span>
                        <div className={`border-l-2 border-gray-800 transition duration-500 ${isSubMenuOpen ? 'pointer-events-auto ml-3 ' : 'pointer-events-none h-0 overflow-hidden'
                            }`}>
                            <Link to="/dashboard/department-survey" className='pl-3 ml-2 flex items-center hover:bg-slate-200 dark:hover:bg-gray-800 rounded text-sm font-semibold py-1 dark:text-gray-400'><span className='pr-2 text-sm'><BsHospitalFill /> </span>- Instruments</Link>
                            <Link to="/dashboard/website-contents" className='pl-3 ml-2 flex items-center hover:bg-slate-200 dark:hover:bg-gray-800 rounded text-sm font-semibold py-1 dark:text-gray-400'><span className='pr-2 text-sm'><BsHospitalFill /> </span>- Website Contents</Link>
                        </div>
                    </li>
                }
                <li className='flex  hover:bg-slate-200 rounded dark:hover:bg-gray-900'>
                    <Link to='/dashboard/teachers' className='h-full w-full  py-4 px-2 block'>
                        <span className='flex items-center text-base dark:text-gray-200'><FaUsers className='text-xl' />  <span className='pl-3 h-full text-sm font-semibold'>Teachers Profile</span></span>
                    </Link>
                </li>
                <li className='flex  hover:bg-slate-200 rounded dark:hover:bg-gray-900'>
                    <Link to='/dashboard/captains' className='h-full w-full  py-4 px-2 block'>
                        <span className='flex items-center text-base dark:text-gray-200'><HiUserAdd className='text-xl' />  <span className='pl-3 h-full text-sm font-semibold'>Class Captains</span></span>
                    </Link>
                </li>
                {
                    userData && userData.type && userData.type === "admin" &&
                    <li className='flex  hover:bg-slate-200 rounded dark:hover:bg-gray-900'>
                        <Link to='/dashboard/add-notice' className='h-full w-full  py-4 px-2 block'>
                            <span className='flex items-center text-base dark:text-gray-200'><FaPlus className='text-xl' />  <span className='pl-3 h-full text-sm font-semibold'>Add Notice</span></span>
                        </Link>
                    </li>
                }
                {
                    userData && userData.type && userData.type === "admin" &&
                    <li className='flex  hover:bg-slate-200 rounded dark:hover:bg-gray-900'>
                        <Link to='/dashboard/add-announcement' className='h-full w-full  py-4 px-2 block dark:text-gray-200'>
                            <span className='flex items-center text-base dark:text-gray-200'><FaBullhorn  className='text-xl dark:text-gray-200'/>  <span className='pl-3 h-full text-sm font-semibold'>Announcement</span></span>
                        </Link>
                    </li>
                }

                <li className='flex  hover:bg-slate-200 rounded dark:hover:bg-gray-900'>
                    <Link to='/dashboard/notes' className='h-full w-full  py-4 px-2 block'>
                        <span className='flex items-center text-base dark:text-gray-200'><FaPlus className='text-xl' />  <span className='pl-3 h-full text-sm font-semibold'>My Notes</span></span>
                    </Link>
                </li>
                {
                    userData && userData.type && userData.type === "admin" &&
                    <li className='flex  hover:bg-slate-200 rounded dark:hover:bg-gray-900'>
                        <Link to='/dashboard/accounts-review' className='h-full w-full  py-4 px-2 block'>
                            <span className='flex items-center text-base dark:text-gray-200'><MdManageAccounts className='text-xl' />  <span className='pl-3 h-full text-sm font-semibold'>Accounts Review</span></span>
                        </Link>
                    </li>

                }
                {
                    userData && userData.type && userData.type === "admin" &&
                    <li className='flex  hover:bg-slate-200 rounded dark:hover:bg-gray-900'>
                        <Link to='/dashboard/quote-review' className='h-full w-full  py-4 px-2 block'>
                            <span className='flex items-center text-base dark:text-gray-200'><BsChatLeftQuoteFill className='text-xl' />  <span className='pl-3 h-full text-sm font-semibold'>Quotes Review</span></span>
                        </Link>
                    </li>
                }
                <li className='flex  hover:bg-slate-200 rounded dark:hover:bg-gray-900'>
                    <Link to='/dashboard/review' className='h-full w-full  py-4 px-2 block'>
                        <span className='flex items-center text-base dark:text-gray-200'><AiFillStar className='text-xl' />  <span className='pl-3 h-full text-sm font-semibold'>Reviews</span></span>
                    </Link>
                </li>
                <li className='flex  hover:bg-slate-200 rounded dark:hover:bg-gray-900'>
                    <Link to='/dashboard/chat' className='h-full w-full  py-4 px-2 flex'>
                        <span className='flex items-center text-base dark:text-gray-200'><BsFillChatDotsFill className='text-xl' />  <span className='pl-3 h-full text-sm font-semibold'>Chat</span></span>
                        <div className='h-3 w-3 bg-blue-700 rounded-full ml-auto mr-5 flex items-center justify-center'>

                        </div>
                    </Link>
                </li>
                <li className='flex  hover:bg-slate-200 rounded dark:hover:bg-gray-900'>
                    <button onClick={LogOutUser} className='h-full w-full  py-4 px-2 block'>
                        <span className='flex items-center text-base dark:text-gray-200'><MdOutlineLogout className='text-xl' />  <span className='pl-3 h-full text-sm font-semibold'>Log Out</span></span>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;