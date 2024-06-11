import React, { useEffect, useState, useRef } from 'react';
import {socket} from '../Socket';

const Chat = () => {
  const [text, setText] = useState('');
  const [room, setroom] = useState('');
  const [messages, updateMessages] = useState([]);
  const [idd,setid]=useState("");
  const messageref =useRef(null);

  useEffect(()=>{
    changescroll();
  },[messages])
  const changescroll=()=>{
    messageref.current?.scrollIntoView({behavior: 'smooth'});
  }
  useEffect(()=>{
    socket.connect()
    socket.on("connect",()=>{
      // if(!localStorage.getItem('sock')){
      //   setid(socket.id)
      //   localStorage.setItem('sock',idd)
      // }
      setid(socket.id)
    })
  },[])
  socket.on('givemess',(m,i)=>{
    ad(m,i);
  })
  socket.on('joinmess',m=>{
    ad(m,"main")
  })
  const ad=(m,i)=>{
    updateMessages([...messages, { mess: m, domain: i }]);
  }
  const addMessages = (message) => {
    updateMessages([...messages, { mess: message, domain: idd }]);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleChang = (e) => {
    setroom(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    socket.emit('addmymess',text,room);
    addMessages(text);
    setText('');
  };
  const handleClic = (e) => {
    e.preventDefault();
    socket.emit('join',room);
  };

  return (
    <div className='flex flex-col overflow-y-auto h-screen bg-primary-700'>
      <div className='fixed p-4 bg-secondary-300 w-full'>
        your id is {idd} it will be stored later
      </div>
      <div className='mt-16 mb-20 mr-2'>
        {messages.map((m, index) => (
          <div key={index} className={`mt-3 break-words max-w-[40%] min-w-[10%] w-fit ${m.domain==="main"?"ml-auto mr-auto !bg-gray-700":""} ${m.domain===idd?' bg-secondary-200 ml-auto':' bg-primary-300'} ml-3 p-1 pl-2`}>
            {m.mess}
          </div>
        ))}
        <div ref={messageref}></div>
      </div>
      <div className='w-full fixed bottom-0 p-3 bg-primary-500 flex flex-col justify-center items-center'>
        <form className='flex items-center w-full' onSubmit={handleClick}>
          <input
            className='rounded p-1 bg-secondary-50 w-[50%] ml-[7%]'
            type="text"
            placeholder="Write Message"
            value={text}
            onChange={handleChange}
          />
          <button type="submit">
            <span className="material-symbols-outlined text-white mt-2 ml-3">
              chat
            </span>
          </button>
        </form>
        <form className='flex items-center w-full' onSubmit={handleClic}>
          <input
            className='rounded p-1 bg-secondary-50 w-[50%] ml-[7%]'
            type="text"
            placeholder="Join room using code..."
            value={room}
            onChange={handleChang}
          />
          <button type="submit">
            <span className="material-symbols-outlined text-white mt-2 ml-3">
              room
            </span>
          </button>
        </form>
        
      </div>
    </div>
  );
};

export default Chat;
