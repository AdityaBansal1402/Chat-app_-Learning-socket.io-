import React from 'react'
import profileImage from '../assets/images.jpg'
import Cont from './Molecule/Cont'

const Contact = () => {
    
  return (
    <div className='flex flex-col overflow-y-auto h-screen bg-zinc-900 overflow-x-hidden'>
      <div className='flex bg-zinc-800 p-4 items-center'>
        <img src={profileImage} alt='imagehere' className='rounded-full w-11'/>
        <div className='pl-3'>Spectiler</div>
      </div>
      <form className='mt-3 flex items-center justify-center'>
      <input
      className='rounded p-1 w-[70%] bg-zinc-500'
        type="text"
        placeholder="Enter Socket id here for dm..."
      />
      <button type="submit"><span class="material-symbols-outlined">
search
</span></button>
    </form>
    <div>
      <Cont/>
    </div>
    </div>
  )
}

export default Contact
