import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const Chat = () => {
    const [socket, setSocket] = useState(null);
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');

    useEffect(() => {
        // Connect to the server
        const newSocket = io('http://localhost:4000');
        setSocket(newSocket);

        // Clean up function to close the socket connection when the component unmounts
        return () => newSocket.close();
    }, []);

    useEffect(() => {
        if (!socket) return;

        // Listen for new messages and past messages
        socket.on('newMessage', (newMessage) => {
            setMessages((prevMessages) => [...prevMessages, newMessage]);
        });

        socket.on('pastMessages', (oldMessages) => {
            // Update state with past messages
            setMessages(oldMessages);
        });

        // Clean up function to remove event listeners when the component unmounts
        return () => {
            socket.off('newMessage');
            socket.off('pastMessages'); // Remove listener for past messages
        };
    }, [socket]);


    const sendMessage = () => {
        if (!socket || !messageInput.trim()) return;

        // Send a new message to the server
        socket.emit('newMessage', { from: 'User', body: messageInput.trim() });
        setMessageInput('');
    };
    console.log(messages)
    return (
        <div className='mt-8'>
            {/* <ul className='bg-green-600'>
                {messages.map((message, index) => (
                    <li key={index}>{message.from}: {message.body}</li>
                ))}
            </ul>
            <input type="text" value={messageInput} onChange={(e) => setMessageInput(e.target.value)} className='bg-green-500' />
            <button onClick={sendMessage}>Send</button> */}
            {/* -------------------------- */}
            <div>
                <div className='mt-8'>
                    <div className="flex ">
                        <div className="w-1/5 px-2">
                            <div className='bg-gray-200 px-3 py-4 rounded mt-2 cursor-pointer sticky top-0'>
                                <span className='font-semibold'>Discussion</span>
                            </div>
                        </div>
                        <div className="w-3/5">
                            <div className="border px-2 relative h-96 overflow-hidden">
                                <div className='bg-gray-200 px-3 py-4 rounded mt-2 cursor-pointer text-center  sticky top-0'>
                                    <span className='font-semibold'>Chat</span>
                                </div>
                                <div className='px-2 h-80 overflow-y-scroll'>

                                    {messages.map((message, index) => (
                                        <div className='pr-20'>
                                            <div className="bg-blue-300 inline-block px-3 py-2 rounded-sm my-2">
                                                <p className='text-sm font-semibold'>{message.body}</p>
                                            </div>
                                        </div>
                                    ))}                                   
                                    <div className='ml-20 float-right'>
                                        <div className="bg-blue-300 inline-block px-3 py-2 rounded-sm my-2">
                                            <p className='text-sm font-semibold'>Lorem ipsum dolor sit amet. dkjfkd</p>
                                        </div>
                                    </div>
                                </div>
                                {
                                    messages.length === 0 && <div>
                                        <span>No Messages Yet</span>
                                    </div>
                                }
                            </div>
                            <div className='flex mt-2'>
                                <input type="text" value={messageInput} onChange={(e) => setMessageInput(e.target.value)} className='border rounded-sm w-10/12 text-sm px-3 py-2 outline-none mr-2' placeholder='Type Your Message . . .'/>
                                <button onClick={sendMessage} className='w-2/12 outline-none bg-green-600 rounded'>Send</button>
                            </div>
                        </div>
                        <div className="w-1/5">3</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;
