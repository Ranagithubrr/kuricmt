import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import axios from 'axios';
import { FaBullhorn } from 'react-icons/fa';

const Announcement = () => {
    const [switchState, setSwitchState] = useState(false);
    const [announcement, setAnnouncement] = useState("");

    const ToggleSwitch = () => {
        setSwitchState(prev=>!prev);
        axios.post('https://kuricmt-backend.onrender.com/content/status')
            .then((res) => {
                console.log(res.data);
                setSwitchState(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    };
    const { token } = useAuth();
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    };
    const apiUrl = `https://kuricmt-backend.onrender.com/content/announcement`;

    const UpdateAnnc = async () => {
        try {
            const response = await axios.put(apiUrl, { announcement }, { headers });
            console.log(response.status)
        }
        catch (err) {
            console.log(err)
        }
    }
    const FetchData = async () => {
        axios.get('https://kuricmt-backend.onrender.com/content/announcement')
            .then((res) => {
                setSwitchState(res.data.announcementStatus.announcementstatus);
                setAnnouncement(res.data.data.announcement)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        FetchData();
    }, []);
    return (
        <div className='p-4 flex items-center justify-center flex-col mt-10'>
            <h2 className='font-semibold text-md dark:text-gray-300'>Add a New Announcement</h2>
            <div
                className={`mt-2 w-14 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${switchState ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-700'}`}
                onClick={ToggleSwitch}
            >
                <div
                    className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${switchState ? 'translate-x-7' : ''}`}
                ></div>
            </div>
            <span className='text-9xl cursor-pointer my-5 dark:text-gray-500'><FaBullhorn /></span>
            <textarea
                rows={10}
                cols={20}
                value={announcement}
                onChange={(e) => setAnnouncement(e.target.value)}
                placeholder='Text'
                className='border outline-none rounded-sm px-2 py-2 my-2 resize-none h-32 w-1/2 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300'
            />
            <button onClick={UpdateAnnc} className='bg-blue-600 text-gray-200 font-semibold text-sm rounded px-6 py-2' >Post</button>
        </div>

    )
}

export default Announcement