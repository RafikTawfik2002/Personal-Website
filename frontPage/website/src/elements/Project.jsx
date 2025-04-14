import React from 'react'

function Project({title, link}) {
  return (
    <button className='duration-100 hover:underline hover:cursor-pointer py-4'>
        <div className='border-1 border-gray-400 border-t-0 border-b-0 border-r-0 px-4'>{title}</div>
        </button>
  )
}

export default Project
