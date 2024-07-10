import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SigninImg from '../../img/signup.svg';
import axios from 'axios';
import { IoIosWarning } from 'react-icons/io';
import { FaRegCheckCircle } from "react-icons/fa";
import EmailImg from '../../img/password.png';
import Verified from '../../img/verified.png';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setconfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorText, setErrorText] = useState("Something went wrong");
    const [success, setSuccess] = useState(false);

    const LoginClicked = async () => {
        const clearError = () => {
            setError(false);
            setErrorText("");
        };
        if (email === "" || password === "" || name === "") {
            setError(true);
            setErrorText("Please Fill all the Fields");
            setTimeout(clearError, 3000);
            return;
        }
        if (password !== confirmpassword) {
            setError(true);
            setErrorText("Password Didn't Match");
            setTimeout(clearError, 3000);
            return;
        }

        try {

            setLoading(true);
            const response = await axios.post('https://kuricmt-backend.onrender.com/user/register', {
                email,
                password,
                name
            });
            setError(false);
            response.data.msg = undefined;
            setLoading(false);
            setSuccess(true)
        } catch (err) {
            console.log(err)
            setLoading(false);
            setError(true);
            if (!err.response) {
                return;
            }
            if (err.response.status === 400) {
                setErrorText("Account with this email already exists, please log in")
            } else if (err.response.status === 406) {
                setErrorText("Account is not activated")
            } else {
                setErrorText("An error occured")
            }
            console.error(err);
            setTimeout(clearError, 3000);
        }
    };
    return (
        <>
            <div className=''>
                <div className="w-full lg:w-2/3 lg:mx-auto h-screen items-center lg:flex  px-6 bg-white">
                    <div className="w-full lg:w-1/2 p-12 pt-20 lg:pt-0">
                        <img src={SigninImg} alt="" className='rotat ' style={{ transform: 'scaleX(-1)' }} />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className='lg:w-2/3 box-border'>
                            {
                                error &&
                                <div className='flex items-center bg-yellow-200 px-4 py-3'>
                                    <div className='w-2/12'>
                                        <span className='text-yellow-600 text-4xl'><IoIosWarning /></span>
                                    </div>
                                    <div className='w-10/12'>
                                        <span className='font-semibold text-sm'>{errorText}</span>
                                    </div>
                                </div>
                            }
                            {
                                success && <div>
                                    <div className='flex items-center bg-green-200 px-4 py-3 my-3'>
                                        <div className='w-2/12'>
                                            <span className='text-green-600 text-4xl'><FaRegCheckCircle /></span>
                                        </div>
                                        <div className='w-10/12'>
                                            <span className='font-semibold text-sm'>Congratullations, Your account created successfully.</span>
                                        </div>
                                    </div>
                                </div>
                            }
                            {
                                success && <div>
                                    <div className='flex items-center bg-yellow-300 px-4 py-3 my-1'>
                                        <div className=''>
                                            <span className='font-semibold text-sm'>You will be able to login after admin approve your account, Please Wait!</span>
                                        </div>
                                    </div>
                                </div>
                            }
                            <h3 className='text-blue-500 font-sans font-bold text-xl mb-2'>Create Account</h3>
                            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Your Full Name' className='outline-none bg-gray-100 px-4 py-1 border-l-2 w-full border-blue-500 my-2 block' />
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Email ID' className='outline-none bg-gray-100 px-4 py-1 border-l-2 w-full border-blue-500 my-2 block' />
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' className='outline-none bg-gray-100 px-4 py-1 border-l-2 w-full border-blue-500 my-2 block' />
                            <input value={confirmpassword} onChange={(e) => setconfirmPassword(e.target.value)} type="password" placeholder='Confirm Password' className='outline-none bg-gray-100 px-4 py-1 border-l-2 w-full border-blue-500 my-2 block' />
                            <span className='text-sm font-semibold text-gray-500'> Already a Member ? <Link to="/login" className='text-blue-500'>Sign In</Link></span>
                            <button onClick={LoginClicked} className='bg-blue-500 text-sm font-serif rounded-full block text-gray-100 w-full py-1 my-2'>{loading ? 'Please Wait' : 'Sign Up'}</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hidden'>
                <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
                    <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                        <div className='flex items-center justify-center py-4 flex-col'>
                            <h2 className='font-semibold text-gray-900 text-2xl pb-4'>Verify Email</h2>
                            <img src={EmailImg} alt="" className='h-24' />
                            <p className='font-semibold text-gray-700'>A 6-digit OTP has been sent to your email.</p>
                        </div>
                        <h1 className="text-2xl font-bold mb-4">Enter OTP</h1>
                        <form action="#">
                            <div className="flex items-center justify-between gap-4">
                                <input
                                    type="text"
                                    className="w-full tracking-widest h-12 text-center text-xl font-bold bg-gray-100 border border-transparent hover:border-gray-300 rounded px-3 outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500"
                                    maxLength="6"
                                    inputMode="numeric"
                                />
                            </div>
                            <button type="submit" className=" w-full mt-4 inline-block px-6 py-2 text-sm font-semibold text-center text-white uppercase transition-all duration-300 bg-gradient-to-r from-blue-500 to-blue-800 rounded-full shadow-md hover:from-blue-600 hover:to-blue-900 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 active:shadow-inner">
                                Verify
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='hidden'>
                <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
                    <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                        <div className='flex items-center justify-center py-4 flex-col'>
                            <h2 className='font-semibold text-gray-900 text-2xl pb-4'>Verified Successfully</h2>
                            <img src={Verified} alt="" className='h-24' />
                            <p className='font-semibold text-gray-700 pt-3'>Redirecting to Log In Page in 3s</p>
                        </div>                       
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;