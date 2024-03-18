import React from 'react'

const MakingTours = () => {
  return (
    <section className='bg-slate-50'>
      <div className='text-center'>
        <h3 className='text-2xl font-semibold text-yellow-500'>Making your Travel Easier</h3>
        <p className='text-[14px]  text-gray-500'> Our team of expert travel consultants make it easy to book your travel plans</p>
      </div>

      <div className="container px-2 py-16 mx-auto flex flex-wrap">
        <div className="block md:flex w-full">
          <div className="flex w-full md:w-1/2">
            <div className="relative md:p-2 p-1 w-full">
              <div className='absolute w-full px-4 z-10 top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                <p className='text-xl font-semibold text-yellow-500'>Tourist Visas</p>
                <span className='text-[14px]  text-gray-500'>We offer tourist visa assistance and processing to several tourist destinations.</span>
              </div>

              <img alt="Tourist-Visas" className="hover:drop-shadow-xl  hover:shadow-stone-800 shodow rounded border border-gray-200 w-full h-full object-cover object-center block" src="https://dtravel.pk/images/visualbox/visa.jpg" />

            </div>
          </div>
          <div className="flex flex-wrap w-full md:w-1/2">
            <div className="relative md:p-2 p-1 w-full md:w-1/2">
              <div className='absolute w-full px-4 z-10 top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                <p className='text-xl  font-semibold text-yellow-500'>Tours</p>
                <span className='text-[14px]  text-gray-500'>Make your vacations memorable with us</span>
              </div>
              <img alt="tours" className="hover:drop-shadow-xl  hover:shadow-stone-800 shodow rounded border border-gray-200 w-full h-full object-cover object-center block" src="https://dtravel.pk/images/visualbox/tours.jpg" />
            </div>
            <div className="relative  md:p-2 p-1 w-full md:w-1/2">
              <div className='absolute w-full px-4 z-10 top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                <p className='text-xl font-semibold text-yellow-500'>Travel Insurance</p>
                <span className='text-[14px]  text-gray-500'>Protect yourself and travel with peace of mind</span>
              </div>
              <img alt="Insurance" className="hover:drop-shadow-xl  hover:shadow-stone-800 shodow rounded border border-gray-200 w-full h-full object-cover object-center block" src="https://dtravel.pk/images/visualbox/insurance.jpg" />
            </div>
            <div className="relative md:p-2 p-1 w-full md:w-1/2">
              <div className='absolute w-full px-4 z-10 top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                <p className='text-xl font-semibold text-yellow-500'>Offers</p>
                <span className='text-[14px] text-gray-500'>Great discounts & deals for you</span>
              </div>
              <img alt="Offer" className="hover:drop-shadow-xl  hover:shadow-stone-800 shodow rounded border border-gray-200 w-full object-cover h-full object-center block" src="https://dtravel.pk/images/visualbox/info.jpg" />
            </div>
            <div className="relative md:p-2 p-1 w-full md:w-1/2">
              <div className='absolute w-full px-4 z-10 top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                <p className='text-xl font-semibold text-yellow-500'>Umrah</p>
                <span className='text-[14px] text-gray-500'>Reliable Umrah services from the experts</span>
              </div>
              <img alt="Umrah" className="hover:drop-shadow-xl  hover:shadow-stone-800 shodow rounded border border-gray-200 w-full object-cover h-full object-center block" src="https://dtravel.pk/images/visualbox/umrah.jpg" />
            </div>
          </div>
        </div>
      </div>


      <div className="mx-2 md:mx-12 block md:flex justify-center items-center gap-4">

        <div className="h-full flex items-center p-4">
          <img alt="thumb" className="w-16 h-16 object-cover object-center flex-shrink-0 mr-4" src="/thumb.png" />
          <div className="flex-grow">
            <h2 className="font-semibold text-black title-font">A Reliable Choice</h2>
            <p className=" text-sm text-gray-500">Trusted by thousands of customers</p>
          </div>
        </div>
        <div class="h-full flex items-center p-4 my-6">
          <img alt="Accredited" class="w-16 h-16  object-cover object-center flex-shrink-0 mr-4" src="/bookmark.webp" />
          <div class="flex-grow">
            <h2 class="font-semibold text-gray-900 title-font">IATA Accredited</h2>
            <p class="text-sm text-gray-500">We are IATA authorized travel company</p>
          </div>
        </div>
        <div class="h-full flex items-center p-4 ">
          <img alt="confirmations" class="w-16 h-16  object-cover object-center flex-shrink-0 mr-4" src="/correct.webp " />
          <div class="flex-grow">
            <h2 class="text-gray-900 font-semibold">Instant Confirmations</h2>
            <p class="text-sm text-gray-500">Your bookings are processed quickly & smoothly</p>
          </div>
        </div>
        <div class="h-full flex items-center p-4 my-6">
          <img alt="Support" class="w-16 h-16 object-cover object-center flex-shrink-0  mr-4" src="/support.png" />
          <div class="flex-grow">
            <h2 class="text-gray-900 font-semibold">24/7 Support</h2>
            <p class="text-sm text-gray-500">Our support team is ready to serve round-the-clock</p>
          </div>
        </div>

      </div>

    </section>

  )
}

export default MakingTours