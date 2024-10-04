import React from 'react'
import { FaFacebookF, FaTelegramPlane  } from 'react-icons/fa'
import { CiInstagram } from "react-icons/ci";
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='h-[50vh] w-full bg-[#01225B]'>
       <div className="top h-[40vh] w-full flex flex-wrap">
            <div className="sec1 h-full w-[15vw]  flex flex-col gap-2 font-medium text-[1rem] p-10 text-white">
                <h1 className='text-zinc-400'>COMPANY</h1>
                <a className='w-fit' href="">Home</a>
                <a className='w-fit' href="">About</a>
                <a className='w-fit' href="">Contact</a>
                <a className='w-fit' href="">FAQ</a>
            </div>
            <div className="sec2 h-full w-[20vw] flex flex-col gap-2 font-medium text-[1rem] p-10 text-white ">
            <h1 className='text-zinc-400'>INFORMATION</h1>
                <a className='w-fit' href="">Privacy Policy</a>
                <a className='w-fit' href="">Terms & Condition</a>
                <a className='w-fit' href="">Refund policy</a>
            </div>
            <div className="sec3 h-full w-[30vw]  flex flex-col gap-2 font-medium text-[1rem] p-10 text-white">
            <h1 className='text-zinc-400'>LOCATION</h1>
                <a className='w-[25vw]  ' href="">Atya Enterprises, 2/274-G, Valiyarambath Building, Pannikkottur(PO) , Elettil Vattoli , Calicut , Kerala </a>
            </div>
            <div className="sec4 h-full w-[20vw]  flex flex-col gap-2 font-medium text-[1rem] p-10 text-white">
            <h1 className='text-zinc-400'>CONTACT</h1>
                <a className='w-fit' href="">shopco.@gmail.com</a>
            </div>
            <div className="sec5 h-full w-[15vw]  flex flex-col  font-medium text-[1rem] justify-between p-5 px-10 text-white items-end ">
                <div className="top flex flex-col items-end">
            <Link className="font-extrabold text-[25px] md:text-[3.5rem] italic">SHOP.CO</Link>
            <a className='text-[0.9rem] w-fit' href="">Products that match Your Lifestyle <br /> Crafted for You</a>
            </div>
            <div className="bottom font-normal flex flex-col justify-center items-center">
                <h1>follow us</h1>
                <div className="bttom flex gap-2">
               <a className="w-[30px] h-[30px] flex  justify-center items-center rounded-full bg-white"> <FaFacebookF className='text-black' /></a>
               <a className="w-[30px] h-[30px] flex  justify-center items-center rounded-full bg-white"> <FaTelegramPlane  className='text-black' /></a>
               <a className="w-[30px] h-[30px] flex  justify-center items-center rounded-full bg-white"> <CiInstagram className='text-black' /></a>
               </div>
            </div>
            </div>
       </div>
    </div>
  )
}

export default Footer
