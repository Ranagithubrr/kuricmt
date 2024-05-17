import axios from "axios";
import { useEffect, useState } from "react";
import { FaRegTrashAlt } from 'react-icons/fa';
import { ToastContainer } from "react-toastify";


const QuotesReviewTable = () => {
    const [users, setUsers] = useState([]);


    const FetchUsers = async () => {
        axios.get('https://kuricmt-backend.onrender.com/quotes')
            .then((response) => {
                setUsers(response.data.allQuotes)
            })
            .catch((err) => {
                console.log('an error', err)
            })
    }

    console.log(users);
    useEffect(() => {
        FetchUsers();
    }, [])
    const DeleteQuote = async (id) => {
        const response = await axios.delete(`https://kuricmt-backend.onrender.com/quotes/${id}`);
        console.log(response.status);
        FetchUsers();
    }
    const UpdateStatus = async (id) => {
        const response = await axios.post(`https://kuricmt-backend.onrender.com/quotes/update-status/${id}`);
        console.log(response.status);
        FetchUsers();
    }
    return (
        <>
            <ToastContainer
                autoClose={1500}
            />
            <div className=''>
                {
                    users && users.length !== 0 &&

                    <table className='min-w-full border border-gray-300'>
                        <thead>
                            <tr className='bg-gray-200 text-left'>
                                <th className='border p-2'>Sl</th>
                                <th className='border p-2'>Name</th>
                                <th className='border p-2'>Department</th>
                                <th className='border p-2'>Session</th>
                                <th className='border p-2'>Message</th>
                                <th className='border p-2'>Created At</th>
                                <th className='border p-2 text-center'>Show/Hide</th>
                                <th className='border p-2 text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users && users.map((ele, index) => {
                                    const dateString = ele.createdAt;
                                    const date = new Date(dateString);

                                    const formattedDate = `${date.toLocaleDateString()} at ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
                                    return (
                                        <tr className='border even:bg-gray-50 odd:bg-white'>
                                            <td className='border p-2'>{index + 1}</td>
                                            <td className='border p-2'>{ele.name}</td>
                                            <td className='border p-2'>{ele.department}</td>
                                            <td className='border p-2'>{ele.session}</td>
                                            <td className='border p-2'>{ele.message}</td>
                                            <td className='border p-2'>{formattedDate}</td>
                                            <td className='border p-2 text-center'>
                                                <div
                                                    className={`mt-2 w-14 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${ele.status ? 'bg-blue-500' : 'bg-gray-300'}`}
                                                    onClick={() => UpdateStatus(ele._id)}                                                                                            
                                                >
                                                    <div
                                                        className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${ele.status ? 'translate-x-7' : ''}`}
                                                    ></div>
                                                </div>
                                            </td>
                                            <td className='border p-2 text-center'>
                                                <span className="text-lg font-bold text-red-600 cursor-pointer text-center">
                                                    <FaRegTrashAlt onClick={() => DeleteQuote(ele._id)} />
                                                </span>
                                            </td>
                                        </tr>
                        )
                                })
                            }

                    </tbody>
                    </table>
                }
            {
                users && users.length === 0 &&
                <div className="w-full p-4 text-center py-10">
                    <span className="text-gray-500">No data</span>
                </div>
            }
        </div >

        </>
    )
}

export default QuotesReviewTable