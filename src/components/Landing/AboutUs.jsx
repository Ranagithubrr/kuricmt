import React from 'react';
import KuriImg from '../../img/kuri.jpg';
import { IoIosArrowDropdown } from "react-icons/io";

const AboutUs = ({ Content }) => {
    console.log(Content)
    return (
        <section id="aboutUs">
            <div className='mt-5'>
                <div className='lg:flex items-top'>
                    <div className="w-full lg:w-1/2">
                        <div className='py-4'>
                            <img src={KuriImg} className='w-full rounded' style={{ minHeight: '200px' }} alt="" />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 lg:p-4">
                        <h1 className='font-extrabold text-2xl text-gray-800 text-left'>
                            About Us
                        </h1>
                        <p class="text-justify font-semibold leading-relaxed text-gray-800">
                            Welcome to the Computer Department at Kurigram Polytechnic Institute, where innovation and education intersect. Our dynamic environment fosters a passion for computer science and emerging technologies. Join us on a journey of exploration and skill development in the ever-evolving world of computing.
                        </p>
                        <a href="#teachers" className="inline-flex items-center px-6 py-3 mt-4 text-sm font-semibold text-center text-white uppercase transition-all duration-300 bg-gradient-to-r from-blue-500 to-blue-800 rounded-full shadow-md hover:from-blue-600 hover:to-blue-900 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 active:shadow-inner">
                            <span className='text-2xl mr-2'><IoIosArrowDropdown /></span>
                            Explore More
                        </a>
                    </div>

                </div>


            </div>
        </section>
    )
}

export default AboutUs