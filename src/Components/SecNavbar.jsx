import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { IoMdArrowDropdown } from 'react-icons/io'
import { Link } from 'react-router-dom'

const SecNavbar = () => {
  return (
    <div className='bg-[#AAF1FF] px-6 xl:px-20 w-full h-[8vh] hidden lg:flex justify-between items-center'>
      <div className="category ">
        <Link className='flex justify-center items-center'>Category <IoMdArrowDropdown /></Link>
      </div>
      <div className="nav-link-main flex gap-14">
      <Link>Home</Link>
      <Link className='flex  justify-center items-center'>Products <IoMdArrowDropdown /></Link>
      <Link>About</Link>
      <Link>Contact</Link>
      </div>
      <div className="login-signup flex justify-center items-center gap-6">
        <div className="links gap-3 flex">
      <Link className=' border border-black px-12 py-2 rounded-full'>SignUp</Link>
      <Link className=' border border-black px-12 py-2 rounded-full'>LogIn</Link>
      </div>
     <Link> <CgProfile className='text-[3rem]'/> </Link>
      </div>
    </div>
  )
}

export default SecNavbar
