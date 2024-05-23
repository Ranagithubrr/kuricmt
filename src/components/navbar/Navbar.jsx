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

const Navbar = () => {
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
                <div class="w-4/12">
                    {/* <span className="text-3xl font-bold dark:text-gray-300"><span className="text-blue-900 dark:text-blue-500">D.O.C</span></span> */}
                    <img src={logo ? logo : Computer} alt="D.O.C" className='h-16 rounded-md bg-white' />
                    <span className="block text-xs font-semibold dark:text-gray-200 mt-1">Department Of Computer</span>
                </div>
                <div class="w-6/12">
                    <ul className='flex'>
                        <li className='px-7 border-b-4 border-transparent hover:border-blue-900 dark:hover:border-gray-200  mx-2 pb-3 font-semibold text-blue-950 dark:text-gray-200   '>
                            <Link to="/dashboard" className='text-3xl'>
                                <AiOutlineHome />
                            </Link>
                        </li>
                        <li className='px-7 border-b-4 border-transparent hover:border-blue-900 dark:hover:border-gray-200  mx-2 pb-3 font-semibold text-blue-950 dark:text-gray-200   '>
                            <Link to="/dashboard/notices" className='text-3xl'>
                                <IoDocumentTextOutline />
                            </Link>
                        </li>
                        <li className='px-7 border-b-4 border-transparent hover:border-blue-900 dark:hover:border-gray-200  mx-2 pb-3 font-semibold text-blue-950 dark:text-gray-200   '>
                            <Link to="/dashboard/profile" className='text-3xl'>
                                <CgProfile />
                            </Link>
                        </li>
                        <li className='px-7 border-b-4 border-transparent hover:border-blue-900 dark:hover:border-gray-200  mx-2 pb-3 font-semibold text-blue-950 dark:text-gray-200   '>
                            <Link target='_blank' to="/" className='text-3xl'>
                                <IoIosGlobe />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div class="w-2/12 flex justify-end items-center">
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
                <div className={`fixed bg-white dark:bg-gray-700 ${!rightSidebar ? '-right-full' : 'right-0'}  top-0 h-full w-2/12 z-20 transition-all duration-300 pl-5 pt-5 ease-in-out`}>
                    <img src={Computer} alt="D.O.C" className='h-12  m-auto pr-3' />
                    <div className='pt-3 pr-5'>
                        <span className='text-xs font-bold dark:text-gray-300 block text-center'>Theme : {darkMode ? 'Dark' : 'Light'}</span>
                        <div className='flex justify-between mt-5'>
                            <button className='w-full bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 dark:from-green-600 dark:to-green-700 dark:hover:from-green-700 dark:hover:to-green-800 text-white font-semibold text-sm px-6 py-3 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-300 dark:focus:ring-green-800' onClick={handleToggleDarkMode}>Switch Theme</button>
                        </div>
                    </div>
                </div>
                {
                    rightSidebar && <div className='fixed h-full w-full bg-gray-700 opacity-70 top-0 left-0 z-10' onClick={() => setRightSidebar(false)}>
                    </div>
                }
            </div>
        </>
    );
};

export default Navbar;