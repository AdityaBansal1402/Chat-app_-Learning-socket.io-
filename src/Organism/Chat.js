import React, { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';

const Chat = () => {
  const [text, setText] = useState('');
  const [messages, updateMessages] = useState([]);
  const socketRef = useRef(null);


  const addMessages = (message) => {
    updateMessages([...messages, { message }]);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    addMessages(text);
    setText('');
  };

  return (
    <div className='flex flex-col overflow-y-auto h-screen bg-primary-700'>
      <div className='fixed p-4 bg-secondary-300 w-full'>
        name
      </div>
      <div className='mt-16'>
        {messages.map((m, index) => (
          <div key={index} className='mt-3 break-words max-w-[40%] min-w-[10%] w-fit bg-primary-300 ml-3 p-1 pl-2'>
            {m.message}
          </div>
        ))}
      </div>
      <div className='w-full fixed bottom-0 p-3 bg-primary-500 flex justify-center items-center'>
        <form className='flex items-center w-full' onSubmit={handleClick}>
          <input
            className='rounded p-1 bg-secondary-50 w-[50%] ml-[7%]'
            type="text"
            placeholder="Search..."
            value={text}
            onChange={handleChange}
          />
          <button type="submit">
            <span className="material-symbols-outlined text-white mt-2 ml-3">
              chat
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
