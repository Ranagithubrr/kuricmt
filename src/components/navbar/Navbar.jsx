import React, { useEffect, useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineSetting } from 'react-icons/ai';
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoIosGlobe } from 'react-icons/io';

import { Link } from 'react-router-dom'
import Usermenu from './Usermenu';
import Computer from '../../img/desktop.png';
import { useAuth } from '../../contexts/AuthContext';
import axios from 'axios';
import { HiOutlineBars3BottomRight } from 'react-icons/hi2';

const Navbar = ({setSidebar}) => {
    const { userData } = useAuth()
    const [rightSidebar, setRightSidebar] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [logo, setLogo] = useState("")
    const FetchData = () => {
        axios.get('https://kuricmt-backend.onrender.com/content')
            .then((response) => {
                setLogo(response.data[0].mainlogo);
            })
            .catch((err) => {
                console.log('an error', err)
            })
    }

    useEffect(() => {
        FetchData();
    }, [])

    useEffect(() => {
        // Check if the user's dark mode preference is stored in local storage
        const isDarkMode = localStorage.getItem('darkMode');
        if (isDarkMode) {
            setDarkMode(JSON.parse(isDarkMode));
        }
    }, []);

    const handleToggleDarkMode = () => {
        setDarkMode((prevMode) => {
            const newMode = !prevMode;
            // Store the user's dark mode preference in local storage
            localStorage.setItem('darkMode', JSON.stringify(newMode));
            return newMode;
        });
    };

    useEffect(() => {
        // Set the 'dark' class on the body tag based on the dark mode state
        if (darkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [darkMode]);
    return (
        <>
            <div class="flex px-6 py-2  items-center shadow-md sticky top-0 z-10 bg-white dark:bg-gray-800">
                <div class="w-3/12">                    
                    <img src={logo ? logo : Computer} alt="D.O.C" className='h-14 rounded-md bg-white' />                    
                </div>
                <div class="lg:w-6/12 mx-auto">
                    <ul className='flex items-center justify-evenly fixed lg:static bg-white lg:bg-transparent w-full bottom-0 dark:bg-gray-900 lg:dark:bg-transparent left-0 right-0 mx-auto pt-2'>
                        <li className=' border-b-4 border-transparent hover:border-blue-900 dark:hover:border-gray-200  mx-2 pb-3 font-semibold text-blue-950 dark:text-gray-200   '>
                            <Link to="/dashboard" className='text-3xl'>
                                <AiOutlineHome />
                            </Link>
                        </li>
                        <li className=' border-b-4 border-transparent hover:border-blue-900 dark:hover:border-gray-200  mx-2 pb-3 font-semibold text-blue-950 dark:text-gray-200   '>
                            <Link to="/dashboard/notices" className='text-3xl'>
                                <IoDocumentTextOutline />
                            </Link>
                        </li>
                        <li className=' border-b-4 border-transparent hover:border-blue-900 dark:hover:border-gray-200  mx-2 pb-3 font-semibold text-blue-950 dark:text-gray-200   '>
                            <Link to="/dashboard/profile" className='text-3xl'>
                                <CgProfile />
                            </Link>
                        </li>
                        <li className=' border-b-4 border-transparent hover:border-blue-900 dark:hover:border-gray-200  mx-2 pb-3 font-semibold text-blue-950 dark:text-gray-200   '>
                            <Link target='_blank' to="/" className='text-3xl'>
                                <IoIosGlobe />
                            </Link>
                        </li>
                        <li className='lg:hidden border-b-4 border-transparent hover:border-blue-900 dark:hover:border-gray-200  mx-2 pb-3 font-semibold text-blue-950 dark:text-gray-200' onClick={() => setSidebar((prev) => !prev)}>
                            <span className='text-3xl'>
                                <HiOutlineBars3BottomRight />
                            </span>
                        </li>
                    </ul>
                </div>
                <div class="lg:w-3/12 w-8/12 flex justify-end items-center">
                    <span className='font-semibold text-sm mr-2 dark:text-gray-300'>Role: {userData && userData.type}</span>
                    <span className='
                    h-9 
                    w-9
                    flex                      
                    justify-center 
                    mx-2
                    bg-gradient-to-b from-blue-800 to-blue-500
                    text-white 
                    rounded-full
                    items-center
                    cursor-pointer
                    '
                        onClick={() => setRightSidebar(true)}
                    >
                        <span className='px-1 text-1xl '><AiOutlineSetting /></span>
                    </span>
                    <Usermenu />
                </div>
                <div className={`fixed bg-white dark:bg-gray-900 ${!rightSidebar ? '-right-full' : 'right-0'}  top-0 h-full w-8/12 lg:w-2/12 z-[9999999] transition-all duration-300 pl-5 pt-5 ease-in-out`}>
                    <img src={Computer} alt="D.O.C" className='h-12  m-auto pr-3' />
                    <div className='pt-3 pr-5'>
                        <span className='text-xs font-bold dark:text-gray-300 block text-center'>Theme : {darkMode ? 'Dark' : 'Light'}</span>
                        <div className='flex justify-between mt-5'>
                            <button className='w-full flex items-center justify-center px-6 py-2 text-sm font-semibold text-center text-white uppercase transition-all duration-300 bg-gradient-to-r from-blue-500 to-blue-800 rounded-full shadow-md hover:from-blue-600 hover:to-blue-900 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 active:shadow-inner' onClick={handleToggleDarkMode}>Switch Theme</button>
                        </div>
                    </div>
                </div>
                {
                    rightSidebar && <div className='fixed h-full w-full bg-gray-700 opacity-70 top-0 left-0 z-30' onClick={() => setRightSidebar(false)}>
                        
                    </div>
                }
            </div>
        </>
    );
};

export default Navbar;