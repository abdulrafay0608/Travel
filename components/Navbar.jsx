"use client"
import { MdDarkMode } from "react-icons/md";
import { useContext, useEffect, useState } from 'react';
import Image from "next/image";
import MenuItem, { MenuItems, data } from "./MenuItem";
import Link from 'next/link';
import { FcCustomerSupport } from "react-icons/fc";
import { MdOutlineLightMode } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";


import "./Navbar.css"

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [showCatMenu, setShowCatMenu] = useState(false);
    const [categories, setCategories] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [show, setShow] = useState("translate-y-0");
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (window.scrollY > 200) {
            if (window.scrollY > lastScrollY && !isOpen) {
                setShow("-translate-y-[60px]");
            } else {
                setShow("shadow-sm");
            }
        } else {
            setShow("translate-y-0");
        }
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

        <nav className={``}>
            <div className="" >
                <Image className="" height={150} width={150} src={`/logo.png`} alt="logo" />
            </div>



            {/* Navigation links for larger screens */}
            <ul className={`${isOpen ? "block" : "md:flex hidden"}`}>
                <li><a href={"#"}><FaSquarePhone /> Home </a></li>
                <li><a href={"#"}><FaSquarePhone /> Tours <IoMdArrowDropdown /></a>
                    <ul>
                        <li><a href={"#"}><FaSquarePhone />  International Tours </a></li>
                        <li><a href={"#"}><FaSquarePhone />  Tours in Pakistan</a></li>
                        <li><a href={"#"}><FaSquarePhone />  Destination Guides </a></li>
                    </ul>
                </li>
                <li><a href={"#"}><FaSquarePhone /> Visas <IoMdArrowDropdown /></a>
                    <ul>
                        <li><a href={"#"}><FaSquarePhone />  Tourist Visas</a></li>
                        <li><a href={"#"}><FaSquarePhone />  Visas Consultancy</a></li>
                    </ul>
                </li>
                <li><a href={"#"}><FaSquarePhone /> Umrah </a></li>
                <li><a href={"#"}><FaSquarePhone /> Gallery </a></li>
                <li><a href={"#"}><FaSquarePhone /> About Us </a></li>
            </ul>


            <input type="checkbox" id="menu-bar" />
            <label onClick={() => setIsOpen(!isOpen)} for="menu-bar">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </label>

        </nav>

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