"use client"

import React, { useEffect, useState } from 'react';
import BottomAnimation from './BottomAnimation';

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
            <div className='h-screen relative overflow-hidden'>
                <img src={images[index]} alt={`Slide ${index + 1}`} className='animation' />
                {/* <BottomAnimation /> */}
            </div>
            <div className='txt text-white font-mono md:w-[70vw] font-extrabold text-4xl' >
                {txt[text]}
            </div>
        </div>

    );
};

export default HeroBanner;