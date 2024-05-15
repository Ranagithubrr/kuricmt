import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { GoAlert } from 'react-icons/go';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import { setCaptainsreducer } from '../../../redux/captainReducer/captainReducer';
import { useAuth } from '../../../contexts/AuthContext';
import { Link } from 'react-router-dom';


const Pataientstable = ({ setIsUpdating, setOldData, setPropmodal, searchText }) => {
    const { token, userData } = useAuth();
    const dispatch = useDispatch()
    const [studentName, setStudentName] = useState("");
    const [studentId, setStudentId] = useState("");
    const [modal, setmodal] = useState(false);      
    const Captains = useSelector((state) => state.captainReducer);   
    const FetchData = () => {
        axios.get('https://kuricmt-backend.onrender.com/captains')
            .then((response) => {
                dispatch(setCaptainsreducer(response.data.AllCaptains))
                console.log(response.data.AllCaptains)
            })
            .catch((err) => {
                console.log('an error', err)
            })
    }
    const filteredItems = Captains.captains.filter(item => {
        if (!searchText || searchText.trim() === '') {
            return true; // Return true for all items when searchText is null or empty
        }
        return (
            item.name.toLowerCase().includes(searchText.toLowerCase()) ||
            item.email.toLowerCase().includes(searchText.toLowerCase()) ||
            item.roll.toLowerCase().includes(searchText.toLowerCase())
        );
    });
    console.log('filted items is', filteredItems)
    useEffect(() => {
        FetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const WantToDelete = (sname, id) => {
        setmodal(true);
        setStudentName(sname);
        console.log(id)
        setStudentId(id);
    }

    const DeleteCaptain = async (id) => {
        const apiUrl = `https://kuricmt-backend.onrender.com/captains/delete/${id}`;
        setmodal(false);
        const requestData = {
            key1: 'value1',
            key2: 'value2',
        };

        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        };

        // Create a promise that represents the deletion process
        const deletionPromise = axios.post(apiUrl, requestData, { headers });

        // Use toast.promise to display the toast dynamically
        const promiseToast = toast.promise(
            deletionPromise,
            {
                pending: 'Deleting, please wait...',
                success: 'Captain deleted successfully',
                error: 'Failed to delete captain',
            }
        );

        try {
            // Wait for the deletion promise to resolve or reject
            const response = await deletionPromise;

            // Manually close the toast after success
            toast.dismiss(promiseToast);

            console.log('Response:', response.data);
            FetchData();
        } catch (error) {
            console.error('Error:', error);
            setmodal(false);

            // Manually close the toast after error
            toast.dismiss(promiseToast);
        }
    };

    const SetProps = (ele) => {
        setIsUpdating(true);
        setOldData(ele);
        setPropmodal(true);
    }
    return (
        <>
            <ToastContainer
                autoClose={1500}
            />
            <div className=''>
                {
                    Captains && Captains.captains.length !== 0 &&

                    <table className='min-w-full border border-gray-300'>
                        <thead>
                            <tr className='bg-gray-200 text-left'>
                                <th className='border p-2'>Sl</th>
                                <th className='border p-2'>Roll</th>
                                <th className='border p-2'>Name</th>
                                <th className='border p-2'>Semester</th>
                                <th className='border p-2'>Shift</th>
                                <th className='border p-2'>Phone</th>
                                <th className='border p-2'>Email</th>
                                {
                                    userData && userData.type && userData.type === "admin" &&
                                    <th className='border p-2 text-center'>Action</th>
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filteredItems.length !== 0 && filteredItems.map((ele, index) => {
                                    return (
                                        <tr className='border even:bg-gray-50 odd:bg-white'>
                                            <td className='border p-2'>{index + 1}</td>
                                            <td className='border p-2'>{ele.roll}</td>
                                            <td className='border p-2'>{ele.name}</td>
                                            <td className='border p-2'>{ele.semester}</td>
                                            <td className='border p-2'>{ele.shift}</td>
                                            <td className='border p-2'><Link to={`tel:${ele.phone}`}>{ele.phone}</Link></td>
                                            <td className='border p-2'><Link to={`mailto:${ele.email}`}>{ele.email}</Link></td>
                                            {
                                                userData && userData.type && userData.type === "admin" &&
                                                <td className='flex items-center justify-center pt-3'>
                                                    <span className='cursor-pointer text-red-500 px-3' onClick={() => WantToDelete(ele.name, ele._id)}><FaRegTrashAlt /></span>
                                                    <span className='cursor-pointer text-blue-500 px-3' onClick={() => SetProps(ele)}><FaRegEdit /></span>
                                                </td>
                                            }
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                }
                {
                    Captains && Captains.captains.length === 0 &&
                    <div className="w-full p-4 text-center py-10">
                        <span className="text-gray-500">No data</span>
                    </div>
                }
                {
                    Captains && Captains.captains.length !== 0 && filteredItems.length === 0 &&
                    <div className="w-full p-4 text-center py-10">
                        <span className="text-gray-500">No match</span>
                    </div>
                }
                {
                    modal &&
                    <div onClick={() => setmodal(false)} className='bg-gray-700 opacity-75 fixed top-0 left-0 w-full h-full z-10'></div>
                }
                {modal &&
                    <div className='fixed top-32 w-1/3 m-auto z-50 bg-white shadow left-0 right-0 rounded p-4'>
                        <div className='text-center w-full flex items-center justify-center flex-col'>
                            <span className='text-yellow-400 text-3xl m-auto'><GoAlert /></span>
                            <div>
                                <span className='text-sm font-semibold'>Are you sure want to delete {studentName}?</span>
                                <div className='py-3'>
                                    <button className='rounded px-6 mx-2 py-1 bg-red-500 text-gray-200 text-sm font-semibold' onClick={() => DeleteCaptain(studentId)}>Yes</button>
                                    <button className='rounded px-6 mx-2 py-1 bg-green-500 text-gray-200 text-sm font-semibold' onClick={() => setmodal(false)}>No</button>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>

        </>
    );
};


export default Pataientstable;

