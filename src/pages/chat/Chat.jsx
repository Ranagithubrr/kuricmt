import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import { useAuth } from '../../contexts/AuthContext';

const Chat = () => {
    const [socket, setSocket] = useState(null);
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');
    const chatBoxRef = useRef(null);

    const { userData } = useAuth();
    const { name, _id, image } = userData || {};
    console.log(userData)
    useEffect(() => {
        const newSocket = io('http://localhost:4000');
        setSocket(newSocket);
        return () => newSocket.close();
    }, []);

    useEffect(() => {
        if (!socket) return;
        socket.on('newMessage', (newMessage) => {
            setMessages((prevMessages) => [...prevMessages, newMessage]);
        });

        socket.on('pastMessages', (oldMessages) => {
            setMessages(oldMessages);
        });
        return () => {
            socket.off('newMessage');
            socket.off('pastMessages');
        };
    }, [socket]);
    useEffect(() => {
        scrollToBottom();
    }, [messages]);
    const scrollToBottom = () => {
        if (chatBoxRef.current) {
            chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
        }
    };

    const sendMessage = (e) => {
        e.preventDefault();
        if (!socket || !messageInput.trim()) return;

        // Send a new message to the server
        socket.emit('newMessage', { name, avatar: image, uid: _id, body: messageInput.trim(), });
        setMessageInput('');
    };
    console.log(messages);
    const getTimeAgo = (messageTime) => {
        const currentTime = new Date();
        const messageDate = new Date(messageTime);

        const diffInMilliseconds = currentTime - messageDate;
        const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));

        if (diffInMinutes < 1) {
            return 'Just now';
        } else if (diffInMinutes === 1) {
            return '1 min ago';
        }
        else if (diffInMinutes < 60) {
            return `${diffInMinutes} mins ago`;
        }
        else if (diffInMinutes < 120) {
            return '2 Hour ago';
        }
        else if (diffInMinutes < 180) {
            return '3 Hour ago';
        }
        else if (diffInMinutes < 240) {
            return '4 Hour ago';
        }
        else if (diffInMinutes < 300) {
            return '5 Hour ago';
        }
        else {
            const options = { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' };
            return messageDate.toLocaleDateString('en-US', options);
        }
    };
    return (
        <div className='mt-8'>
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
                                <div className='px-2 h-80 overflow-y-scroll pb-4' ref={chatBoxRef}>
                                    {messages && messages.map((message, index) => (
                                        message.uid !== _id ? (
                                            <div className={`pr-20 flex items-center w-full`} key={index}>

                                                <div className='pr-2'>
                                                    <img src={message.avatar} style={{minWidth:'30px', width:'30px', minHeight:'30px', height:'30px'}} className='h-10 w-10 rounded-full' alt="" />
                                                </div>
                                                <div>
                                                    <div className="bg-gray-100 block px-3 py-2 rounded-lg rounded-bl-none my-2">
                                                        <p className='text-sm font-semibold'>{message.body}</p>
                                                    </div>
                                                    <div>
                                                        <span className='text-xs font-semibold text-gray-400 block'>{getTimeAgo(message.createdAt)}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className='ml-20 flex justify-end items-center float-right w-full' key={index}>
                                                <div>
                                                    <div className="bg-blue-400 block px-3 py-2 rounded-lg rounded-bl-none my-2">
                                                        <p className='text-sm font-semibold'>{message.body}</p>
                                                    </div>
                                                    <div className='float-right'>
                                                        <span className='text-xs font-semibold text-gray-400 block'>{getTimeAgo(message.createdAt)}</span>
                                                    </div>
                                                </div>
                                                <div className='pl-2'>
                                                    <img src={message.avatar} style={{minWidth:'30px', width:'30px', minHeight:'30px', height:'30px'}} className='rounded-full' alt="" />
                                                </div>
                                            </div>
                                        )
                                    ))}
                                    {
                                        messages.length === 0 && <div className='flex items-center w-full justify-center pt-10'>
                                            <p className='text-gray-400 font-semibold text-sm'>No messages</p>
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className='flex mt-2'>
                                <form onSubmit={sendMessage} className='flex w-full'>
                                    <input type="text" value={messageInput} onChange={(e) => setMessageInput(e.target.value)} className='border rounded-sm w-10/12 text-sm px-3 py-2 outline-none mr-2' placeholder='Type Your Message . . .' />
                                    <button type='submit' className='w-2/12 outline-none bg-green-600 rounded'>Send</button>
                                </form>
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
