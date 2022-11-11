import React from 'react'
import {FaUserAlt} from 'react-icons/fa'

const Forums = () => {
  return (
    <div className='flex flex-col my-10 w-12/12 bg-white shadow-lg border-2 rounded-lg'>
      <div className='flex flex-col'>

        <h4 className='text-lg font-semibold py-3 px-4'>Your Forums</h4>
        <div className='h-60 overflow-y-scroll'>
                  
                  {/* Users */}
            <div className='flex items-center gap-5 pl-4 mt-3'>
                <FaUserAlt className='text-2xl'/>
                    <div>
                      <h4 className='text-md font-semibold'>Accounting</h4>
                      <p className='text-xs text-gray-500 font-semibold'>4 Members</p>
                    </div>
            </div>

                  {/* Users */}
            <div className='flex items-center gap-5 pl-4 mt-3'>
                <FaUserAlt className='text-2xl'/>
                    <div>
                      <h4 className='text-md font-semibold'>Frontend development</h4>
                      <p className='text-xs text-gray-500 font-semibold'>8 Members</p>
                    </div>
               
                  </div>

                  {/* Users */}
            <div className='flex items-center gap-5 pl-4 mt-3 pb-3'>
                <FaUserAlt className='text-2xl'/>

                <div>
                  <h4 className='text-md font-semibold'>Backend Development</h4>
                  <p className='text-xs text-gray-500 font-semibold'>5 Members</p>
                </div>

            </div>

                  {/* Users */}
            <div className='flex items-center gap-5 pl-4 pb-3'>
                <FaUserAlt className='text-2xl'/>
                <div>
                  <h4 className='text-md font-semibold'>Animation</h4>
                  <p className='text-xs text-gray-500 font-semibold'>3 Members</p>
                </div>
               
            </div>

                  {/* Users */}
            <div className='flex items-center gap-5 pl-4 pb-3'>
                <FaUserAlt className='text-2xl'/>
                <div>
                  <h4 className='text-md font-semibold'>Administration</h4>
                  <p className='text-xs text-gray-500 font-semibold'>4 Members</p>
                </div>
               
            </div>

                  {/* Users */}
            <div className='flex items-center gap-5 pl-4 pb-3'>
                <FaUserAlt className='text-2xl'/>
                <div>
                  <h4 className='text-md font-semibold'>Media Analyst</h4>
                  <p className='text-xs text-gray-500 font-semibold'>12 Members</p>
                </div>
               
            </div>

                  {/* Users */}
            <div className='flex items-center gap-5 pl-4 pb-3'>
                <FaUserAlt className='text-2xl'/>
                <div>
                  <h4 className='text-md font-semibold'>Buisness development</h4>
                  <p className='text-xs text-gray-500 font-semibold'>3 Members</p>
                </div>
               
            </div>
            
        </div>
      </div>

      <div className='flex items-center justify-center border-t-2 p-4'>
          <p className='text-blue-500 mr-2 font-semibold'>View All</p>
      </div>

    </div>
  )
}

export default Forums