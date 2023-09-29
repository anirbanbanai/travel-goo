'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import img from '@/assets/pic2.jpg'
import { CiLocationOn } from 'react-icons/ci';
import { SiReactivex } from 'react-icons/si';
import { TbPlaceholder } from 'react-icons/tb';
import { BsCalendar2Minus } from 'react-icons/bs';
import Btnn from './Btnn';
import axios from 'axios';

const Trending = () => {
    const [data,setData] = useState();
   useEffect(()=>{
    axios.get("/api/travels")
    .then(data=>{
        console.log(data);
        setData(data.data)
    })
   },[])
    return (
        <div className=' p-5 explore'>
            <h1 className='text-4xl font-bold text-start'>Trending </h1>
            <p className='text-xl'>All trending travel place in the world.</p>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-5'>
                {
                    data?.map(m=>(
                        <div key={m._id} className='explore2 p-5 mx-auto'>
                        <h1 className='flex gap-2 items-center font-bold'><CiLocationOn className='text-3xl text-blue-500' /> {m?.location}</h1>
                        <h1 className='text-2xl font-semibold mb-2'>{m?.name}</h1>
                        <div>
                            <Image className='rounded-md mx-auto' src={img} alt='img' width={300} />
                            <div className='flex justify-evenly mt-3 gap-3'>
                                <p className='text-sm font-bold flex gap-2'><SiReactivex className='text-2xl' /> 10 Activities</p>
                                <p className='text-sm font-bold flex gap-2'><TbPlaceholder className='text-2xl' /> 10 places</p>
                                <p className='text-sm font-bold flex gap-2'><BsCalendar2Minus className='text-2xl' /> 1 week</p>
    
                            </div>
                        </div>
                        <div className='flex justify-between items-center mt-3'>
                            <h1 className='text-sm font-bold'>From ${m?.cost} /person</h1>
                           <Btnn>Book_now</Btnn>
                        </div>
                    </div>
                    ))
                }
           
            </div>
        </div>
    );
};

export default Trending;