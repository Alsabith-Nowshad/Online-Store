import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'

const Buttons = () => {
  return (
    <div className='flex w-full  justify-center items-center'>
    <div className=' border border-black w-[10rem] h-[3rem] rounded-full flex justify-center items-center gap-3'>
      <h1>View All </h1>
      <span className='p-2 bg-black rounded-full'>
      <GoArrowUpRight className='text-white'/>
      </span>
    </div>
    </div>
  )
}

export default Buttons
