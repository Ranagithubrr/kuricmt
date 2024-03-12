import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SigninImg from '../../img/login.svg';
import { useSelector, useDispatch } from 'react-redux';
import { IoIosWarning } from 'react-icons/io'
import axios from 'axios';
import { setUser } from '../../redux/userReducer/userActions';
import { useNavigate } from 'react-router'

const Login = () => {
    const navigate = useNavigate();
    const userState = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorText, setErrorText] = useState("");


    const LoginClicked = async () => {
        const clearError = () => {
            setError(false);
            setErrorText("");
        };
        if (email === "" || password === "") {
            setError(true);
            setErrorText("Please Fill all the Fields");
            setTimeout(clearError, 3000);
            return;
        }

        try {
            setLoading(true);
            const response = await axios.post('http://localhost:4000/user/login', {
                email,
                password
            });
            setError(false);
            response.data.msg = undefined;
            dispatch(setUser(response.data));
            setLoading(false);
            navigate('/dashboard');

        } catch (err) {
            console.log(err)
            setLoading(false);
            setError(true);
            if (err.response.status === 404) {
                setErrorText("Invalid Credentials")
            } else if (err.response.status === 406) {
                setErrorText("Account is not activated")
            } else {
                setErrorText("An error occured")
            }
            console.error(err);
            setTimeout(clearError, 3000);
        }

        console.log(userState);
    };
    return (
        <div className="w-2/3 mx-auto h-screen items-center flex bg-white">
            <div className="w-1/2">
                <img src={SigninImg} alt="" />
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
                    <h3 className='text-blue-500 font-sans font-bold text-xl mb-2'>Login Account</h3>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Email ID' className='outline-none bg-gray-100 px-4 py-1 border-l-2 w-full border-blue-500 my-2 block' />
                    <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Password' className='outline-none bg-gray-100 px-4 py-1 border-l-2 w-full border-blue-500 my-2 block' />
                    <span className='text-sm font-semibold text-gray-500'> Not a Member ? <Link to="/register" className='text-blue-500'>Sign Up</Link></span>
                    <button onClick={LoginClicked} className='bg-blue-500 text-sm font-serif rounded-full block text-gray-100 w-full py-1 my-2'>{loading ? 'Please Wait . . .' : 'Sign In'}</button>
                </div>
            </div>
        </div>
    );
};

export default Login;