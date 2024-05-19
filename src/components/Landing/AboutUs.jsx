import React from 'react';
import KuriImg from '../../img/kuri.jpg';

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
                        <a href="#teachers" className="inline-block px-4 py-1 mt-3 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-600 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none">
                            Explore More
                        </a>
                    </div>

                </div>


            </div>
        </section>
    )
}

export default AboutUs