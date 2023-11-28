import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { GoAlert } from 'react-icons/go';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setCaptainsreducer } from '../../../redux/captainReducer/captainReducer';


const Pataientstable = () => {
    const dispatch = useDispatch()
    const [studentName, setStudentName] = useState("");
    const [studentId, setStudentId] = useState("");
    const [modal, setmodal] = useState(false);
    // const [Captains, setCaptains] = useState([]);
    const Captains = useSelector((state) => state.captainReducer);
    console.log('cap ', Captains)
    const FetchData = () => {
        axios.get('https://kuricmt.onrender.com/captains')
            .then((response) => {
                dispatch(setCaptainsreducer(response.data.AllCaptains))
                
                console.log(response.data.AllCaptains)
            })
            .catch((err) => {
                console.log('an error', err)
            })
    }
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
    const userState = useSelector((state) => state.userReducer);
    const token = userState.token
    const DeleteCaptain = async (id) => {
        const apiUrl = `https://kuricmt.onrender.com/captains/delete/${id}`;
        const requestData = {
            key1: 'value1',
            key2: 'value2',
        };

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        };
        try {
            const response = await axios.post(apiUrl, requestData, { headers });
            console.log('Response:', response.data);
            FetchData()
            setmodal(false);
        } catch (error) {
            console.error('Error:', error);
            setmodal(false)
        }
    }
    return (
        <>
            <div className='p-5'>
                {
                    Captains && Captains.captains.length !== 0 &&

                    <table className='min-w-full border border-gray-300'>
                        <thead>
                            <tr className='bg-gray-200 text-left'>
                                <th className='border p-2'>Sl</th>
                                <th className='border p-2'>Roll</th>
                                <th className='border p-2'>Name</th>
                                <th className='border p-2'>Semester</th>
                                <th className='border p-2'>Phone</th>
                                <th className='border p-2'>Email</th>
                                <th className='border p-2 text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Captains && Captains.captains && Captains.captains.map((ele, index) => {
                                    return (
                                        <tr className='border even:bg-gray-50 odd:bg-white'>
                                            <td className='border p-2'>{index + 1}</td>
                                            <td className='border p-2'>{ele.roll}</td>
                                            <td className='border p-2'>{ele.name}</td>
                                            <td className='border p-2'>{ele.semester}</td>
                                            <td className='border p-2'>{ele.phone}</td>
                                            <td className='border p-2'>{ele.email}</td>
                                            <td className='flex items-center justify-center pt-3'>
                                                <span className='cursor-pointer text-red-500 px-3' onClick={() => WantToDelete(ele.name, ele._id)}><FaRegTrashAlt /></span>
                                                <span className='cursor-pointer text-blue-500 px-3'><FaRegEdit /></span>
                                            </td>
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

