/* eslint-disable @next/next/no-img-element */
'use client'
import Link from 'next/link';
import React, { useContext } from 'react';
import { SiYourtraveldottv } from 'react-icons/si';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import Btnn from './Btnn';
import { AuthContext } from './AuthContext';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user?.photoURL);
    const router = useRouter()
    const handleLogOut = () => {
        logOut()
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Logout successfully',
            showConfirmButton: false,
            timer: 1500
        })
        router.push("/")
    }

    const NavLiks = <>
        <Link className='text-xl font-semibold hover:text-red-500' href="/">Home</Link>
        <Link className='text-xl font-semibold hover:text-red-500' href="/create">Create</Link>
        <Link className='text-xl font-semibold hover:text-red-500' href="/place">Place</Link>
        <Link className='text-xl font-semibold hover:text-red-500' href="/booked">Booked</Link>
        
    </>
    return (
        <div className='fixed z-10 w-full bg-slate-100 flex justify-evenly items-center p-6'>
            <div className='flex items-center gap-2'>
                <SiYourtraveldottv className='text-5xl text-red-500' />
                <h2 className='text-3xl md:text-4xl font-bold'>Travel</h2>
            </div>
            <div className='flex gap-4 max-md:hidden'>
                {NavLiks}

            </div>
            <div className="dropdown">
                <label tabIndex={0} className="btn  md:hidden rounded-full">
                   {!user? <AiOutlineMenuUnfold className='text-2xl text-red-500' /> :
                      <img src={user?.photoURL} alt="img" className='w-11 h-fit rounded-full' />}
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-72 mx-auto">
                    {NavLiks}
                </ul>
            </div>
            <div className=''>
                {!user ? <Link className=' font-semibold  ' href="/login">
                    <Btnn>
                        <h1 className='text-xl'>Login</h1>
                    </Btnn>
                </Link> :
                    <div onClick={handleLogOut}>
                        <Btnn >
                            <h1 className='text-xl'>Logout</h1>
                        </Btnn>
                    </div>
                }
            </div>
                <div className='max-md:hidden'>
                    <img src={user?.photoURL} alt="img" className='w-11 h-fit rounded-full' />
                {/* <Image className='rounded-full' src={user?.photoURL} alt='userpic' width={40} height={40}/> */}
                </div>

        </div>
    );
};

export default Navbar;