import React, { useState } from 'react'
import { MdEditDocument } from "react-icons/md";
import { IoCloseCircle } from "react-icons/io5";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const Application = () => {
    const [showqhote, setshowqhote] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        roll: '',
        department: 'computer',
        semester: '',
        shift: '',
        subject: '',
        body: '',
    });
    const handleChange = (e) => {
        setFormData((old) => ({
            ...old,
            [e.target.name]: e.target.value
        }))
    };
    const SubmitClicked = async () => {
        if (
            formData.body === "" ||
            formData.department === "" ||
            formData.email === "" ||
            formData.name === "" ||
            formData.roll === "" ||
            formData.semester === "" ||
            formData.shift === ""
        ) {
            toast.error("Please Fill All The Fields")
            return;
        }
        try {
            const response = await axios.post("https://kuricmt-backend.onrender.com/application", formData);
            if (response.status === 200) {
                toast.success("Application Submitted Successfully");
                setFormData({
                    name: '',
                    email: '',
                    roll: '',
                    department: 'computer',
                    semester: '',
                    shift: '',
                    subject: '',
                    body: '',
                });
                setshowqhote(false)
            }
        } catch (err) {
            toast.error("Oops server error")
            console.log(err.response.data.msg)
        }
    }
    return (
        <>
            <div className='lg:flex bg-gray-200 px-4 py-6 my-3'>
                <ToastContainer />
                <div className='w-full lg:w-1/2 text-center md:text-left'>
                    <span className='font-bold text-3xl text-gray-600'>Empower Your Voice</span>
                    <p className='font-semibold text-gray-700'>Student Application Portal for Direct Dialogue with Chief Instructor</p>
                </div>
                <div className='flex items-center justify-center text-center w-full lg:w-1/2 mt-3 lg:mt-0'>
                    <button onClick={() => setshowqhote(!showqhote)} className="flex items-center px-6 py-2 text-sm font-semibold text-center text-white uppercase transition-all duration-300 bg-gradient-to-r from-blue-500 to-blue-800 rounded-full shadow-md hover:from-blue-600 hover:to-blue-900 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 active:shadow-inner"> <span className='pr-2'><MdEditDocument /></span> Write an Application</button>
                </div>
            </div>
            {
                showqhote &&
                <>

                    <div className='fixed w-full h-full bg-gray-800 opacity-80 top-0 bottom-0 left-0 right-0'></div>
                    <div className='fixed w-11/12 lg:w-1/2 bg-white top-20 left-0 right-0 m-auto shadow-lg rounded py-3'>
                        <div className='absolute -top-4 -right-4 bg-black rounded-full' onClick={() => setshowqhote(false)}>
                            <span className='text-white text-3xl cursor-pointer'><IoCloseCircle /></span>
                        </div>
                        <div className='text-center py-1 mx-5'>
                            <input value={formData.name} name='name' onChange={(e) => handleChange(e)} type="text" placeholder='Your Name' className='outline-none border rounded-sm px-3 py-1 w-full' />
                        </div>
                        <div className='text-center py-1 mx-5'>
                            <input value={formData.email} name='email' onChange={(e) => handleChange(e)} type="email" placeholder='Your Email' className='outline-none border rounded-sm px-3 py-1 w-full' />
                        </div>
                        <div className='text-center py-1 mx-5'>
                            <select value={formData.department} onChange={(e) => handleChange(e)} name="department" id="dep" className='border rounded-sm px-3 py-1 w-full outline-none'>
                                <option value="Computer">Computer</option>
                            </select>
                        </div>
                        <div className='text-center py-1 mx-5'>
                            <input value={formData.roll} name='roll' onChange={(e) => handleChange(e)} type="number" placeholder='Your Roll' className='outline-none border rounded-sm px-3 py-1 w-full' />
                        </div>
                        <div className='text-center py-1 mx-5'>
                            <select value={formData.semester} name='semester' onChange={(e) => handleChange(e)} id="" className='outline-none border rounded-sm px-3 py-1 w-full' >
                                <option>Semester</option>
                                <option value="1st">1st</option>
                                <option value="2nd">2nd</option>
                                <option value="3rd">3rd</option>
                                <option value="4th">4th</option>
                                <option value="5th">5th</option>
                                <option value="6th">6th</option>
                                <option value="7th">7th</option>
                                <option value="8th">8th</option>
                            </select>
                        </div>
                        <div className='text-center py-1 mx-5'>
                            <select name="shift" value={formData.shift} onChange={(e) => handleChange(e)} id="" className='outline-none border rounded-sm px-3 py-1 w-full' >
                                <option>Shift</option>
                                <option value="1st">1st</option>
                                <option value="2nd">2nd</option>
                            </select>
                        </div>
                        <div className='text-center py-1 mx-5'>
                            <input value={formData.subject} name='subject' onChange={(e) => handleChange(e)} type="text" placeholder='Subject' className='outline-none border rounded-sm px-3 py-1 w-full' />
                        </div>

                        <div className='text-center py-1 mx-5'>
                            <textarea value={formData.body} name='body' onChange={(e) => handleChange(e)} id="" cols="30" rows="5" style={{ whiteSpace: 'pre-wrap' }} className='border rounded-sm px-3 py-1 w-full outline-none' placeholder='Type Your Application ( Just Write The Main Body! )'></textarea>
                        </div>
                        <div className='text-center py-1 mx-5'>
                            <button onClick={SubmitClicked} className="flex items-center px-6 py-2 text-sm font-semibold text-center text-white uppercase transition-all duration-300 bg-gradient-to-r from-blue-500 to-blue-800 rounded-full shadow-md hover:from-blue-600 hover:to-blue-900 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 active:shadow-inner">Submit Application</button>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default Application