import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SigninImg from '../../img/signup.svg';
import axios from 'axios';
import { IoIosWarning } from 'react-icons/io';
import { FaRegCheckCircle } from "react-icons/fa";

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
        if ( password !== confirmpassword) {
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
            if(!err.response){
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
        <div className="w-2/3 mx-auto h-screen items-center flex bg-white">
            <div className="w-1/2">
                <img src={SigninImg} alt="" className='rotat ' style={{ transform: 'scaleX(-1)' }} />
            </div>
            <div className="w-1/2">
                <div className='w-2/3 ml-10'>
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
                    <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Your Full Name' className='outline-none bg-gray-100 px-4 py-1 border-l-2 w-full border-blue-500 my-2 block' />
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='Email ID' className='outline-none bg-gray-100 px-4 py-1 border-l-2 w-full border-blue-500 my-2 block' />
                    <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Password' className='outline-none bg-gray-100 px-4 py-1 border-l-2 w-full border-blue-500 my-2 block' />
                    <input value={confirmpassword} onChange={(e)=>setconfirmPassword(e.target.value)} type="password" placeholder='Confirm Password' className='outline-none bg-gray-100 px-4 py-1 border-l-2 w-full border-blue-500 my-2 block' />
                    <span className='text-sm font-semibold text-gray-500'> Already a Member ? <Link to="/login" className='text-blue-500'>Sign In</Link></span>
                    <button onClick={LoginClicked} className='bg-blue-500 text-sm font-serif rounded-full block text-gray-100 w-full py-1 my-2'>{loading ? 'Please Wait' : 'Sign Up' }</button>
                </div>
            </div>
        </div>
    );
};

export default Register;