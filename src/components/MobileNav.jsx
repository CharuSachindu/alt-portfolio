"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
    {
        name: "home",
        path: "/",
    },
    // {
    //     name: "achivements",
    //     path: "/services",
    // },
    {
        name: "About Me",
        path: "/aboutme",
    },
    {
        name: "projects",
        path: "/projects",
    },
    {
        name: "contact me",
        path: "/contact",
    },

]



const MobileNav = () => {
    const pathname = usePathname()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <>
        <button
              className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={toggleMobileMenu}
              type="button"
            >
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </span>
            </button>

            <div
                className={`fixed top-0 right-0 min-h-screen w-64 bg-[#18181b] shadow-lg transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full "
                    } lg:hidden z-50`}
            >
                <div className="flex flex-row items-center">
                    <button
                        onClick={toggleMobileMenu}
                        className="absolute top-5 right-5 text-white hover:text-[#4ade80]"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <ul className="flex flex-col h-full gap-4 p-4">
                    {links.map((item, index) => (
                        <li
                            key={index}
                            className="flex items-center p-1 text-lg gap-x-2 text-white hover:text-[#4ade80]"
                        >
                            <Link onClick={() => { setIsMobileMenuOpen(false); }} href={item.path} className="flex items-center capitalize">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* <nav className="flex gap-8">
                {links.map((link, index) => {
                    return (
                        <Link href={link.path} key={index} className={`${link.path === pathname && "text-green-400 border-b-2 border-green-400"} capitalize font-medium hover:text-green-400 transition-all`}>
                            {link.name}
                        </Link>
                    )
                })}

            </nav> */}
        </>

    )
}

export default MobileNav