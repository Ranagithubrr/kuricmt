import React, { useState } from 'react';
import { FaFileUpload } from 'react-icons/fa';
import { storage } from '../../firebase-config';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import {useAuth}  from '../../contexts/AuthContext';
const AddNotice = () => {
  const {token} = useAuth();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [logoState, setLogoState] = useState(null);
  const [disabled,setDisabled] = useState(false);
  let noticefileurl = "";  
  const uploadSingleFile = async (file) => {
    setDisabled(true);
    const storageRef = ref(storage, `images/${file.name}`);
    try {
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      return downloadURL;
    } catch (error) {
      console.error("Error uploading file:", error);
      return null;
    }
  };
  const SubmitClicked = async () => {  
    if (logoState === null || title === "" || description === "") {
      toast.error("Please fill all the fields");
      return;
    }
    setDisabled(true);
    try {
      let logoURL = "";
      if (logoState) {
        logoURL = await uploadSingleFile(logoState);
        noticefileurl = logoURL;
      }
      sendDatatoDb();
    } catch (error) {
      console.error("Error during submission:", error);
      toast.error("Failed to post notice");
    }
  };

  const sendDatatoDb = async () => {
    setDisabled(true);
    const dataObject = {
      title: title,
      noticeurl: noticefileurl,
      description: description
    };
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    };
    const apiUrl = `http://localhost:4000/notice`;
    try {
      const response = await axios.post(apiUrl, dataObject, { headers });
      if (response.status === 200) {
        // console.log('uploaded successfully')
        setDescription("");
        setTitle("");
        toast.success('Notice Uploaded Successfully');
        setDisabled(false);
      } else {
        // console.log('failed to upload')
        toast.error('Failed to upload');
        setDisabled(false);
      }
      const fileInput = document.getElementById('fileInputField'); // Replace 'yourFileInputId' with the actual ID of your file input
      if (fileInput) {
        fileInput.value = '';
      }
    } catch (error) {
      // setLoading(false);
      toast.error('Failed to upload');
      console.error('Error:', error);
      setDisabled(false);
    }
  };
  return (
    <div className='p-4 flex items-center justify-center h-80 flex-col'>
      <ToastContainer
        autoClose={2000}
      />
      <h2 className='font-semibold text-md'>Add a New Notice</h2>
      <input type="file" name="pdf" id="pdfup" accept=".pdf, image/*" className='hidden' onChange={(e) => setLogoState(e.target.files[0])} />
      <label htmlFor='pdfup' className='text-9xl cursor-pointer my-5'><FaFileUpload /></label>
      <span className='text-sm font-semibold'>(Please Select PDF/Image)</span>
      <input type="text" value={title} placeholder='Notice Title' className='border outline-none w-1/2 rounded-sm px-2 py-2 my-2'
        onChange={(e) => setTitle(e.target.value)}
      />
      <input type="text" value={description} placeholder='Notice Descrition' className='border outline-none w-1/2 rounded-sm px-2 py-2 my-2'
        onChange={(e) => setDescription(e.target.value)}
      />
      <button disabled={disabled} className='bg-blue-600 text-gray-200 font-semibold text-sm rounded px-6 py-2' onClick={SubmitClicked}>Post</button>
    </div>
  )
}

export default AddNotice