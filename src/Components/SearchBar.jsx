import React from 'react'
import { IoIosClose, IoIosSearch } from 'react-icons/io'

const SearchBar = () => {
  return (
    <div className='w-full left-0 top-0 z-50  h-[20vh] bg-red-700 absolute '>
      <div className="topSec w-full h-[8vh]  flex justify-center gap-5 items-center">
      <IoIosSearch className=" text-black text-[19px] lg:text-[22px]" />
        <input className='w-[80vw] h-10 rounded-full bg-zinc-200' type="text" />
        <IoIosClose className=" text-[3rem]" />
      </div>
    </div>
  )
}

export default SearchBar
