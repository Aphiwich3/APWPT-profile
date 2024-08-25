'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"
import { Description } from "@radix-ui/react-dialog"
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa"

const info = [
    {
        icon:<FaPhoneAlt />,
        title:"Phone",
        description:"080-283-5603"
    },
    {
        icon:<FaEnvelope />,
        title:"Email",
        description:"aphiwichprangtho@gmail.com"
    },
    {
        icon:<FaMapMarkedAlt />,
        title:"Address",
        description:"Tak, Mae Sot"
    },
    
]

import { motion } from "framer-motion"

const Contact = () => {
    return (
    <motion.section initial={{opacity:0}}
    animate={{
        opacity:1,
        transition: {delay:2.4, duration:0.4, ease: "easeIn"},

    }}
    className="py-6"
    >
    <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
            <div className="xl:w-[54%] order-2 xl:order-none">
            <from className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl ">
                <h3 className="text-4xl text-accent-hover">Aphiwich Prangtho</h3>
                
                <p className="text-white/60 " >I am learning web development and am seeking an internship as a Front-end software developer. :D 
                </p>
                <h3 className="text-white">Internship period : 4 November 2024 to 21 February 2025 </h3>
                

            </from>
            </div>
            <div className="flex-1 flex items-center xl:justify-end order-1
            xl:order-none mb-8 xl:mb-0">
            

            <ul className=" flex flex-col gap-10">
                {info.map ((item,index) =>{
                    return(
                        <li key={index} className="flex items-center gap-6">
                            <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] 
                            text-accent-DEFFAULT rounded-md flex items-center justify-center" >
                                <div className="text-[28px]">{item.icon}</div>
                            </div>
                            <div className="flex-1">
                                <p className="text-white/60">{item.title}</p>
                                <h3 className="text-xl">{item.description}</h3>
                            </div>
                        </li>
                    )
                })}
            </ul>

            </div>
        </div>
        
    </div>    
    </motion.section> 
)
    
  
}

export default Contact