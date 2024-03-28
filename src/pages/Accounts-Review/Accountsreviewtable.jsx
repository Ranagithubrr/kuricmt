import axios from "axios";
import { useEffect, useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { GoAlert } from "react-icons/go";
import { ToastContainer } from "react-toastify";
import { toast } from 'react-toastify';
import { useAuth } from "../../contexts/AuthContext";


const AccountsReviewtable = () => {
  const {token} = useAuth()
  const [modal, setmodal] = useState(false);
  const [users, setUsers] = useState([]);
  const [teachaerName, setTeacherName] = useState("");
  const [delAndActId, setDeletingId] = useState(null);
  const [isdelete, setIsDelete] = useState(false);
  

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  };
  const WantToActive = async (tname, id) => {
    console.log('got name', tname, 'id is', id);
    setDeletingId(id)
    setTeacherName(tname);
    setmodal(true);
    setIsDelete(false)

  }
  const WantToDelete = (tname, id) => {
    setDeletingId(id)
    console.log('got name', tname)
    setTeacherName(tname);
    setmodal(true);
    setIsDelete(true)
  }
  const FetchUsers = async () => {
    axios.get('http://localhost:4000/user/inactive-teacher')
      .then((response) => {
        setUsers(response.data.AllUser)
      })
      .catch((err) => {
        console.log('an error', err)
      })
  }
  const DeleteTacher = async () => {
    const apiUrl = `http://localhost:4000/user/delete-teacher`;
    setmodal(false);

    const requestData = {
      teacherId: delAndActId
    };  
    const activationPromise = axios.post(apiUrl, requestData, { headers });
    const promiseToast = toast.promise(
      activationPromise,
      {
        pending: 'Deleting teacher, please wait...',
        success: 'Teacher deleted successfully',
        error: 'Failed to delete teacher',
      }
    );

    try {
      // Wait for the activation promise to resolve or reject
      await activationPromise;

      // Manually close the toast after success
      toast.dismiss(promiseToast);

      FetchUsers();
    } catch (error) {
      console.error('Error:', error);

      // Manually close the toast after error
      toast.dismiss(promiseToast);
    } finally {
      setmodal(false); // Ensure modal is closed regardless of success or failure
    }
  };
  const ActivateTeacher = async () => {
    const apiUrl = `http://localhost:4000/user/activate-teacher`;
    setmodal(false);

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

      FetchUsers();
    } catch (error) {
      console.error('Error:', error);

      // Manually close the toast after error
      toast.dismiss(promiseToast);
    } finally {
      setmodal(false); // Ensure modal is closed regardless of success or failure
    }
  };

  console.log(users.length);
  useEffect(() => {
    FetchUsers();
  }, [])
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
                <th className='border p-2'>Email</th>
                <th className='border p-2'>Type</th>
                <th className='border p-2'>Created At</th>
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
                      <td className='border p-2'>{ele.email}</td>
                      <td className='border p-2'>{ele.type}</td>
                      <td className='border p-2'>{formattedDate}</td>
                      <td className='flex items-center justify-center h-full'>
                        <div className='flex items-center justify-center'>
                          <button title='Decline' className='mt-2 px-3 py-1 rounded mx-2  bg-red-500 text-gray-200 text-sm font-semibold' onClick={() => WantToDelete(ele.name, ele._id)}><FaTimes /></button>
                          <button title='Approve' className='mt-2 px-3 py-1 rounded mx-2  bg-green-500 text-gray-200 text-sm font-semibold' onClick={() => WantToActive(ele.name, ele._id)}><FaCheck /></button>
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
          users && users.length === 0 &&
          <div className="w-full p-4 text-center py-10">
            <span className="text-gray-500">No data</span>
          </div>
        }
        {
          modal &&
          <div onClick={() => setmodal(false)} className='bg-gray-700 opacity-50 fixed top-0 left-0 w-full h-full z-10'></div>
        }
        {modal &&
          <div className='fixed top-32 w-1/3 m-auto z-50 bg-white shadow left-0 right-0 rounded p-4'>
            <div className='text-center w-full flex items-center justify-center flex-col'>
              <span className='text-yellow-400 text-3xl m-auto'><GoAlert /></span>
              <div>
                <span className='text-sm font-semibold'>Are you sure want to {!isdelete ? <span className="font-bold text-green-600">Activate</span> : <span className="font-bold text-red-600">Decline</span>}  { } {teachaerName}'s account?</span>
                <div className='py-3'>
                  {
                    isdelete ? <button className='rounded px-6 mx-2 py-1 bg-red-500 text-gray-200 text-sm font-semibold' onClick={() => DeleteTacher()}>Yes</button>
                      : <button className='rounded px-6 mx-2 py-1 bg-green-500 text-gray-200 text-sm font-semibold' onClick={() => ActivateTeacher()}>Yes</button>
                  }
                  {
                    isdelete ? <button className='rounded px-6 mx-2 py-1 bg-green-500 text-gray-200 text-sm font-semibold' onClick={() => setmodal(false)}>No</button>
                      : <button className='rounded px-6 mx-2 py-1 bg-red-500 text-gray-200 text-sm font-semibold' onClick={() => setmodal(false)}>No</button>
                  }
                </div>
              </div>
            </div>
          </div>
        }
      </div>

    </>
  )
}

export default AccountsReviewtable