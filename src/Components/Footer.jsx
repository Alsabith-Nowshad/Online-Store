import React from 'react'
import { FaFacebookF, FaTelegramPlane  } from 'react-icons/fa'
import { CiInstagram } from "react-icons/ci";
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='h-auto xl:h-[50vh] w-full bg-[#01225B]'>
       <div className="top h-auto w-full flex  flex-col xl:flex-row ">
            <div className="sec1 h-full w-[15vw]  flex flex-col gap-2 font-medium text-[1rem] p-10 text-white">
                <h1 className='text-zinc-400'>COMPANY</h1>
                <a className='w-fit' href="">Home</a>
                <a className='w-fit' href="">About</a>
                <a className='w-fit' href="">Contact</a>
                <a className='w-fit' href="">FAQ</a>
            </div>
            <div className="sec2 h-full w-[20vw] flex flex-col gap-2 font-medium text-[1rem] p-10 text-white">
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
            <div className="sec5  xl:h-[40vh] flex-wrap xl:w-[12vw] flex  xl:gap-0 xl:flex-col  font-medium text-[1rem] justify-between xl:p-0 p-5  text-white items-end">
                <div className="top flex flex-col items-end justify-end">
            <Link className="font-extrabold text-[20vw]  md:text-[3.5rem]  italic">SHOP.CO</Link>
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

        <hr className='mt-2'/>
            <div className="bottom  w-full h-auto gap-5 flex flex-col xl:flex-row justify-between items-center xl:px-20 mt-2">
                <div className="left text-white  flex gap-10 ">
                    <Link className='flex gap-2'><img className='w-6 h-6' src="./public/images/Footer1.png" alt="" /> Help</Link>
                    <Link className='flex gap-2'><img className='w-6 h-6' src="./public/images/Footer2.png" alt="" /> 7558846282</Link>
                </div>

                <div className="center text-white font-light ">
                    <h1>©2024 All Rights Reserved</h1>
                </div>

                <div className="right flex ">
                    <img className='h-10' src="public/images/Footer3.png" alt="" />
                    <img className='h-10' src="public/images/Footer4.png" alt="" />
                    <img className='h-10' src="public/images/Footer5.png" alt="" />
                    <img className='h-10' src="public/images/Footer6.png" alt="" />
                    <img className='h-10' src="public/images/Footer7.png" alt="" />
                </div>
            </div>

    </div>
  )
}

export default Footer


