import React from 'react';
import KuriImg from '../../img/kuri.jpg';

const MainView = ({ Admin, Content }) => {
    console.log(Content)
    return (<>
        {
            Content && Content[0].announcementstatus &&
            <div class="bg-yellow-100 border-t-4 border-yellow-500 rounded-b text-teal-900 px-4 py-3 shadow-md my-4" role="alert">
                <div class="flex">
                    <div class="py-1"><svg class="fill-current h-6 w-6 text-yellow-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></div>
                    <div>
                        <p class="font-bold">Alert</p>
                        <p class="text-sm">{Content && Content[0].announcement}</p>
                    </div>
                </div>
            </div>
        }
        <div className='flex items-center relative overflow-hidden'>
            <div className='w-7/12'>
                <h1 className='font-extrabold text-5xl bg-gradient-to-r from-gray-500 to-red-500 text-transparent bg-clip-text'>
                  { Content && Content[0].maintitle}                  
                </h1>
                <h3 className='font-semibold text-xl bg-gradient-to-r from-gray-500 to-red-500 text-transparent bg-clip-text'>{Content && Content[0].tagline}</h3>
                <h3 className='font-semibold text-xl'>Kurigram Polytechnic Institute, kurigram</h3>
            </div>
            <div className='w-5/12'>
                <img className="h-72 w-72 rounded-lg" src={Admin ? Admin.image : 'https://photogov-com.akamaized.net/examples/bd-passport-55x45-photo/landmarks-US.webp'} alt="teacher" />
                <p className="font-bold mt-2 uppercase bg-gradient-to-r from-gray-500 to-red-500 text-transparent bg-clip-text">{Admin && Admin.title}</p>
                <h4 className='font-bold text-2xl bg-gradient-to-r from-gray-700 to-blue-500 text-transparent bg-clip-text'>{Admin && Admin.name}</h4>
            </div>
        </div>
        <div className='py-4'>
            <img src={KuriImg} className='w-full rounded' alt="" />
        </div>
    </>
    )
}

export default MainView