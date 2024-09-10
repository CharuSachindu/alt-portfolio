"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

const Nav = () => {
    const pathname = usePathname()
    return (
        <nav className="flex gap-8">
            {links.map((link, index)=>{
                return (
                <Link href={link.path} key={index} className={`${link.path === pathname && "text-green-400 border-b-2 border-green-400"} capitalize font-medium hover:text-green-400 transition-all`}>
                    {link.name}
                </Link>
                )
            })}
            
        </nav>
    )
}

export default Nav