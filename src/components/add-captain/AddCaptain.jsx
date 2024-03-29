import axios from "axios";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { setCaptainsreducer } from "../../redux/captainReducer/captainReducer";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../../contexts/AuthContext";

const AddCaptain = (props) => {
  const {token} = useAuth();
  const { isUpdating, setmodal, oldData } = props;
  const dispatch = useDispatch();
  const [name, setName] = useState(isUpdating ? oldData.name : '');
  const [email, setEmail] = useState(isUpdating ? oldData.email : '');
  const [roll, setRoll] = useState(isUpdating ? oldData.roll : '');
  const [phone, setPhone] = useState(isUpdating ? oldData.phone : '');
  const [semester, setSemester] = useState(isUpdating ? oldData.semester : '');
  const userDataSending = {
    name: name,
    email: email,
    roll: roll,
    phone: phone,
    semester: semester,
  };

  // console.log('olddata is ', oldData);
  const FetchData = () => {
    axios.get('http://localhost:4000/captains')
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
    const apiUrl = isUpdating ? `http://localhost:4000/captains/update/${oldData._id}` : `http://localhost:4000/captains`;
    try {
      const response = await axios.post(apiUrl, userDataSending, { headers });
      // console.log('Response:', response.data);
      if (response.status === 200) {
        toast.success( isUpdating ? 'Captain Updated Successfully' : 'Captain Added Successfully', {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      }else{
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
    <div className='fixed top-32 w-2/4 m-auto z-50 bg-white shadow left-0 right-0 rounded p-4'>
      <ToastContainer
      />
      <span className='font-semibold block'>{isUpdating ? 'Update Captain' : ' Add Captain'}</span>
      <label htmlFor="name">Name</label>
      <input value={name} onChange={(e) => setName(e.target.value)} type="text" id='name' className='border rounded-sm px-4 py-2 w-full outline-none' placeholder='Demo Name' />
      <label htmlFor="roll">Roll</label>
      <input value={roll} onChange={(e) => setRoll(e.target.value)} type="number" id='roll' className='border rounded-sm px-4 py-2 w-full outline-none' placeholder='403849' />
      <label htmlFor="sem">Semester</label>
      <select value={semester} onChange={(e) => setSemester(e.target.value)} name="semester" id="sem" className='border rounded-sm px-4 py-2 w-full outline-none'>
        <option value="1st">1st</option>
        <option value="2nd">2nd</option>
        <option value="3rd">3rd</option>
        <option value="4th">4th</option>
        <option value="5th">5th</option>
        <option value="6th">6th</option>
        <option value="7th">7th</option>
      </select>
      <label htmlFor="phone">Phone</label>
      <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" id='phone' className='border rounded-sm px-4 py-2 w-full outline-none' placeholder='012923937937' />
      <label htmlFor="email">Email</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" id='email' className='border rounded-sm px-4 py-2 w-full outline-none' placeholder='hello@gmail.com' />
      <button onClick={AddCaptain} className='bg-blue-700 text-gray-100 rounded px-8 py-2 font-semibold my-3'>{isUpdating ? 'Update' : 'Add'}</button>
    </div>
  )
}

export default AddCaptain