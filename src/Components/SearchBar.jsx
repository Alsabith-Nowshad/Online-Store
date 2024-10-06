import React from 'react'
import { IoIosClose, IoIosSearch } from 'react-icons/io'
import { Link } from 'react-router-dom'

const SearchBar = () => {
  return (
    <div className='w-full left-0 top-0 z-50  h-auto bg-white absolute '>
      <div className="topSec w-full h-[8vh]  flex justify-center gap-3 p-10 xl:px-0 xl:gap-5 items-center">
      <IoIosSearch className=" text-black text-[30px] lg:text-[30px]" />
        <input className='w-[80vw] h-10 rounded-full bg-zinc-200 px-7 ' type="text" />
        <IoIosClose className=" text-[3rem]" />
      </div>


      <div className="bottom w-full  h-auto flex flex-col pl-[10vw] text-black mb-10">
<h1 className='text-zinc-700'>Quick Links</h1>
<Link>Perfume</Link>
<Link>Scent</Link>
      </div>
    </div>
  )
}

export default SearchBar
