import React, { useEffect, useState } from 'react';
import Doctor from '../../../img/docc.png';
import axios from 'axios';

const Profile = () => {
    const [teachers, setTeachers] = useState([])
    const FetchTeachers = async () => {
        axios.get('https://kuricmt-backend.onrender.com/user')
            .then((res) => {
                setTeachers(res.data.AllUser)
            })
            .catch(err => {
                console.log('fetching error')
            })
    }
    useEffect(() => {
        FetchTeachers()
    }, [])
    console.log(teachers)
    return (
        <div className='p-2 border m-3'>
            <h3 className='font-semibold text-gray-900'>Doctors Profile</h3>
            <div className='flex flex-wrap'>
                {
                    teachers && teachers.length !== 0 && teachers.map((ele) => {
                        if (ele.isactivate === true) {
                            return (
                                <div className='w-full md:w-1/2 lg:w-1/4 px-2 my-2'>
                                    <div className='border rounded cursor-pointer box-border overflow-clip'>
                                    <div className='h-32 bg-gradient-to-r from-gray-200 to-gray-100'></div>
                                        <div>
                                            <div className='rounded-full h-28 w-28 m-auto -mt-16 bg-gradient-to-r from-gray-400  to-gray-200 overflow-hidden ring ring-white' >
                                                <img src={ele.image || Doctor} alt="" className='h-full w-full' />
                                            </div>
                                            <h4 className='font-semibold text-center text-gray-800'>Dr. Abraham Ehshan</h4>
                                            <span className='font-semibold text-center block text-xs text-gray-800'>MBBS</span>
                                            <div className='px-5'>
                                                <span className='font-semibold text-sm block text-center'>+8801738683787</span>
                                                <div className='text-center'>
                                                    <button className='border rounded px-3 py-1 my-2 block bg-gray-100 text-sm font-semibold text-gray-700 hover:bg-gray-200 m-auto'>View Details</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        return null;
                    })
                }
                {
                    teachers.length === 0 && <div className='flex items-center justify-center w-full py-20'>
                        <span>There is no teacher yet</span>
                    </div>
                }

                {/* doctor profile end */}
            </div>
        </div>
    );
};

export default Profile;