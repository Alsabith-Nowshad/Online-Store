import React from 'react'

const BestSeller = ({ data }) => {
  return (
    <div className='w-full h-auto flex flex-col justify-center items-center mt-20'>
      <div className='txt'>
        <h2 className='text-[1.2rem] sm:text-[1.5rem] lg:text-[1.8rem] font-extrabold text-[#FF8686]'>
          <span className='text-[#3C486B]'>Explore</span> Bestsellers
        </h2>
      </div>
      <div className="mapping flex flex-wrap justify-center items-center gap-10 mt-10">
        {data.map((items, index) => (
          <div key={index} className='img flex flex-col justify-center items-center gap-2 font-bold'>
            <img className='w-[20rem]' src={items.img} alt={items.Title} />
            <h1>{items.Title}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BestSeller
