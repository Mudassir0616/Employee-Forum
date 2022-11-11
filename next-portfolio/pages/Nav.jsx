import React from 'react'
import { AiOutlineBell, AiOutlineMail, AiOutlineSearch } from 'react-icons/ai'
import {BiMoon} from 'react-icons/bi'

const Nav = () => {
  return (
    <nav className='flex items-center justify-between py-4 shadow-2xl'>
      <div className='mx-10 flex items-center bg-white px-5 gap-2 text-gray-500 text-lg py-1 rounded-lg border-2 w-6/12'>
        <AiOutlineSearch/>
        <input type="text" placeholder='Search' className='focus:outline-none bg-transparent flex-1'/>
      </div>

      <div className='flex space-x-6 mx-10 items-center text-xl'>
        <AiOutlineBell/>
        <AiOutlineMail/>

        <div className='max-sm:hidden'>
          <h4>Mudassir</h4>
        </div>
        <div className='flex items-center gap-2'>
          <BiMoon/>
          <h4>Dark</h4>
         </div>

       </div>

    </nav>
  )
}

export default Nav