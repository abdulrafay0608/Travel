"use client"

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Tours = () => {

    return (
        <div className='bg-slate-50 h-full py-14'>
            <div className="text-2xl text-center font-light mb-5">Popular Right Now</div>

            <div className='block md:flex justify-between items-center gap-4 m-12'>

                <div className="p-4 my-4 w-full border rounded">
                    <a href='#' className="block relative rounded overflow-hidden">
                        <Image layout="fill" objectFit="cover" alt="Tour1" className="" src="https://mylivestorage.blob.core.windows.net/dtravelpk/home/thumb-insurance.jpg" />
                        <div className="text-center mt-4">
                            <p className="mt-1 text-[14px] font-semibold text-black">Travel Insurance</p>
                            <p className="mt-1 text-[12px] text-gray-600">Great discounts on travel insurance</p>
                        </div>
                    </a>
                </div>
                <div className="p-4 my-4 w-full border rounded">
                    <a href='#' className="block relative rounded overflow-hidden">
                        <Image layout="fill" objectFit="cover" alt="Tour2" className="" src="https://mylivestorage.blob.core.windows.net/dtravelpk/home/thumb-tourist-visa.jpg" />
                        <div className="text-center mt-4">
                            <p className="mt-1 text-[14px] font-semibold text-black">
                                Get a Tourist Visa</p>
                            <p className="mt-1 text-[12px] text-gray-600">Fast and easy tourist processing</p>
                        </div>
                    </a>
                </div>
                <div className=" p-4 my-4 w-full border rounded">
                    <a href='#' className="block relative rounded overflow-hidden">
                        <Image layout="fill" objectFit="cover" alt="Tour3" className="" src="https://mylivestorage.blob.core.windows.net/dtravelpk/home/lnka_thmb.jpg" />
                        <div className="text-center mt-4">
                            <p className="mt-1 text-[14px] font-semibold text-black">Sri Lanka Tour</p>
                            <p className="mt-1 text-[12px] text-gray-600">Checkout our 5 days Sri Lanka Tour</p>
                        </div>
                    </a>
                </div>

                <div className="p-4 my-4 w-full border rounded">
                    <a href='#' className="block relative rounded overflow-hidden">
                        <Image layout="fill" objectFit="cover" alt="Tour4" className="" src="https://mylivestorage.blob.core.windows.net/dtravelpk/home/umr_rmd_24.jpg" />
                        <div className="text-center mt-4">
                            <p className="mt-1 text-[14px] font-semibold text-black">Ramadan Umrah</p>
                            <p className="mt-1 text-[12px] text-gray-600">Checkout our Ramadan Packages</p>
                        </div>
                    </a>
                </div>
            </div>



            <div className='bg-stone-900 p-2 block md:flex justify-center md:gap-10 items-center'>
                <div className='text-white md:w-[50vw] m-6'>
                    <h3 className='my-4 text-yellow-500 md:m-5 text-2xl font-extrabold'>Book Your Ticket with Lowest Fares</h3>
                    <div className='md:m-5 text-justify'>
                        Welcome to Travel, your ultimate travel companion based in Pakistan. If you are dreaming of exploring exotic destinations, embarking on spiritual journeys, or experiencing the thrill of international adventures, you&apos;ve come to the right place. Travel.pk is your one-stop solution for all your travel needs, offering a wide range of services, including tourist visas, cheap air tickets,
                        <a href='#'> Umrah packages , Pakistan Tour </a> packages, and <a href="#">International Tour Packages</a> from Pakistan. Let us be your trusted partner in making your travel dreams a reality.
                    </div>

                    <Link className='md:m-5' href={"#"}>
                        <button className="my-4 border border-slate-100 rounded-md px-4 py-2 transition ease-in-out delay-150 hover:bg-yellow-600 bg-transparent duration-300">
                            Start Booking
                        </button>
                    </Link>
                </div>
                <div className='md:w-[50vw]'>
                    <Image layout="fill" objectFit="cover" src="/hajj.svg" alt="hajj" />
                </div>
            </div>
        </div>
    );
}

export default Tours;
