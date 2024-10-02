import React from 'react'

const ShopByCategory = () => {
  return (
    <div className='w-[100%] h-auto px-2 lg:px-5 justify-center items-center mt-10   lg:flex lg:gap-2'>

      <div className="leftSec w-[100%] lg:w-[50%] h-[100vw] md:h-[100vh] mb-2 lg:mb-0  flex flex-col gap-2 ">
        <div className="top  h-[50vh] w-full bg-cover bg-[url('./public/images/cate1.png')]">
        
        </div>
        <div className="bottom h-[50vh] flex gap-2 ">

        <div className="left w-[50%] h-full  bg-cover bg-[url('./public/images/cate4.png')]">

        </div>

        <div className="right w-[50%]  bg-cover bg-[url('./public/images/cate5.png')]">

        </div>



        </div>
      </div>

    <div className="rightSec  w-full lg:w-[50%] h-[100vw] md:h-[100vh] flex gap-2">


    <div className="leftSide w-[50%] h-[100%] flex flex-col gap-2">
    <div className="top w-[100%]  h-[50%] bg-cover bg-[url('./public/images/cate2.png')]">

    </div>
    <div className="bottom top w-[100%] h-[50%] bg-cover bg-[url('./public/images/cate6.png')]">

    </div>
    </div>

    <div className="rightSide w-[50%] h-full bg-cover bg-[url('./public/images/cate3.png')]">

    </div>


    </div>


    </div>
  )
}

export default ShopByCategory
