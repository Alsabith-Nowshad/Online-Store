import React from 'react'
import { ImCart } from 'react-icons/im'
import { IoMdHeartEmpty, IoMdStar } from 'react-icons/io'

const ProductCard = () => {
  return (
    <div className=''>
    <div className='bg-zinc-100 h-auto pb-10  w-[90vw] sm:h-[30rem] flex flex-col sm:w-[27rem]  rounded-[20px]'>
      <div className="image  bg-yellow-400 rounded-[20px] relative">
        <img className='w-full h-[100%]' src="./public/images/card1.png" alt="" />
        <div className="heart absolute flex top-5 left-5 bg-white rounded-full h-[2rem] w-[2rem] sm:h-[3rem] sm:w-[3rem] justify-center items-center text-[5vw] sm:text-[30px]  text-black ">
        <IoMdHeartEmpty />
        </div>
        <div className="off absolute top-5 right-5 bg-white rounded-full h-[2rem] w-[5rem]  sm:h-[2.4rem] sm:w-[7rem] flex justify-center items-center text-[30px]">
            <h1 className='flex text-[4vw] sm:text-[20px] justify-center items-center font-bold'>30% off</h1>
        </div>
      </div>

    <div className="bottom-txt w-full h-[27%] pl-2 flex py-3">
    <div className="bottom-left w-[82%] h-full  leading-tight p-2">
        <h1 className='text-[4vw] sm:text-[17px] text-[#939393]'>Perfume</h1>
        <div className="trunc  w-[100%]">
        <h1 className='text-black text-[6vw] sm:text-[30px] font-bold truncate'>Alsabith Nowshad</h1>
        </div>
        <h1 className='text-black text-[4vw] sm:text-[25px]'>$1,999</h1>
        <h1 className='text-red-300 font-light line-through text-[4vw] sm:text-[19px]'>$3000</h1>
    </div>
    <div className="bottom-right w-[50%] flex flex-col justify-start items-end  ">
    <h1 className='flex m-2 justify-center items-center w-[4rem] h-[1.5rem] sm:text-[1.3rem] gap-1 sm:w-[6rem] sm:h-[2rem] rounded-full bg-gradient-to-t from-green-500 to-green-700 text-white'><IoMdStar />4.5</h1>
    <h1 className='flex justify-center items-center gap-2 text-[2.6vw] sm:text-[1rem] bg-black text-white px-6 py-3 rounded-tl-full rounded-bl-full'><ImCart/>Add to Cart</h1>
    </div>
    </div>

    <div className="btn flex justify-center items-center w-full">
        <button className='bg-white px-24 py-3 rounded-full border border-orange-600 mt-2'>BUY NOW</button>
    </div>

    </div>
    </div>
  )
}
export default ProductCard
