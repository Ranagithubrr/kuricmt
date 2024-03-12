import React, { useEffect, useState } from 'react'
import Notification from './Notification/Notification'
import axios from 'axios';

const Notifications = () => {
  const [notices, setNotices] = useState([]);
  console.log(notices)
  const FetchNotices = async () => {
    const notices = await axios.get("http://localhost:4000/notice");
    setNotices(notices.data.AllNotices)
  }
  useEffect(() => {
    FetchNotices()
  }, [])
  return (
    <div className='w-1/2 m-auto'>
      <h4 className='font-semibold text-xl m-3 ml-0'>Notices</h4>           
      {
        notices && notices.map((ele) => {
          return (
            <Notification item={ele}/>
          )
        })
      }
    </div>
  )
}

export default Notifications