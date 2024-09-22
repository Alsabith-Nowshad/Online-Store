import React from 'react'
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Slider.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const HeroSlider = ({images}) => {
  return (
    <div className='hero w-full h-[30vh] lg:h-[70vh]'>
      <Swiper
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
      
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((items,i)=>{
                return(
                    <div>
                    <SwiperSlide><img src={items.image} alt="" /></SwiperSlide>
                    </div>
                )
        })}
      </Swiper>
    </div>
  )
}

export default HeroSlider
