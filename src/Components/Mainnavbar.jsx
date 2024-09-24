import React from 'react';
import { FaRegHeart, FaSearch } from 'react-icons/fa';
import { ImCart } from 'react-icons/im';
import { IoIosSearch } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Mainnavbar = () => {
  return (
    <div className="mainNavbar w-full h-[10vh] px-3  md:px-20 flex justify-between items-center">
      <div className="logo">
        <Link className="font-bold text-[25px] md:text-[35px]">SHOP.CO</Link>
      </div>
      {/* <div className="search w-[30vw] hidden lg:flex">
        <div className="flex items-center w-[30vw]  bg-white border rounded-full shadow-md">
          <div className="pl-4">
            <FaSearch className="text-gray-500" />
          </div>
          <input
            type="text"
            className="w-[30vw] p-2 pl-4 text-sm text-gray-700 bg-white rounded-full focus:outline-none"
            placeholder="Search for products..."
          />
        </div>
      </div> */}
      <div className="utilities m-2 relative flex justify-center items-center">
        <div className="cartdiv flex gap-5 justify-center items-center ">
          <IoIosSearch className=" text-black text-[19px] lg:text-[22px]" />
          <Link className="text-[17px] lg:text-[20px]">
            <FaRegHeart />
          </Link>

          <Link className="text-[20px] bg-black text-white px-3 py-3 lg:px-6 lg:py-1 md:px-10 md:py-2 flex justify-center items-center rounded-full">
            {' '}
            <ImCart className=" text-[15px] lg:text-[20px] lg:mr-2" /> <span className=' hidden lg:flex'>Cart</span>
          </Link>
          <div className="itemNo bg-red-600 px-2  md:p-1 md:px-3 rounded-full absolute text-[15px] text-white right-11 lg:-right-2 -top-3">
            <h1>2</h1>
          </div>
          <div className="menu flex lg:hidden">
            <label class="flex flex-col gap-2 w-8">
              <input class="peer hidden" type="checkbox" />
              <div class="rounded-2xl h-[3px] w-1/2 bg-black duration-500 peer-checked:rotate-[225deg] origin-right peer-checked:-translate-x-[12px] peer-checked:-translate-y-[1px]"></div>
              <div class="rounded-2xl h-[3px] w-full bg-black duration-500 peer-checked:-rotate-45"></div>
              <div class="rounded-2xl h-[3px] w-1/2 bg-black duration-500 place-self-end peer-checked:rotate-[225deg] origin-left peer-checked:translate-x-[12px] peer-checked:translate-y-[1px]"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainnavbar;
