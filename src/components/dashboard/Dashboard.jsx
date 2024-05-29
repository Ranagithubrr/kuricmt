import React, { useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
import { Outlet } from 'react-router';
import Navbar from '../navbar/Navbar';

const Dashboard = () => {
    const [sidebar, setSidebar] = useState(true);
    return (
        <div class="h-screen flex flex-col">
            <Navbar setSidebar={setSidebar} />
            <div class="flex flex-grow overflow-hidden">
                <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
                <div className='dark:bg-gray-900 overflow-scroll w-full overflow-x-hidden scroll pb-12 lg:pb-2'>
                    <Outlet />
                </div>
            </div>

        </div>
    );
};

export default Dashboard;