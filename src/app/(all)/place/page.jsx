/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import Btnn from '@/components/Btnn';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BsCalendar2Minus } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { SiReactivex } from 'react-icons/si';
import { TbPlaceholder } from 'react-icons/tb';

const page = () => {
    const [data,setData] = useState()
    useEffect(()=>{
        axios.get("/api/imgup")
        .then(data=>{
            console.log(data);
            setData(data.data)
        })
    },[])
    return (
        <div className='pt-10 grid md:grid-cols-2 lg:grid-cols-3 gap5'>
            {
                data?.map(m=>(
                    <div key={m._id} className='explore2 p-5 mx-auto'>
                    <h1 className='flex gap-2 items-center font-bold'><CiLocationOn className='text-3xl text-blue-500' /> {m?.location}</h1>
                    <h1 className='text-2xl font-semibold mb-2'>{m?.name}</h1>
                    <div>
                        {/* <Image className='rounded-md mx-auto' src={m?.image} alt='img' width={300} /> */}
                        <img src={m?.image} alt="img" className='w-[300px] h-[200px]'  />

                        <div className='flex justify-evenly mt-3 gap-3 '>
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
    );
};

export default page;