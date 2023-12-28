import React from 'react';
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';

const Quotes = () => {
    return (
        <div>
            <div className='w-1/2 mx-auto py-5'>
                <p className='p-2 text-center font-semibold text-2xl text-gray-500 py-5'><span><FaQuoteLeft/></span> I am proud to #BeATerp! You'll find that students and professors on campus are welcoming and want you to succeed. I'm part of an accomplished campus that values diversity, academics, and social and professional opportunities.you'll find people with the same as you. <span className='float-right pt-5'><FaQuoteRight /></span></p>
                <span className='font-semibold text-black block text-center text-sm'>Masud Rana</span>
                <span className='font-semibold text-gray-700 block text-center text-xs'>Department Of Computer</span>
                <span className='font-semibold text-gray-700 block text-center text-xs'>Session 19-20</span>
            </div>
        </div>
    )
}

export default Quotes