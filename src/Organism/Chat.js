import React from 'react'
import Cha from './Molecule/Cha'

const Chat = () => {
  return (
    <div className='flex flex-col overflow-y-auto h-screen bg-primary-700'>
      <div className='fixed p-4 bg-secondary-300 w-full'>
        name
      </div>
      <div>
        <Cha/>
      </div>
      <div className='w-full fixed bottom-0 p-3 bg-primary-500 flex justify-center items-center'>
        
      <form className='flex items-center w-full'>
      <input
      className='rounded p-1 bg-secondary-50 w-[50%] ml-[7%]'
        type="text"
        placeholder="Search..."
      />
      <button type="submit"><span className="material-symbols-outlined text-white mt-2 ml-3">
search
</span></button>
    </form>
      </div>
    </div>
  )
}

export default Chat
