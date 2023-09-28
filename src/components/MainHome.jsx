/* eslint-disable react/no-unescaped-entities */
'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import img12 from '@/assets/pic1.jpg'
import img2 from '@/assets/pic2.jpg'
import img3 from '@/assets/pic3.jpg'
import img4 from '@/assets/pic4.jpg'
import img5 from '@/assets/pic5.jpg'

const MainHome = () => {
    return (
        <div className=''>

            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}

            >
                <SwiperSlide>
                    <Image className='w-full h-[100vh]' src={img12} alt='img' width={555} height={555} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className='w-full h-[100vh]' src={img2} alt='img' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className='w-full h-[80vh] md:h-[100vh]' src={img3} alt='img' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className='w-full h-[100vh]' src={img4} alt='img' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className='w-full h-[100vh]' src={img5} alt='img' />
                </SwiperSlide>

            </Swiper>
            <div className='w-3/4 md:w-2/4 backdrop-blur-xl  filter  absolute top-1/3 z-50 ml-5 p-4 text-white'>
                <strong className='text-white'>Explore the world</strong>
                <h1 className='text-2xl md:text-4xl font-bold'>It is Big world out there,Go explore</h1>
                <p className='text-sm'>
                    I believe you meant "travel quota." A travel quota typically refers to a limitation or allocation of resources.</p>
                <button className='btn btn-warning hover:bg-white mt-3'>Explore now</button>
            </div>

        </div>
    );
};

export default MainHome;