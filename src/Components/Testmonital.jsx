import React from 'react'

const Testmonital = ({data}) => {
  return (
    <>
   {data.map((items,index)=>{
       return(
        
        <div key={index} className='h-[30vh] w-[23vw] bg-white rounded-[2rem] border-black border-4 '>
        <div className="top flex w-full h-[13vh]  justify-center items-center gap-6">
              <div  className="left  w-[5rem] h-[5rem] rounded-full">
            <img key={index} src={items.profile} alt="" />
              </div>
  
              <div className="right bg-[#01225B] text-white w-[18rem] h-[3rem] rounded-full flex justify-center items-center">
        <h1>{items.name}</h1>
              </div>
        </div>
  
  
        <div className="bottom flex w-full h-[17vh] text-justify px-6  ">
        <h1>{items.description}</h1>
        </div>
      </div>

       )
})}
</>
  )
}

export default Testmonital
