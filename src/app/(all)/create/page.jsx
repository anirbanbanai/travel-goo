'use client'
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useForm } from 'react-hook-form';

const img_hosting_token = process.env.NEXT_PUBLIC_ImageUploadToken;

const createPage = () => {
    const { register, handleSubmit } = useForm();
  
    const onSubmit = data => {
        const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

        const formData = new FormData();
        formData.append('image', data.photo[0])
        console.log(data);
        // fetch(img_hosting_url, {
        //     method: "POST",
        //     body: formData
        //   }).then(res => res.json())
        //     .then(imgres => {
        //       if (imgres.success) {
        //         const imgURL = imgres.data.display_url;
        //         const { text, photo } = data;
        //         const {photoURL,displayName,email} = user;
        //         const menuItems = { text, imgURL,photoURL,displayName,email , date: new Date};
        //         console.log(menuItems);
        //         axios.post('https://my-final-server.vercel.app/post', menuItems)
        //           .then(data => {
        //             console.log(data.data);
        //             swal("Post created!", "", "success");
        //           })
        //       }
        //     })
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
                    <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered file-input-warning w-full max-w-xs" />
                </div>
                <div className="flex justify-center">
                    <button className='btn btn-warning mt-4 hover:bg-red-500'>Create</button>
                </div>
            </form>
        </div>
    );
};

export default createPage;