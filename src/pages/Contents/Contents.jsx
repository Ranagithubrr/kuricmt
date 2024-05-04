import React, { useEffect, useMemo, useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from '../../firebase-config';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useAuth } from '../../contexts/AuthContext';

const Contents = () => {
  const {token} = useAuth();
  const [maintitle, setMaintitle] = useState("");
  const [tagline, setTagline] = useState("");
  const [logoToDisplay, setLogoToDisplay] = useState("");
  const [photosToDisplay, setPhotosToDisplay] = useState([]);
  let mainLogo = "";
  const [photos, setPhotos] = useState([]);
  const [photosState, setPhotosState] = useState(null);
  const [logoState, setLogoState] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingState, setLoadingState] = useState("");

  const FetchData = () => {
    setLoading(false);
    axios.get('https://kuricmt-backend.onrender.com/content')
      .then((response) => {
        setMaintitle(response.data[0].maintitle);
        setTagline(response.data[0].tagline);
        setLogoToDisplay(response.data[0].mainlogo);
        setPhotosToDisplay(response.data[0].photos);
        setLoading(false);
      })
      .catch((err) => {
        console.log('an error', err)
        setLoading(false);
      })
    setPhotosState(null)
  }

  useEffect(() => {
    FetchData();
  }, [])

  const handleFileChange = (e) => {
    setLogoState(e.target.files[0]);
  };

  // const handlePhotoChange = (e) => {
  //   const files = e.target.files;
  //   const filesArray = Array.from(files);
  //   setPhotosState(filesArray);
  // };

  const [singleFileURL, setSingleFileURL] = useState(null);

  const uploadSingleFile = async (file) => {
    setLoadingState("Uploading Logo");
    const storageRef = ref(storage, `images/${file.name}`);

    try {
      await uploadBytes(storageRef, file);

      // Get the download URL of the uploaded file
      const downloadURL = await getDownloadURL(storageRef);

      // Set the URL using state
      setSingleFileURL(downloadURL);

      // Return the download URL if needed
      return downloadURL;
    } catch (error) {
      console.error("Error uploading file:", error);
      return null;
    }
  };

  // useEffect to set the photoURLs state when singleFileURL changes
  useEffect(() => {
    if (singleFileURL) {
      setPhotos([singleFileURL]);
    }
  }, [singleFileURL]);


  const photoURLs = useMemo(() => [], []);

  const uploadPhotos = async () => {
    setLoadingState("Uploading Photos . . .");
    for (const photo of photosState) {
      const storageRef = ref(storage, `images/${photo.name}`);

      try {
        await uploadBytes(storageRef, photo);

        const downloadURL = await getDownloadURL(storageRef);

        photoURLs.push(downloadURL);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }

    setPhotos(photoURLs);
  };

  useEffect(() => {
    setPhotos(photoURLs);
  }, [photoURLs]);

  const SubmitClicked = async () => {
    setLoadingState("Please Wait");
    setLoading(true);
    let logoURL = "";
    try {
      if (logoState) {
        // Wait for the uploadSingleFile function to complete
        logoURL = await uploadSingleFile(logoState);
        console.log('logo url is:', logoURL);
        mainLogo = logoURL;
      }

      if (photosState && photosState.length > 0) {
        await uploadPhotos();
      }

      // Now you can safely call sendDatatoDb after mainLogo is set
      sendDatatoDb();
    } catch (error) {
      console.error("Error during submission:", error);
      setLoading(false);
    }
  };  

  const sendDatatoDb = async () => {
    const existingData = {
      maintitle: maintitle,
      tagline: tagline,
      mainlogo: logoToDisplay,
      photos: photosToDisplay
    };

    const dataObject = {
      maintitle: maintitle || existingData.maintitle,
      tagline: tagline || existingData.tagline,
      mainlogo: mainLogo || existingData.mainlogo,
      photos: photos.length > 0 ? photos : existingData.photos
    };
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    };
    const apiUrl = `https://kuricmt-backend.onrender.com/content`;
    try {
      setLoadingState("Updating Data Please wait. . .");
      const response = await axios.put(apiUrl, dataObject, { headers });
      if (response.status === 200) {
        toast.success('Data Updated Successfully', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setLoading(false);
      } else {
        setLoading(false);
        toast.error('Failed to Update Data !', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      FetchData();
      setLoading(false);
      setPhotosState(null);
      const fileInput = document.getElementById('fileInputField'); // Replace 'yourFileInputId' with the actual ID of your file input
      if (fileInput) {
        fileInput.value = '';
      }
    } catch (error) {
      setLoading(false);
      console.error('Error:', error);
    }
  };
  return (
    <div className='p-4'>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {
        loading && <div className='shadow-lg flex items-center justify-center text-center rounded fixed top-16 z-30 left-0 right-0 h-20 w-1/2 m-auto bg-white'>
          <span className='font-semibold'>{loadingState}</span>
        </div>
      }
      <h4 className='font-semibold text-xl'>Setup Website Contents</h4>
      <div className='pt-4'>
        <span className='font-semibold block'>Main Title</span>
        <input value={maintitle} onChange={(e) => setMaintitle(e.target.value)} type="text" placeholder='Ex: This is a demo title' className='border outline-none px-3 py-4 text-lg w-2/3' />
      </div>
      <div className='pt-4'>
        <span className='font-semibold block'>Tagline</span>
        <input value={tagline} onChange={(e) => setTagline(e.target.value)} type="text" placeholder='Ex: This is a demo tagline' className='border outline-none px-3 py-4 text-lg w-2/3' />
      </div>
      <div className='pt-4 flex w-2/3'>
        <div className='w-1/2'>
          <span className='font-semibold block'>Main Logo</span>
          <input onChange={handleFileChange} type="file" className='border outline-none px-3 py-4 text-lg' />
        </div>
        <div className='w-1/2'>
          {
            logoToDisplay !== "" && <img src={logoToDisplay} alt="" className='rounded h-36 w-32 ml-10' />
          }
        </div>
      </div>
      {/* <div className='pt-4 flex w-2/3'>
        <div className='w-1/2'>
          <span className='font-semibold block'>Cover Photo</span>
          <input onChange={handleFileChange} type="file" className='border outline-none px-3 py-4 text-lg' />
        </div>
        <div className='w-1/2'>
          {
            logoToDisplay !== "" && <img src={logoToDisplay} alt="" className='rounded h-36 w-32 ml-10' />
          }
        </div>
      </div> */}
      {/* <div className='pt-4'>
        <span className='font-semibold block'>Gallary Photos</span>
        <input id='fileInputField' onChange={handlePhotoChange} type="file" multiple className='border outline-none px-3 py-4 text-lg w-2/3' />
      </div> */}
      
      <div className='pt-4 hidden'>
        <div className='grid grid-cols-6 gap-4'>
          {
            photosToDisplay && photosToDisplay.length !== 0 && photosToDisplay.map((ele) => {
              return (
                <div className='relative'>
                  {/* <span className='absolute top-5 right-5 bg-red-600 text-gray-200 cursor-pointer px-3 py-2 rounded'><FaRegTrashAlt /></span> */}
                  <img src={ele} alt="kdjfkd" className='h-44 w-full' />
                </div>
              )
            })
          }
        </div>
      </div>
      <div>
        <button onClick={SubmitClicked} className='bg-green-500 text-gray-200 font-semibold text-sm px-3 py-2 rounded-md my-2'>Save Changes</button>
      </div>
    </div>
  )
}

export default Contents