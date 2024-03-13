
"use client"
import { useEffect, useState } from 'react';
import React from 'react'
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaYoutube, FaTwitter } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { FaSquarePhone } from "react-icons/fa6";


const Header = () => {


  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > 100) {
      // if (window.scrollY > lastScrollY && !isOpen) {
      //     setShow("-translate-y-[60px]");
      // } else {
      //     setShow("shadow-sm");
      // }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    // setIsOpen(false)
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);


  return (
    <header className={`${lastScrollY > 30 ? "bg-black" : "bg-black/70"} transition-all ease-in flex items-center justify-around py-2 fixed w-full ${show}`}>
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