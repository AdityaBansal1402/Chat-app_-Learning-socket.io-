import React, { useState } from 'react'

const Chat = () => {
  const [text,settext]=useState('');
  const [messages,updatemessage]=useState([]);
  const addmessages=(mess)=>{
    updatemessage([...messages,{message:mess}])
  }
  const changey=(e)=>{
    settext(e.target.value);
  }
  const handleclick=(e)=>{
    e.preventDefault();
    addmessages(text);
    settext('');
  }
  return (
    <div className='flex flex-col overflow-y-auto h-screen bg-primary-700'>
      <div className='fixed p-4 bg-secondary-300 w-full'>
        name
      </div>
      <div className='mt-16'>
        {
          messages.map((m)=>{
            return(
              <div className='mt-5 bg-primary-300'>
                {m.message}
              </div>
            )
          })
        }
      </div>
      <div className='w-full fixed bottom-0 p-3 bg-primary-500 flex justify-center items-center'>
        
      <form className='flex items-center w-full'onSubmit={(e)=>handleclick(e)}>
      <input
      className='rounded p-1 bg-secondary-50 w-[50%] ml-[7%]'
        type="text"
        placeholder="Search..."
        value={text}
        onChange={changey}
      />
      <button type="submit" ><span className="material-symbols-outlined text-white mt-2 ml-3">
chat
</span></button>
    </form>
      </div>
    </div>
  )
}

export default Chat
