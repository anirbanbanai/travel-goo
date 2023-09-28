import Link from 'next/link';
import React from 'react';
import { SiYourtraveldottv } from 'react-icons/si';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import Btnn from './Btnn';

const Navbar = () => {
    return (
        <div className='fixed z-10 w-full bg-slate-100 flex justify-evenly items-center p-6'>
            <div className='flex items-center gap-2'>
                <SiYourtraveldottv className='text-5xl text-red-500' />
                <h2 className='text-3xl md:text-4xl font-bold'>Travel</h2>
            </div>
            <div className='flex gap-4 max-md:hidden'>
                <Link className='text-xl font-semibold hover:text-red-500' href="/">Home</Link>
                <Link className='text-xl font-semibold hover:text-red-500' href="/create">Create</Link>
                <Link className='text-xl font-semibold hover:text-red-500' href="/">Destination</Link>
                <Link className='text-xl font-semibold hover:text-red-500' href="/">Trending</Link>
                <Link className='text-xl font-semibold hover:text-red-500' href="/">Testimonial</Link>

            </div>
            <div className="dropdown">
                <label tabIndex={0} className="btn  md:hidden rounded-full">
                    <AiOutlineMenuUnfold className='text-2xl text-red-500' />
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-72 mx-auto">
                    <Link className='text-xl font-semibold hover:text-red-500 mt-2' href="/">Home</Link>
                    <Link className='text-xl font-semibold hover:text-red-500 mt-2' href="/">Destination</Link>
                    <Link className='text-xl font-semibold hover:text-red-500 mt-2' href="/">Trending</Link>
                    <Link className='text-xl font-semibold hover:text-red-500 mt-2' href="/">Testimonial</Link>
                </ul>
            </div>
            <div className=''>
                <Link className='text-xl font-semibold  ' href="/login">
                <Btnn>Login</Btnn>
                </Link>
            </div>
           
        </div>
    );
};

export default Navbar;