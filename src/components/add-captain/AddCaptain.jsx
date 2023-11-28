import { useState } from "react"

const AddCaptain = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [roll, setRoll] = useState("");
  const [phone, setPhone] = useState("");
  const [semester, setSemester] = useState("");

  const AddCaptain = () =>{
    if(name === "" || email === "" || phone === "" || roll === "" || semester === ""){
      return window.alert("fill all the fields")
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
        <option value="1">1st</option>
        <option value="2">2nd</option>
        <option value="3">3rd</option>
        <option value="4">4th</option>
        <option value="5">5th</option>
        <option value="6">6th</option>
        <option value="7">7th</option>
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