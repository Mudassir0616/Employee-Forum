import React from 'react'
import {FaUserAlt} from 'react-icons/fa'
import Forums from './Forums'

const Profile = () => {
  return (
    <div className='flex flex-col space-x-5 min-h-full w-3/12 max-sm:w-8/12 p-5 mt-5 relative'>
        
        <div className=' flex flex-col rounded-t-lg '>
          <div className='border-2 rounded-t-lg bg-white'>
            <div className='h-16 bg-blue-700 rounded-t-lg'></div>

            <div className='text-center flex items-center justify-center flex-col p-5'>

              <FaUserAlt className='w-16 h-16 text-xl bg-slate-400 rounded-full p-4 absolute top-12'/>
              <h2 className='text-lg font-bold pt-3'>Cooper</h2>
              <p className='text-xs text-gray-400 font-semibold  py-1'>Information Technology Professional @Employee Forums</p>

            </div>

            <div className='flex items-center justify-around px-2'>

              <div className='flex items-center justify-center flex-col'>
                <h1 className='text-lg font-bold pb-1'>500</h1>
                <p className='text-xs font-semibold text-gray-400'>Profile Views</p>
              </div>

              <div className='flex items-center justify-center flex-col'>
                <h1 className='text-lg font-bold pb-1'>500</h1>
                <p className='text-xs font-semibold text-gray-400'>Post Views</p>
              </div>

              <div className='flex items-center justify-center flex-col'>
                <h1 className='text-lg font-bold pb-1'>500</h1>
                <p className='text-xs font-semibold text-gray-400'>&nbsp; Request &nbsp;</p>
              </div>

            </div>

            <div className='text-center my-2 p-5'>

              <p className='text-xl text-gray-500 font-bold'>75%</p>
              <input type="range" value='75' className="w-full h-2 bg-green-500 rounded-lg appearance-none cursor-pointer "/>
              <p className='text-xs text-gray-800 font-semibold pt-1'>Complete your Profile</p>

            </div>
          </div>

          <div className='text-center border-2 border-t-0 rounded-b-lg py-5 bg-white'>
            <h2 className='text-md font-semibold text-blue-700'>My Activity</h2>
          </div>
          
  {/*---Your Forums ---*/}
          <Forums/>

        </div>
    </div>
  )
}

export default Profile