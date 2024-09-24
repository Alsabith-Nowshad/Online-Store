import React from 'react'

const Marquee = ({images}) => {
  return (
    <div className='w-full h-[15vh] bg-black mt-10'>
      {images.map((item,index)=>{
        return <img key={index} className='w-1 h-1' src={item} alt="" />
      })}
    </div>
  )
}

export default Marquee
