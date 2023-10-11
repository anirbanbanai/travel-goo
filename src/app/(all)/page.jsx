import Explore from '@/components/Explore';
import HorizentalImg from '@/components/HorizentalImg';
import MainHome from '@/components/MainHome';
import PopularDestination from '@/components/PopularDestination';
import Trending from '@/components/Trending';
import React from 'react';

const page = () => {
    return (
        <div>
            <MainHome />
            <Explore/>
           <div className='pt-10 pb-10'>
            <h1 className='text-4xl font-bold text-center'>Trending</h1>
           <HorizentalImg/>
           </div>
            {/* <Trending/> */}
            <PopularDestination/>
        </div>
    );
};

export default page;