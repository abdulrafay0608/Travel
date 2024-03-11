
import { IoHome } from "react-icons/io5";
import { FiInfo } from "react-icons/fi";
import { IoIosContact } from "react-icons/io";
import { FaServicestack } from "react-icons/fa6";
import { SiCodestream } from "react-icons/si";


export const data = [
    { id: 1, title: "Home", url: "/", icon: <IoHome /> },
    { id: 2, title: "Tours", url: "/", icon: <IoHome /> },
    { id: 3, title: "Visa", url: "/", icon: <FiInfo /> },
    { id: 4, title: "Umrah", url: "/umrah", icon: <FaServicestack /> },
    { id: 5, title: "Gallery", url: "/gallery", icon: < SiCodestream /> },
    { id: 6, title: "About Us", url: "/about", icon: < SiCodestream /> },
];


const subMenuTour = [
    { id: 1, title: "International Tours", url: "international-tours", icon: < SiCodestream color='#000' size={16} /> },
    { id: 2, title: "Tours in Pakistan", url: "/Tours-in-pakistan", icon: < SiCodestream color='#000' size={16} /> },
    { id: 3, title: "Destination Guides", url: "/destination-guides", icon: < SiCodestream color='#000' size={16} /> },
];

const subMenuVisas = [
    { id: 1, title: "Tourist Visas", url: "tourist-visas", icon: < SiCodestream color='#000' size={16} /> },
    { id: 2, title: "Visas Consultancy", url: "/visas-consultancy", icon: < SiCodestream color='#000' size={16} /> },
];


import React from 'react'
import Link from "next/link";

const MenuItem = ({ showCatMenu, setShowCatMenu, categories }) => {
    return (
        <ul className="hidden md:flex items-center gap-8 font-medium text-black">
            {data.map((item) => {
                return (
                    <React.Fragment key={item.id}>
                        {!!item?.subMenu ? (
                            <li
                                className="cursor-pointer flex items-center gap-2 relative"
                                onMouseEnter={() => setShowCatMenu(true)}
                                onMouseLeave={() => setShowCatMenu(false)}
                            >
                                {item.title}
                                {/* <BsChevronDown size={14} /> */}

                                {showCatMenu && (
                                    <ul className="bg-slate-200 absolute top-10 left-0 min-w-[250px] px-1 py-1 text-black shadow-lg">
                                        {subMenuTour?.map((subMenu) => {
                                            return (
                                                <Link
                                                    key={subMenu.id}
                                                    href={`${""}`}
                                                    onClick={() =>
                                                        setShowCatMenu(
                                                            false
                                                        )
                                                    }
                                                >
                                                    <li className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md">
                                                        {subMenu.title}
                                                        <span className="opacity-50 text-sm">
                                                            {subMenu.doc_count} {/* {`(${c.products.data.length})`} */}
                                                        </span>
                                                    </li>
                                                </Link>
                                            );
                                        }
                                        )}
                                    </ul>
                                )}
                            </li>
                        ) : (
                            <li className="cursor-pointer">
                                <Link href={item?.url}>{item.title}</Link>
                            </li>
                        )}
                    </React.Fragment>
                );
            })}
        </ul>
    )
}

export default MenuItem
