import React, { useRef, useState} from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';



const Slider = () => {
  return (
    <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='slide slide1'></SwiperSlide>
        <SwiperSlide className='slide slide2'></SwiperSlide>
        <SwiperSlide className='slide slide3'></SwiperSlide>
        <SwiperSlide className='slide slide4'>Slide 4</SwiperSlide>
      </Swiper>
  )
}

export default Slider