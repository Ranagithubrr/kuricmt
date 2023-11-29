import axios from "axios";
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { setCaptainsreducer } from "../../redux/captainReducer/captainReducer";

const AddCaptain = ({setmodal}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [roll, setRoll] = useState("");
  const [phone, setPhone] = useState("");
  const [semester, setSemester] = useState("");
  const userData = {
    name: name,
    email: email,
    roll: roll,
    phone: phone,
    semester: semester,
  };

  const userState = useSelector((state) => state.userReducer);
  const token = userState.token;
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
  const AddCaptain = async () => {
    setmodal(false);
    if (name === "" || email === "" || phone === "" || roll === "" || semester === "") {
      return window.alert("fill all the fields")
    };
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    };
    const apiUrl = `https://kuricmt.onrender.com/captains`;
    try {
      const response = await axios.post(apiUrl, userData, { headers });
      console.log('Response:', response.data);
      FetchData()
    } catch (error) {
      console.error('Error:', error);
    }
  }
  return (
    <div className='fixed top-32 w-2/4 m-auto z-50 bg-white shadow left-0 right-0 rounded p-4'>
      <span className='font-semibold block'>Add Captain</span>
      <label htmlFor="name">Name</label>
      <input onChange={(e) => setName(e.target.value)} type="text" id='name' className='border rounded-sm px-4 py-2 w-full outline-none' placeholder='Demo Name' />
      <label htmlFor="roll">Roll</label>
      <input onChange={(e) => setRoll(e.target.value)} type="text" id='roll' className='border rounded-sm px-4 py-2 w-full outline-none' placeholder='403849' />
      <label htmlFor="sem">Semester</label>
      <select onChange={(e) => setSemester(e.target.value)} name="semester" id="sem" className='border rounded-sm px-4 py-2 w-full outline-none'>
        <option value="1st">1st</option>
        <option value="2nd">2nd</option>
        <option value="3rd">3rd</option>
        <option value="4th">4th</option>
        <option value="5th">5th</option>
        <option value="6th">6th</option>
        <option value="7th">7th</option>
      </select>
      <label htmlFor="phone">Phone</label>
      <input onChange={(e) => setPhone(e.target.value)} type="text" id='phone' className='border rounded-sm px-4 py-2 w-full outline-none' placeholder='012923937937' />
      <label htmlFor="email">Email</label>
      <input onChange={(e) => setEmail(e.target.value)} type="text" id='email' className='border rounded-sm px-4 py-2 w-full outline-none' placeholder='hello@gmail.com' />
      <button onClick={AddCaptain} className='bg-blue-700 text-gray-100 rounded px-8 py-2 font-semibold my-3'>Add</button>
    </div>
  )
}

export default AddCaptain