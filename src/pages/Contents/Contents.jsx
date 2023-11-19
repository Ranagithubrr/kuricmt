import React from 'react';
import {FaRegTrashAlt} from 'react-icons/fa';

const Contents = () => {
  const images = [
    {
      "image": "https://media.comicbook.com/2017/10/the-incredible-hulk-movie-poster-marvel-cinematic-universe-1038886.jpg"
    },
    {
      "image": "https://media.comicbook.com/2017/10/iron-man-movie-poster-marvel-cinematic-universe-1038878.jpg"
    },
    {
      "image": "https://pbs.twimg.com/media/FPhLZ6KXsAETFE8?format=jpg&name=large"
    },
    {
      "image": "https://media.comicbook.com/2017/10/iron-man-2-movie-poster-marvel-cinematic-universe-1038887.jpg"
    },
    {
      "image": "https://media.comicbook.com/2017/10/thor-movie-poster-marvel-cinematic-universe-1038890.jpg"
    },
    {
      "image": "https://media.comicbook.com/2017/10/captain-america-the-first-avenger-movie-poster-marvel-cinematic--1038891.jpeg"
    },
    {
      "image": "https://media.comicbook.com/2017/10/the-avengers-movie-poster-marvel-cinematic-universe-1038892.jpg"
    },
    {
      "image": "https://media.comicbook.com/2017/10/iron-man-3-movie-poster-marvel-cinematic-universe-1038894.jpg"
    },
  ]
  return (
    <div className='p-4'>
      <h4 className='font-semibold text-xl'>Setup Website Contents</h4>
      <div className='pt-4'>
        <span className='font-semibold block'>Main Title</span>
        <input type="text" placeholder='Ex: This is a demo title' className='border outline-none px-3 py-4 text-lg w-2/3' />
      </div>
      <div className='pt-4'>
        <span className='font-semibold block'>Tagline</span>
        <input type="text" placeholder='Ex: This is a demo tagline' className='border outline-none px-3 py-4 text-lg w-2/3' />
      </div>
      <div className='pt-4'>
        <span className='font-semibold block'>Main Logo</span>
        <input type="file" placeholder='Ex: This is a demo title' className='border outline-none px-3 py-4 text-lg w-2/3' />
      </div>
      <div className='pt-4'>
        <span className='font-semibold block'>Gallary Photos</span>
        <input type="file" multiple placeholder='Ex: This is a demo title' className='border outline-none px-3 py-4 text-lg w-2/3' />
      </div>
      <div className='pt-4'>
        <div className='grid grid-cols-6 gap-4'>          
          {
            images.map((ele) => {
              return (
                <div className='relative'>
                  <span className='absolute top-5 right-5 bg-red-600 text-gray-200 cursor-pointer px-3 py-2 rounded'><FaRegTrashAlt /></span>
                <img src={ele.image} alt="kdjfkd" className='h-44 w-full'/>
                </div>
              )
            })
          }
        </div>
      </div>
      <div>
        <button className='bg-green-500 text-gray-200 font-semibold text-sm px-3 py-2 rounded-md my-2'>Save Changes</button>
      </div>
    </div>
  )
}

export default Contents