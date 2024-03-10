import React, { useState } from 'react';
import ProfilePic from '../../../img/docc.png'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { updateUser } from '../../../redux/userReducer/userActions';

const UpdateProfile = () => {
    const userState = useSelector((state) => state.userReducer);
    console.log(userState)
    const token = userState.token;
    const dispatch = useDispatch();
    console.log('state is', userState)
    const { name, address, email, isactivate, phone, title, type, website, _id } = userState.user || {};
    const [newData, setNewData] = useState({
        email: email,
        name: name,
        address: address,
        phone: phone,
        title: title,
        website: website,
        userId: _id
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };
    const headers = {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
    };
    const UpdateData = async () => {
        console.log('clicked');
        // console.log(token)
        // console.log(newData)
        try {
            const response = await axios.post('http://localhost:4000/user/update-profile', newData, { headers });
            console.log(response);
            response.data.msg = undefined;
            const updatedUser = response.data.updatedUser;            
            response.data.user = updatedUser;
            delete response.data.updatedUser;               
            dispatch(updateUser(response.data))
        } catch (e) {
            console.log(e)
        }

        // .then((res)=>{return(res)})   
        // .catch((err)=>console.log(err))     
    }
    return (
        <div className='flex p-4 pr-0'>
            <div className="w-1/5 flex justify-end">
                <img src={ProfilePic} alt="profilePic here" className='h-40 w-40 bg-gray-300 rounded-full' />
            </div>
            <div className="border-t-4 border-gray-300 mt-20 w-full pl-4">
                <input className='font-bold text-xl text-gray-600 dark:text-white outline-none border-b-2' placeholder='Masud Rana ' autoFocus value={newData.name} onChange={(e) => handleChange(e)} name="name"></input>
                <button className='bg-green-800 text-gray-100 float-right mr-5 font-bold text-sm p-2 rounded mt-2' onClick={() => UpdateData()}>Save Profile</button>
                <input className='font-semibold text-gray-600 text-sm outline-none block border-b-2' placeholder='Jr Front-end Developer' value={newData.title} onChange={(e) => handleChange(e)} name="title"></input>
                <div className='pt-4'>
                    <span className='font-semibold text-gray-400'>Contact Informations</span>
                    <div className='flex justify-between w-1/2'>
                        <div className='w-1/4'>
                            <span className='font-semibold text-gray-600'>Phone</span>
                        </div>
                        <div className='w-3/4'>
                            <input className='text-gray-600 font-semibold outline-none border-b-2' placeholder='+880123456789' value={newData.phone} onChange={(e) => handleChange(e)} name="phone"></input>
                        </div>
                    </div>
                    <div className='flex justify-between w-1/2'>
                        <div className='w-1/4'>
                            <span className='font-semibold text-gray-600'>Address</span>
                        </div>
                        <div className='w-3/4'>
                            <input className='text-gray-600 font-semibold outline-none border-b-2' placeholder='Rangpur Haragach, Bangladesh' value={newData.address} onChange={(e) => handleChange(e)} name="address"></input>
                        </div>
                    </div>
                    <div className='flex justify-between w-1/2'>
                        <div className='w-1/4'>
                            <span className='font-semibold text-gray-600'>Email</span>
                        </div>
                        <div className='w-3/4'>
                            <input className='text-gray-600 font-semibold outline-none border-b-2' placeholder='ranarr.dev@gmail.com' disabled value={email}></input>
                            <span className='block text-xs  my-2 p-1 w-2/3 rounded text-red-600 font-bold'>Email is not changable</span>
                        </div>
                    </div>
                    <div className='flex justify-between w-1/2'>
                        <div className='w-1/4'>
                            <span className='font-semibold text-gray-600'>Website</span>
                        </div>
                        <div className='w-3/4'>
                            <input className='text-gray-600 font-semibold outline-none border-b-2' placeholder='https://rana-rr.netlify.app/' value={newData.website} onChange={(e) => handleChange(e)} name="website"></input>
                        </div>
                    </div>
                </div>
                <div className='pt-4'>
                    <span className='font-semibold text-gray-400'>Basic Informations</span>
                    <div className='flex justify-between w-1/2'>
                        <div className='w-1/4'>
                            <span className='font-semibold text-gray-600'>Gender</span>
                        </div>
                        <div className='w-3/4'>
                            <input type="radio" id='male' name='gender' className='mx-2' />
                            <label htmlFor="male">Male</label>
                            <input type="radio" id='famale' name='gender' className='mx-2' />
                            <label htmlFor="famale">Famale</label>
                        </div>
                    </div>
                    <div className='flex justify-between w-1/2'>
                        <div className='w-1/4'>
                            <span className='font-semibold text-gray-600'>Age</span>
                        </div>
                        <div className='w-3/4'>
                            <span className='text-gray-600 font-semibold'>21</span>
                        </div>
                    </div>
                    <div className='flex justify-between w-1/2'>
                        <div className='w-1/4'>
                            <span className='font-semibold text-gray-600'>Birth Date</span>
                        </div>
                        <div className='w-3/4'>
                            <input type="date" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateProfile;