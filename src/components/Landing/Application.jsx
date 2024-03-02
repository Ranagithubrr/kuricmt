import React, { useState } from 'react'
import { MdEditDocument } from "react-icons/md";
import { IoCloseCircle } from "react-icons/io5";

const Application = () => {
    const [showqhote, setshowqhote] = useState(false);
    return (
        <>
        <div className='flex bg-gray-200 px-4 py-6 my-3'>
            <div className='w-1/2'>
                <span className='font-bold text-3xl text-gray-600'>Empower Your Voice</span>
                <p className='font-semibold text-gray-700'>Student Application Portal for Direct Dialogue with Chief Instructor</p>
            </div>
            <div className='flex items-center justify-center text-center w-1/2'>
                <button onClick={()=>setshowqhote(!showqhote)} className='outline-none bg-red-500 text-gray-100 font-semibold text-sm px-3 py-2 rounded flex items-center'> <span className='pr-2'><MdEditDocument /></span> Write an Application</button>
            </div>
        </div>
        {
             showqhote &&
                <>
                
                <div className='fixed w-full h-full bg-gray-800 opacity-80 top-0 bottom-0 left-0 right-0'></div>
                <div className='fixed w-1/2 bg-white top-20 left-0 right-0 m-auto shadow-lg rounded py-3'>
                    <div className='absolute -top-4 -right-4 bg-black rounded-full' onClick={()=>setshowqhote(false)}>
                        <span className='text-white text-3xl cursor-pointer'><IoCloseCircle /></span>
                    </div>
                    <div className='text-center py-1 mx-5'>                
                        <input type="text" placeholder='Your Name' className='outline-none border rounded-sm px-3 py-1 w-full' />
                    </div>
                    <div className='text-center py-1 mx-5'>
                        <select name="department" id="dep" className='border rounded-sm px-3 py-1 w-full outline-none'>
                            <option value="Computer">Computer</option>
                        </select>
                    </div>
                    <div className='text-center py-1 mx-5'>                
                        <input type="number" placeholder='Your Roll' className='outline-none border rounded-sm px-3 py-1 w-full' />
                    </div>
                    <div className='text-center py-1 mx-5'>                
                        <input type="text" placeholder='Subject' className='outline-none border rounded-sm px-3 py-1 w-full' />
                    </div>
                    
                    <div className='text-center py-1 mx-5'>
                        <textarea name="" id="" cols="30" rows="10" style={{ whiteSpace: 'pre-wrap' }} className='border rounded-sm px-3 py-1 w-full outline-none' placeholder='Type Your Application'></textarea>
                    </div>
                    <div className='text-center py-1 mx-5'>
                        <button className='outline-none bg-red-500 text-gray-100 font-semibold text-sm px-3 py-2 rounded'>Submit Applcation</button>
                    </div>
                </div>
                </>
            }
        </>
    )
}

export default Application