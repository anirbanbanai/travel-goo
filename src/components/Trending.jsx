/* eslint-disable @next/next/no-img-element */
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
import Swal from 'sweetalert2';

const Trending = () => {
    const [data, setData] = useState();
    useEffect(() => {
        axios.get("/api/imgup")
            .then(data => {
                // console.log(data);
                setData(data.data)
            })
    }, []);

    const handleBooked = (id) => {
        axios.put(`/api/imgup/${id}`,{booked: true})
        .then(data=>{
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'User Login successfully',
                showConfirmButton: false,
                timer: 1500
            })
        })
      
    }
    return (
        <div className=' p-5 explore'>
            <h1 className='text-4xl font-bold text-start'>Trending </h1>
            <p className='text-xl'>All trending travel place in the world.</p>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-5'>


                {
                    data?.slice(0, 4).map(m => (
                        <div key={m._id} className='explore2 p-5 mx-auto'>
                            <h1 className='flex gap-2 items-center font-bold'><CiLocationOn className='text-3xl text-blue-500' /> {m?.location}</h1>
                            <h1 className='text-2xl font-semibold mb-2'>{m?.name}</h1>
                            <div>
                                {/* <Image className='rounded-md mx-auto' src={m?.image} alt='img' width={300} /> */}
                                <img src={m?.image} alt="img" className='w-[300px] h-[200px]' />

                                <div className='flex justify-evenly mt-3 gap-3 '>
                                    <p className='text-sm font-bold flex gap-2'><SiReactivex className='text-2xl' /> 10 Activities</p>
                                    <p className='text-sm font-bold flex gap-2'><TbPlaceholder className='text-2xl' /> 10 places</p>
                                    <p className='text-sm font-bold flex gap-2'><BsCalendar2Minus className='text-2xl' /> 1 week</p>

                                </div>
                            </div>
                            <div className='flex justify-between items-center mt-3'>
                                <h1 className='text-sm font-bold'>From ${m?.cost} /person</h1>
                                <div onClick={() => handleBooked(m?._id)}>
                                    <Btnn >Book_now</Btnn>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default Trending;