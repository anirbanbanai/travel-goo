'use client'
import { AuthContext } from '@/components/AuthContext';
import Btnn from '@/components/Btnn';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const img_hosting_token = process.env.NEXT_PUBLIC_img_Upload_Token;

const Register = () => {
    const {user, createUser, updateUserProfile } = useContext(AuthContext);
    // console.log(user);
    const router = useRouter()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
   
    

    const onSubmit = (data) => {
        const formData = new FormData;
        formData.append("image", data.photo[0])
        fetch(img_hosting_url, {
            method: "POST",
            body: formData
        }).then(res => res.json())
            .then(imgres => {
                if (imgres.success) {
                    const imgURL = imgres.data.display_url;
                    const { name, email } = data;
                    const allItem = { name, email, imgURL }
                    updateUserProfile(data.name, imgURL)
                        .then(data => {
                            // console.log("use update", data);
                        });
                    // axios.post("/all", allItem)
                    //     .then(res => {
                    //         if (res.data.acknowledged === true) {
                    //             router.push("/")
                    //             Swal.fire({
                    //                 position: 'top',
                    //                 icon: 'success',
                    //                 title: 'User created successfully',
                    //                 showConfirmButton: false,
                    //                 timer: 1500
                    //             })
                    //         }
                    //     })
                    //     .catch(error => {
                    //         console.log(error.message);
                    //     })

                }
            })

        createUser(data.email, data.password)
            // createJWT(data.email)
            .then(data => {

                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'User Login successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                // router.push("/")

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
                    <input {...register("photo")} type="file" className="mt-5 file-input file-input-bordered file-input-warning w-full " />
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