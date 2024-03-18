"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react';


const images = ["/hero1.jpeg", "/hero2.jpeg", "/hero3.jpeg"]
const txt = ["Welcome to Travel your official guide to Makkah and Madinah",
    "Plan your Umrah and Ziyarah your way"]


const HeroBanner = () => {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 8000);
        const intervalTxt = setInterval(() => {
            setText(prevIndex => (prevIndex + 1) % txt.length);
        }, 8000);
        return () => { clearInterval(interval); clearInterval(intervalTxt) }
    }, []);

    return (
        <div className='relative bg-stone-950'>
            <div className='h-[90vh] md:h-screen relative overflow-hidden'>
                <Image layout="fill" objectFit="cover" src={images[index]} alt={`slide${index + 1}`} className='animation' />
            </div>
            <div className='absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white font-mono md:w-[70vw] font-extrabold text-4xl' >
                {txt[text]}
            </div>
        </div>

    );
};

export default HeroBanner;