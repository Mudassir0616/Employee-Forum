import React from 'react'
import { AiOutlineCamera, AiOutlineVideoCamera, AiOutlineShareAlt } from 'react-icons/ai'
import {BiPoll, BiSmile} from 'react-icons/bi'
import {FaThumbsUp, FaUserAlt, FaRegComment} from 'react-icons/fa'
import {FiSend} from 'react-icons/fi'
import FirstPost from './FirstPost'
import SecondPost from './SecondPost'
import ThirdPost from './ThirdPost'

const Posts = () => {
  return (
    <div className='flex flex-col w-6/12 max-sm:w-11/12 py-5 my-5 max-sm:my-0'>

                  {/* Create Post */}
        <div className='flex flex-col border-2 bg-white rounded-lg'>
            <div className='flex items-center p-5 max-sm:p-5 justify-start border-b w-full'>
                <FaUserAlt className='mr-3 w-10 h-10 text-xl bg-slate-400 rounded-full p-2'/>
                
                <input type="text" placeholder='Create post...' className='focus:outline-none bg-transparent w-80'/>    
            </div>
            
              <div className='flex items-center justify-between p-5'>
                  {/* Images */}
                  <p className='flex items-center text-purple-600'>
                    <AiOutlineCamera className='text-3xl'/>&nbsp; Image</p>

                  <p className='flex items-center text-green-500'>
                    <AiOutlineVideoCamera className='text-3xl'/>&nbsp; Video</p>

                  <p className='flex items-center text-orange-400'>
                    <BiPoll className='text-3xl'/>&nbsp; Polls</p>
              </div>
        </div>

            <FirstPost/>

            <SecondPost/>

            <ThirdPost/>

    </div>
  )
}

export default Posts