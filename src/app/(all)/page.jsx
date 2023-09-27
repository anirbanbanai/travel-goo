import Explore from '@/components/Explore';
import MainHome from '@/components/MainHome';
import Trending from '@/components/Trending';
import React from 'react';

const page = () => {
    return (
        <div>
            <MainHome />
            <Explore/>
            <Trending/>
        </div>
    );
};

export default page;