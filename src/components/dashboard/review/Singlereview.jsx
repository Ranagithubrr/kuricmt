import { Rating } from '@material-tailwind/react';
import React from 'react';


const Singlereview = () => {
    return (
        <div className='lg:flex my-10'>
            <div className='lg:w-56 p-2'>
                <h4 className='font-semibold m-0 p-0 dark:text-gray-300'>Masud Rana</h4>
                <span className='text-sm text-gray-500 block dark:text-gray-400'>Junior Instructor</span>
            </div>
            <div className='ml-2 lg:w-6/12'>
                <Rating value={4} readonly className='flex text-yellow-400 my-2' />
                <div className='flex items-center'>
                    <span className='text-sm font-semibold text-gray-500 dark:text-gray-400'>24/08/2023</span>
                </div>
                <div>
                    <p className='dark:text-gray-300'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam labore animi nesciunt mollitia delectus, accusamus error earum molestias voluptatum natus.</p>
                </div>
            </div>
        </div>

    )
}

export default Singlereview