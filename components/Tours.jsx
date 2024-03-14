"use client"

import React from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

const Tours = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className='h-full  m-12'>
            <div className="text-2xl text-center font-light mb-5">Popular Right Now</div>
            <Carousel
                responsive={responsive}
                containerClass="-mx-[10px]"
                itemClass="px-[12px]"
            >
                <div className="p-4 w-full border border-gray-100" key="1">
                    <a href='/' className="block relative rounded overflow-hidden">
                        <img alt="Tour 1" className="" src="https://mylivestorage.blob.core.windows.net/dtravelpk/home/thumb-insurance.jpg" />
                        <div className="text-center mt-4">
                            <p className="mt-1 text-[14px] font-semibold text-black">Travel Insurance</p>
                            <p className="mt-1 text-[12px] text-gray-600">Great discounts on travel insurance</p>
                        </div>
                    </a>
                </div>
                <div className="p-4 w-full border border-gray-100" key="1">
                    <a href='/' className="block relative rounded overflow-hidden">
                        <img alt="Tour 1" className="" src="https://mylivestorage.blob.core.windows.net/dtravelpk/home/thumb-tourist-visa.jpg" />
                        <div className="text-center mt-4">
                            <p className="mt-1 text-[14px] font-semibold text-black">
                                Get a Tourist Visa</p>
                            <p className="mt-1 text-[12px] text-gray-600">Fast and easy tourist processing</p>
                        </div>
                    </a>
                </div>
                <div className="p-4 w-full border border-gray-100" key="1">
                    <a href='/' className="block relative rounded overflow-hidden">
                        <img alt="Tour 1" className="" src="https://mylivestorage.blob.core.windows.net/dtravelpk/home/lnka_thmb.jpg" />
                        <div className="text-center mt-4">
                            <p className="mt-1 text-[14px] font-semibold text-black">Sri Lanka Tour</p>
                            <p className="mt-1 text-[12px] text-gray-600">Checkout our 5 days Sri Lanka Tour</p>
                        </div>
                    </a>
                </div>

                <div className="p-4 w-full border border-gray-100" key="1">
                    <a href='/' className="block relative rounded overflow-hidden">
                        <img alt="Tour 1" className="" src="https://mylivestorage.blob.core.windows.net/dtravelpk/home/umr_rmd_24.jpg" />
                        <div className="text-center mt-4">
                            <p className="mt-1 text-[14px] font-semibold text-black">Ramadan Umrah</p>
                            <p className="mt-1 text-[12px] text-gray-600">Checkout our Ramadan Packages</p>
                        </div>
                    </a>
                </div>

            </Carousel>
        </div>
    );
}

export default Tours;
