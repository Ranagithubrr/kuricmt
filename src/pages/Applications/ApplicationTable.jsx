import axios from "axios";
import { useEffect, useState } from "react";
import { FaCheck, FaEye } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { toast } from 'react-toastify';


const ApplicationTable = () => {  
  const [applications, setApplications] = useState([]);  
  const [delAndActId, setDeletingId] = useState(null);  
  const userState = useSelector((state) => state.userReducer);
  const token = userState.token;

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  };
  const WantToActive = async (tname, id) => {
    console.log('got name', tname, 'id is', id);
    setDeletingId(id)    

  }

  const FetchApplications = async () => {
    axios.get('http://localhost:4000/application/')
      .then((response) => {
        setApplications(response.data.ApplicationsData)
      })
      .catch((err) => {
        console.log('an error', err)
      })
  }  
  const ActivateTeacher = async () => {
    const apiUrl = `http://localhost:4000/user/activate-teacher`;    

    const requestData = {
      teacherId: delAndActId
    };

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const activationPromise = axios.post(apiUrl, requestData, { headers });
    const promiseToast = toast.promise(
      activationPromise,
      {
        pending: 'Activating teacher, please wait...',
        success: 'Teacher activated successfully',
        error: 'Failed to activate teacher',
      }
    );

    try {
      // Wait for the activation promise to resolve or reject
      await activationPromise;

      // Manually close the toast after success
      toast.dismiss(promiseToast);

      FetchApplications();
    } catch (error) {
      console.error('Error:', error);

      // Manually close the toast after error
      toast.dismiss(promiseToast);
    }
  };

  // console.log(applications.length);
  useEffect(() => {
    FetchApplications();
  }, []);
  console.log(applications)
  return (
    <>
      <ToastContainer
        autoClose={1500}
      />
      <div className=''>
        {
          applications && applications.length !== 0 &&

          <table className='min-w-full border border-gray-300'>
            <thead>
              <tr className='bg-gray-200 text-left'>
                <th className='border p-2'>Sl</th>
                <th className='border p-2'>Name</th>
                <th className='border p-2'>Roll</th>
                <th className='border p-2'>Subject</th>
                <th className='border p-2'>Date</th>
                <th className='border p-2 text-center'>Application</th>
                <th className='border p-2 text-center'>Status</th>
                <th className='border p-2 text-center'>Respond</th>
              </tr>
            </thead>
            <tbody>
              {
                applications && applications.map((ele, index) => {
                  const dateString = ele.createdAt;
                  const date = new Date(dateString);

                  const formattedDate = `${date.toLocaleDateString()} at ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
                  return (
                    <tr className='border even:bg-gray-50 odd:bg-white' key={ele._id}>
                      <td className='border p-2'>{index + 1}</td>
                      <td className='border p-2'>{ele.name}</td>
                      <td className='border p-2'>{ele.roll}</td>
                      <td className='border p-2'>{ele.subject}</td>
                      <td className='border p-2'>{formattedDate}</td>
                      <td className='border p-2 flex justify-center'><span className="text-green-600 text-2xl cursor-pointer"><FaEye /></span></td>
                      <td className='border p-2 text-center'>{ele.status} {ele.status === "pending" && <button title='Approve' className='mt-2 px-1 py-1 rounded mx-2  bg-green-500 text-gray-200 text-sm font-semibold' onClick={() => WantToActive(ele.name, ele._id)}><FaCheck /></button>}</td>
                      <td className='flex items-center justify-center h-full'>
                        <div className='flex items-center justify-center'>
                          <button title='Mail' className='mt-2 px-3 py-1 rounded mx-2  bg-green-500 text-gray-200 text-sm font-semibold'><IoMail /></button>
                        </div>
                      </td>
                    </tr>
                  )
                })
              }

            </tbody>
          </table>
        }
        {
          applications && applications.length === 0 &&
          <div className="w-full p-4 text-center py-10">
            <span className="text-gray-500">No data</span>
          </div>
        }        
      </div>

    </>
  )
}

export default ApplicationTable