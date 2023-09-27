'use client'
import { FaLocationArrow } from 'react-icons/fa';
import { FcSearch } from 'react-icons/fc';
import { BsCalendarCheck, BsPeopleFill } from 'react-icons/bs';
import { useForm } from 'react-hook-form';

const Explore = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <div className='mb-5 mt-7'>
            <h1 className='text-blue-500 text-2xl text-center'>Explore your dream place</h1>
            <div>
                <h1 className='text-4xl font-bold text-center'> Find your destination</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='explore grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-center mt-5 w-4/5 mx-auto p-3 gap-3'>
                        <div className='flex item-center justify-center gap-2'>
                            <div className='bg-slate-300 p-1 rounded-full flex items-center justify-center w-16 mx-auto'>
                                <FaLocationArrow className='text-2xl text-red-500 ' />
                            </div>
                            <div>
                                <h1 className='text-bold'>Location</h1>
                                <input  type="text" {...register("location")}placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />

                            </div>
                        </div>
                        <div className='flex item-center justify-center gap-2'>
                            <div className='bg-slate-300 p-1 rounded-full flex items-center justify-center w-16 mx-auto'>
                                <BsCalendarCheck className='text-2xl text-red-500 ' />
                            </div>
                            <div>
                                <h1 className='text-bold'>Cheak In</h1>
                                <input {...register("cheak_In")} type="date" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />

                            </div>
                        </div>
                        <div className='flex item-center justify-center gap-2'>
                            <div className='bg-slate-300 p-1 rounded-full flex items-center justify-center w-16 mx-auto left-0'>
                                <BsCalendarCheck className='text-2xl text-red-500 ' />
                            </div>
                            <div>
                                <h1 className='text-bold'>Cheak Out</h1>
                                <input {...register("cheak_Out")} type="date" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />

                            </div>
                        </div>
                        <div className='flex item-center justify-center gap-2'>
                            <div className='bg-slate-300 p-1 rounded-full flex items-center justify-center w-16 mx-auto'>
                                <BsPeopleFill className='text-2xl text-red-500 ' />
                            </div>
                            <div>
                                <h1 className='text-bold'>Travels</h1>
                                <input {...register("member")} type="number" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />

                            </div>
                        </div>

                    </div>
                    <div className='flex justify-center mt-4'>
                        <button className='btn btn-warning hover:bg-white'>Search <FcSearch className='text-3xl' /></button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Explore;