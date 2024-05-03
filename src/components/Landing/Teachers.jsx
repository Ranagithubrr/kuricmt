import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TeacherProfile from '../../img/teacher.png'
const Teachers = ({ Teachers }) => {
    console.log(Teachers);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        centerMode: false,
    };
    return (
        <div className='py-5'>
            <h1 className='font-extrabold text-2xl bg-gradient-to-r from-gray-500 to-red-500 text-transparent bg-clip-text text-center'>
                Meet Our Teachers
            </h1>
            {
                Teachers && Teachers.length < 5 &&

                <div className='grid grid-cols-4 gap-10 py-5 px-10 mt-5'>
                    {
                        Teachers && Teachers.map((ele) => {
                            if (ele.type !== "admin") {
                                return (
                                    <div data-aos="fade-up" className='border rounded cursor-pointer box-border overflow-clip pb-4'>
                                        <div className='h-32 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400'></div>
                                        <div>
                                            <img src={'https://photogov-com.akamaized.net/examples/bd-passport-55x45-photo/landmarks-US.webp'} alt="" className='rounded-full h-32 w-32 m-auto -mt-16 ring ring-white' />
                                            <h4 className='font-semibold text-center text-gray-800'>Dr. Abraham Ehshan</h4>
                                            <div className='px-5'>
                                                <span className='font-semibold text-sm block text-center'>Junior Instructor</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            }
            {
                Teachers && Teachers.length > 4 &&
                <Slider {...settings} className='mt-5'>
                    {
                        Teachers && Teachers.map((ele, index) => {
                            if (ele.type !== "admin") {
                                return (
                                    <div style={{ width: '90%', margin: 'auto', cursor: 'grab', padding: '20px' }}>
                                        <div data-aos="fade-up" className='border rounded cursor-pointer box-border overflow-clip pb-4 mx-4'>
                                            <div className='h-32 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400'></div>
                                            <img src={ele.image ? ele.image : TeacherProfile} alt="" className='rounded-full h-32 w-32 m-auto -mt-16 ring ring-white' />
                                            <h4 className='font-semibold text-center text-gray-800'>{ele.name}</h4>
                                            <div className='px-5'>
                                                <span className='font-semibold text-sm block text-center'>{ele.title}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </Slider>
            }
        </div>
    )
}

export default Teachers