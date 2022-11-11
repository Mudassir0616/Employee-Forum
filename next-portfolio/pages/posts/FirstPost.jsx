import React from 'react'
import { AiOutlineShareAlt} from 'react-icons/ai'
import {BiSmile} from 'react-icons/bi'
import {FaThumbsUp, FaUserAlt, FaRegComment} from 'react-icons/fa'
import {FiSend} from 'react-icons/fi'
const FirstPost = () => {
  return (
    <div className='flex items-start justify-start shadow-lg border flex-col my-5 rounded-lg bg-white'>

                {/* User Info */}
                <div className='flex items-center p-5 w-full'>
                  <div className='flex'>
                  <FaUserAlt className='mr-3 w-10 h-10 text-xl bg-slate-400 rounded-full p-2'/>
                  <div>
                    <h3 className='font-semibold'>Mudassir</h3>
                    <p className='text-xs text-gray-400 font-semibold'>MERN developer Professional @Employee Forums</p>
                    <p className='text-xs text-gray-400 font-semibold'>6h ago </p>
                  </div>
                  </div>
                </div>
                {/* Conetnt */}
                <div className=' flex flex-col'>
                  <p className='text-sm text-gray-600 font-semibold px-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis maiores magnam quas aliquam velit deleniti vel nesciunt, blanditiis, minima, nam consequuntur magni eius. Dolore natus eum vitae, voluptatem pariatur debitis obcaecati veniam sint rem placeat laudantium voluptatibus eaque quia laborum!
                  </p>

                  <div className='flex items-center justify-between py-3 px-5'>
                    <div className='flex items-center gap-4'>
                      <p className='flex items-center gap-2 text-gray-500 font-semibold'><FaThumbsUp className='text-blue-600'/>500</p>
                      <p className='text-gray-500 font-semibold'>~ 24 comments</p>
                    </div>
                    <p className='text-gray-500 font-semibold'>6.6K Views</p>
                  </div>


                  {/* comment-box */}
                  <div className='flex flex-col w-full border-t border-slate-300 p-5'>

                    <div className='flex items-center justify-between'>
                    <p className='flex items-center gap-2 text-gray-500 font-semibold'><FaThumbsUp className='text-blue-600 text-xl'/> Liked</p>
                    <p className='flex items-center gap-2 text-gray-500 font-semibold'><FaRegComment className='text-xl'/> 
                    Comment</p>
                    <p className='flex items-center gap-2 text-gray-500 font-semibold'><AiOutlineShareAlt
                    className='text-2xl'/> 
                    Share</p>
                    <p className='flex items-center gap-2 text-gray-500 font-semibold'><FiSend className='text-xl'/> 
                    Send</p>
                    </div>
                    <div className='flex items-center justify-start gap-3 pt-7 '>
                      <FaUserAlt/>
                      <div className='flex items-center justify-between border-2 border-slate-300 rounded-2xl px-3 py-1 w-11/12'>
                      <input type="text" placeholder='Type here...' className='focus:outline-none'/>
                      <BiSmile className='text-2xl'/>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
  )
}

export default FirstPost