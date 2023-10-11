/* eslint-disable @next/next/no-img-element */
'use client'
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';
import React, { useEffect, useState } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import axios from 'axios';
import { SiReactivex } from 'react-icons/si';
import { TbPlaceholder } from 'react-icons/tb';
import { BsCalendar2Minus } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import Btnn from './Btnn';

const getItems = () =>
    Array(20)
        .fill(0)
        .map((_, ind) => ({ id: `element-${ind}` }));

const HorizentalImg = () => {
    const [items, setItems] = React.useState(getItems);
    const [selected, setSelected] = React.useState([]);
    const [position, setPosition] = React.useState(0);
    const [data, setData] = useState();
    useEffect(() => {
        axios.get("/api/imgup")
            .then(data => {
                // console.log(data);
                setData(data.data)
            })
    }, []);

    const isItemSelected = (id) => !!selected.find((el) => el === id);

    const handleClick =
        (id) =>
            ({ getItemById, scrollToItem }) => {
                const itemSelected = isItemSelected(id);

                setSelected((currentSelected) =>
                    itemSelected
                        ? currentSelected.filter((el) => el !== id)
                        : currentSelected.concat(id)
                );
            };

    return (
        <ScrollMenu className="p-10" LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {data?.map((m) => (
               <div key={m._id} className='explore2 p-5 mx-auto'>
               <h1 className='flex gap-2 items-center font-bold'><CiLocationOn className='text-3xl text-blue-500' /> {m?.location}</h1>
               <h1 className='text-2xl font-semibold mb-2'>{m?.name}</h1>
               <div>
                   {/* <Image className='rounded-md mx-auto' src={m?.image} alt='img' width={300} /> */}
                   <img src={m?.image} alt="img" className='w-[300px] h-[200px]' />

                   <div className='flex justify-evenly mt-3 gap-3 '>
                       <p className='text-sm font-bold flex gap-2'><SiReactivex className='text-2xl' /> 10 Activities</p>
                       <p className='text-sm font-bold flex gap-2'><TbPlaceholder className='text-2xl' /> 10 places</p>
                       <p className='text-sm font-bold flex gap-2'><BsCalendar2Minus className='text-2xl' /> 1 week</p>

                   </div>
               </div>
               <div className='flex justify-between items-center mt-3'>
                   <h1 className='text-sm font-bold'>From ${m?.cost} /person</h1>
                   <div onClick={() => handleBooked(m?._id)}>
                       <Btnn >Book_now</Btnn>
                   </div>
               </div>
           </div>
            ))}
        </ScrollMenu>
    );
}

function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } =
        React.useContext(VisibilityContext);

    return (

        <div className='bg-slate-200 flex items-center justify-center text-blue-500 p-3 font-bold' disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
            <BiSolidLeftArrow /> Left
        </div>
    );
}

function RightArrow() {
    const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

    return (

        <div className='bg-slate-200 flex items-center justify-center text-blue-500 p-3 font-bold' disabled={isLastItemVisible} onClick={() => scrollNext()}>
            <BiSolidRightArrow /> Right
        </div>
    );
}

function Card({ onClick, selected, title, itemId }) {
    const visibility = React.useContext(VisibilityContext);

    return (
        <div
            onClick={() => onClick(visibility)}
            style={{
                width: '160px',
            }}
            tabIndex={0}
        >
            <div className="card">
                <div>{title}</div>
                <div>visible: {JSON.stringify(!!visibility.isItemVisible(itemId))}</div>
                <div>selected: {JSON.stringify(!!selected)}</div>
            </div>
            <div
                style={{
                    height: '200px',
                }}
            />
        </div>
    );
}

export default HorizentalImg;