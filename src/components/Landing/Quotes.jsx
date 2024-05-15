import React, { useState } from 'react';
import { FaQuoteLeft, FaQuoteRight, FaPlus } from 'react-icons/fa';
import { IoCloseCircle } from "react-icons/io5";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const Quotes = ({ Quotes, Teachers }) => {
    const [name, setName] = useState('');
    const [session, setSession] = useState('');
    const [message, setMessage] = useState('');
    console.log(Quotes)
    const [showqhote, setshowqhote] = useState(false);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
    };
    const FilteredQuotes = Quotes && Quotes.filter((ele) => ele.status === true);
    console.log('Filtered Quotes', FilteredQuotes);

    const SubmitQuote = async () => {
        if (name === "" || session === "" || message === "") {
            toast.error("Please Fill All The Fields")
            return;
        }
        try {
            const response = await axios.post("https://kuricmt-backend.onrender.com/quotes", { name, session, message });
            if (response.status === 200) {
                toast.success("Quotes Submitted Successfully");
                setshowqhote(false)
            } else {
                toast.error("Failed to submit Quote")
                return;
            }
        } catch (err) {
            toast.error("Oops server error")
            console.log(err.response.data.msg)
        }
    }
    return (
        <div className='focus:outline-none'>
            <ToastContainer />
            <div className='lg:w-1/2 mx-auto py-5'>
                {
                    FilteredQuotes && FilteredQuotes.length > 1 && <Slider {...settings} className='mt-5 border-none outline-none'>
                        {
                            FilteredQuotes && FilteredQuotes.map((ele, index) => {
                                return (
                                    <div className='w-1/2 mx-auto py-5'>
                                        <p className='p-2 text-center font-semibold lg:text-2xl text-gray-500 py-5'><span><FaQuoteLeft /></span>
                                            {ele.message}
                                            <span className='float-right pt-5'><FaQuoteRight /></span></p>
                                        <span className='font-semibold text-black block text-center text-sm'>{ele.name}</span>
                                        <span className='font-semibold text-gray-700 block text-center text-xs'>Department Of Computer</span>
                                        <span className='font-semibold text-gray-700 block text-center text-xs'>Session {ele.session}</span>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                }
            </div>
            <div className='lg:w-1/2 mx-auto py-5 border-none outline-none'>
                {
                    FilteredQuotes && FilteredQuotes.length === 1 &&
                    <div className="border-none outline-none">
                        <p className='p-2 text-center font-semibold lg:text-2xl text-gray-500 py-5'>
                            <span><FaQuoteLeft /></span>
                            {FilteredQuotes[0].message}
                            <span className='float-right pt-5'><FaQuoteRight /></span>
                        </p>
                        <span className='font-semibold text-black block text-center text-sm'>{FilteredQuotes[0].name}</span>
                        <span className='font-semibold text-gray-700 block text-center text-xs'>Department Of Computer</span>
                        <span className='font-semibold text-gray-700 block text-center text-xs'>Session {FilteredQuotes[0].session}</span>
                    </div>
                }
            </div>
            <div className="text-center py-3 flex items-center justify-center">
                <button className='bg-red-500 px-3 py-2 text-gray-200 rounded font-semibold flex items-center' onClick={() => setshowqhote(!showqhote)}><span className='mr-2'><FaPlus /></span> Add My Quote</button>
            </div>
            {/* add quote */}
            {
                showqhote &&
                <>
                    <div className='fixed w-full h-full bg-gray-800 opacity-80 top-0 bottom-0 left-0 right-0'></div>
                    <div className='fixed w-11/12 lg:w-1/3 bg-white top-20 left-0 right-0 m-auto shadow-lg rounded py-3'>
                        <div className='absolute -top-4 -right-4 bg-black rounded-full' onClick={() => setshowqhote(false)}>
                            <span className='text-white text-3xl cursor-pointer'><IoCloseCircle /></span>
                        </div>
                        <div className='text-center py-1 mx-5'>
                            <input type="text" placeholder='Your Name' className='outline-none border rounded-sm px-3 py-1 w-full' value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className='text-center py-1 mx-5'>
                            <select name="department" id="dep" className='border rounded-sm px-3 py-1 w-full outline-none'>
                                <option value="Computer">Computer</option>
                            </select>
                        </div>
                        <div className='text-center py-1 mx-5'>
                            <select name="department" id="dep" className='border rounded-sm px-3 py-1 w-full outline-none' value={session} onChange={(e) => setSession(e.target.value)}>
                                <option value="Computer">Session</option>
                                <option value="2015-16">2015-16</option>
                                <option value="2016-17">2016-17</option>
                                <option value="2017-18">2017-18</option>
                                <option value="2018-19">2018-19</option>
                                <option value="2019-20">2019-20</option>
                                <option value="2020-21">2020-21</option>
                                <option value="2021-22">2021-22</option>
                                <option value="2022-23">2022-23</option>
                                <option value="2023-24">2023-24</option>
                            </select>
                        </div>
                        <div className='text-center py-1 mx-5'>
                            <textarea value={message} onChange={(e) => setMessage(e.target.value)} name="" id="" cols="30" rows="10" className='border rounded-sm px-3 py-1 w-full outline-none' placeholder='Type Your Message'></textarea>
                        </div>
                        <div className='text-center py-1 mx-5'>
                            <button className='outline-none bg-red-500 text-gray-100 font-semibold text-sm px-3 py-2 rounded' onClick={SubmitQuote}>Submit</button>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default Quotes