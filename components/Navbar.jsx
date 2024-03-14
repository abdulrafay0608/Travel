"use client"
import { MdDarkMode } from "react-icons/md";
import { useContext, useEffect, useState } from 'react';
import Image from "next/image";
import MenuItem, { MenuItems, data } from "./MenuItem";
import Link from 'next/link';
import { FcCustomerSupport } from "react-icons/fc";
import { MdOutlineLightMode } from "react-icons/md";
import { FaSquarePhone, FaEarthAsia, FaCarRear, FaRegHandshake, FaCcVisa, FaPeopleRoof } from "react-icons/fa6";
import { IoMdArrowDropdown, IoMdAirplane } from "react-icons/io";
import { FaHome, FaKaaba } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { GrGallery } from "react-icons/gr";


import "./Navbar.css"

const Navbar = () => {
    // const [mobileMenu, setMobileMenu] = useState(false);
    // const [showCatMenu, setShowCatMenu] = useState(false);
    // const [categories, setCategories] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    // const [show, setShow] = useState("translate-y-0");
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        // if (window.scrollY > 200) {
        // if (window.scrollY > lastScrollY && !isOpen) {
        //     setShow("-translate-y-[100px]");
        // } else {
        //     setShow("shadow-sm");
        // }
        // } else {
        // setShow("translate-y-0");
        // }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        setIsOpen(false)
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [lastScrollY]);



    return (

        // <header>
        <nav className={`${lastScrollY > 10 ? "bg-black/90" : "bg-black/30"} transition-all ease-in delay-300
         h-[60px] border border-x-0   border-white top-8 z-50 fixed w-full`}>
            <div className="" >
                <img className="" src={`/logo.png`} alt="logo" />
            </div>

            {/* Navigation links for larger screens */}
            <ul className={`${isOpen ? "block" : "md:flex hidden"} md:bg-transparent ${lastScrollY > 30 ? "bg-black" : "bg-black/70"}`}>
                <li><a href={"#"}><FaHome /> Home </a></li>
                <li><a href={"#"}><FaEarthAsia /> Tours <IoMdArrowDropdown /></a>
                    <ul className="md:bg-black/30 border border-white">
                        <li><a href={"#"}><IoMdAirplane />  International Tours </a></li>
                        <li><a href={"#"}><FaCarRear />  Tours in Pakistan</a></li>
                        <li><a href={"#"}><CiLocationOn />  Destination Guides </a></li>
                    </ul>
                </li>
                <li><a href={"#"}><FaCcVisa /> Visas <IoMdArrowDropdown /></a>
                    <ul className="md:bg-black/30  border border-white">
                        <li><a href={"#"}><FaCcVisa />  Tourist Visas</a></li>
                        <li><a href={"#"}><FaRegHandshake />  Visas Consultancy</a></li>
                    </ul>
                </li>
                <li><a href={"#"}><FaKaaba /> Umrah </a></li>
                <li><a href={"#"}><GrGallery /> Gallery </a></li>
                <li><a href={"#"}><FaPeopleRoof /> About Us </a></li>
            </ul>


           
            <label onClick={() => setIsOpen(!isOpen)}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </label>

        </nav>
        // </header>

        //  {/* Hamburger menu for smaller screens */ }
        //     {/* <div className="">
        //                 <button onClick={() => setIsOpen(!isOpen)} className={`text-slate-950`}>

        //                 </button>
        //             </div> */}

        //     {/* Responsive menu for smaller screens */ }
        //     {/* {isOpen && (
        //                 <nav className={` bg-slate-100 md:hidden fixed top-16 left-0 w-9/12 h-screen p-3 transition-transform duration-300 `}>
        //                     {MenuItems.map((menu, index) => (
        //                         <Link
        //                             key={index}
        //                             href={menu.url}
        //                             onClick={() => setIsOpen(!isOpen)}
        //                             className={`text-slate-950 font-bold hover:text-slate-800 flex items-center p-3`}
        //                         >
        //                             <span className='text-[16px]'>{menu.icon}</span>
        //                             <span className="ml-2">{menu.title}</span>
        //                         </Link>
        //                     ))}
        //                 </nav>
        //             )} */}
    );
};

export default Navbar;