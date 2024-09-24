"use client";

import { motion } from "framer-motion";
import React, {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css"

import { BsArrowUpRight, BsGithub, BsLinkedin} from 'react-icons/bs'

import Link from "next/link";
import Image from "next/image";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import SliderButtons from "@/components/SliderButtons";

const projects = [
    {
        num: "01",
        category: "Hardware",
        title: "Automated Shopping Cart",
        type: "Team",
        description: "This system automates product retrieval, saving time and reducing effort. It offers a user-friendly app for seamless ordering, real-time inventory monitoring, and environmental checks. With automatic retrieval carts, low-stock alerts, and secure access, it’s scalable and provides valuable consumption analytics, enhancing inventory management and customer satisfaction.\n",
        stack: [
            {
                name: "Arduino, IOT"
            },
        ],
        image: '/assets/work/project1.jpeg',
        live: '',
        github: '',
        linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:7241713979369119744/',
    },
    {
        num: "02",
        category: "Hardware",
        title: "MineResQ",
        description: "An advanced IoT-based gas detection and alert system designed for gem mines, incorporating two-way long-distance communication capabilities. This system enables real-time monitoring of gas levels within the mine and facilitates immediate alerts and data transmission to and from the surface, ensuring enhanced safety and effective management of potential hazards",
        type: "Team",
        stack: [
            {
                name: "Arduino, IOT, Radio communication"
            },
        ],
        image: '/assets/work/project2.jpeg',
        live: '',
        github: '',
        linkedin: '',
    },
    {
        num: "03",
        category: "Full-Stack",
        title: "Learning Management System",
        description: "LMS featuring course management, student enrolment, lecturer management and progress tracking for lectures, students and administrators",
        type: "Individual",
        stack: [
            {
                name: "React.js, Node.js, Express.js, MongoDB"
            },
        ],
        image: '/assets/work/thumb2.png',
        live: '',
        github: 'https://github.com/CharuSachindu/timetablesheduler',
        linkedin: '',
    },
    {
        num: "04",
        category: "Full-Stack",
        title: "Studio Management System",
        description: "A system to System to streamline studio operations, including employee management, stock management, client management and workload management. The system enhances resource allocation and time management with features like online booking, detailed client records, and efficient work distribution.",
        type: "Team",
        stack: [
            {
                name: "React.js, Node.js, Express.js, MSSQL"
            },
        ],
        image: '/assets/work/project4.jpg',
        live: '',
        github: '',
        linkedin: '',
    },
]

const Projects = () => {

    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    };


    return (
        <motion.section
        initial={{opacity: 0}}
        animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            <div className="text-7xl leading-none font-extrabold text-green-400">
                                {project.num}
                            </div>
                            <div>
                            <h2 className="text-[40px] font-bold leading-none text-white group-hover:text-green-400 transition-all duration-500 capitalize">
                                {project.title}
                            </h2>
                            <p className="text-while/60">({project.type})</p>
                            </div>
                            <p className="text-while/60">{project.description}</p>
                            <ul>
                                {project.stack.map((item, index) =>{
                                    return (
                                        <li key={index} className="text-xl text-green-400">
                                            {item.name}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    )
                                })}
                            </ul>
                            <div className="border border-white/20"></div>
                            <div className="flex items-center gap-4">
                                {/* Live Project Button */}
                            {project.live !== "" ? (
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-green-400" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live projects</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                  ) : null}
                                {/* Github button */}
                                {project.github !== "" ? (
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-green-400" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                ) : null}
                                {project.linkedin !== "" ? (
                                <Link href={project.linkedin}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsLinkedin className="text-white text-3xl group-hover:text-green-400" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>LinkedIn post</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            ) : null}
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper spaceBetween={30} slidesPerView={1} onSlideChange={handleSlideChange} className="xl:h-[520px] mb-12">
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide className="w-full" key={index}>
                                        <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                        {/* overlay */}
                                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                        {/* image */}
                                        <div>
                                            <Image src={project.image}
                                            fill
                                            className="object-cover"
                                            alt="" 
                                            />
                                        </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                            {/* slide buttons */}
                            <SliderButtons containerStyles={"flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"} 
                            btnStyles={"bg-green-400 hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"}
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Projects