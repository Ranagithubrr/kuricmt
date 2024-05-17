import React from 'react';
import KuriImg from '../../img/kuri.jpg';
import { FaFacebook, FaGlobe, FaInstagram, FaPhoneAlt, FaTwitter } from 'react-icons/fa';
import { IoLocation } from 'react-icons/io5';
import { IoMdMail } from 'react-icons/io';

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
    <div className='lg:flex items-center relative overflow-hidden'>
      <div className='w-full lg:w-7/12'>
        <h1 className='font-extrabold text-5xl bg-gradient-to-r from-gray-500 to-gray-800 text-transparent bg-clip-text'>
          {Content && Content[0].maintitle}
        </h1>
        <h3 className='font-semibold text-xs md:text-xl bg-gradient-to-r from-gray-500 to-gray-800 text-transparent bg-clip-text'>{Content && Content[0].tagline}</h3>
        <h3 className='font-semibold text-xl text-gray-700'>Kurigram Polytechnic Institute, kurigram</h3>
      </div>
      <div className='w-full lg:w-4/12'>
        <div className="md:flex">
          <div className="md:flex-shrink-0 lg:w-56 lg:h-56">
            <img className="h-full w-full " src={Admin ? Admin.image : 'https://www.spencerclarkegroup.co.uk/uploads/5005001.png'} alt={`${Admin && Admin.name}'s`} />
          </div>
          <div className="p-6">
            <div className="uppercase tracking-wide text-xs text-gray-700 font-semibold">{Admin && Admin.title}</div>
            <h1 className="text-2xl font-bold text-gray-900">{Admin && Admin.name}</h1>
            <div className="flex items-center space-x-2">
              <IoLocation className="text-blue-500" size={14} />
              <span className="text-sm font-bold text-gray-600 block">{Admin ? Admin.address : 'not provided'}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-red-500" size={14} />
              <span className="text-sm font-bold text-gray-600 block">{Admin ? Admin.phone : 'not provided'}</span>
            </div>
            <div className="flex items-center space-x-2">
              <IoMdMail className="text-green-500" size={14} />
              <span className="text-sm font-bold text-gray-600 block">{Admin ? Admin.email : 'not provided'}</span>
            </div>
            <div className="flex justify-around items-center w-64 h-12 bg-gray-200 rounded-lg p-2 mt-5">
              <a href={Admin && Admin.facebook} target="_blank" rel="noreferrer">
                <FaFacebook className="text-blue-600 hover:text-blue-700" size={24} />
              </a>
              <a href={Admin && Admin.twitter} target="_blank" rel="noreferrer">
                <FaTwitter className="text-blue-400 hover:text-blue-500" size={24} />
              </a>
              <a href={Admin && Admin.instagram} target="_blank" rel="noreferrer">
                <FaInstagram className="text-pink-500 hover:text-pink-600" size={24} />
              </a>
              <a href={Admin && Admin.website} target="_blank" rel="noreferrer">
                <FaGlobe className="text-green-500 hover:text-green-600" size={24} />
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
    <div className='py-4'>
      <img src={KuriImg} className='w-full rounded' style={{ minHeight: '200px' }} alt="" />
    </div>
  </>
  )
}

export default MainView