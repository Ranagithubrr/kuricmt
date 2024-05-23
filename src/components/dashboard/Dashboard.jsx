import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import { Outlet } from 'react-router';
import Navbar from '../navbar/Navbar';

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <div className='flex dark:bg-gray-900'>
                <Sidebar />
                <div className='dark:bg-gray-900 overflow-scroll w-full overflow-x-hidden scroll' style={{height:'80vh', position:'relative' , top:'0'}}>
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default Dashboard;