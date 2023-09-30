'use client'
import Btnn from '@/components/Btnn';
import axios from 'axios';
import { useRouter } from 'next/navigation';
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const img_hosting_token = process.env.NEXT_PUBLIC_img_Upload_Token;

const createPage = () => {
    const router = useRouter()
    const { register, handleSubmit } = useForm();
  
    const onSubmit = data => {
        const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

        const formData = new FormData();
        formData.append('image', data?.image[0])
        fetch(img_hosting_url, {
            method: "POST",
            body: formData
        }).then(res => res.json())
            .then(imgres => {
                if (imgres.success) {
                    const image = imgres.data.display_url;
                    const { name, location,cost } = data;
                    const allItem = { name, location, cost, image }

                    // console.log(allItem);
                    axios.post("/api/imgup", allItem)
                    .then(data=>{
                        Swal.fire({
                            position: 'top',
                            icon: 'success',
                            title: 'successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        router.push("/")
                    })
                }
            })
                

// console.log(data);
    }
    return (
        <div>
          
             <form onSubmit={handleSubmit(onSubmit)} className="w-3/4 mx-auto nnn5 p-10">
                <h1 className="text-4xl font-bold text-center text-red-500">Create Places</h1>
                <div className="md:flex gap-5">
                    <div className="form-control w-full  ">
                        <label className="label">
                            <span className="label-text text-2xl font-semibold">Place name</span>
                        </label>
                        <input

                            {...register("name", { required: true })}

                            type="text" placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full  ">
                        <label className="label">
                            <span className="label-text text-2xl font-semibold">Location</span>
                        </label>
                        <input
                            {...register("location", { required: true })}
                            type="text" placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control w-full  ">
                    <label className="label">
                        <span className="label-text text-2xl font-semibold">Cost</span>
                    </label>
                    <input
                        {...register("cost", { required: true })}
                        type="number" placeholder="Type here" className="input input-bordered w-full max-w-sm " />
                </div>
                <div className="mt-5 flex justify-center">
                    <input {...register("image")} type="file" className="file-input file-input-bordered file-input-warning w-full max-w-xs" />
                </div>
                <div className="flex justify-center mt-3">
                    <Btnn>Create</Btnn>
                </div>
            </form>
        </div>
    );
};

export default createPage;