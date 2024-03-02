import React from 'react';
import KuriImg from '../../img/kuri.jpg';

const MainView = () => {
    return (<>

        <div className='flex items-center'>
            <div className='w-1/2'>
                <h1 className='font-extrabold text-5xl bg-gradient-to-r from-gray-500 to-red-500 text-transparent bg-clip-text'>
                    Department Of Computer
                </h1>
                <h3 className='font-semibold text-xl bg-gradient-to-r from-gray-500 to-red-500 text-transparent bg-clip-text'>Where Innovation Meets Excellence.</h3>
                <h3 className='font-semibold text-xl'>Kurigram Polytechnic Institute, kurigram</h3>
            </div>
            <div className='w-1/3 py-5 pb-20 border-blue-500 border rounded-t-sm rounded-b-full '>
                <div className='flex flex-col items-center'>
                    <div class="flex items-center">
                        <div class="transform -rotate-90 text-right float-right">
                            <p class="font-bold uppercase bg-gradient-to-r from-gray-500 to-red-500 text-transparent bg-clip-text">Chif Instructor</p>
                        </div>
                        <img class="h-72 -ml-14 w-64 rounded-sm" src="https://photogov-com.akamaized.net/examples/bd-passport-55x45-photo/landmarks-US.webp" alt="teacher" />
                    </div>
                    <h4 className='font-bold text-2xl bg-gradient-to-r from-gray-700 to-blue-500 text-transparent bg-clip-text px-12'>MD Nahiduzzaman Nahid</h4>
                </div>
            </div>
        </div>
        <div className='py-4'>
            <img src={KuriImg} className='w-full rounded' alt="" />
        </div>
    </>
    )
}

export default MainView