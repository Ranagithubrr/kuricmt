import React, { useState } from 'react';
import ProfilePic from '../../../img/docc.png'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from '../../../firebase-config';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import { FaCamera } from "react-icons/fa";
import {useAuth} from '../../../contexts/AuthContext';

const UpdateProfile = () => {
    const {token, userData, updateUserData} = useAuth();
    const [logoState, setLogoState] = useState(null);
    let imageUrl = "";
    const navigate = useNavigate();   
    const { name, address, email, phone, title, website, facebook, twitter, instagram, _id, image } = userData || {};
    let newData = {
        email: email,
        name: name,
        address: address,
        phone: phone,
        title: title,
        website: website,
        facebook: facebook,
        twitter: twitter,
        instagram: instagram,
        image: image,
        userId: _id
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        newData = {
            ...newData,
            [name]: value
        };
        // console.log(newData)
    };
    const headers = {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
    };
    const uploadSingleFile = async (file) => {
        const storageRef = ref(storage, `images/${file.name}`);
        try {
            await uploadBytes(storageRef, file);

            // Get the download URL of the uploaded file
            const downloadURL = await getDownloadURL(storageRef);

            // Return the download URL if needed
            return downloadURL;
        } catch (error) {
            console.error("Error uploading file:", error);
            return null;
        }
    };
    const SubmitClicked = async () => {
        // console.log('sending data is', newData)
        try {
            let profilePicUrl = "";
            if (logoState) {
                // Wait for the uploadSingleFile function to complete
                profilePicUrl = await uploadSingleFile(logoState);
                imageUrl = profilePicUrl;
                // console.log('profilePic url is:', profilePicUrl);
            }

            // Update newData state after profile picture upload
            newData = {
                ...newData,
                image: imageUrl
            };        
                await UpdateData();
            
        } catch (error) {
            console.error("Error during submission:", error);
            // setLoading(false);
        }
        // console.log(newData); // Ensure newData is updated before proceeding
    };

    const UpdateData = async () => {

        // console.log('going data is', newData);
        try {
            const response = await axios.post('https://kuricmt-backend.onrender.com/user/update-profile', newData, { headers });
            // console.log(response);
            response.data.msg = undefined;
            const updatedUser = response.data.updatedUser;
            response.data.user = updatedUser;
            delete response.data.updatedUser;
            updateUserData(response.data.user)
            // console.log('updated data is:', response.data)            
            navigate('/dashboard/profile');
            toast.success('User Updated Successfully', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div className='flex p-4 pr-0'>
            <ToastContainer
            />
            <div className="w-1/5 flex justify-end">
                <div className='relative h-40 w-40 overflow-hidden rounded-full'>
                    <img
                        src={logoState ? URL.createObjectURL(logoState) : image || ProfilePic}
                        alt="profilePic here" className='w-full h-full rounded-full absolute bg-gray-300' />
                    <div className='absolute top-1/2 h-40 w-40 opacity-50 bg-gray-400 hover:opacity-80 transition ease-in-out cursor-pointer flex justify-around pt-4'>
                        <input type="file" name="image" id="profilepic" className='hidden' onChange={(e) => setLogoState(e.target.files[0])} />
                        <label htmlFor="profilepic" className='cursor-pointer'>
                            <FaCamera className='text-4xl' />
                        </label>
                    </div>
                </div>

            </div>
            <div className="border-t-4 border-gray-300 mt-20 w-full pl-4">
                <input className='font-bold text-xl text-gray-600 dark:text-white outline-none border-b-2' placeholder='Masud Rana ' autoFocus defaultValue={newData.name} onChange={(e) => handleChange(e)} name="name"></input>
                <button className='bg-green-800 text-gray-100 float-right mr-5 font-bold text-sm p-2 rounded mt-2' onClick={() => SubmitClicked()}>Save Profile</button>
                <input className='font-semibold text-gray-600 text-sm outline-none block border-b-2' placeholder='Jr Front-end Developer' defaultValue={newData.title} onChange={(e) => handleChange(e)} name="title"></input>
                <div className='pt-4'>
                    <span className='font-semibold text-gray-400'>Contact Informations</span>
                    <div className='flex justify-between w-1/2'>
                        <div className='w-1/4'>
                            <span className='font-semibold text-gray-600'>Phone</span>
                        </div>
                        <div className='w-3/4'>
                            <input className='text-gray-600 font-semibold outline-none border-b-2' placeholder='+880123456789' defaultValue={newData.phone} onChange={(e) => handleChange(e)} name="phone"></input>
                        </div>
                    </div>
                    <div className='flex justify-between w-1/2'>
                        <div className='w-1/4'>
                            <span className='font-semibold text-gray-600'>Address</span>
                        </div>
                        <div className='w-3/4'>
                            <input className='text-gray-600 font-semibold outline-none border-b-2' placeholder='Rangpur Haragach, Bangladesh'  onChange={(e) => handleChange(e)} name="address" defaultValue={newData.address}></input>
                        </div>
                    </div>
                    <div className='flex justify-between w-1/2'>
                        <div className='w-1/4'>
                            <span className='font-semibold text-gray-600'>Email</span>
                        </div>
                        <div className='w-3/4'>
                            <input className='text-gray-600 font-semibold outline-none border-b-2' placeholder='ranarr.dev@gmail.com' disabled defaultValue={email}></input>
                            <span className='block text-xs  my-2 p-1 w-2/3 rounded text-red-600 font-bold'>Email is not changable</span>
                        </div>
                    </div>
                    <span className='font-bold textmd text-gray-700'>Social Networks</span>
                    <div className='flex justify-between w-1/2'>
                        <div className='w-1/4'>
                            <span className='font-semibold text-gray-600'>Facebook</span>
                        </div>
                        <div className='w-3/4'>
                            <input className='text-gray-600 font-semibold outline-none border-b-2' placeholder='' defaultValue={newData.facebook} onChange={(e) => handleChange(e) } name="facebook"></input>
                        </div>
                    </div>
                    <div className='flex justify-between w-1/2'>
                        <div className='w-1/4'>
                            <span className='font-semibold text-gray-600'>Instagram</span>
                        </div>
                        <div className='w-3/4'>
                            <input className='text-gray-600 font-semibold outline-none border-b-2' placeholder='' defaultValue={newData.instagram} onChange={(e) => handleChange(e)} name="instagram"></input>
                        </div>
                    </div>
                    <div className='flex justify-between w-1/2'>
                        <div className='w-1/4'>
                            <span className='font-semibold text-gray-600'>Twitter</span>
                        </div>
                        <div className='w-3/4'>
                            <input className='text-gray-600 font-semibold outline-none border-b-2' placeholder='' defaultValue={newData.twitter} onChange={(e) => handleChange(e)} name="twitter"></input>
                        </div>
                    </div>
                    <div className='flex justify-between w-1/2'>
                        <div className='w-1/4'>
                            <span className='font-semibold text-gray-600'>Website</span>
                        </div>
                        <div className='w-3/4'>
                            <input className='text-gray-600 font-semibold outline-none border-b-2' placeholder='' defaultValue={newData.website} onChange={(e) => handleChange(e)} name="website"></input>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default UpdateProfile;