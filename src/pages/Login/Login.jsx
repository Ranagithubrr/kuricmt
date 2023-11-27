import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SigninImg from '../../img/login.svg';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setUser } from '../../redux/userReducer/userActions';

const Login = () => {
    const userState = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const LoginClicked = async () => {
        if (email === "" || password === "") {
            return window.alert("Please provide email and password")
        }
        axios.post('https://kuricmt.onrender.com/user/login', {
            email,
            password
        })
            .then(function (response) {
                console.log(response.data.user);
                response.data.msg = undefined;
                dispatch(setUser(response.data))
            })
            .catch((err) => {
                console.log(err)
            })

            console.log(userState)
    };  
    const SeeUserSlice = () =>{
        console.log(userState)
    }
    return (
        <div className="w-2/3 mx-auto h-screen items-center flex bg-white">
            <div className="w-1/2">
                <img src={SigninImg} alt="" />
            </div>
            <button onClick={SeeUserSlice}>click</button>
            <div className="w-1/2">
                <div className='w-2/3 ml-10'>
                    <h3 className='text-blue-500 font-sans font-bold text-xl mb-2'>Login Account</h3>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Email ID' className='outline-none bg-gray-100 px-4 py-1 border-l-2 w-full border-blue-500 my-2 block' />
                    <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Password' className='outline-none bg-gray-100 px-4 py-1 border-l-2 w-full border-blue-500 my-2 block' />
                    <span className='text-sm font-semibold text-gray-500'> Not a Member ? <Link to="/register" className='text-blue-500'>Sign Up</Link></span>
                    <button onClick={LoginClicked} className='bg-blue-500 text-sm font-serif rounded-full block text-gray-100 w-full py-1 my-2'>Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Login;