import React, { useEffect, useMemo, useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from '../../firebase-config';

const Contents = () => {
  const [maintitle, setMaintitle] = useState("");
  const [tagline, setTagline] = useState("");
  const [mainLogo, setMainLogo] = useState("");
  const [photos, setPhotos] = useState([]);
  const [photosState, setPhotosState] = useState(null);

  const [logoState, setLogoState] = useState(null);

  const handleFileChange = (e) => {
    setLogoState(e.target.files[0]);
  };

  const handlePhotoChange = (e) => {
    const files = e.target.files;
    const filesArray = Array.from(files);
    setPhotosState(filesArray);
  };

  const uploadSingleFile = async (file) => {
    const storageRef = ref(storage, `images/${file.name}`);

    try {
      await uploadBytes(storageRef, file);

      // Get the download URL of the uploaded file
      const downloadURL = await getDownloadURL(storageRef);

      // Return the download URL
      return downloadURL;
    } catch (error) {
      console.error("Error uploading file:", error);
      return null;
    }
  };

  const photoURLs = useMemo(() => [], []);

  const uploadPhotos = async () => {
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

    setPhotos(photoURLs, () => {
      console.log("Updated photos state:", photos);
    });
  };

  useEffect(() => {
    setPhotos(photoURLs);
  }, [photoURLs]);

  const SubmitClicked = async () => {
    let logoURL = "";
  
    if (logoState) {
      try {
        logoURL = await uploadSingleFile(logoState);
        console.log('logo url is:', logoURL)
        setMainLogo(logoURL);
      } catch (error) {
        console.error("Error uploading logo:", error);
      }
    }
  
    if (photosState && photosState.length > 0) {
      await uploadPhotos();
    }
  
    sendDatatoDb();
  };
  

  const sendDatatoDb = () => {
    console.log(
      "title:",
      maintitle,
      "tagline",
      tagline,
      "logo",
      mainLogo,
      "photos",
      photos
    );
  };  
  return (
    <div className='p-4'>
      <span onClick={sendDatatoDb}>click me</span>
      <h4 className='font-semibold text-xl'>Setup Website Contents</h4>
      <div className='pt-4'>
        <span className='font-semibold block'>Main Title</span>
        <input onChange={(e) => setMaintitle(e.target.value)} type="text" placeholder='Ex: This is a demo title' className='border outline-none px-3 py-4 text-lg w-2/3' />
      </div>
      <div className='pt-4'>
        <span className='font-semibold block'>Tagline</span>
        <input onChange={(e) => setTagline(e.target.value)} type="text" placeholder='Ex: This is a demo tagline' className='border outline-none px-3 py-4 text-lg w-2/3' />
      </div>
      <div className='pt-4'>
        <span className='font-semibold block'>Main Logo</span>
        <input onChange={handleFileChange} type="file" className='border outline-none px-3 py-4 text-lg w-2/3' />
      </div>
      <div className='pt-4'>
        <span className='font-semibold block'>Gallary Photos</span>
        <input onChange={handlePhotoChange} type="file" multiple className='border outline-none px-3 py-4 text-lg w-2/3' />
      </div>
      <div className='pt-4'>
        <div className='grid grid-cols-6 gap-4'>
          {/* {
            images.map((ele) => {
              return (
                <div className='relative'>
                  <span className='absolute top-5 right-5 bg-red-600 text-gray-200 cursor-pointer px-3 py-2 rounded'><FaRegTrashAlt /></span>
                <img src={ele.image} alt="kdjfkd" className='h-44 w-full'/>
                </div>
              )
            })
          } */}
        </div>
      </div>
      <div>
        <button onClick={SubmitClicked} className='bg-green-500 text-gray-200 font-semibold text-sm px-3 py-2 rounded-md my-2'>Save Changes</button>
      </div>
    </div>
  )
}

export default Contents