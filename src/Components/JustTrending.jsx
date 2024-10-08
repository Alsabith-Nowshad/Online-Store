import React from 'react'
import Buttons from './Buttons'
import ProductCard from './ProductCard'

const JustTrending = () => {
  return (
    <div>
       <div className='w-full h-auto flex flex-col justify-center items-center px-2 lg:px-10 mt-10'>
        <div className="main-txt">
  <h1 className='sm:text-[1.5rem] lg:text-[1.8rem] font-extrabold text-[#FF8686]'><span className='text-[#3C486B]'>Just</span> Trending</h1>
  </div>
  <div className="sec-txt ">
    <h1>Recently Launched</h1>
  </div>
<div className="products flex justify-center items-center flex-wrap gap-5 mt-10">
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>
</div>

<div className="btn mt-10">
<Buttons/>
</div>
    </div>
    <div className='flex justify-center items-center mt-10'>
  <h1 className='sm:text-[1.5rem] lg:text-[1.8rem] font-extrabold text-[#FF8686]'><span className='text-[#3C486B]'>Shop By</span> Categories</h1>
  </div>
    </div>
  )
}

export default JustTrending
