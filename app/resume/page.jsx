
"use client"

import { FaHtml5, FaNodeJs, FaFigma, FaReact, FaCss3, FaJs, FaBootstrap, FaGitSquare, FaGithub } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiExpress } from 'react-icons/si'


const about = {
    title: "About me",
    "description": "I am a dedicated and passionate Full Stack Developer with over 1 year of experience in the tech industry. I enjoy creating dynamic and responsive web applications and am always eager to learn new technologies. My strong problem-solving skills and ability to work in a team make me an asset to any project.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Raheel Musa"
        },
        {
            fieldName: "Phone",
            fieldValue: "(+92) 3411431921"
        },
        {
            fieldName: "Experience",
            fieldValue: "1+ years"
        },
        {
            fieldName: "LinkedIn",
            fieldValue: "RaheelMusa"
        },
        {
            fieldName: "Nationality",
            fieldValue: "Pakistan"
        },
        {
            fieldName: "Email",
            fieldValue: "raheelmusa397@gmail.com"
        },
        {
            fieldName: "Languages",
            fieldValue: "English, Urdu"
        }


    ]
}

// experience data

const experience = {
    icon: '/assets/resume/badge.svg',
    title: "MY experience",
    description: "Passionate and dedicated Full Stack Developer with hands-on experience in developing and maintaining web applications. Skilled in both front-end and back-end technologies, always eager to learn and adapt to new challenges.",
    items: [
        {
            company: "HeapWare.",
            position: "Full Stack Developer",
            duration: "2023 - present"
        },
        {
            company: "Ashwiz.",
            position: "Full Stack Developer Intern",
            duration: "2023"
        },
        {
            company: "HeapWare.",
            position: "Mern Stack Developer",
            duration: "2023-present"
        }
    ]
}


// Education

const education = {
    icon: "/assets/resume/cap.svg",
    title: "My education",
    description: "A well-rounded educational background with a strong focus on computer science and web development. Completed several comprehensive online courses, equipping me with the necessary skills and knowledge to excel in the tech industry. ",

    items: [
        {
            institution: "Online Course platform",
            degree: "Full Stack Web Developer",
            duration: " 2023",
        },
        {
            institution: "Ideoversity",
            degree: "Mern Stack Developer",
            duration: " 2023",
        },

        {
            institution: "Government College",
            degree: "Computer Science (ICS)",
            duration: " 2019",
        },

    ]
}

const skills = {
    title: "My skills",
    description: "A versatile developer with a diverse skill set, proficient in both frontend and backend technologies. Experienced in creating responsive and dynamic web applications using modern frameworks and tools. Passionate about continuous learning and staying updated with the latest industry trends.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "html 5"
        },
        {
            icon: <SiTypescript />,
            name: "typescript"
        },
        {
            icon: <FaBootstrap />,
            name: "Bootstrap"
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
            icon: <SiExpress />,
            name: "express"
        },
        {
            icon: <FaGitSquare />,
            name: "git"
        },
        {
            icon: <FaGithub />,
            name: "Github"
        },
        {
            icon: <FaReact />,
            name: "react.js"
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind Css"
        },
        {
            icon: <SiNextdotjs />,
            name: "next.js"
        },
        {
            icon: <FaNodeJs />,
            name: "node.js"
        },
        {
            icon: <FaFigma />,
            name: "figma"
        }
    ]
}


import { Tabs, TabsTrigger, TabsContent, TabsList } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { ScrollArea } from '@/components/ui/scroll-area'
import { motion } from 'framer-motion'
const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className="min-h-[70vh] w-full">
                        {/* experience */}

                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">

                                <h3 className="text-4xl font-bold"> {experience.title} </h3>
                                <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-6  px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px]  text-center lg:text-left">{item.position}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px]   bg-accent rounded-full"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}

                                    </ul>

                                </ScrollArea>
                            </div>


                        </TabsContent>
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">

                                <h3 className="text-4xl font-bold"> {education.title} </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-6  px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px]  text-center lg:text-left">{item.degree}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px]   bg-accent rounded-full"></span>
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

                                    <h3 className="text-4xl font-bold"> {skills.title} </h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                                        {skills.skillList.map((item, index) => {
                                            return (
                                                <li key={index} className="bg-[#232329] h-[184px] py-6  px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                    <TooltipProvider delayDuration={100}>
                                                        <Tooltip>
                                                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                                <div className="text-6xl group-hover:text-accent transition-all duration-300">{item.icon}</div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p className="capitalize">{item.name}</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>

                                                    {/* <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px]   bg-accent rounded-full"></span>
                                                        <p className="text-white/60">{item.name}</p>
                                                    </div> */}
                                                </li>
                                            )
                                        })}

                                    </ul>

                                </ScrollArea>
                            </div>


                        </TabsContent>
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>

                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
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
                    </div>
                </Tabs>
            </div>


        </motion.div>
    )
}

export default Resume