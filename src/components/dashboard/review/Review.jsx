import React from 'react';
import Singlereview from './Singlereview';
import { Rating } from '@material-tailwind/react';

const Review = () => {
    // const [value, setValue] = useState(4.6);    
    return (
        <div className=' px-2 lg:pl-10 pt-5'>
            <span className='bg-red-400 px-5 rounded-sm text-gray-100 dark:bg-red-600 dark:text-gray-300'>Demo Page</span>
            <h4 className='font-semibold text-xl dark:text-gray-300'>Reviews</h4>
            <div className='lg:flex justify-between lg:w-1/3 my-4'>
                <div>
                    <span className='block font-semibold dark:text-gray-300'>Total Reviews</span>
                    <span className='block font-semibold text-4xl dark:text-gray-300'>360</span>
                </div>
                <div>
                    <span className='block font-semibold dark:text-gray-300'>Average Rating</span>
                    <Rating value={4} readonly className='flex text-yellow-400 my-2' />
                    <span className='font-semibold text-4xl mr-2 dark:text-gray-300'>4.9</span>
                </div>
            </div>


            <Singlereview />
            <Singlereview />
            <Singlereview />
            <Singlereview />
            <Singlereview />

            <div className='my-5'>
            </div>
        </div>
    );
};

export default Review;