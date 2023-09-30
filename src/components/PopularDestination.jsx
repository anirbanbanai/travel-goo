'use client'
import img1 from '@/assets/pic1.jpg'
import img2 from '@/assets/pic2.jpg'
import img3 from '@/assets/pic3.jpg'
import img4 from '@/assets/pic4.jpg'
import img5 from '@/assets/pic5.jpg'
import axios from 'axios'
import Image from 'next/image';
import { useEffect, useState } from 'react'

const PopularDestination = () => {
    const [data,setData] = useState();
    useEffect(()=>{
        axios.get("/api/imgup")
        .then(data=>{
            console.log(data);
            setData(data.data)
        })
    },[])
    return (
        <div>
            <h1 className='text-4xl font-bold'>Popular Destination</h1>
            <div className='p-4 grid grid-cols-3'>
{
    data?.map(m=>(
       <div className='p-4 border' key={m._id}>
         <Image  src={m?.image} alt='img' width={400} height={300}/>
         <p className='font-bold mt-2'>{m?.name}</p>
       </div>
    ))
}
        
            </div>
        </div>
    );
};

export default PopularDestination;