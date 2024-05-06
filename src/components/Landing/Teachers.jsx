import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaFacebook, FaGlobe, FaInstagram, FaTwitter } from "react-icons/fa";
import ProfilePIc from '../../img/no-profile.png';

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,   
} from "@material-tailwind/react";

const Teachers = ({ Teachers }) => {
    console.log(Teachers);
    const settings = {
        dots: false,        
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: false,
        autoplay: true,       
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
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
                                            <img src={ele.image || ProfilePIc} alt="" className='rounded-full h-32 w-32 m-auto -mt-16 ring ring-white' />
                                            <h4 className='font-semibold text-center text-gray-800'>{ele.name}</h4>
                                            <div className='px-5'>
                                                <span className='font-semibold text-sm block text-center'>{ele.title}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            return null;
                        })
                    }
                </div>
            }
            {
                Teachers && Teachers.length > 4 &&
                <Slider {...settings} className='mt-5 pb-4'>
                    {
                        Teachers && Teachers.map((ele, index) => {
                            if (ele.type !== "admin") {
                                return (
                                    <Card className="rounded-lg p-2">
                                        <CardHeader floated={false} className="h-80">
                                            <img src={ele.image || "https://www.spencerclarkegroup.co.uk/uploads/5005001.png"} alt="profile-pictue" className='h-full w-full rounded-lg' />
                                        </CardHeader>
                                        <CardBody className="text-center mt-3">
                                            <Typography variant="h4" color="blue-gray" className="mb-2">
                                                {ele.name}
                                            </Typography>
                                            <Typography color="blue-gray" className="font-medium">
                                                {ele.title || "Not Provided"}
                                            </Typography>
                                        </CardBody>
                                        <CardFooter className="flex justify-center gap-7 pt-2 pb-2">
                                            
                                                <Typography
                                                    as="a"
                                                    href="#facebook"
                                                    variant="lead"
                                                    color="black"
                                                    textGradient
                                                    className='text-blue-600'
                                                >
                                                    <FaFacebook />
                                                </Typography>
                                            

                                            
                                                <Typography
                                                    as="a"
                                                    href="#instagram"
                                                    variant="lead"
                                                    color="purple"
                                                    textGradient
                                                    className='text-red-400'
                                                >
                                                    <FaInstagram />
                                                </Typography>
                                            
                                            
                                                <Typography
                                                    as="a"
                                                    href="#twitter"
                                                    variant="lead"
                                                    color="light-blue"
                                                    textGradient
                                                    className='text-blue-700'
                                                >
                                                    <FaTwitter />
                                                </Typography>
                                            
                                            
                                                <Typography
                                                    as="a"
                                                    href="#instagram"
                                                    variant="lead"
                                                    color="purple"
                                                    textGradient
                                                    className='text-gray-900'
                                                >
                                                    <FaGlobe />
                                                </Typography>
                                            
                                        </CardFooter>
                                    </Card>
                                )
                            }
                            return null;
                        })
                    }
                </Slider>
            }
        </div>
    )
}

export default Teachers