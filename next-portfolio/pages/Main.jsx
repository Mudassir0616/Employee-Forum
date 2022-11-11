import React from 'react'
import Profile from './Profile'
import Posts from './posts/Posts'
import Suggestions from './Suggestion'

const Main = () => {
  return (
    <div className='flex items-start max-sm:items-center justify-center flex-row max-sm:flex-col bg-gray-100'>

        {/* -------- Column 1 ---------*/}
        <Profile/>

        {/* -------- Column 2 ---------*/}
        <Posts/>

        {/* -------- Column 3 ---------*/}
        <Suggestions/>
            
          </div>
  )
}

export default Main