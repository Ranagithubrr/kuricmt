import React, { useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
import { Outlet } from 'react-router';
import Navbar from '../navbar/Navbar';

const Dashboard = () => {
    const [sidebar, setSidebar] = useState(true);
    return (
        <>
            <Navbar setSidebar={setSidebar}/>
            <div className='flex dark:bg-gray-900'>
                <Sidebar sidebar={sidebar} setSidebar={setSidebar}/>
                <div className='dark:bg-gray-900 overflow-scroll w-full overflow-x-hidden scroll h-[85vh] lg:h-[80vh] relative top-0 pb-20'>
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default Dashboard;