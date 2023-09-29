'use client'
import { AuthContext } from '@/components/AuthContext';
import Btnn from '@/components/Btnn';
import Link from 'next/link';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) =>{
        createUser(data.email , data.password)
        .then(data=>{
            console.log(data);
        })
    }
    return (
        <div>
         <form onSubmit={handleSubmit(onSubmit)} className="w-[90%] md:w-2/4 mx-auto nnn3 p-10">
                <div className="md:flex gap-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Name</span>

                        </label>
                        <input
                            {...register("name", { required: true })}
                            type="text" placeholder="Your Name" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Email</span>

                        </label>
                        <input
                            {...register("email", { required: true })}
                            type="email" placeholder="Your Email" className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Password</span>

                    </label>
                    <input type="password" placeholder="Your Password" className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Confirm Password</span>

                    </label>
                    <input {...register("password", { required: true })} type="password" placeholder="Confirm Password" className="input input-bordered w-full " />


                </div>
                <div>
                    <input {...register("photo", { required: true })} type="file" className="mt-5 file-input file-input-bordered file-input-warning w-full " />
                </div>

                <div className="flex items-center justify-center mt-5 mb-4">
                    <Btnn>Register</Btnn>
                </div>
                {/* <h3 className="text-green-500 text-center">{success}</h3> */}
                <h3 className="text-center mt-2">Already have an accunt? <Link className="text-red-500" href='/login'>Login</Link></h3>
            </form>
        </div>
    );
};

export default Register;