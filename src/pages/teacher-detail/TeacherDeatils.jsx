import React, { useEffect, useState } from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaGlobe, FaPhoneAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { IoLocation } from "react-icons/io5";
import { Typography } from "@material-tailwind/react";
import { useParams } from 'react-router';
import Notfoundimage from "../../img/no-profile.png";
import axios from 'axios';
const TeacherDeatils = () => {
    const [loading, setLoading] = useState(false);
    const [teacher, setTeacher] = useState(false);
    const { id } = useParams();
    const FetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`https://kuricmt-backend.onrender.com/user/${id}`);
            if (response.status === 200) setTeacher(response.data.teacher);
            setLoading(false);
        }
        catch (err) {
            console.log(err);
            setLoading(true);
        }

    }
    useEffect(() => {
        FetchData();
        // eslint-disable-next-line
    }, [])
    return (<>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden mt-5">
            {
                loading ? <div className="flex animate-pulse flex-wrap items-center gap-8">
                    <div className="grid h-56 w-56 place-items-center rounded-lg bg-gray-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-12 w-12 text-gray-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                            />
                        </svg>
                    </div>
                    <div className="w-max">
                        <Typography
                            as="div"
                            variant="paragraph"
                            className="mb-4 h-2 w-56 rounded-full bg-gray-300"
                        >
                            &nbsp;
                        </Typography>
                        <Typography
                            as="div"
                            variant="h1"
                            className="mb-2 h-5 w-72 rounded-full bg-gray-300"
                        >
                            &nbsp;
                        </Typography>
                        <Typography
                            as="div"
                            variant="paragraph"
                            className="mb-2 h-2 w-56 rounded-full bg-gray-300"
                        >
                            &nbsp;
                        </Typography>
                        <Typography
                            as="div"
                            variant="paragraph"
                            className="mb-2 h-2 w-56 rounded-full bg-gray-300"
                        >
                            &nbsp;
                        </Typography>
                        <Typography
                            as="div"
                            variant="paragraph"
                            className="mb-2 h-8 w-72 mt-5 rounded-sm bg-gray-300"
                        >
                            &nbsp;
                        </Typography>
                    </div>
                </div> :
                    <div className="md:flex">
                        <div className="md:flex-shrink-0 w-56 h-56">
                            <img className="h-full w-full " src={teacher.image || Notfoundimage} alt={`${teacher.name}'s`} />
                        </div>
                        <div className="p-6">
                            <div className="uppercase tracking-wide text-xs text-gray-700 font-semibold">{teacher.title}</div>
                            <h1 className="text-2xl font-bold text-gray-900">{teacher.name}</h1>
                            <div className="flex items-center space-x-2">
                                <IoLocation className="text-blue-500" size={14} />
                                <span className="text-sm font-bold text-gray-600 block">{teacher.address || 'not provided'}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaPhoneAlt className="text-red-500" size={14} />
                                <span className="text-sm font-bold text-gray-600 block">{teacher.phone || 'not provided'}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <IoMdMail className="text-green-500" size={14} />
                                <span className="text-sm font-bold text-gray-600 block">{teacher.email || 'not provided'}</span>
                            </div>
                            <div className="flex justify-around items-center w-64 h-12 bg-gray-200 rounded-lg p-2 mt-5">
                                <a href={teacher.facebook} target="_blank" rel="noreferrer">
                                    <FaFacebook className="text-blue-600 hover:text-blue-700" size={24} />
                                </a>
                                <a href={teacher.twitter} target="_blank" rel="noreferrer">
                                    <FaTwitter className="text-blue-400 hover:text-blue-500" size={24} />
                                </a>
                                <a href={teacher.instagram} target="_blank" rel="noreferrer">
                                    <FaInstagram className="text-pink-500 hover:text-pink-600" size={24} />
                                </a>
                                <a href={teacher.website} target="_blank" rel="noreferrer">
                                    <FaGlobe className="text-green-500 hover:text-green-600" size={24} />
                                </a>
                            </div>

                        </div>
                    </div>
            }
        </div>

    </>
    )
}

export default TeacherDeatils