import React from 'react'
import avatar from '../../assets/images.jpg'
const Cont = () => {
  return (
    <div className='flex p-3 mt-7 bg-secondary-500'>
        <img src={avatar} className='w-11 rounded-full'/>
        <div className='flex flex-col ml-5 space-y-0'>
            <div>Guava Kadam</div>
            <div>most resent text</div>
        </div>    
    </div>
  )
}

export default Cont
