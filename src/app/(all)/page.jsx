import Explore from '@/components/Explore';
import MainHome from '@/components/MainHome';
import PopularDestination from '@/components/PopularDestination';
import Trending from '@/components/Trending';
import React from 'react';

const page = () => {
    return (
        <div>
            <MainHome />
            <Explore/>
            <Trending/>
            <PopularDestination/>
        </div>
    );
};

export default page;