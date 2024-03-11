import React from 'react'
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaYoutube, FaTwitter } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { FaSquarePhone } from "react-icons/fa6";


const Header = () => {
  return (
    <header className='flex items-center justify-around py-2 bg-black/60 border-x-0 border-t-0 border border-b-slate-300'>
      <div className=" flex items-center justify-center gap-8">
        <div className="text-[12px] font-semibold text-white flex justify-center items-center cursor-pointer">
          <div>Contact Us</div>
        </div>
        <div className="text-[12px] font-semibold text-white flex justify-center items-center  cursor-pointer">
          <div className="">Call Center : </div>
          <div className="font-bold"> 0316 - 0025477</div>
        </div>
      </div>

      <div className="hidden md:flex items-center justify-center">
        <div className="text-white flex justify-center items-center gap-6 cursor-pointer">
          <FaFacebook />
          <FaInstagram />
          <FaLinkedin />
          <FaTiktok />
          <FaYoutube />
          <FaTwitter />
        </div>
      </div>

    </header>
  )
}

export default Header