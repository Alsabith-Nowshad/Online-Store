import React from 'react'
import Testmonital from './Testmonital'

const TestimonialMain = () => {


let testimonialData = [
    {
        profile:'./public/images/testi1.png',
        name:'John Doe',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor nisi vel nunc suscipit, id interdum dui consequat. '
    },
    {
        profile:'./public/images/testi2.png',
        name:'John Doe',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor nisi vel nunc suscipit, id interdum dui consequat.  '
    }, {
        profile:'./public/images/testi1.png',
        name:'John Doe',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor nisi vel nunc suscipit, id interdum dui consequat. '
    }
    
]




    
  return (
    <div className='mt-10 w-full h-[60vh]'>
      <div className='main flex justify-between items-center'>
    <div className="leftSide  pl-10 w-[25vw] h-[50vh] flex justify-center items-center">
        <h1 className='font-medium text-[3vw] w-[25vw] leading-tight'>What They Say <br /> About Us</h1>
    </div>
    <div className="rightSIde flex-grow h-[50vh] border-t-4 border-b-4 border-black justify-center flex items-center gap-10">
        <Testmonital data={testimonialData}/>
    </div>
</div>
    </div>
  )
}

export default TestimonialMain
