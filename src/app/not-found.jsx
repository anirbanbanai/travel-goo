import Image from 'next/image';
import React from 'react';
import img from '@/assets/error.jpg'
import Link from 'next/link';

const notFound = () => {
    return (
        <div>
          <Image className='mx-auto' src={img} alt='u' width={500} height={500} />
       <div className='flex justify-center btn btn-sm btn-outline btn-warning'>
       <Link className='text-center' href="/"> Home</Link>
       </div>
        </div>
    );
};

export default notFound;