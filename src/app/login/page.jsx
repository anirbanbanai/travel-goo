'use client'
import { AuthContext } from '@/components/AuthContext';
import Btnn from '@/components/Btnn';
/* eslint-disable react-hooks/rules-of-hooks */
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const login = () => {
    const router = useRouter()
    const { user, loginUser } = useContext(AuthContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        // console.log(data);
        loginUser(data.email, data.password)
        .then(data=>{
            // console.log(data);
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'User Login successfully',
                showConfirmButton: false,
                timer: 1500
            })
            router.push("/")
          
        })
    }
    return (
        <div className='mt-10'>
            <h1 className='text-5xl font-bold text-center'>Login Now</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="w-[90%] md:w-2/4 mx-auto nnn3 p-10">

                <div className=" w-full ">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Email</span>

                    </label>
                    <input   {...register("email", { required: true })} type="email" placeholder="Your Email" className="input  w-full " />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Confirm Password</span>

                    </label>
                    <input   {...register("password", { required: true })} type="password" placeholder=" Password" className="input input-bordered w-full " />
                </div>
                {/* {...register("password", { required: true })} */}

                <div className="flex items-center justify-center mt-5">
                    <Btnn>Login</Btnn>
                </div>
                {/* <h3 className="text-green-500 text-center">{success}</h3> */}
                <h3 className="text-center mt-2">New to user? <Link className="text-red-500" href='/register'>Register</Link></h3>
            </form>
        </div>
    );
};

export default login;