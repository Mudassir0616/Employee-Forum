import React from 'react'
import {AiOutlineUsergroupAdd} from 'react-icons/ai'
import {FaUserAlt} from 'react-icons/fa'

const Suggestion = () => {
  return (
    <div className='mx-4 max-sm:w-6/12 max-sm:pb-20'>
              
            <div className='flex flex-col my-10 px-2 shadow-lg border-2 rounded-lg bg-slate-50'>
                <div className='flex flex-col'>
                  <h4 className='text-lg font-semibold py-3 px-4'>People you may know</h4>
                  <div>
                  {/* Users */}
                  <div className='flex items-center gap-5 pl-4 mt-3 max-sm:gap-7'>
                    <FaUserAlt className='text-2xl'/>
                    <div>
                      <h4 className='text-lg font-semibold'>Preeti</h4>
                      <p className='text-xs text-gray-400 font-semibold'>UI/UX Developer</p>
                    </div>
                    <AiOutlineUsergroupAdd className='cursor-pointer text-3xl text-blue-500 ml-5'/>
                  </div>

                  {/* Users */}
                  <div className='flex items-center gap-5 pl-4 mt-3 max-sm:gap-7'>
                    <FaUserAlt className='text-2xl'/>
                    <div>
                      <h4 className='text-lg font-semibold'>Preeti</h4>
                      <p className='text-xs text-gray-400 font-semibold'>UI/UX Developer</p>
                    </div>
                    <AiOutlineUsergroupAdd className='cursor-pointer text-3xl text-blue-500 ml-5'/>
                  </div>

                  {/* Users */}
                  <div className='flex items-center gap-5 pl-4 mt-3 max-sm:gap-7'>
                    <FaUserAlt className='text-2xl'/>
                    <div>
                      <h4 className='text-lg font-semibold'>Preeti</h4>
                      <p className='text-xs text-gray-400 font-semibold'>UI/UX Developer</p>
                    </div>
                    <AiOutlineUsergroupAdd className='cursor-pointer text-3xl text-blue-500 ml-5'/>
                  </div>

                  {/* Users */}
                  <div className='flex items-center gap-5 pl-4 mt-3 pb-3 max-sm:gap-7'>
                    <FaUserAlt className='text-2xl'/>
                    <div>
                      <h4 className='text-lg font-semibold'>Preeti</h4>
                      <p className='text-xs text-gray-400 font-semibold'>UI/UX Developer</p>
                    </div>
                    <AiOutlineUsergroupAdd className='cursor-pointer text-3xl text-blue-500 ml-5'/>
                  </div>

                </div>
              </div>
                <div className='flex items-center justify-center border-t-2 p-4'>
                  <p className='text-blue-500 mr-2 font-semibold'>View All</p>
                </div>

            </div>
              
    </div>
  )
}

export default Suggestion