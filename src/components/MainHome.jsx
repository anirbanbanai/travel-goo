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


const MainHome = () => {
    return (
        <div className='relative'>

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

            </Swiper>
            <div className='w-2/4 backdrop-blur-xl  filter  absolute top-1/3 z-20 ml-5 p-4 text-white'>
                     <strong className='text-white'>Explore the world</strong>  
                     <h1 className='text-3xl font-bold'>It is Big world out there,Go explore</h1>
                     <p className='text-sm'>
I believe you meant "travel quota." A travel quota typically refers to a limitation or allocation of resources, such as the number of people allowed to travel to a particular destination or the amount of money allocated for travel expenses.</p>
                     <button className='btn btn-warning hover:bg-white mt-3'>Explore now</button>
            </div>
            {/* <div className='absolute top-2/4 z-50 p-3 text-white  w-2/4'>
                <h2 className='font-bold text-xl'>Explore the world</h2>
                <h2 className='text-4xl font-bold'>It is a huge travelor</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis hic ipsa, iusto dolore temporibus molestias doloribus alias neque cupiditate voluptates.</p>
                <button className='btn btn-warning mt-4 hover:bg-white'>Explore Now</button>
            </div> */}

        </div>
    );
};

export default MainHome;