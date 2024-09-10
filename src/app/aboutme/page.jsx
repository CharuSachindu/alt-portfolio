"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { FaPython } from "react-icons/fa6";
import { SiUnrealengine } from "react-icons/si";

const about = {
    title: "About me",
    description: "Description",
    info: [{
        fieldName: "Name",
        fieldValue: "Sachindu Charuka",
    },
    {
        fieldName: "Phone",
        fieldValue: "(+94) 71 1426 392",
    },
    // {
    //     fieldName: "Experiance",
    //     fieldValue: "1 Years ",
    // },
    {
        fieldName: "Nationality",
        fieldValue: "Sri Lankan",
    },
    {
        fieldName: "Email",
        fieldValue: "charusachindu@gmail.com",
    },
    {
        fieldName: "Languages",
        fieldValue: "English, Sinhala",
    },
    ]
}

const experiance = {
    icon: '/assets/resume/badge.svg',
    title: 'My experiance',
    description: 'Description',
    items: [
        {
            company: "Tech Solutions Inc.",
            position: "Full Stack Developer",
            duration: "2022 - Present",
        },
        {
            company: "Web Design Studio",
            position: "Front End Developer Intern",
            duration: "2021",
        },
    ]
}

const education = {
    icon: '/assets/resume/badge.svg',
    title: 'My education',
    description: 'Description',
    items: [
        {
            institution: "University of Moratuwa",
            degree: " B.Sc.(Hons) in IT",
            duration: "2022 - Present",
        },
        {
            institution: "University of Sabaragamuwa",
            degree: "Diploma in English",
            duration: "2021",
        },
        {
            institution: "Sivali Central College",
            degree: "A/L, O/L",
            duration: "2007-2020",
        },
    ]
}

const skills = {
    title: "My skills",
    description: "Description",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "html 5"
        },
        {
            icon: <FaCss3 />,
            name: "css 3"
        },
        {
            icon: <FaJs />,
            name: "javascript"
        },
        {
            icon: <FaReact />,
            name: "react.js"
        },
        {
            icon: <SiNextdotjs />,
            name: "next.js"
        },
        {
            icon: <SiTailwindcss />,
            name: "tailwind.css"
        },
        {
            icon: <FaNodeJs />,
            name: "node.js"
        },
        {
            icon: <FaFigma />,
            name: "figma"
        },
        {
            icon: <TbBrandFramerMotion />,
            name: "Frame Motion"
        },
        {
            icon: <SiMysql />,
            name: "Mysql"
        },
        {
            icon: <FaJava />,
            name: "java"
        },
        {
            icon: <SiUnrealengine />,
            name: "unreal engine"
        },
    ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const AboutMe = () => {
    return (
        <motion.div initial={{ opacity: 0 }} 
        animate={{
            opacity: 1, 
            transition: {
                delay: 2.4,
                duration: 0.4,
                ease: "easeIn"
            }
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="aboutme" 
                className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 pt-[70px]">
                        {/* <TabsTrigger value="experience">Experience</TabsTrigger> */}
                        <TabsTrigger value="aboutme">About me</TabsTrigger>
                        
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        
                    </TabsList>
                    <div className="min-h-[70vh] w-full">
                    <TabsContent value="aboutme" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                {/* <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p> */}
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620] mx-auto xl:mx-0">
                                    {about.info.map((item, index) =>{
                                        return (
                                            <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                                <span className="text-white/60">{item.fieldName}</span>
                                                <span className="text-xl">{item.fieldValue}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experiance.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experiance.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experiance.items.map((item, index) =>{
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-green-400">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px[ rounded-full bg-green-400"> </span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent> */}
                        <TabsContent value="education" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                {/* <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p> */}
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) =>{
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-green-400 ">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-green-400"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="skills" className="w-full h-full">
                        <div className="flex flex-col gap-[30px]">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{skills.title}</h3>
                                {/* <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p> */}
                            </div>
                            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                {skills.skillList.map((skill, index) => {
                                    return (
                                        <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                        <div className="text-6xl group-hover:text-green-400 transition-all duration-300;">{skill.icon}</div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className=" capitalize">
                                                            {skill.name}
                                                        </p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        </TabsContent>
                        
                    </div>
                </Tabs>
            </div>

        </motion.div>
    )
}

export default AboutMe