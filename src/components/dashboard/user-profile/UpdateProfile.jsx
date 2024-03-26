import React, { useState } from 'react';
import ProfilePic from '../../../img/docc.png'
import { useDispatch, useSelector } from 'react-redux';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from '../../../firebase-config';
import axios from 'axios';
import { updateUser } from '../../../redux/userReducer/userActions';
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import { FaCamera } from "react-icons/fa";

const UpdateProfile = () => {
    const [logoState, setLogoState] = useState(null);
    const userState = useSelector((state) => state.userReducer);
    let imageUrl = "";
    const navigate = useNavigate();
    // console.log(userState)
    const token = userState.token;
    const dispatch = useDispatch();
    // console.log('state is', userState)
    const { name, address, email, phone, title, website, _id, image } = userState.user || {};
    let newData = {
        email: email,
        name: name,
        address: address,
        phone: phone,
        title: title,
        website: website,
        image: image,
        userId: _id
    };

    const handleChange = (name, value) => {
        newData = {
            ...newData,
            [name]: value
        };
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
        try {
            let profilePicUrl = "";
            if (logoState) {
                // Wait for the uploadSingleFile function to complete
                profilePicUrl = await uploadSingleFile(logoState);
                imageUrl = profilePicUrl;
                console.log('profilePic url is:', profilePicUrl);
            }

            // Update newData state after profile picture upload
            newData = {
                ...newData,
                image: imageUrl
            };

            if (profilePicUrl) {
                await UpdateData();
            }
        } catch (error) {
            console.error("Error during submission:", error);
            // setLoading(false);
        }
        console.log(newData); // Ensure newData is updated before proceeding
    };

    const UpdateData = async () => {

        console.log('going data is', newData);
        try {
            const response = await axios.post('http://localhost:4000/user/update-profile', newData, { headers });
            // console.log(response);
            response.data.msg = undefined;
            const updatedUser = response.data.updatedUser;
            response.data.user = updatedUser;
            delete response.data.updatedUser;
            console.log('updated data is:', response.data)
            dispatch(updateUser(response.data));
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
                <input className='font-bold text-xl text-gray-600 dark:text-white outline-none border-b-2' placeholder='Masud Rana ' autoFocus value={newData.name} onChange={(e) => handleChange(e)} name="name"></input>
                <button className='bg-green-800 text-gray-100 float-right mr-5 font-bold text-sm p-2 rounded mt-2' onClick={() => SubmitClicked()}>Save Profile</button>
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

            </div>
        </div >
    )
}

export default UpdateProfile;