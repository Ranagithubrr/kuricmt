import React from 'react';
import ApplicationTable from './ApplicationTable';

const Applications = () => {
    return (
        <div className='p-4'>
            <h4 className='font-semibold my-5 pl-2 dark:text-slate-400'>Applications</h4>
            <ApplicationTable />
        </div>
    )
}

export default Applications;