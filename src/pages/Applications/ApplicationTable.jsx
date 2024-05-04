import axios from "axios";
import { useEffect, useState } from "react";
import { FaCheck, FaEye } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { ToastContainer } from "react-toastify";
import { toast } from 'react-toastify';
import { useAuth } from "../../contexts/AuthContext";


const ApplicationTable = () => {
  const [applications, setApplications] = useState([]);
  const {token} = useAuth();
  const [modal, setModal] = useState(false);
  const [currentItem, setCurrentItem] = useState({})
  const dateString = currentItem.createdAt;
  const date = new Date(dateString);

  const formattedDate = `${date.toLocaleDateString()} at ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;

  const FetchApplications = async () => {
    axios.get('https://kuricmt-backend.onrender.com/application/')
      .then((response) => {
        setApplications(response.data.ApplicationsData)
      })
      .catch((err) => {
        console.log('an error', err)
      })
  }
  const ApproveApplication = async (id) => {
    const apiUrl = `https://kuricmt-backend.onrender.com/application/resolve-application`;

    const requestData = {
      applicationId: id
    };

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const activationPromise = axios.post(apiUrl, requestData, { headers });
    const promiseToast = toast.promise(
      activationPromise,
      {
        pending: 'Approving Application, please wait...',
        success: 'Application Approved successfully',
        error: 'Failed to Approve application',
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

  const viewClicked = (item) => {
    setModal(true);
    setCurrentItem(item)
  }
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
                      <td className='border p-2 flex justify-center'><span className="text-green-600 text-2xl cursor-pointer" onClick={() => viewClicked(ele)}><FaEye /></span></td>
                      <td className='border p-2'>{ele.status} {ele.status === "pending" && <button title='Approve' className='mt-2 px-1 py-1 rounded mx-2  bg-green-500 text-gray-200 text-sm font-semibold' onClick={() => ApproveApplication(ele._id)}><FaCheck /></button>}</td>
                      <td className='flex items-center justify-center h-full'>
                        <div className='flex items-center justify-center'>
                          <a href={`mailto:${ele.email}`} title='Mail' className='mt-2 px-3 py-1 rounded mx-2  bg-green-500 text-gray-200 text-sm font-semibold'><IoMail /></a>
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
        {
          modal && <div onClick={() => setModal(false)} className="fixed left-0 right-0 top-0 z-10 w-screen h-screen bg-gray-400 opacity-50">

          </div>
        }
        {
          modal && <div className="fixed overflow-auto h-96  w-2/4 border bg-white shadow-lg rounded top-32 z-20 p-4 left-0 right-0 m-auto">
            <h4 className="text-center font-semibold text-lg">Kurigram Polytechnic Institute</h4>
            <span className="block mt-2">{formattedDate}</span>
            <span className="block">Chief Instructor</span>
            <span className="block">Kurigram Polytechnic Institute</span>
            <span className="block">Central Jail Rd, Kurigram</span>
            <span className="block font-semibold">Subject : {currentItem.subject}</span>
            <span className="block mt-4">Dear Sir,</span>
            <p>{currentItem.body}</p>
            <span className="block my-3">Sincerely</span>
            <span className="block">{currentItem.name}</span>
            <span className="block">Roll: {currentItem.roll}</span>
            <span className="block">Dept. Computer</span>
            <span className="block">Semester: {currentItem.semester}</span>
            <span className="block">Shift: {currentItem.shift}</span>
          </div>
        }
      </div>

    </>
  )
}

export default ApplicationTable