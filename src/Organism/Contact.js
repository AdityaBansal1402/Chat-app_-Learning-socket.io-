import React from 'react'
import profileImage from '../assets/images.jpg'

const Contact = () => {
    
  return (
    <div className='flex flex-col overflow-y-auto h-screen bg-primary-100'>
      <div className='flex bg-secondary-100 p-4 items-center'>
        <img src={profileImage} alt='imagehere' className='rounded-full w-11'/>
        <div className='pl-3'>Aditya Bansal</div>
      </div>
      <form className='mt-3 flex items-center justify-center'>
      <input
      className='rounded p-1 w-[70%] bg-secondary-50'
        type="text"
        placeholder="Search..."
      />
      <button type="submit"><span class="material-symbols-outlined">
search
</span></button>
    </form>
    </div>
  )
}

export default Contact
