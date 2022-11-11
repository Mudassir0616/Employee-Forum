import React from 'react'
import { AiOutlineHome, AiOutlineForm, AiOutlineCalendar, AiOutlineLaptop, AiOutlineUsergroupAdd } from 'react-icons/ai'


const BottomNav = () => {
  return (
    <div className='min-[460px]:hidden bg-white w-full fixed bottom-0'>
          <ul className='text-3xl flex items-center justify-around'>
            <li className='flex flex-col items-center m-5 rounded-lg hover:text-blue-500 duration-300'><AiOutlineHome/><p className='text-xl text-gray-400 text-bold hover:text-blue-500 duration-300'>Home</p></li>

            <li className='flex flex-col items-center m-5 rounded-lg hover:text-blue-500 duration-300'><AiOutlineCalendar/><p className='text-xl text-gray-400 text-bold hover:text-blue-500 duration-300'>Calendar</p></li>

            <li className='flex flex-col items-center m-5 rounded-lg hover:text-blue-500 duration-300'><AiOutlineLaptop/><p className='text-xl text-gray-400 text-bold hover:text-blue-500 duration-300'>Work</p></li>

            <li className='flex flex-col items-center m-5 rounded-lg hover:text-blue-500 duration-300'><AiOutlineUsergroupAdd/><p className='text-xl text-gray-400 text-bold hover:text-blue-500 duration-300'>Forums</p></li>

            <li className='flex flex-col items-center m-5 rounded-lg hover:text-blue-500 duration-300'><AiOutlineForm/><p className='text-xl text-gray-400 text-bold hover:text-blue-500 duration-300'>Connect</p></li>
          </ul>
        </div>
  )
}

export default BottomNav