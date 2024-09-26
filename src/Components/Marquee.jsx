import { motion } from 'framer-motion'
import React from 'react'

const Marquee = ({ photo }) => {
  return (
    <div  className='w-full h-[15vh] flex bg-black gap-32 mt-10 justify-center items-center'>
      {photo.map((item,index)=>{
        return ( 
        <motion.div key={index} initial={{x:0}} animate={{x:"200%"}} transition={{x:{ease:'linear',duration:1,repeat:Infinity, loop:true, repeatType:'loop'}}}> <img   className='w-[9rem] h-full object-contain' src={item.img} alt="" /></motion.div>)
      })}
    </div>


  )
}

export default Marquee

