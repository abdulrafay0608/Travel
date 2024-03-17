import React from 'react'

const MakingTours = () => {
    return (
        <section>
            <div className='text-center'>
                <h3 className='text-2xl font-semibold text-yellow-500'>Making your Travel Easier</h3>
                <p className='text-[14px]  text-gray-500'> Our team of expert travel consultants make it easy to book your travel plans</p>
            </div>
            <div className='m-12  h-[600px]  flex justify-around items-center'>

                <div className='w-[50vw] h-[600px] relative' >

                    <img className='relative h-[600px]  hover:drop-shadow-xl  shadow-stone-700 border border-slate-100' src="https://dtravel.pk/images/visualbox/visa.jpg" alt="Tourist-Visas" />

                    <div className='absolute top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                        <p className='text-xl font-semibold text-yellow-500'>Tourist Visas</p>
                        <span className='text-[14px] text-nowrap text-gray-500'>We offer tourist visa assistance and processing to several tourist destinations.</span>
                    </div>

                </div>
                <div className='w-[50vw] h-[600px] flex justify-around items-center'>
                    <div className='relative'>
                        <div className='h-[300px] relative'>
                            <img className='relative h-[300px] hover:drop-shadow-xl  shadow-stone-700 border border-slate-100' src="https://dtravel.pk/images/visualbox/tours.jpg" alt="Tourist-Visas" />

                            <div className='absolute top-16 text-nowrap left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                                <p className='text-xl  font-semibold text-yellow-500'>Tours</p>
                                <span className='text-[14px]  text-gray-500'>Make your vacations memorable with us</span>
                            </div>
                        </div>
                        <div className='relative'>
                            <img className='relative h-[300px] hover:drop-shadow-xl  shadow-stone-700 border border-slate-100' src="https://dtravel.pk/images/visualbox/insurance.jpg" alt="Tourist-Visas" />

                            <div className='absolute text-nowrap  top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                                <p className='text-xl font-semibold text-yellow-500'>Travel Insurance</p>
                                <span className='text-[14px]  text-gray-500'>Protect yourself and travel with peace of mind</span>
                            </div>
                        </div>

                    </div>
                    <div className='relative'>
                        <div className='relative'>
                            <img className='relative h-[300px] hover:drop-shadow-xl  shadow-stone-700 border border-slate-100' src="https://dtravel.pk/images/visualbox/info.jpg" alt="Tourist-Visas" />

                            <div className='absolute text-nowrap top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                                <p className='text-xl font-semibold text-yellow-500'>Offers</p>
                                <span className='text-[14px]  text-gray-500'>Great discounts & deals for you</span>
                            </div>
                        </div>
                        <div className='relative'>
                            <img className='relative h-[300px]  hover:drop-shadow-xl  shadow-stone-700 border border-slate-100' src="https://dtravel.pk/images/visualbox/umrah.jpg" alt="Tourist-Visas" />

                            <div className='absolute text-nowrap line-clamp-2 top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                                <p className='text-xl font-semibold text-yellow-500'>Umrah</p>
                                <span className='text-[14px]  text-gray-500'>Reliable Umrah services from the experts</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default MakingTours