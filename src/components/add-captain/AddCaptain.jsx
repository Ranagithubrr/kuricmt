import axios from "axios";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { setCaptainsreducer } from "../../redux/captainReducer/captainReducer";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../../contexts/AuthContext";

const AddCaptain = (props) => {
  const { token } = useAuth();
  const { isUpdating, setmodal, oldData } = props;
  const dispatch = useDispatch();
  const [name, setName] = useState(isUpdating ? oldData.name : '');
  const [email, setEmail] = useState(isUpdating ? oldData.email : '');
  const [roll, setRoll] = useState(isUpdating ? oldData.roll : '');
  const [phone, setPhone] = useState(isUpdating ? oldData.phone : '');
  const [semester, setSemester] = useState(isUpdating ? oldData.semester : '');
  const [shift, setShift] = useState(isUpdating ? oldData.shift : '');
  const userDataSending = {
    name: name,
    email: email,
    roll: roll,
    phone: phone,
    semester: semester,
    shift: shift
  };

  // console.log('olddata is ', oldData);
  const FetchData = () => {
    axios.get('https://kuricmt-backend.onrender.com/captains')
      .then((response) => {
        dispatch(setCaptainsreducer(response.data.AllCaptains))
        // console.log(response.data.AllCaptains)
      })
      .catch((err) => {
        console.log('an error', err)
      })
  }
  const AddCaptain = async () => {
    setmodal(false);

    if (name === "" || email === "" || phone === "" || roll === "" || semester === "") {
      return window.alert("Fill all the fields");
    }

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const apiUrl = isUpdating ? `https://kuricmt-backend.onrender.com/captains/update/${oldData._id}` : `https://kuricmt-backend.onrender.com/captains`;
    try {
      const response = await axios.post(apiUrl, userDataSending, { headers });
      // console.log('Response:', response.data);
      if (response.status === 200) {
        toast.success(isUpdating ? 'Captain Updated Successfully' : 'Captain Added Successfully', {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      } else {
        toast.error('Failed to add Captain !', {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      FetchData()
    } catch (error) {
      console.error('Error:', error);
      setmodal(false);
      toast.error('Failed to add Captain !', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className='fixed top-12 w-11/12 lg:w-2/4 m-auto z-50 bg-white shadow left-0 right-0 rounded p-4 dark:bg-gray-900'>
      <ToastContainer
      />
      <span className='font-semibold block dark:text-gray-200'>{isUpdating ? 'Update Captain' : ' Add Captain'}</span>
      <label htmlFor="name" className="dark:text-gray-300">Name</label>
      <input value={name} onChange={(e) => setName(e.target.value)} type="text" id='name' className='border rounded-sm px-4 py-2 w-full outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300' placeholder='Demo Name' />
      <label htmlFor="roll" className="dark:text-gray-300">Roll</label>
      <input value={roll} onChange={(e) => setRoll(e.target.value)} type="number" id='roll' className='border rounded-sm px-4 py-2 w-full outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300' placeholder='403849' />
      <label htmlFor="sem" className="dark:text-gray-300">Semester</label>
      <select value={semester} onChange={(e) => setSemester(e.target.value)} name="semester" id="sem" className='border rounded-sm px-4 py-2 w-full outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300'>
        <option>Select</option>
        <option value="1st">1st</option>
        <option value="2nd">2nd</option>
        <option value="3rd">3rd</option>
        <option value="4th">4th</option>
        <option value="5th">5th</option>
        <option value="6th">6th</option>
        <option value="7th">7th</option>
      </select>
      <label htmlFor="sem" className="dark:text-gray-300">Shift</label>
      <select value={shift} onChange={(e) => setShift(e.target.value)} name="shift" id="shift" className='border rounded-sm px-4 py-2 w-full outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300'>
        <option>Select</option>
        <option value="1st">1st</option>
        <option value="2nd">2nd</option>
      </select>
      <label htmlFor="phone" className="dark:text-gray-300">Phone</label>
      <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" id='phone' className='border rounded-sm px-4 py-2 w-full outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300' placeholder='012923937937' />
      <label htmlFor="email" className="dark:text-gray-300">Email</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" id='email' className='border rounded-sm px-4 py-2 w-full outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300' placeholder='hello@gmail.com' />
      <button onClick={AddCaptain} className='bg-blue-700 text-gray-100 rounded px-8 py-2 font-semibold my-3'>{isUpdating ? 'Update' : 'Add'}</button>
    </div>
  )
}

export default AddCaptain