import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaFacebook, FaGlobe, FaInstagram, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import ProfilePIc from "../../img/no-profile.png";

import { IoLocation } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

const Teachers = ({ Teachers }) => {
  console.log(Teachers);
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section id="teachers">
      <div className="py-5">
        <h1 className="font-extrabold text-2xl text-gray-800 text-center">
          Meet Our Teachers
        </h1>
        {Teachers && Teachers.length < 5 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-5 px-10 mt-5">
            {Teachers &&
              Teachers.map((ele) => {
                if (ele.type !== "admin") {
                  return (
                    <div className="lg:flex">
                      <div className="lg:flex text-center lg:h-48" >
                        <div className="w-5/12 text-center">
                          <img className="h-full w-full rounded" src={ele.image || ProfilePIc} alt={`${ele.name}'s`} />
                        </div>
                        <div className="px-6 w-7/12 h-full flex flex-col justify-between">
                          <div>
                            <div className="uppercase tracking-wide text-xs text-gray-700 font-semibold text-left">{ele.title || "Not Provided"}</div>
                            <h1 className="text-2xl font-bold text-gray-900 text-left">{ele.name}</h1>
                            <div className="flex items-center space-x-2">
                              <IoLocation className="text-blue-500" size={14} />
                              <span className="text-sm font-bold text-gray-600 block">{ele.address || 'not provided'}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <FaPhoneAlt className="text-red-500" size={14} />
                              <span className="text-sm font-bold text-gray-600 block">{ele.phone || 'not provided'}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <IoMdMail className="text-green-500" size={14} />
                              <span className="text-sm font-bold text-gray-600 block">{ele.email || 'not provided'}</span>
                            </div>
                          </div>
                          <div className="mt-auto flex justify-around items-center h-12 bg-gray-200 rounded-lg p-2">
                            <a href={ele.facebook} target="_blank" rel="noreferrer">
                              <FaFacebook className="text-blue-600 hover:text-blue-700" size={24} />
                            </a>
                            <a href={ele.twitter} target="_blank" rel="noreferrer">
                              <FaTwitter className="text-blue-400 hover:text-blue-500" size={24} />
                            </a>
                            <a href={ele.instagram} target="_blank" rel="noreferrer">
                              <FaInstagram className="text-pink-500 hover:text-pink-600" size={24} />
                            </a>
                            <a href={ele.website} target="_blank" rel="noreferrer">
                              <FaGlobe className="text-green-500 hover:text-green-600" size={24} />
                            </a>
                          </div>
                        </div>

                      </div>
                    </div>
                  );
                }
                return null;
              })}
          </div>
        )}
        {Teachers && Teachers.length > 4 && (
          <Slider {...settings} className="mt-5 pb-4">
            {Teachers &&
              Teachers.map((ele, index) => {
                if (ele.type !== "admin") {
                  return (
                    <div className="flex">
                      <div className="lg:flex text-center lg:h-48" >
                        <div className="w-full lg:w-5/12 text-center">
                          <img className="w-56 mx-auto lg:h-full lg:w-full rounded" src={ele.image || 'https://www.spencerclarkegroup.co.uk/uploads/5005001.png'} alt={`${ele.name}'s`} />
                        </div>
                        <div className="mt-3 lg:mt-0 px-6 w-full lg:w-7/12 h-full flex flex-col justify-between">
                          <div>
                            <div className="uppercase tracking-wide text-xs text-gray-700 font-semibold text-left">{ele.title || "Not Provided"}</div>
                            <h1 className="text-md lg:text-2xl font-bold text-gray-900 text-left">{ele.name}</h1>
                            <div className="flex items-center space-x-2">
                              <IoLocation className="text-blue-500" size={14} />
                              <span className="text-sm font-bold text-gray-600 block">{ele.address || 'not provided'}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <FaPhoneAlt className="text-red-500" size={14} />
                              <span className="text-sm font-bold text-gray-600 block">{ele.phone || 'not provided'}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <IoMdMail className="text-green-500" size={14} />
                              <span className="text-sm font-bold text-gray-600 block">{ele.email || 'not provided'}</span>
                            </div>
                          </div>
                          <div className="mt-auto flex justify-around items-center h-12 bg-gray-200 rounded-lg p-2">
                            <a href={ele.facebook} target="_blank" rel="noreferrer">
                              <FaFacebook className="text-blue-600 hover:text-blue-700" size={24} />
                            </a>
                            <a href={ele.twitter} target="_blank" rel="noreferrer">
                              <FaTwitter className="text-blue-400 hover:text-blue-500" size={24} />
                            </a>
                            <a href={ele.instagram} target="_blank" rel="noreferrer">
                              <FaInstagram className="text-pink-500 hover:text-pink-600" size={24} />
                            </a>
                            <a href={ele.website} target="_blank" rel="noreferrer">
                              <FaGlobe className="text-green-500 hover:text-green-600" size={24} />
                            </a>
                          </div>
                        </div>

                      </div>
                    </div>
                  )
                }
                return null;
              })}
          </Slider>
        )}
      </div>     
    </section>
  );
};

export default Teachers;
