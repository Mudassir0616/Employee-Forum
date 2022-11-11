import React from 'react'
import {AiOutlineHome, AiOutlineForm, AiOutlineCreditCard, AiOutlineCalendar, AiOutlineLaptop, AiOutlineLogout} from 'react-icons/ai'

const Sidenav = () => {
  return (
    <div className='min-h-screen px-5 max-[460px]:hidden'>
      <div className='h-screen flex flex-col justify-between pt-10'>
         <ul className='text-3xl mt-10'>
            <li className='m-5 p-2 rounded-lg hover:bg-blue-100 hover:text-blue-500 duration-300'><AiOutlineHome/></li>
            <li className='m-5 p-2 rounded-lg hover:bg-blue-100 hover:text-blue-500 duration-300'><AiOutlineCalendar/></li>
            <li className='m-5 p-2 rounded-lg hover:bg-blue-100 hover:text-blue-500 duration-300'><AiOutlineLaptop/></li>
            <li className='m-5 p-2 rounded-lg hover:bg-blue-100 hover:text-blue-500 duration-300'><AiOutlineCreditCard/></li>
            <li className='m-5 p-2 rounded-lg hover:bg-blue-100 hover:text-blue-500 duration-300'><AiOutlineForm/></li>
         </ul>
         <ul className='text-3xl'>
            <li className='m-5 p-2 rounded-lg hover:bg-blue-100 hover:text-blue-500 duration-300'><AiOutlineLogout/></li>
         </ul>
      </div>
    </div>
  )
}

export default Sidenav